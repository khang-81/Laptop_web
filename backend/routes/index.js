const express = require('express');
const router = express.Router();

const authRoutes     = require('./authRoutes');
// const userRoutes     = require('./userRoutes');
const categoryRoutes = require('./categoryRoutes');
const productRoutes  = require('./productRoutes');
const newsRoutes     = require('./newsRoutes');
const orderRoutes    = require('./orderRoutes');
const cartRoutes     = require('./cartRoutes');

router.use('/auth',      authRoutes);
// router.use('/users',     userRoutes);
router.use('/categories',categoryRoutes);
router.use('/products',  productRoutes);
router.use('/news',      newsRoutes);
router.use('/orders',    orderRoutes);
router.use('/carts',     cartRoutes);

module.exports = router;