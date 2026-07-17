const express = require("express")
const bookController = require("../controllers/book.controller")

const bookRouter = express.Router()

bookRouter.post("/", bookController.createBook)
bookRouter.get("/", bookController.getAllBooks)

module.exports = bookRouter