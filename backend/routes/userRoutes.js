const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authMiddleware = require('../middlewares/authMiddleware');

// Protected routes
router.get('/', authMiddleware.authenticate, authMiddleware.adminOnly, userController.getAllUsers);
router.get('/:id', authMiddleware.authenticate, userController.getUserById);
router.put('/:id', authMiddleware.authenticate, userController.updateUser);
router.delete('/:id', authMiddleware.authenticate, authMiddleware.adminOnly, userController.deleteUser);

module.exports = router;