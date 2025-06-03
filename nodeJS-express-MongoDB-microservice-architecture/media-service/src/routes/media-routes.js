const express = require("express");
const multer = require("multer");

const { uploadMedia, getAllMedia } = require("../controllers/media-controller");
const { authenticateRequest } = require("../middleware/authMiddleware");
const logger = require("../utils/logger");

const router = express.Router();

//configure multer for file uploads
const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 5 * 1024 * 1024, //5MB file size limit
  },
}).single("file");

router.post(
  "/upload",
  authenticateRequest,
  (req, res, next) => {
    upload(req, res, (err) => {
      if (err instanceof multer.MulterError) {
        logger.error("Multer error uploading file", err);
        return res.status(400).json({
          success: false,
          message: "Multer error uploading file",
          error: err.message,
          stack: err.stack,
        });
      } else if (err) {
        logger.error("Unknown error uploading file", err);
        return res.status(400).json({
          success: false,
          message: "Unknown error uploading file",
          error: err.message,
          stack: err.stack,
        });
      }
      if (!req.file) {
        logger.error("No file found", err);
        return res.status(400).json({
          success: false,
          message: "No file found",
        });
      }
      next();
    });
  },
  uploadMedia
);

router.get("/all", authenticateRequest, getAllMedia);

module.exports = router;
