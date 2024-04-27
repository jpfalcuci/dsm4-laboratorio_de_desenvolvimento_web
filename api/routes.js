const { getProducts, findById, create } = require('./api/v1/product/product-controller');
const schema = require('./api/v1/product/product-schema');

const routes = [
  {
    method: "GET",
    path: "/v1/products",
    options: {
      handler: getProducts,
      validate: schema.getProducts,
    },
  },
  {
    method: "GET",
    path: "/v1/products/{id}",
    options: {
      handler: findById,
      validate: schema.getByIdSchema,
    },
  },
  {
    method: "POST",
    path: "/v1/products",
    options: {
      handler: create,
      validate: schema.createProductSchema,
    },
  },
];

module.exports = routes;
