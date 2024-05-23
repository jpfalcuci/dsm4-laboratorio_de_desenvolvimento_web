const Joi = require('joi');

const createProductSchema = {
  payload: Joi.object({
    name: Joi
      .string()
      .min(3)
      .max(60)
      .required(),
    value: Joi
      .number(),
    quantity: Joi
      .number()
      .integer()
      .positive()
      .required(),
  })
};

const getByIdSchema = {
  params: Joi.object({
    id: Joi
      .number()
      .integer()
      .required()
  })
};

const getProducts = {
  query: Joi.object({
    name: Joi
      .string()
      .min(3),
    quantity: Joi
      .number()
      .integer()
      .min(1),
    status: Joi
      .string()
      .valid('active', 'inactive', 'pending')
      .default('active')
  })
};

module.exports = { createProductSchema, getByIdSchema, getProducts };
