const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const authMiddleware = require('../middlewares/authMiddleware');

// Public routes
router.post('/register', authController.register);
router.post('/login', authController.login);

// Protected routes
router.get('/me', authMiddleware.authenticate, authController.getMe);
router.put('/profile', authMiddleware.authenticate, authController.updateProfile);
router.put('/password', authMiddleware.authenticate, authController.changePassword);

module.exports = router;