const mongoose = require("mongoose");
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

const getBookById = async (req, res) => {
  try {
    if (!mongoose.isValidObjectId(req.params.id)) {
      return res.status(400).json({
        message: "Invalid book ID",
      });
    }
    const book = await bookService.getBookById(req.params.id);
    if (!book) return res.status(404).json({ message: "Book not found" });
    return res.status(200).json({ book });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};

const updateBook = async (req, res) => {
  try {
    if (!mongoose.isValidObjectId(req.params.id)) {
      return res.status(400).json({
        message: "Invalid book ID",
      });
    }
    const book = await bookService.updateBook(req.params.id, req.body);
    if (!book) return res.status(404).json({ message: "Book not found" });
    return res.status(200).json({ message: "Book updated successfully", book });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};

const deleteBook = async (req, res) => {
  try {
    if (!mongoose.isValidObjectId(req.params.id)) {
      return res.status(400).json({
        message: "Invalid book ID",
      });
    }
    const book = await bookService.deleteBook(req.params.id);
    if (!book) return res.status(404).json({ message: "Book not found" });
    return res.status(200).json({ message: "Book deleted successfully" });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};
module.exports = {
  createBook,
  getAllBooks,
  getBookById,
  updateBook,
  deleteBook,
};
