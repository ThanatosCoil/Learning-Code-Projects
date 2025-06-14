const Image = require("../models/Image");
const { uploadToCloudinary } = require("../helpers/cloudinaryHelpers");
const fs = require("fs");
const cloudinary = require("../config/cloudinary");

const uploadImage = async (req, res) => {
  //check if file is missing in req object
  if (!req.file) {
    return res.status(400).json({
      success: false,
      message: "File is required",
    });
  }

  //upload to cloudinary
  const { url, publicId } = await uploadToCloudinary(req.file.path);

  //store the image url and public id along with uploaded user id in DB
  const newImage = new Image({
    url,
    publicId,
    uploadedBy: req.userInfo.userId,
  });

  await newImage.save();

  //delete the file from local storage
  fs.unlinkSync(req.file.path);

  res.status(201).json({
    success: true,
    message: "Image uploaded to DB",
    image: newImage,
  });
};

const fetchImages = async (req, res) => {
  //Start of pagination logic
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 2;
  const skip = (page - 1) * limit;

  const sortBy = req.query.sortBy || "createdAt";
  const sortOrder = req.query.sortOrder == "asc" ? 1 : -1;

  const totalImages = await Image.countDocuments();
  const totalPages = Math.ceil(totalImages / limit);

  const sortObj = {};
  sortObj[sortBy] = sortOrder;
  //End of pagination logic

  const images = await Image.find({}).sort(sortObj).skip(skip).limit(limit);
  if (images) {
    res.status(200).json({
      success: true,
      currentPage: page,
      totalPages: totalPages,
      totalImages: totalImages,
      data: images,
    });
  }
};

const deleteImage = async (req, res) => {
  const imageId = req.params.id;
  const userId = req.userInfo.userId;

  const image = await Image.findById(imageId);

  if (!image) {
    return res.status(404).json({
      success: false,
      message: "Image not found",
    });
  }

  //check if image is uploaded by the same user who added this image
  if (image.uploadedBy.toString() !== userId) {
    return res.status(403).json({
      success: false,
      message: "You are not authorized to delete this image",
    });
  }

  //delete image from cloudinary storage
  await cloudinary.uploader.destroy(image.publicId);

  //delete image from DB
  await Image.findByIdAndDelete(imageId);

  res.status(200).json({
    success: true,
    message: "Image deleted successfully",
  });
};

module.exports = { uploadImage, fetchImages, deleteImage };
