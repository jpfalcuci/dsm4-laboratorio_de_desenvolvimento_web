const productController = require('./product-controller');
const productSchema = require('./product-schema');

const plugin = {
  name: 'product-v1-route',
  version: '1.0.0',
  register: (server) => {
    server.route([
      {
        method: "GET",
        path: "/v1/products",
        options: {
          handler: productController.getProducts,
          validate: productSchema.getProducts,
        },
      },
      {
        method: "GET",
        path: "/v1/products/{id}",
        options: {
          handler: productController.findById,
          validate: productSchema.getByIdSchema,
        },
      },
      {
        method: "POST",
        path: "/v1/products",
        options: {
          handler: productController.create,
          validate: productSchema.createProductSchema,
        },
      },
    ]);
  }
};

module.exports = plugin;
