import React from 'react';
import { Link } from 'react-router-dom';

const Introduce = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <h1 className="text-3xl font-bold text-center mb-8 text-blue-600 dark:text-blue-400">Giới thiệu về Laptop Store</h1>
      
      <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-orange-500 dark:text-orange-400">Câu chuyện của chúng tôi</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Laptop Store được thành lập năm 2023 với sứ mệnh mang đến những sản phẩm công nghệ chất lượng cao với giá cả hợp lý nhất.
        </p>
        <p className="text-gray-700 dark:text-gray-300">
          Từ một cửa hàng nhỏ, chúng tôi đã phát triển thành hệ thống phân phối laptop uy tín hàng đầu Việt Nam.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold mb-3 text-blue-600 dark:text-blue-400">Tầm nhìn</h3>
          <p className="text-gray-700 dark:text-gray-300">
            Trở thành địa chỉ tin cậy cho mọi khách hàng khi tìm kiếm các sản phẩm công nghệ chất lượng.
          </p>
        </div>
        <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold mb-3 text-blue-600 dark:text-blue-400">Sứ mệnh</h3>
          <p className="text-gray-700 dark:text-gray-300">
            Cung cấp sản phẩm chính hãng với giá tốt nhất cùng dịch vụ chăm sóc khách hàng tận tâm.
          </p>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold mb-4 text-orange-500 dark:text-orange-400">Tại sao chọn chúng tôi?</h2>
        <ul className="space-y-3 text-gray-700 dark:text-gray-300">
          <li className="flex items-start">
            <span className="text-green-500 mr-2">✓</span>
            <span>100% sản phẩm chính hãng, bảo hành toàn cầu</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2">✓</span>
            <span>Giá cả cạnh tranh nhất thị trường</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2">✓</span>
            <span>Đội ngũ kỹ thuật viên chuyên nghiệp</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2">✓</span>
            <span>Bảo hành tận nơi trong 24h</span>
          </li>
        </ul>
      </div>

      <div className="mt-8 text-center">
        <Link 
          to="/promotions" 
          className="inline-block bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition"
        >
          Xem chương trình khuyến mãi
        </Link>
      </div>
    </div>
  );
};

export default Introduce;