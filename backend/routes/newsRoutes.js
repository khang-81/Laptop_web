// routes/newsRoutes.js
const express = require('express');
const router = express.Router();
const newsController = require('../controllers/newsController');  // Kiểm tra import đúng

// Public routes
router.get('/', newsController.getAllNews);  // Đảm bảo rằng `getAllNews` đã được định nghĩa trong controller
router.get('/:id', newsController.getNewsById);  // Đảm bảo rằng `getNewsById` đã được định nghĩa trong controller

module.exports = router;
