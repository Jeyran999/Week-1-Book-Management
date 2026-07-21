const bookService = require("../services/book.service");
const bookRepository = require("../repositories/book.repository");

jest.mock("../repositories/book.repository");

describe("Book Service", () => {
  test("should return a book by id", async () => {
    const mockBook = {
      _id: "123",
      title: "Clean Code",
      description: "A programming book",
    };
    bookRepository.findById.mockResolvedValue(mockBook);

    const result = await bookService.getBookById("123");

    expect(result).toBeDefined();
    expect(result.title).toBe("Clean Code");
    expect(bookRepository.findById).toHaveBeenCalledWith("123");
  });
  test("should return null if book is not found", async () => {
    bookRepository.findById.mockResolvedValue(null);

    const result = await bookService.getBookById("invalid-id");

    expect(result).toBeNull();
  });
});
