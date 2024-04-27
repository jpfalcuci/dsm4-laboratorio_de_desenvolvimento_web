const listProduct = [];

const save = async (product) => {
  product.id = Math.random() * 1000;
  listProduct.push(product);

  return product;
};

const findAll = async () => {
  return listProduct;
};

module.exports = { save, findAll };
