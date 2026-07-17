const Book = require("../models/book.model");
const Author = require("../models/author.model");
const Category = require("../models/category.model");
const create = async (bookData) => {
  return await Book.create(bookData);
};

const findAll = async (books) => {
  return await Book.find().populate("author").populate("category");
};

module.exports = { create, findAll };
