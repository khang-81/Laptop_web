// routes/cartRoutes.js
const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cartController');
const authMiddleware = require('../middlewares/authMiddleware');

// Protected routes
router.get('/', authMiddleware.authenticate, cartController.getCart);  // Xem giỏ hàng
router.post('/', authMiddleware.authenticate, cartController.addToCart);  // Thêm sản phẩm vào giỏ hàng
router.put('/:id', authMiddleware.authenticate, cartController.updateCartItem);  // Cập nhật sản phẩm trong giỏ hàng
router.delete('/:id', authMiddleware.authenticate, cartController.removeFromCart);  // Xóa sản phẩm khỏi giỏ hàng
router.delete('/', authMiddleware.authenticate, cartController.clearCart);  // Xóa tất cả sản phẩm khỏi giỏ hàng

module.exports = router;
