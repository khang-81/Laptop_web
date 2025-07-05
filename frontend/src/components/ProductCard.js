import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <Link to={`/product/${product.id}`}>
        <div className="relative pb-[75%]">
          <img 
            src={product.image_url || '/placeholder-product.jpg'} 
            alt={product.product_name}
            className="absolute h-full w-full object-cover"
          />
        </div>
        <div className="p-4">
          <h3 className="font-semibold text-lg mb-2 line-clamp-2">{product.product_name}</h3>
          <div className="flex justify-between items-center">
            <span className="text-red-600 font-bold">{new Intl.NumberFormat('vi-VN', { 
              style: 'currency', 
              currency: 'VND' 
            }).format(product.price)}</span>
            <button className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 transition">
              Thêm vào giỏ
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;