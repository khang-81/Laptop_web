// src/components/FeaturedProducts.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import productService from '../services/productService';
import LoadingSpinner from './LoadingSpinner';
import { useCart } from '../context/CartContext';

export default function FeaturedProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { addToCart } = useCart();

  useEffect(() => {
    async function fetchProducts() {
      try {
        const data = await productService.getFeaturedProducts(); // Lấy dữ liệu sản phẩm nổi bật
        setProducts(data);
      } catch (err) {
        setError(err.message || 'Unknown error');
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, []);

  const handleAddToCart = (prod) => {
    addToCart({
      product_id: prod.product_id,
      product_name: prod.product_name,
      price: prod.price,
      image_url: prod.image_url,
      quantity: 1
    });
  };

  if (loading) return <LoadingSpinner />;
  if (error) return <div className="text-red-500 text-center py-8">{`Lỗi tải sản phẩm: ${error}`}</div>;

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-blue-600">SẢN PHẨM NỔI BẬT</h2>
          <Link to="/products" className="text-blue-500 hover:underline text-lg font-medium">Xem tất cả</Link>
        </div>

        {products.length === 0 ? (
          <div className="text-center py-8 text-xl font-semibold text-gray-700">Không có sản phẩm nổi bật</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((prod) => (
              <div key={prod.product_id} className="relative bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-all">
                {/* Discount Badge */}
                {prod.discount > 0 && (
                  <div className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                    -{prod.discount}%
                  </div>
                )}
                <Link to={`/product/${prod.product_id}`}>
                  {/* Product Image */}
                  <div className="h-60 bg-gray-100 flex items-center justify-center p-4">
                    {prod.image_url ? (
                      <img src={prod.image_url} alt={prod.product_name} className="w-full h-full object-contain" />
                    ) : (
                      <div className="text-gray-400">No Image</div>
                    )}
                  </div>

                  {/* Product Info */}
                  <div className="p-6">
                    <h3 className="font-semibold text-xl text-gray-800 mb-3 line-clamp-2">{prod.product_name}</h3>
                    <div className="flex items-center mb-3">
                      <span className="text-red-600 font-bold text-lg">
                        {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(prod.price)}
                      </span>
                      {prod.old_price && (
                        <span className="text-gray-500 text-sm line-through ml-3">
                          {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(prod.old_price)}
                        </span>
                      )}
                    </div>
                  </div>
                </Link>

                {/* Add to Cart Button */}
                <div className="px-6 pb-6">
                  <button
                    onClick={() => handleAddToCart(prod)}
                    className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-200"
                  >
                    Thêm vào giỏ hàng
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
