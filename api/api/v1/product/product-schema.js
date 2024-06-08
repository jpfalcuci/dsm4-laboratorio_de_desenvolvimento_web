const Joi = require('joi');

const createProduct = {
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
    category: Joi.object({
      id: Joi
        .number()
        .integer()
    })
  })
};

const getById = {
  params: Joi.object({
    id: Joi
      .number()
      .integer()
      .required()
  })
};

const deleteById = {
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

module.exports = { createProduct, getById, getProducts, deleteById };
