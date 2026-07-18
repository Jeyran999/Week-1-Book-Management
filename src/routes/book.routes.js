const express = require("express");
const bookController = require("../controllers/book.controller");
const  validate = require("../middlewares/validate.middleware");
const { createBookSchema } = require("../validations/book.validation");

const bookRouter = express.Router();

bookRouter.post("/", validate(createBookSchema), bookController.createBook);
bookRouter.get("/", bookController.getAllBooks);
bookRouter.get("/:id", bookController.getBookById);
bookRouter.put("/:id", bookController.updateBook);
bookRouter.delete("/:id", bookController.deleteBook);
module.exports = bookRouter;
