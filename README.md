# Book Management API

A RESTful API for managing books, authors, and categories. This project was developed using Node.js, Express.js, and MongoDB.

## Technologies

* Node.js
* Express.js
* MongoDB
* Mongoose
* Joi
* Swagger / OpenAPI
* Jest

## Features

* Create a book
* Get all books
* Get a book by ID
* Update a book
* Delete a book
* Input validation with Joi
* Centralized error handling
* Pagination and sorting
* Swagger/OpenAPI API documentation
* Unit tests for the service layer

## Project Structure

```text
src/
├── config/
│   └── swagger.js
├── controllers/
│   └── book.controller.js
├── dto/
│   └── book.dto.js
├── middlewares/
│   ├── error.middleware.js
│   └── validate.middleware.js
├── models/
│   ├── author.model.js
│   ├── book.model.js
│   └── category.model.js
├── repositories/
│   └── book.repository.js
├── routes/
│   └── book.routes.js
├── services/
│   └── book.service.js
├── tests/
│   └── book.service.test.js
├── validations/
│   └── book.validation.js
└── app.js
```

## Installation

Clone the repository:

```bash
git clone "https://github.com/Jeyran999/Week-1-Book-Management"
```

Navigate to the project directory:

```bash
cd book-management-api
```

Install dependencies:

```bash
npm install
```

Create a `.env` file in the root directory:

```env
PORT=3000
MONGO_URI=mongodb_connection_string
```

Start the development server:

```bash
npm run dev
```

Run tests:

```bash
npm test
```

## Environment Variables

Create a `.env` file with the following variables:

```env
PORT=3000
MONGO_URI=mongodb_connection_string
```

You can use `.env.example` as a template.

## API Endpoints

### Create a Book

```text
POST /books
```

### Get All Books

```text
GET /books
```

Pagination and sorting example:

```text
GET /books?page=1&limit=10&sortBy=title&order=asc
```

### Get a Book by ID

```text
GET /books/:id
```

### Update a Book

```text
PUT /books/:id
```

### Delete a Book

```text
DELETE /books/:id
```

## API Documentation

Swagger UI is available at:

```text
http://localhost:3000/api-docs
```

The Swagger documentation provides information about all available API endpoints and allows them to be tested directly.

## Testing

Unit tests were added for the Book Service layer using Jest.

Run tests with:

```bash
npm test
```

## Checkpoints

* **CP-1:** Project setup and entity design
* **CP-2:** Layered architecture and DTO implementation
* **CP-3:** Complete CRUD endpoints with correct HTTP status codes
* **CP-4:** Input validation and centralized exception handling
* **CP-5:** Pagination and sorting
* **CP-6:** Swagger/OpenAPI API documentation
* **CP-7:** Unit tests for the service layer

## License

This project was developed for educational purposes.
