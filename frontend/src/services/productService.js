// src/services/productService.js
import axios from 'axios';

// Khởi tạo instance của axios với cấu hình baseURL
const api = axios.create({
  baseURL: '/',  // Sử dụng proxy nếu đã cấu hình trong `package.json`
});

// Dịch vụ gọi API cho các danh mục và sản phẩm nổi bật
const productService = {
  getCategories: async () => {
    try {
      const response = await api.get('/categories');
      return response.data;  // Trả về dữ liệu nhận được từ API
    } catch (error) {
      // Thêm thông báo lỗi chi tiết để dễ debug
      if (error.response) {
        // Lỗi từ server (mã lỗi trả về từ server)
        throw new Error(`Error ${error.response.status}: ${error.response.data.message || 'Lỗi tải danh mục'}`);
      } else if (error.request) {
        // Không nhận được phản hồi từ server
        throw new Error('Không nhận được phản hồi từ server');
      } else {
        // Lỗi xảy ra trong quá trình setup yêu cầu
        throw new Error('Lỗi khi thiết lập yêu cầu API');
      }
    }
  },

  getFeaturedProducts: async () => {
    try {
      const response = await api.get('/products/featured');
      return response.data;  // Trả về dữ liệu nhận được từ API
    } catch (error) {
      // Thêm thông báo lỗi chi tiết để dễ debug
      if (error.response) {
        // Lỗi từ server (mã lỗi trả về từ server)
        throw new Error(`Error ${error.response.status}: ${error.response.data.message || 'Lỗi tải sản phẩm nổi bật'}`);
      } else if (error.request) {
        // Không nhận được phản hồi từ server
        throw new Error('Không nhận được phản hồi từ server');
      } else {
        // Lỗi xảy ra trong quá trình setup yêu cầu
        throw new Error('Lỗi khi thiết lập yêu cầu API');
      }
    }
  },

  // Có thể thêm các API khác như getProducts, getProductById v.v.
};

export default productService;
