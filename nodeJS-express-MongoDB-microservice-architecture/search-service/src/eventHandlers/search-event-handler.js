const Search = require("../models/Search");
const { invalidatePostCache } = require("../utils/invalidate");
const logger = require("../utils/logger");

async function handlePostCreated(event, redisClient) {
  try {
    const newSearchPost = new Search({
      postId: event.postId,
      userId: event.userId,
      content: event.content,
      createdAt: event.createdAt,
    });

    await newSearchPost.save();
    await invalidatePostCache(redisClient, event.postId);
    logger.info(
      `New search post created: ${
        event.postId
      }, ${newSearchPost._id.toString()}`
    );
  } catch (error) {
    logger.error("Error handling search post create event", error);
  }
}

async function handlePostDeleted(event, redisClient) {
  try {
    await Search.findOneAndDelete({ postId: event.postId });
    await invalidatePostCache(redisClient, event.postId);
    logger.info(`Search post deleted: ${event.postId}`);
  } catch (error) {
    logger.error("Error handling search post delete event", error);
  }
}

module.exports = {
  handlePostCreated,
  handlePostDeleted,
};
