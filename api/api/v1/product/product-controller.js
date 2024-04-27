const business = require("./product-business");

const getProducts = async (req, h) => {
  const result = await business.list();

  return h.response(result).code(200);
};

const create = async (req, h) => {
  const result = await business.create(req.payload);
  return h.response(result).code(201);
};

module.exports = { getProducts, create };
