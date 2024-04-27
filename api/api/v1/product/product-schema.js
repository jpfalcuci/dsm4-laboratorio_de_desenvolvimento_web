const Joi = require('joi');

const getProductSchema = {
  payload: Joi.object({
    name: Joi
      .string()
      .min(3)
      .max(60)
      .required(),
    quantity: Joi
      .number()
      .integer()
      .positive()
      .required(),
  })
};

module.exports = getProductSchema;
