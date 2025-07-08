// controllers/newsController.js
const News = require('../models/News');  // Kiểm tra import đúng mô hình News

// Get all news
exports.getAllNews = async (req, res) => {
  try {
    const news = await News.findAll();  // Lấy tất cả tin tức từ cơ sở dữ liệu
    res.json(news);
  } catch (error) {
    res.status(500).json({ message: error.message });  // Xử lý lỗi nếu có
  }
};

// Get news by ID
exports.getNewsById = async (req, res) => {
  try {
    const news = await News.findByPk(req.params.id);  // Tìm tin tức theo ID
    if (!news) {
      return res.status(404).json({ message: 'News not found' });  // Nếu không tìm thấy tin tức
    }
    res.json(news);
  } catch (error) {
    res.status(500).json({ message: error.message });  // Xử lý lỗi nếu có
  }
};
