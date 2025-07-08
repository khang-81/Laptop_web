const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/categoryController');
const authMiddleware = require('../middlewares/authMiddleware');

// Public routes
router.get('/', categoryController.getAllCategories);
router.get('/:id', categoryController.getCategoryById);

// Protected routes (Admin only)
router.post('/', authMiddleware.authenticate, authMiddleware.adminOnly, categoryController.createCategory);
router.put('/:id', authMiddleware.authenticate, authMiddleware.adminOnly, categoryController.updateCategory);
router.delete('/:id', authMiddleware.authenticate, authMiddleware.adminOnly, categoryController.deleteCategory);

module.exports = router;
