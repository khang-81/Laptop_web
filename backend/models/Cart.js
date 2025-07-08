// backend/models/Cart.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Product = require('./Product');

const Cart = sequelize.define('Cart', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  product_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  quantity: {
    type: DataTypes.INTEGER,
    defaultValue: 1
  }
}, {
  tableName: 'carts',
  timestamps: true,                // bật timestamp
  createdAt: 'created_at',         // map createdAt → created_at
  updatedAt: false                 // tắt updatedAt (bạn không có cột updated_at)
});

// liên kết tới Product nếu cần
Cart.belongsTo(Product, { foreignKey: 'product_id', as: 'product' });

module.exports = Cart;
