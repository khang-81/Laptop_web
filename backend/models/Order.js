// models/Order.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Order = sequelize.define('Order', {
  order_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  customer_name: {
    type: DataTypes.STRING(255)
  },
  customer_email: {
    type: DataTypes.STRING(255)
  },
  order_date: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  },
  total_amount: {
    type: DataTypes.DECIMAL(18, 2),
    allowNull: false
  }
}, {
  tableName: 'orders',
  timestamps: false
});

// Đảm bảo các mối quan hệ (relationship) được thiết lập chính xác
Order.associate = (models) => {
  Order.hasMany(models.OrderItem, {
    foreignKey: 'order_id',
    as: 'items'
  });
};

module.exports = Order;
