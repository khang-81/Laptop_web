import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Cửa hàng Laptop</h3>
            <p className="text-gray-400">Chuyên cung cấp các sản phẩm laptop chất lượng cao với giá cả hợp lý.</p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Danh mục</h4>
            <ul className="space-y-2">
              <li><Link to="/category/1" className="text-gray-400 hover:text-white">Máy tính xách tay</Link></li>
              <li><Link to="/category/2" className="text-gray-400 hover:text-white">Laptop Gaming</Link></li>
              <li><Link to="/category/3" className="text-gray-400 hover:text-white">Laptop Văn phòng</Link></li>
              <li><Link to="/category/4" className="text-gray-400 hover:text-white">Laptop Lập trình</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Hỗ trợ</h4>
            <ul className="space-y-2">
              <li><Link to="/contact" className="text-gray-400 hover:text-white">Liên hệ</Link></li>
              <li><Link to="/faq" className="text-gray-400 hover:text-white">FAQ</Link></li>
              <li><Link to="/warranty" className="text-gray-400 hover:text-white">Chính sách bảo hành</Link></li>
              <li><Link to="/return" className="text-gray-400 hover:text-white">Chính sách đổi trả</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Liên hệ</h4>
            <address className="text-gray-400 not-italic">
              <p>123 Đường ABC, Quận 1</p>
              <p>TP. Hồ Chí Minh</p>
              <p>Email: contact@laptopstore.com</p>
              <p>Điện thoại: 0123 456 789</p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
          <p>© 2023 Laptop Store. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;