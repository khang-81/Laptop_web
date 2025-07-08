const sequelize = require('../config/database');

// Import all models
const User      = require('./User');
const Category  = require('./Category');
const Product   = require('./Product');
const News      = require('./News');
const Order     = require('./Order');
const OrderItem = require('./OrderItem');
const Cart      = require('./Cart');

// Define associations
Category.hasMany(Product,       { foreignKey: 'category_id', as: 'products' });
Product.belongsTo(Category,     { foreignKey: 'category_id', as: 'category' });

Order.hasMany(OrderItem,         { foreignKey: 'order_id',    as: 'items' });
OrderItem.belongsTo(Order,       { foreignKey: 'order_id',    as: 'order' });

Product.hasMany(OrderItem,       { foreignKey: 'product_id',  as: 'orderItems' });
OrderItem.belongsTo(Product,     { foreignKey: 'product_id',  as: 'product' });

User.hasMany(Cart,               { foreignKey: 'user_id',     as: 'carts' });
Cart.belongsTo(User,             { foreignKey: 'user_id',     as: 'user' });

// Cart <-> Product with unique alias
Cart.belongsTo(Product,          { foreignKey: 'product_id',  as: 'cartProduct' });
Product.hasMany(Cart,             { foreignKey: 'product_id',  as: 'cartItems' });

module.exports = {
  sequelize,
  User,
  Category,
  Product,
  News,
  Order,
  OrderItem,
  Cart,
};
