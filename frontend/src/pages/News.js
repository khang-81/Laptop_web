import React from 'react';
import { Link } from 'react-router-dom';

const News = () => {
  // Dữ liệu tin tức giả lập
  const newsItems = [
    {
      id: 1,
      title: "Laptop Store khai trương chi nhánh mới tại Hà Nội",
      summary: "Ngày 15/7/2023, Laptop Store chính thức khai trương chi nhánh thứ 5 tại số 123 Trần Duy Hưng, Hà Nội",
      date: "15/07/2023",
      views: 1245
    },
    {
      id: 2,
      title: "Intel ra mắt thế hệ CPU mới - Hiệu năng vượt trội",
      summary: "Thế hệ CPU Intel Core thứ 13 mang lại hiệu năng tăng 40% so với thế hệ trước",
      date: "10/07/2023",
      views: 2873
    },
    {
      id: 3,
      title: "Laptop Store nhận giải thưởng 'Nhà phân phối xuất sắc 2023'",
      summary: "Với doanh số tăng trưởng ấn tượng, Laptop Store vinh dự nhận giải thưởng từ ASUS",
      date: "05/07/2023",
      views: 1562
    },
    {
      id: 4,
      title: "Cập nhật chính sách bảo hành mới từ 1/8/2023",
      summary: "Từ 1/8/2023, tất cả sản phẩm tại Laptop Store sẽ được bảo hành 36 tháng",
      date: "01/07/2023",
      views: 3241
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <h1 className="text-3xl font-bold text-center mb-8 text-blue-600 dark:text-blue-400">Tin tức & Sự kiện</h1>
      
      <div className="grid md:grid-cols-2 gap-8 mb-8">
        {newsItems.map(news => (
          <div key={news.id} className="bg-white dark:bg-gray-700 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="p-6">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{news.title}</h3>
                <span className="text-sm text-gray-500 dark:text-gray-400">{news.date}</span>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{news.summary}</p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {news.views} lượt xem
                </span>
                <Link 
                  to={`/news/${news.id}`} 
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  Xem chi tiết
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center space-x-4">
        <button className="px-4 py-2 bg-gray-200 dark:bg-gray-600 rounded hover:bg-gray-300 dark:hover:bg-gray-500">
          Trang trước
        </button>
        <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          1
        </button>
        <button className="px-4 py-2 bg-gray-200 dark:bg-gray-600 rounded hover:bg-gray-300 dark:hover:bg-gray-500">
          2
        </button>
        <button className="px-4 py-2 bg-gray-200 dark:bg-gray-600 rounded hover:bg-gray-300 dark:hover:bg-gray-500">
          Trang sau
        </button>
      </div>

      <div className="mt-8 text-center">
        <Link 
          to="/promotions" 
          className="inline-block bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition"
        >
          Xem khuyến mãi đang có
        </Link>
      </div>
    </div>
  );
};

export default News;