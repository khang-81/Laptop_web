require('dotenv').config();
const express = require('express');
const cors = require('cors');
const sequelize = require('./config/database');
const errorMiddleware = require('./middlewares/errorMiddleware');

// Import các model
const Product = require('./models/Product');
const Category = require('./models/Category');
const Order = require('./models/Order');
const OrderItem = require('./models/OrderItem');
const User = require('./models/User');
const Cart = require('./models/Cart');

// Import các routes
const productRoutes = require('./routes/productRoutes');
const categoryRoutes = require('./routes/categoryRoutes');
const orderRoutes = require('./routes/orderRoutes');
const authRoutes = require('./routes/authRoutes');
const cartRoutes = require('./routes/cartRoutes');
const userRoutes = require('./routes/userRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Thiết lập quan hệ giữa các model
Product.belongsTo(Category, { foreignKey: 'category_id', as: 'category' });
Category.hasMany(Product, { foreignKey: 'category_id', as: 'products' });

Order.hasMany(OrderItem, { foreignKey: 'order_id', as: 'items' });
OrderItem.belongsTo(Order, { foreignKey: 'order_id', as: 'order' });
OrderItem.belongsTo(Product, { foreignKey: 'product_id', as: 'product' });

Cart.belongsTo(User, { foreignKey: 'user_id' });
Cart.belongsTo(Product, { foreignKey: 'product_id' });
User.hasMany(Cart, { foreignKey: 'user_id' });
Product.hasMany(Cart, { foreignKey: 'product_id' });

// Kết nối database và đồng bộ model
sequelize.authenticate()
  .then(() => console.log('Database connected'))
  .catch(err => console.error('Unable to connect to the database:', err));

sequelize.sync({ alter: true })
  .then(() => console.log('Models synced'))
  .catch(err => console.error('Error syncing models:', err));

// Routes
app.use('/api/products', productRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api/users', userRoutes);

// Error handling middleware
app.use(errorMiddleware.notFound);
app.use(errorMiddleware.errorHandler);

// Khởi động server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});