const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController'); // Kiểm tra import đúng
const authMiddleware = require('../middlewares/authMiddleware');

// Public routes
router.get('/', productController.getAllProducts);  // Kiểm tra callback function tồn tại trong controller
router.get('/featured', productController.getFeaturedProducts);  // Kiểm tra callback function tồn tại trong controller
router.get('/search', productController.searchProducts);  // Kiểm tra callback function tồn tại trong controller
router.get('/:id', productController.getProductById);  // Kiểm tra callback function tồn tại trong controller
router.get('/category/:categoryId', productController.getProductsByCategory);  // Kiểm tra callback function tồn tại trong controller

// Protected routes (Admin only)
router.post('/', authMiddleware.authenticate, authMiddleware.adminOnly, productController.createProduct);
router.put('/:id', authMiddleware.authenticate, authMiddleware.adminOnly, productController.updateProduct);
router.delete('/:id', authMiddleware.authenticate, authMiddleware.adminOnly, productController.deleteProduct);

module.exports = router;
