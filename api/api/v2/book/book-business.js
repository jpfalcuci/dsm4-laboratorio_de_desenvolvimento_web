const repository = require("./book-repository");

const create = async (book) => {
  // lógica negócio
  return repository.save(book);
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
  return repository.deleteById(id);
};

module.exports = {
  create,
  list,
  findById,
  deleteById,
};
