const { getProducts, create } = require('./product-controller');
const productSchema = require('./product-schema');

const routes = [
  {
    method: "GET",
    path: "/products",
    handler: getProducts,
  },
  {
    method: "POST",
    path: "/products",
    options: {
      handler: create,
      validate: {
        payload: productSchema,
      },
    },
  },
];

module.exports = routes;
