const mongoose = require("mongoose");
const bookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      trim: true,
    },
    isbn: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    publishedYear: Number,
    stock: {
      type: Number,
      min: 0,
      default: 0,
    },
    author: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Author",
        required: true
    },
    category: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Category",
        required: true
    }
  },
  { timestamps: true },
);

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
