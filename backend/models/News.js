// models/News.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const News = sequelize.define('News', {
  news_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,  // Sử dụng news_id làm khóa chính
    autoIncrement: true  // Đảm bảo news_id tự động tăng
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  published_date: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW  // Mặc định là thời gian hiện tại
  },
  views: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  },
  image_url: {
  type: DataTypes.TEXT
}

}, {
  tableName: 'news',  // Đảm bảo tên bảng đúng
  timestamps: false  // Không tạo cột createdAt và updatedAt
});

module.exports = News;
