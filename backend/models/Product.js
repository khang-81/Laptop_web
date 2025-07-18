const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Product = sequelize.define('Product', {
  product_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  product_name: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  description: {
    type: DataTypes.STRING(1000)
  },
  price: {
    type: DataTypes.DECIMAL(18, 2),
    allowNull: false
  },
  stock_quantity: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  },
  image_url: {
  type: DataTypes.TEXT
  },
  created_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  },
  featured: {  
      type: DataTypes.TINYINT(1),
      defaultValue: 0,
      allowNull: false
    },
}, {
  tableName: 'products',
  timestamps: false
});

module.exports = Product;