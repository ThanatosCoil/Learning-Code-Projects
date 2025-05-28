const bookService = require("../services/bookService");

exports.createBook = async (req, res) => {
  try {
    const { title, authorId, publishedDate } = req.body;
    const book = await bookService.createBook(
      title,
      authorId,
      new Date(publishedDate)
    );
    res.status(201).json(book);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getBooks = async (req, res) => {
  try {
    const books = await bookService.getBooks();
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getBookById = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await bookService.getBookById(+id);
    res.status(200).json(book);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateBook = async (req, res) => {
  try {
    const { id } = req.params;
    const { title } = req.body;
    const updatedBook = await bookService.updateBook(+id, title);
    res.status(200).json(updatedBook);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteBook = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedBook = await bookService.deleteBook(+id);
    res.status(200).json(deletedBook);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
