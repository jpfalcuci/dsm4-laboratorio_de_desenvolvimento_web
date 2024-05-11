const business = require("./costumer-business");

const getCostumers = async (req, h) => {
  const result = await business.list(req.query);
  return h.response(result).code(200);
};

const create = async (req, h) => {
  const result = await business.create(req.payload);
  return h.response(result).code(201);
};

const findById = async (request, h) => {
  const costumerId = request.params.id;
  const costumer = await business.findById(costumerId);
  return h.response(costumer).code(200);
};

const deleteById = async (request, h) => {
  const costumerId = request.params.id;
  await business.deleteById(costumerId);
  return h.response().code(204);
};

module.exports = {
  getCostumers,
  create,
  findById,
  deleteById,
};
