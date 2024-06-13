const Joi = require('joi');

const createCostumerSchema = {
  payload: Joi.object({
    name: Joi.string().min(3).max(60).required(),
    adress: {
      postal_code: Joi.string().length(8).required(),
      city: Joi.string().min(3).max(60).required(),
      state: Joi.string().length(2).required(),
    },
    documents: {
      cpf: Joi.string().length(11).required(),
      rg: Joi.string().length(9).optional(),
    },
  })
};

const getByIdSchema = {
  params: Joi.object({
    id: Joi.number().integer().required()
  })
};

const getCostumers = {
  query: Joi.object({
    name: Joi.string().min(3),
    postal_code: Joi.string().length(8),
    city: Joi.string().min(3),
  })
};

const deleteCostumers = {
  params: Joi.object({
    id: Joi.number().integer().required()
  })
};

module.exports = {
  createCostumerSchema,
  getByIdSchema,
  getCostumers,
  deleteCostumers
};
