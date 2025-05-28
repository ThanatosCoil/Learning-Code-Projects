const Author = require("../models/Author");
const Book = require("../models/Book");

const createAuthor = async (req, res) => {
  const author = new Author(req.body);
  await author.save();

  res.status(201).json({
    success: true,
    data: author,
  });
};

const createBook = async (req, res) => {
  const book = new Book(req.body);
  await book.save();

  res.status(201).json({
    success: true,
    data: book,
  });
};

const getBookWithAuthor = async (req, res) => {
  const book = await Book.findById(req.params.id).populate("author");

  if (!book) {
    return res.status(404).json({
      success: false,
      msg: "Book not found",
    });
  }

  res.status(200).json({
    success: true,
    data: book,
  });
};

module.exports = { createAuthor, createBook, getBookWithAuthor };
