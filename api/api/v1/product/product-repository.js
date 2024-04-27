const listProduct = [];

const save = async (product) => {
  product.id = parseInt(Math.random() * 1000);
  listProduct.push(product);

  return product;
};

const findAll = async (query) => {

  const { name, status } = query;

  if (name) {
    return listProduct.filter((p) => p.name === name);
  }

  return listProduct;
};

const findById = async (id) => {
  return listProduct.find((p) => p.id === id);
}

module.exports = {
  save,
  findAll,
  findById,
};
