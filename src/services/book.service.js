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
module.exports = { createBook, getAllBooks };
