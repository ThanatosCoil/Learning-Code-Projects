const Post = require("../models/Post");
const logger = require("../utils//logger");
const { invalidatePostCache } = require("../utils/invalidate");
const { publishEvent } = require("../utils/rabbitmq");
const { validateCreatePost } = require("../utils/validation");

const createPost = async (req, res) => {
  logger.info("Create post endpoint hit");
  try {
    //validate schema
    const { error } = validateCreatePost(req.body); //Выводит ошибку, если данные не соответствуют схеме
    if (error) {
      logger.warn("Validation error", error.details[0].message);
      return res.status(400).json({
        success: false,
        message: error.details[0].message,
      });
    }

    //create post
    const { content, mediaIds } = req.body;
    const newPost = new Post({
      user: req.user.userId, // from authMiddleware
      content,
      mediaIds: mediaIds || [],
    });

    await newPost.save();

    //publish post create event
    await publishEvent("post.created", {
      postId: newPost._id.toString(),
      userId: newPost.user.toString(),
      content: newPost.content,
      createdAt: newPost.createdAt,
    });

    await invalidatePostCache(req, newPost._id.toString()); //invalidate cache
    logger.info("Post created successfully", newPost);
    res.status(201).json({
      success: true,
      message: "Post created successfully",
    });
  } catch (error) {
    logger.error("Error creating post", error);
    res.status(500).json({
      success: false,
      message: "Error creating post",
    });
  }
};

const getAllPosts = async (req, res) => {
  try {
    //pagination
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10; //количество постов на странице
    const skip = (page - 1) * limit; //сколько постов пропустить (0 на первой странице, 10 на второй и т.д.)

    //check cache
    const cacheKey = `posts:${page}:${limit}`; //ключ для кэша
    const cachedPosts = await req.redisClient.get(cacheKey); //получаем данные из кэша

    if (cachedPosts) {
      return res.status(200).json(JSON.parse(cachedPosts));
    }

    const posts = await Post.find({})
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);

    const totalPosts = await Post.countDocuments(); //количество всех постов

    const result = {
      posts,
      currentPage: page,
      totalPages: Math.ceil(totalPosts / limit),
      totalPosts,
    };

    //save in cache
    await req.redisClient.setex(cacheKey, 3600, JSON.stringify(result)); //сохраняем данные в кэш на 1 час

    res.status(200).json(result);
  } catch (error) {
    logger.error("Error fetching all posts", error);
    res.status(500).json({
      success: false,
      message: "Error fetching all posts",
    });
  }
};

const getPost = async (req, res) => {
  try {
    const postId = req.params.id;
    //check cache
    const cacheKey = `post:${postId}`;
    const cachedPost = await req.redisClient.get(cacheKey);
    if (cachedPost) {
      return res.status(200).json(JSON.parse(cachedPost));
    }

    //fetch post
    const post = await Post.findById(postId);
    if (!post) {
      return res.status(404).json({
        success: false,
        message: "Post not found",
      });
    }

    //save in cache
    await req.redisClient.setex(cacheKey, 3600, JSON.stringify(post));

    res.status(200).json(post);
  } catch (error) {
    logger.error("Error fetching post", error);
    res.status(500).json({
      success: false,
      message: "Error fetching post",
    });
  }
};

const deletePost = async (req, res) => {
  try {
    //delete post
    const deletedPost = await Post.findOneAndDelete({
      _id: req.params.id,
      user: req.user.userId,
    });
    if (!deletedPost) {
      return res.status(404).json({
        success: false,
        message: "Post not found",
      });
    }

    //publish post delete event
    await publishEvent("post.deleted", {
      // Я по сути сообщаю что удалил post. И в его сообщение вкладываю информацию. Теперь в другом сервисе я могу это получить и использовать
      postId: deletedPost._id,
      userId: req.user.userId,
      mediaIds: deletedPost.mediaIds,
    });

    //invalidate cache
    await invalidatePostCache(req, req.params.id);

    res.status(200).json({
      success: true,
      message: "Post deleted successfully",
    });
  } catch (error) {
    logger.error("Error deleting post", error);
    res.status(500).json({
      success: false,
      message: "Error deleting post",
    });
  }
};

module.exports = { createPost, getAllPosts, getPost, deletePost };
