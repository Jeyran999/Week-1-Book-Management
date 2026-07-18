const express = require("express");
const bookRouter = require("./routes/book.routes");
const errorHandler = require("./middlewares/error.middleware");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "Book Management API is running",
  });
});
app.use("/books", bookRouter);
app.use(errorHandler)
module.exports = app;
