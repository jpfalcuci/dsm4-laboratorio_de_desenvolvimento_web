const productController = require('./api/v1/product/product-controller');
const costumerController = require('./api/v1/costumer/costumer-controller');
const productSchema = require('./api/v1/product/product-schema');
const costumerSchema = require('./api/v1/costumer/costumer-schema');

const routes = [
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
  {
    method: "GET",
    path: "/v1/costumers",
    options: {
      handler: costumerController.getCostumers,
      validate: costumerSchema.getCostumers,
    },
  },
  {
    method: "GET",
    path: "/v1/costumers/{id}",
    options: {
      handler: costumerController.findById,
      validate: costumerSchema.getByIdSchema,
    },
  },
  {
    method: "POST",
    path: "/v1/costumers",
    options: {
      handler: costumerController.create,
      validate: costumerSchema.createCostumerSchema,
    },
  },
  {
    method: "DELETE",
    path: "/v1/costumers/{id}",
    options: {
      handler: costumerController.deleteById,
      validate: costumerSchema.deleteCostumers,
    },
  },
];

module.exports = routes;
