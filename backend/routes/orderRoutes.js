// routes/orderRoutes.js
const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');
const authMiddleware = require('../middlewares/authMiddleware');

// Protected routes
router.post('/', authMiddleware.authenticate, orderController.createOrder);  // Tạo đơn hàng mới
router.get('/', authMiddleware.authenticate, orderController.getAllOrders);  // Lấy tất cả đơn hàng
router.get('/:id', authMiddleware.authenticate, orderController.getOrderById);  // Lấy đơn hàng theo ID

module.exports = router;
