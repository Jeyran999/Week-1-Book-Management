const Book = require("../models/book.model");
const Author = require("../models/author.model");
const Category = require("../models/category.model");

const create = async (bookData) => {
  return await Book.create(bookData);
};

const findAll = async () => {
  return await Book.find().populate("author").populate("category");
};

const findById = async (id) => {
  return await Book.findById(id).populate("author").populate("category");
};

const update = async (id, bookData) => {
  return await Book.findByIdAndUpdate(id, bookData, {
    runValidators: true,
    new: true,
  })
    .populate("author")
    .populate("category");
};

const deleteById = async (id) => {
  return await Book.findByIdAndDelete(id);
};
module.exports = { create, findAll, findById, update, deleteById };
