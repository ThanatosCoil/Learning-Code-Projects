const express = require("express");
const authMiddleware = require("../middleware/auth");
const adminMiddleware = require("../middleware/admin");
const uploadMiddleware = require("../middleware/image");
const {
  uploadImage,
  fetchImages,
  deleteImage,
} = require("../controllers/image");

const router = express.Router();

//upload image
router.post(
  "/",
  authMiddleware,
  adminMiddleware,
  uploadMiddleware.single("image"),
  uploadImage
);

//get all images
router.get("/", authMiddleware, fetchImages);
module.exports = router;

//delete image
router.delete("/:id", authMiddleware, adminMiddleware, deleteImage);
