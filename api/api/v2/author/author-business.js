const repository = require("./author-repository");

const create = async (author) => {
  return repository.save(author);
};

const list = async () => {
  return repository.findAll();
};

const findById = async (id) => {
  return repository.findById(id);
};

const deleteById = async (id) => {
  const author = await findById(id);
  console.log("Length: ", author.books.length, "id: ", id)
  if (author.books.length > 0) { // verifica se o autor possui livros associados
    throw new Error("Cannot delete author with associated books");
  }
  return repository.deleteById(id);
};

module.exports = {
  create,
  list,
  findById,
  deleteById,
};
