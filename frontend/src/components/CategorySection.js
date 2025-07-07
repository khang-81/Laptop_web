import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import productService from '../services/productService';
import LoadingSpinner from './LoadingSpinner';

export default function CategorySection() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchCategories() {
      try {
        const data = await productService.getCategories();
        setCategories(data);
      } catch (err) {
        setError(err.message || 'Unknown error');
      } finally {
        setLoading(false);
      }
    }
    fetchCategories();
  }, []);

  if (loading) return <LoadingSpinner />;
  if (error) return <div className="text-red-500 text-center py-8">Lỗi tải danh mục: {error}</div>;

  return (
    <section className="bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">DANH MỤC SẢN PHẨM</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {categories.map(cat => (
            <Link
              key={cat.category_id}
              to={`/category/${cat.category_id}`}
              className="bg-white rounded-lg shadow-sm p-4 text-center hover:shadow-md transition-shadow hover:border-blue-500 border border-transparent"
            >
              <div className="text-3xl mb-2">
                {cat.category_name.includes('Gaming') ? '🎮' :
                 cat.category_name.includes('Macbook') ? '🍎' : '💻'}
              </div>
              <h3 className="font-medium text-gray-800">{cat.category_name}</h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

