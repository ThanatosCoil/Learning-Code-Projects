const express = require("express");
const authorController = require("../controllers/authorController");

const router = express.Router();

router.post("/create-author", authorController.createAuthor);
router.delete("/:id", authorController.deleteAuthor);
module.exports = router;
