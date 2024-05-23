const repository = require("./product-repository");

const create = async (product) => {
  // lógica negócio
  return repository.save(product);
};

const list = async (filter) => {
  // lógica negócio
  return repository.findAll(filter);
};

const findById = async (id) => {
  // lógica negócio
  return repository.findById(id);
};

const deleteById = async (id) => {
  // lógica negócio
  repository.deleteById(id);
};

module.exports = {
  create,
  list,
  findById,
  deleteById,
};
