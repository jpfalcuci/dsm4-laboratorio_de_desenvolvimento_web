const bookController = require('./book-controller');
const bookSchema = require('./book-schema');

const plugin = {
  name: 'book-v2-route',
  version: '1.0.0',
  register: (server) => {
    server.route([
      {
        method: "GET",
        path: "/v2/books",
        options: {
          tags: ['api'],
          description: 'List of all books',
          handler: bookController.getBooks,
          validate: bookSchema.getBooks,
        },
      },
      {
        method: "GET",
        path: "/v2/books/{id}",
        options: {
          tags: ['api'],
          description: 'Get the details of a specific book',
          handler: bookController.findById,
          validate: bookSchema.getById,
        },
      },
      {
        method: "POST",
        path: "/v2/books",
        options: {
          tags: ['api'],
          description: 'Create a new book',
          handler: bookController.create,
          validate: bookSchema.createBook,
        },
      },
      {
        method: "DELETE",
        path: "/v2/books/{id}",
        options: {
          tags: ['api'],
          description: 'Remove a book',
          handler: bookController.deleteById,
          validate: bookSchema.deleteById,
        },
      },
    ]);
  }
};

module.exports = plugin;
