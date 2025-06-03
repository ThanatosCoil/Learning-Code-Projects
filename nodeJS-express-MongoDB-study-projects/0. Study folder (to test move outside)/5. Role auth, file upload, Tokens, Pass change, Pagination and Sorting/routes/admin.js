const express = require("express");
const authMiddleware = require("../middleware/auth");
const adminMiddleware = require("../middleware/admin");
const router = express.Router();

router.get("/", authMiddleware, adminMiddleware, (req, res) => {
  res.json({
    message: "Welcome to admin panel",
  });
});

module.exports = router;
