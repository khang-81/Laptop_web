const express = require('express');
const router = express.Router();
const newsController = require('../controllers/newsController');
const authMiddleware = require('../middlewares/authMiddleware');

// Public routes
router.get('/', newsController.getAllNews);
router.get('/:id', newsController.getNewsById);
router.patch('/:id/views', newsController.incrementViews);

// Protected routes (Admin only)
router.post('/', authMiddleware.authenticate, authMiddleware.adminOnly, newsController.createNews);
router.put('/:id', authMiddleware.authenticate, authMiddleware.adminOnly, newsController.updateNews);
router.delete('/:id', authMiddleware.authenticate, authMiddleware.adminOnly, newsController.deleteNews);

module.exports = router;