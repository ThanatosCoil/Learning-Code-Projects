const express = require("express");
const {
  createPost,
  getAllPosts,
  getPost,
  deletePost,
} = require("../controllers/post-controller");
const { authenticateRequest } = require("../middleware/authMiddleware");

const router = express.Router();

//See if user is authenticated
router.use(authenticateRequest);

router.post("/create-post", createPost);
router.get("/", getAllPosts);
router.get("/:id", getPost);
router.delete("/:id", deletePost);

module.exports = router;
