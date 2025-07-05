const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authMiddleware = require('../middlewares/authMiddleware');

// Protected routes
router.get('/profile', authMiddleware.authenticate, userController.getUserProfile);
router.put('/profile', authMiddleware.authenticate, userController.updateUserProfile);
router.put('/password', authMiddleware.authenticate, userController.changePassword);

module.exports = router;