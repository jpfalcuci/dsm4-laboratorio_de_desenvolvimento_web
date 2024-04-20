const listProducts = [
  {
    id: 1,
    name: "TV",
    quantity: 1,
  },
  {
    id: 2,
    name: "Phone",
    quantity: 2,
  },
  {
    id: 3,
    name: "Laptop",
    quantity: 3,
  },
  {
    id: 4,
    name: "Tablet",
    quantity: 4,
  },
  {
    id: 5,
    name: "Watch",
    quantity: 5,
  },
]

const getProducts = (request, h) => {
  return listProducts;
}

const create = (request, h) => {
  console.log(request.payload);
  listProducts.push(request.payload);
  return request.payload;
}

module.exports = {
  getProducts,
  create,
};
