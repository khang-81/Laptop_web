const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const OrderItem = sequelize.define('OrderItem', {
  order_item_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  quantity: {
    type: DataTypes.INTEGER
  },
  price: {
    type: DataTypes.DECIMAL(18, 2)
  }
}, {
  tableName: 'order_items',
  timestamps: false
});

module.exports = OrderItem;