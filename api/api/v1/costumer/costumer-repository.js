const listCostumer = [];

const save = async (costumer) => {
  costumer.id = parseInt(Math.random() * 1000);
  listCostumer.push(costumer);

  return costumer;
};

const findAll = async (query) => {

  const { name, postal_code, city } = query;
  let listCostumerFiltered = listCostumer;

  if (name) {
    listCostumerFiltered = listCostumer.filter((p) => p.name.includes(name));
  }

  if (postal_code) {
    listCostumerFiltered = listCostumer.filter((p) => p.adress.postal_code === postal_code);
  }

  if (city) {
    listCostumerFiltered = listCostumer.filter((p) => p.adress.city.includes(city));
  }

  return listCostumerFiltered;
};

const findById = async (id) => {
  return listCostumer.find((p) => p.id === id);
}

const deleteById = async (id) => {
  const index = listCostumer.findIndex((p) => p.id === id);
  listCostumer.splice(index, 1);
};

module.exports = {
  save,
  findAll,
  findById,
  deleteById,
};
