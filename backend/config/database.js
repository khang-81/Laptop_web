// config/database.js
const { Sequelize } = require('sequelize');
const config = require('./config');

// Khởi tạo Sequelize với cấu hình từ file config
const sequelize = new Sequelize(
  config.db.database,  // Tên cơ sở dữ liệu
  config.db.user,  // Tên người dùng cơ sở dữ liệu
  config.db.password,  // Mật khẩu người dùng cơ sở dữ liệu
  {
    host: config.db.host,  // Địa chỉ host của cơ sở dữ liệu
    dialect: config.db.dialect,  // Loại cơ sở dữ liệu (mysql, postgres, sqlite...)
    logging: config.db.logging  // Bật/tắt logging
  }
);

module.exports = sequelize;
