const repository = require("./costumer-repository");

const create = async (costumer) => {
  // lógica negócio
  return repository.save(costumer);
};

const list = async (query) => {
  // lógica negócio
  return repository.findAll(query);
};

const findById = async (id) => {
  // lógica negócio
  return repository.findById(id);
};

const deleteById = async (id) => {
  // lógica negócio
  return repository.deleteById(id);
};

module.exports = {
  create,
  list,
  findById,
  deleteById,
};
