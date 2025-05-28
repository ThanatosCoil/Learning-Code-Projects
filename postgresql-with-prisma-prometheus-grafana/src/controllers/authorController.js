const authorService = require("../services/authorService");

exports.createAuthor = async (req, res) => {
  try {
    const { name } = req.body;
    const author = await authorService.createAuthor(name);
    res.status(201).json(author);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteAuthor = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedAuthor = await authorService.deleteAuthor(+id);
    res.status(200).json({
      message: `Author with id: ${id} deleted successfully`,
      deletedAuthor,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
