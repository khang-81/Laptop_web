// middlewares/errorMiddleware.js

// Middleware xử lý lỗi 404 (Not Found)
exports.notFound = (req, res, next) => {
  const error = new Error('Not Found');
  error.status = 404;
  next(error);
};

// Middleware xử lý lỗi chung
exports.errorHandler = (err, req, res, next) => {
  const statusCode = err.status || 500;
  const message = err.message || 'Internal Server Error';
  res.status(statusCode).json({
    message: message,
    stack: process.env.NODE_ENV === 'development' ? err.stack : null  // Chỉ hiển thị stack trace khi ở môi trường phát triển
  });
};
