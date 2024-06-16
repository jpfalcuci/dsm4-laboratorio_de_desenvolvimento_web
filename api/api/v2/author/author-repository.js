const authorModel = require('./author-model');
const bookModel = require('../book/book-model');

const save = async (author) => {
  return authorModel.create(author);
};

const findAll = async () => {
  return authorModel.findAll({
    include: [{
      model: bookModel,
      as: 'books',
      attributes: ['id', 'title']
    }]
  });
};

const findById = async (id) => {
  return authorModel.findOne({
    include: [{
      model: bookModel,
      as: 'books',
      attributes: ['id', 'title']
    }],
    where: { id: id }
  });
};

const deleteById = async (id) => {
  return authorModel.destroy({ where: { id } });
};

module.exports = {
  save,
  findAll,
  findById,
  deleteById,
};
