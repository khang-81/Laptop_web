import React from 'react';
import { Link } from 'react-router-dom';

const Promotions = () => {
  // Dữ liệu khuyến mãi giả lập
  const promotions = [
    {
      id: 1,
      title: "Giảm giá 30% tất cả Laptop Gaming",
      description: "Áp dụng cho tất cả các dòng Laptop Gaming từ 1/8 đến 31/8/2023",
      image: "/promo-gaming.jpg",
      date: "01/08/2023 - 31/08/2023"
    },
    {
      id: 2,
      title: "Trả góp 0% qua thẻ tín dụng",
      description: "Áp dụng cho tất cả sản phẩm từ 10 triệu đồng trở lên",
      image: "/promo-installment.jpg",
      date: "15/07/2023 - 15/09/2023"
    },
    {
      id: 3,
      title: "Tặng balo cao cấp khi mua Laptop",
      description: "Tặng kèm balo trị giá 1.2 triệu đồng khi mua bất kỳ Laptop nào",
      image: "/promo-bag.jpg",
      date: "01/07/2023 - 30/09/2023"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <h1 className="text-3xl font-bold text-center mb-8 text-blue-600 dark:text-blue-400">Chương trình khuyến mãi</h1>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {promotions.map(promo => (
          <div key={promo.id} className="bg-white dark:bg-gray-700 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="h-48 bg-gray-200 dark:bg-gray-600">
              {/* Thay bằng ảnh thực tế */}
              <div className="w-full h-full flex items-center justify-center text-gray-500 dark:text-gray-300">
                [Ảnh khuyến mãi]
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2 text-orange-500 dark:text-orange-400">{promo.title}</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">{promo.description}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">{promo.date}</p>
              <Link 
                to="/products" 
                className="inline-block mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
              >
                Mua ngay
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-yellow-50 dark:bg-gray-700 border-l-4 border-yellow-400 dark:border-orange-500 p-4 mb-8">
        <div className="flex">
          <div className="flex-shrink-0">
            <svg className="h-5 w-5 text-yellow-400 dark:text-orange-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="ml-3">
            <p className="text-sm text-yellow-700 dark:text-orange-300">
              Tất cả chương trình khuyến mãi có thể kết thúc sớm hơn dự kiến khi hết ngân sách
            </p>
          </div>
        </div>
      </div>

      <div className="text-center">
        <Link 
          to="/news" 
          className="inline-block bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-white px-6 py-3 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-500 transition"
        >
          Xem tin tức mới nhất
        </Link>
      </div>
    </div>
  );
};

export default Promotions;