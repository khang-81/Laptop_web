import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import newsService from '../services/newsService';
import LoadingSpinner from './LoadingSpinner';

export default function NewsList() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchNews() {
      try {
        const data = await newsService.getNews();
        setNews(data);
      } catch (err) {
        setError(err.message || 'Unknown error');
      } finally {
        setLoading(false);
      }
    }
    fetchNews();
  }, []);

  if (loading) return <LoadingSpinner />;
  if (error) return <div className="text-red-500 text-center py-8">Lỗi tải tin tức: {error}</div>;

  return (
    <section className="bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-blue-600">TIN TỨC & THÔNG BÁO</h2>
          <Link to="/news" className="text-blue-500 hover:underline">Xem tất cả</Link>
        </div>
        {news.length === 0 ? (
          <div className="text-center py-8">Chưa có tin tức nào</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {news.slice(0, 4).map(item => (
              <div key={item.news_id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2 line-clamp-2">{item.title}</h3>
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>{new Date(item.published_date).toLocaleDateString('vi-VN')}</span>
                    <span>{item.views} lượt xem</span>
                  </div>
                  <Link to={`/news/${item.news_id}`} className="mt-3 inline-block text-blue-500 hover:underline">Xem chi tiết</Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
