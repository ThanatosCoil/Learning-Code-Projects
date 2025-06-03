const Media = require("../models/Media");
const { uploadMediaToCloudinary } = require("../utils/cloudinary");
const logger = require("../utils/logger");

const uploadMedia = async (req, res) => {
  logger.info("Starting media upload");

  try {
    console.log(req.file, "req.file");
    if (!req.file) {
      logger.error("No file found. Please add a file and try again");
      return res.status(400).json({
        success: false,
        message: "No file found. Please add a file and try again",
      });
    }

    const { originalname, mimetype, buffer } = req.file;
    const userId = req.user.userId;

    logger.info(`File details: name=${originalname}, type=${mimetype}`);
    logger.info("Uploading to cloudinary starting...");

    const result = await uploadMediaToCloudinary(req.file);
    logger.info(
      `Cloudinary upload successfully completed. Public Id: ${result.public_id}`
    );

    const newMedia = new Media({
      publicId: result.public_id,
      originalName: originalname,
      mimeType: mimetype,
      url: result.secure_url,
      userId,
    });

    await newMedia.save();

    res.status(201).json({
      success: true,
      mediaIds: newMedia._id,
      url: newMedia.url,
      message: "File uploaded successfully",
    });
  } catch (error) {
    logger.error("Error uploading file", error);
    res.status(500).json({
      success: false,
      message: "Error uploading file",
    });
  }
};

const getAllMedia = async (req, res) => {
  try {
    const results = await Media.find({});
    res.status(200).json({
      success: true,
      results,
    });
  } catch (error) {
    logger.error("Error getting all media", error);
    res.status(500).json({
      success: false,
      message: "Error getting all media",
    });
  }
};

module.exports = { uploadMedia, getAllMedia };
