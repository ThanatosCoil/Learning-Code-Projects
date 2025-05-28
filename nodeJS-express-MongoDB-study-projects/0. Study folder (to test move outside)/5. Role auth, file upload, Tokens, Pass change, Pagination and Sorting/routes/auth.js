const express = require("express");
const {
  registerUser,
  loginUser,
  changePassword,
} = require("../controllers/auth");
const authMiddleware = require("../middleware/auth");

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/password", authMiddleware, changePassword);

module.exports = router;
