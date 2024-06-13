const authorController = require('./author-controller');
const authorSchema = require('./author-schema');

const plugin = {
  name: 'author-v2-route',
  version: '1.0.0',
  register: (server) => {
    server.route([
      {
        method: "GET",
        path: "/v2/authors",
        options: {
          tags: ['api'],
          description: 'List of all authors',
          handler: authorController.getAuthors,
          validate: authorSchema.getAuthors,
        },
      },
      {
        method: "GET",
        path: "/v2/authors/{id}",
        options: {
          tags: ['api'],
          description: 'Get the details of a specific author',
          handler: authorController.findById,
          validate: authorSchema.getById,
        },
      },
      {
        method: "POST",
        path: "/v2/authors",
        options: {
          tags: ['api'],
          description: 'Create a new author',
          handler: authorController.create,
          validate: authorSchema.createAuthor,
        },
      },
      {
        method: "DELETE",
        path: "/v2/authors/{id}",
        options: {
          tags: ['api'],
          description: 'Remove an author',
          handler: authorController.deleteById,
          validate: authorSchema.deleteById,
        },
      },
    ]);
  }
};

module.exports = plugin;
