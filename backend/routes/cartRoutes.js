const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cartController');
const authMiddleware = require('../middlewares/authMiddleware');

// Protected routes
router.get('/', authMiddleware.authenticate, cartController.getCart);
router.post('/', authMiddleware.authenticate, cartController.addToCart);
router.put('/:id', authMiddleware.authenticate, cartController.updateCartItem);
router.delete('/:id', authMiddleware.authenticate, cartController.removeFromCart);
router.delete('/', authMiddleware.authenticate, cartController.clearCart);

module.exports = router;