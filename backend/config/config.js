module.exports = {
  port: process.env.PORT || 5000,
  db: {
    database: 'laptopweb',
    user: 'root',          // Tên user MySQL (thường là root)
    password: '',          // Để trống nếu không có password
    host: 'localhost',     // Hoặc '127.0.0.1'
    dialect: 'mysql',      // Thay đổi từ 'mssql' sang 'mysql'
    logging: false         // Tắt log query (tùy chọn)
  },
  jwt: {
    secret: 'your_jwt_secret',
    expiresIn: '30d'
  }
};