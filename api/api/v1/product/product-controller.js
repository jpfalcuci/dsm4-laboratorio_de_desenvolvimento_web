const business = require("./product-business");

const getProducts = async (req, h) => {

  const { query } = req;
  const result = await business.list(query);

  return h.response(result).code(200);
};

const create = async (req, h) => {
  try {
    const result = await business.create(request.payload);
    return h.response(result).code(201);
  } catch(error) {
      console.log(error);
  }
};

const findById = async (request, h) => {
  const productId = request.params.id;
  const product = await business.findById(productId);
  return h.response(product).code(200);
};

const deleteById = async (request, h) => {
  const productId = request.params.id;

  try {
    await business.deleteById(productId);
    return h.response({}).code(204);
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  getProducts,
  create,
  findById,
  deleteById,
};
