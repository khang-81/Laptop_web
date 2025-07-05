const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const authMiddleware = require('../middlewares/authMiddleware');

// Public routes
router.get('/', productController.getAllProducts);
router.get('/search', productController.searchProducts);
router.get('/:id', productController.getProductById);

// Protected routes (admin only)
router.post('/', authMiddleware.authenticate, authMiddleware.adminOnly, productController.createProduct);
router.put('/:id', authMiddleware.authenticate, authMiddleware.adminOnly, productController.updateProduct);
router.delete('/:id', authMiddleware.authenticate, authMiddleware.adminOnly, productController.deleteProduct);

module.exports = router;