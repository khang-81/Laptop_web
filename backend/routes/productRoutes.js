const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const authMiddleware = require('../middlewares/authMiddleware');

// Public routes
router.get('/', productController.getAllProducts);
router.get('/featured', productController.getFeaturedProducts);
router.get('/search', productController.searchProducts);
router.get('/:id', productController.getProductById);
router.get('/category/:categoryId', productController.getProductsByCategory);

// Protected routes (Admin only)
router.post('/', authMiddleware.authenticate, authMiddleware.adminOnly, productController.createProduct);
router.put('/:id', authMiddleware.authenticate, authMiddleware.adminOnly, productController.updateProduct);
router.delete('/:id', authMiddleware.authenticate, authMiddleware.adminOnly, productController.deleteProduct);
router.get('/search', productController.searchProducts);
module.exports = router;
