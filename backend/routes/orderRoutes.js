const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');
const authMiddleware = require('../middlewares/authMiddleware');

// Protected routes
router.post('/', authMiddleware.authenticate, orderController.createOrder);
router.get('/', authMiddleware.authenticate, orderController.getAllOrders);
router.get('/:id', authMiddleware.authenticate, orderController.getOrderById);

module.exports = router;