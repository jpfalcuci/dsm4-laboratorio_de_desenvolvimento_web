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
          tags : ['api'],
          description: 'List of costumers',
          handler: costumerController.getCostumers,
          validate: costumerSchema.getCostumers,
        },
      },
      {
        method: "GET",
        path: "/v1/costumers/{id}",
        options: {
          tags : ['api'],
          description: 'Get costumer by id',
          handler: costumerController.findById,
          validate: costumerSchema.getByIdSchema,
        },
      },
      {
        method: "POST",
        path: "/v1/costumers",
        options: {
          tags : ['api'],
          description: 'Create a costumer',
          handler: costumerController.create,
          validate: costumerSchema.createCostumerSchema,
        },
      },
      {
        method: "DELETE",
        path: "/v1/costumers/{id}",
        options: {
          tags : ['api'],
          description: 'Delete a costumer',
          handler: costumerController.deleteById,
          validate: costumerSchema.deleteCostumers,
        },
      },
    ]);
  }
};

module.exports = plugin;
