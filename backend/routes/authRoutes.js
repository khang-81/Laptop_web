const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const authMiddleware = require('../middlewares/authMiddleware'); // Added this missing import

// Public routes
router.post('/register', authController.register);
router.post('/login', authController.login);

// Protected route
router.get('/me', authMiddleware.authenticate, authController.getMe);

module.exports = router;