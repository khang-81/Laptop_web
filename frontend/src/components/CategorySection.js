// src/components/CategorySection.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import productService from '../services/productService';
import LoadingSpinner from './LoadingSpinner';
import AdBanner from './AdBanner';

export default function CategorySection() {
  const [categories, setCategories] = useState([]);
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const [categoryData, newsData] = await Promise.all([
          productService.getCategories(),
          productService.getNews()
        ]);
        setCategories(categoryData);
        setNews(newsData);
      } catch (err) {
        setError(err.message || 'Unknown error');
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) return <LoadingSpinner />;
  if (error) return <div className="text-red-500 text-center py-8">Lỗi tải dữ liệu: {error}</div>;

  return (
    <section className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-6 h-full">
          {/* Cột trái - Danh mục sản phẩm */}
<div className="lg:w-1/5 h-full">
  <div className="bg-white rounded-xl shadow-lg overflow-hidden h-full flex flex-col">
    {/* Tiêu đề Danh mục */}
    <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-4">
      <h2 className="text-xl font-bold text-white text-center">DANH MỤC</h2>
    </div>

    {/* Nội dung danh mục */}
    <div className="p-4 space-y-3 flex-grow">
      {categories.map((cat) => (
        <Link
          key={cat.category_id}
          to={`/category/${cat.category_id}`}
          className="flex items-center p-3 rounded-lg hover:bg-blue-50 transition-all duration-300 group"
        >
          {/* Bỏ phần icon hình ảnh */}
          <span className="font-medium text-gray-700 group-hover:text-blue-600 transition-colors">
            {cat.category_name}
          </span>
        </Link>
      ))}
    </div>
  </div>
</div>


          {/* Cột giữa - Quảng cáo và hỗ trợ */}
          <div className="lg:w-3/5 h-full">
            <div className="h-full flex flex-col gap-10">
              <AdBanner />
              
              <div className="bg-white rounded-xl shadow-lg overflow-hidden flex-grow">
                <div className="p-6 h-full flex flex-col">
                  <div className="flex items-center mb-4">
                    <div className="bg-blue-100 p-2 rounded-full mr-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-blue-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">Hỗ Trợ Kỹ Thuật 24/7</h3>
                  </div>
                  <p className="text-gray-600 mb-6 flex-grow">
                    Đội ngũ kỹ thuật viên chuyên nghiệp sẵn sàng hỗ trợ bạn mọi lúc, mọi nơi.
                    Đặt lịch trước để được phục vụ tốt nhất.
                  </p>
                  <button className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-6 py-3 rounded-lg hover:from-blue-700 hover:to-blue-900 transition-all duration-300 flex items-center self-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-2"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Đặt lịch ngay
                  </button>
                </div>
              </div>
              
            </div>
          </div>

          {/* Cột phải - Tin tức với hình ảnh */}
          <div className="lg:w-1/5 h-full">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden h-full flex flex-col">
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-4">
                <h2 className="text-xl font-bold text-white">TIN TỨC NỔI BẬT</h2>
              </div>
              <div className="p-4 space-y-4 flex-grow">
                {news.slice(0, 4).map((item) => (
                  <Link
                    key={item.news_id}
                    to={`/news/${item.news_id}`}
                    className="block group hover:bg-gray-50 p-2 rounded-lg transition-colors"
                  >
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden mr-3 border border-gray-200">
                        <img
                          src={item.image_url || '/images/default-news.jpg'}
                          alt={item.title}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                      <div className="flex flex-col">
                        <h3 className="font-medium text-gray-800 group-hover:text-blue-600 transition-colors line-clamp-2">
                          {item.title}
                        </h3>
                        <p className="text-xs text-gray-500 mt-1">
                          {new Date(item.published_date).toLocaleDateString('vi-VN')}
                        </p>
                        <div className="flex items-center mt-1 text-xs text-gray-400">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-3 w-3 mr-1"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                            />
                          </svg>
                          {item.views} lượt xem
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
              <div className="p-4 border-t">
                <Link
                  to="/news"
                  className="text-blue-600 hover:text-blue-800 font-medium flex items-center justify-end"
                >
                  Xem tất cả tin tức
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}