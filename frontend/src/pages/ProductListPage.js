// src/pages/ProductListPage.js
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import productService from '../services/productService';
import LoadingSpinner from '../components/LoadingSpinner';

export default function ProductListPage() {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState(null);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    minPrice: 0,
    maxPrice: 10000000,
    sortBy: 'newest'
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        
        // Lấy thông tin danh mục
        const categories = await productService.getCategories();
        const currentCategory = categories.find(cat => cat.category_id == categoryId);
        setCategory(currentCategory);
        
        // Lấy sản phẩm theo danh mục
        const products = await productService.getProductsByCategory(categoryId, filters);
        setProducts(products);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [categoryId, filters]);

  const handleFilterChange = (newFilters) => {
    setFilters({ ...filters, ...newFilters });
  };

  if (loading) return <LoadingSpinner />;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Bộ lọc sản phẩm */}
        <div className="md:w-1/4">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="font-bold text-lg mb-4">{category?.category_name || 'Danh mục'}</h3>
            
            <div className="mb-6">
              <h4 className="font-medium mb-2">Khoảng giá</h4>
              <div className="flex items-center space-x-2">
                <input
                  type="number"
                  placeholder="Từ"
                  value={filters.minPrice}
                  onChange={(e) => handleFilterChange({ minPrice: e.target.value })}
                  className="w-full border rounded px-2 py-1"
                />
                <span>-</span>
                <input
                  type="number"
                  placeholder="Đến"
                  value={filters.maxPrice}
                  onChange={(e) => handleFilterChange({ maxPrice: e.target.value })}
                  className="w-full border rounded px-2 py-1"
                />
              </div>
            </div>

            <div className="mb-6">
              <h4 className="font-medium mb-2">Sắp xếp</h4>
              <select
                value={filters.sortBy}
                onChange={(e) => handleFilterChange({ sortBy: e.target.value })}
                className="w-full border rounded px-2 py-1"
              >
                <option value="newest">Mới nhất</option>
                <option value="price-asc">Giá thấp đến cao</option>
                <option value="price-desc">Giá cao đến thấp</option>
                <option value="popular">Bán chạy</option>
              </select>
            </div>
          </div>
        </div>

        {/* Danh sách sản phẩm */}
        <div className="md:w-3/4">
          <h1 className="text-2xl font-bold mb-6">
            {category?.category_name || 'Danh mục sản phẩm'}
          </h1>
          
          {products.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map(product => (
                <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                  <Link to={`/products/${product.id}`}>
                    <div className="relative pt-[100%]">
                      <img
                        src={product.image_url || '/images/default-product.jpg'}
                        alt={product.name}
                        className="absolute top-0 left-0 w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-lg mb-1">{product.name}</h3>
                      <div className="text-red-600 font-bold">
                        {new Intl.NumberFormat('vi-VN', { 
                          style: 'currency', 
                          currency: 'VND' 
                        }).format(product.price)}
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500">Không có sản phẩm nào trong danh mục này</p>
              <Link to="/" className="text-blue-600 hover:underline mt-2 inline-block">
                Quay lại trang chủ
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}