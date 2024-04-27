const repository = require("./product-repository");

const create = async (product) => {
  // lógica negócio
  return repository.save(product);
};

const list = async () => {
  return repository.findAll();
};

module.exports = {
  create,
  list,
};
