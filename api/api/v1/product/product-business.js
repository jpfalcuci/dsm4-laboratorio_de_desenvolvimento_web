const repository = require("./product-repository");

const create = async (product) => {
  // lógica negócio
  return repository.save(product);
};

const list = async (query) => {
  // lógica negócio
  return repository.findAll(query);
};

const findById = async (id) => {
  // lógica negócio
  return repository.findById(id);
}

module.exports = {
  create,
  list,
  findById,
};
