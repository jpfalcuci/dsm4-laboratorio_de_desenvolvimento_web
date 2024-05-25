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
          tags : ['api'],
          description: 'List of products',
          handler: productController.getProducts,
          validate: productSchema.getProducts,
        },
      },
      {
        method: "GET",
        path: "/v1/products/{id}",
        options: {
          tags : ['api'],
          description: 'Get product by id',
          handler: productController.findById,
          validate: productSchema.getById,
        },
      },
      {
        method: "POST",
        path: "/v1/products",
        options: {
          tags : ['api'],
          description: 'Create a product',
          handler: productController.create,
          validate: productSchema.createProduct,
        },
      },
      {
        method: "DELETE",
        path: "/v1/products/{id}",
        options: {
          tags : ['api'],
          description: 'Delete a product',
          handler: productController.deleteById,
          validate: productSchema.deleteById,
        },
      },
    ]);
  }
};

module.exports = plugin;
