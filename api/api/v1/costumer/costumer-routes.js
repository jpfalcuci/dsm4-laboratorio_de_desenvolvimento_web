const costumerController = require('./costumer-controller');
const costumerSchema = require('./costumer-schema');

const plugin = {
  name: 'costumer-v1-route',
  version: '1.0.0',
  register: (server) => {
    server.route([
      {
        method: "GET",
        path: "/v1/costumers",
        options: {
          handler: costumerController.getCostumers,
          validate: costumerSchema.getCostumers,
        },
      },
      {
        method: "GET",
        path: "/v1/costumers/{id}",
        options: {
          handler: costumerController.findById,
          validate: costumerSchema.getByIdSchema,
        },
      },
      {
        method: "POST",
        path: "/v1/costumers",
        options: {
          handler: costumerController.create,
          validate: costumerSchema.createCostumerSchema,
        },
      },
      {
        method: "DELETE",
        path: "/v1/costumers/{id}",
        options: {
            handler: costumerController.deleteById,
            validate: costumerSchema.deleteCostumers,
        },
      },
    ]);
  }
};

module.exports = plugin;
