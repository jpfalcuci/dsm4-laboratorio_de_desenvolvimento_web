const productModel = require('./product-model');
const { Op } = require('sequelize');
const listProduct = [];

const save = async (product) => {
  return productModel.create(product);
};

const findAll = async (filter) => {
  const {name, quantity} = filter;

  return productModel.findAll({
      where: {
        ...(name) ? {name: {[Op.iLike]: `${name}%`}} : {},
        ...(quantity) ? {quantity}: {}
      }
  });
};

const findById = async (id) => {
  return productModel.findOne({
    where: {
      id: id
    }
  });
};

const deleteById = async (id) => {
  productModel.destroy({
    where: {
      id: id
    }
  });
};

module.exports = {
  save,
  findAll,
  findById,
  deleteById,
};
