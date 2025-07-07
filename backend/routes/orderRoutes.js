const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');
const authMiddleware = require('../middlewares/authMiddleware');

// Protected routes
router.post('/', authMiddleware.authenticate, orderController.createOrder);
router.get('/', authMiddleware.authenticate, orderController.getAllOrders);
router.get('/user', authMiddleware.authenticate, orderController.getUserOrders);
router.get('/:id', authMiddleware.authenticate, orderController.getOrderById);
router.put('/:id/status', authMiddleware.authenticate, authMiddleware.adminOnly, orderController.updateOrderStatus);

module.exports = router;