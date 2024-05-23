const Sequelize = require('sequelize');
const database = require('../../../config/db');

const Product = database.sequelize.define('Product', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: true,
        primaryKey: true,
        field: 'codigo'
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        field: 'desc_prod'
    },
    value: {
        type: Sequelize.DECIMAL(15,2),
        field: 'vl_unit'
    },
    quantity: {
        type: Sequelize.INTEGER,
        field: 'qtd'
    }
}, {
    timestamps: false,
    tableName: 'tb_produto'
});

module.exports = Product;
