const express = require("express");
const bookController = require("../controllers/book.controller");

const bookRouter = express.Router();

bookRouter.post("/", bookController.createBook);
bookRouter.get("/", bookController.getAllBooks);
bookRouter.get("/:id", bookController.getBookById);
bookRouter.put("/:id", bookController.updateBook);
bookRouter.delete("/:id", bookController.deleteBook);
module.exports = bookRouter;
