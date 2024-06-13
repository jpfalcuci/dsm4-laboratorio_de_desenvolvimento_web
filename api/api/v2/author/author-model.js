const Sequelize = require('sequelize');
const database = require('../../../config/db');

const Author = database.sequelize.define('Author', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  biography: {
    type: Sequelize.TEXT,
  },
  birthDate: {
    type: Sequelize.DATE,
  },
}, {
  timestamps: false,
  tableName: 'tb_author'
});

module.exports = Author;
