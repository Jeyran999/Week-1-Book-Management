const { toBookDto } = require("../dto/book.dto");
const bookRepository = require("../repositories/book.repository");

const createBook = async (bookData) => {
  const book = await bookRepository.create(bookData);
  return toBookDto(book);
};

const getAllBooks = async () => {
  const books = await bookRepository.findAll();
  return books.map(toBookDto);
};

const getBookById = async (id) => {
  const book = await bookRepository.findById(id);
  if (!book) return null;
  return toBookDto(book);
};

const updateBook = async (id, bookData) => {
  const book = await bookRepository.update(id, bookData);
  if (!book) return null;
  return toBookDto(book);
};

const deleteBook = async (id) => {
  return await bookRepository.deleteById(id);
};
module.exports = {
  createBook,
  getAllBooks,
  getBookById,
  updateBook,
  deleteBook,
};
