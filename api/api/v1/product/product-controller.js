const business = require("./product-business");

const getProducts = async (req, h) => {

  const result = await business.list(req.query);

  return h.response(result).code(200);
};

const create = async (req, h) => {
  const result = await business.create(req.payload);
  return h.response(result).code(201);
};

const findById = async (request, h) => {
  const productId = request.params.id;
  const product = await business.findById(productId);
  return h.response(product).code(200);
};

module.exports = {
  getProducts,
  create,
  findById,
};
