const express = require("express");
const bookController = require("../controllers/bookController");

const router = express.Router();

router.post("/create-book", bookController.createBook);
router.get("/", bookController.getBooks);
router.get("/:id", bookController.getBookById);
router.put("/:id", bookController.updateBook);
router.delete("/:id", bookController.deleteBook);

module.exports = router;
