const productModel = require('./product-model');
const listProduct = [];

const save = async (product) => {
  const x = await productModel.create(product, {plain: true});
  console.log(x);
  return x;
};

const findAll = async (query) => {
  productModel.findAll();
};

const findById = async (id) => {
  return listProduct.find((p) => p.id === id);
}

module.exports = {
  save,
  findAll,
  findById,
};
