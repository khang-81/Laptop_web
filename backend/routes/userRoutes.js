// backend/routes/userRoutes.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');  // Kiểm tra đây là đúng đường dẫn

const authMiddleware = require('../middlewares/authMiddleware');

// Public routes
router.get('/', userController.getAllUsers);           // Đảm bảo hàm này tồn tại trong userController
router.get('/:id', userController.getUserById);        // Đảm bảo hàm này tồn tại trong userController

// Protected routes
router.put('/:id', authMiddleware.authenticate, userController.updateProfile);   // Kiểm tra hàm updateProfile tồn tại trong userController
router.get('/me', authMiddleware.authenticate, userController.getMe);
router.put('/me/password', authMiddleware.authenticate, userController.changePassword);

module.exports = router;
