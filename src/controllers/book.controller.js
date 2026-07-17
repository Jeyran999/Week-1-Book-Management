const bookService = require("../services/book.service");

const createBook = async (req, res) => {
  try {
    const book = await bookService.createBook(req.body);
    return res.status(201).json({ message: "Book created successfully", book });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};

const getAllBooks = async (req, res) => {
  try {
    const books = await bookService.getAllBooks();
    if (books.length === 0)
      return res.status(404).json({ message: "No book found" });
    return res.status(200).json({ books });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};

module.exports = { createBook, getAllBooks };
