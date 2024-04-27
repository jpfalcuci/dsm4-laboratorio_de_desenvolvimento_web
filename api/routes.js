const { getProducts, create } = require('./api/v1/product/product-controller');
const { getProductsSchema } = require('./api/v1/product/product-schema');

const routes = [
  {
    method: "GET",
    path: "/v1/products",
    handler: getProducts,
  },
  {
    method: "POST",
    path: "/v1/products",
    options: {
      handler: create,
      validate: getProductsSchema,
    },
  },
];

module.exports = routes;
