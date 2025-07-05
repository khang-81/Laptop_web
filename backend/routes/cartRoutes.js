const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cartController');
const authMiddleware = require('../middlewares/authMiddleware');

// Protected routes
router.post('/', authMiddleware.authenticate, cartController.addToCart);
router.get('/', authMiddleware.authenticate, cartController.getCart);
router.delete('/:id', authMiddleware.authenticate, cartController.removeFromCart);

module.exports = router;