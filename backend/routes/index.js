const express = require('express');
const router = express.Router();

// Import all routes
const productRoutes = require('./productRoutes');
const categoryRoutes = require('./categoryRoutes');
const newsRoutes = require('./newsRoutes');
const authRoutes = require('./authRoutes');
const userRoutes = require('./userRoutes');
const orderRoutes = require('./orderRoutes');
const cartRoutes = require('./cartRoutes');

// Setup routes
router.use('/api/products', productRoutes);
router.use('/api/categories', categoryRoutes);
router.use('/api/news', newsRoutes);
router.use('/api/auth', authRoutes);
router.use('/api/users', userRoutes);
router.use('/api/orders', orderRoutes);
router.use('/api/cart', cartRoutes);

// Health check endpoint
router.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK', timestamp: new Date() });
});

module.exports = router;