import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import productService from '../services/productService';
import { useCart } from '../context/CartContext';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await productService.getProductById(id);
        setProduct(data);
      } catch (error) {
        console.error('Error fetching product:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    addToCart({ ...product, quantity });
  };

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-blue-500"></div>
      </div>
    );
  }

  if (!product) {
    return <div className="container mx-auto px-4 py-8 text-center">Product not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Image */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img
            src={product.image_url || '/placeholder-product.jpg'}
            alt={product.product_name}
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Product Info */}
        <div>
          <h1 className="text-3xl font-bold text-gray-800 mb-4">{product.product_name}</h1>
          
          <div className="text-2xl text-red-600 font-bold mb-6">
            {new Intl.NumberFormat('vi-VN', { 
              style: 'currency', 
              currency: 'VND' 
            }).format(product.price)}
          </div>

          {/* Product Description */}
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Mô tả sản phẩm</h2>
            <p className="text-gray-700">{product.description}</p>
          </div>

          {/* Quantity Section */}
          <div className="flex items-center mb-6">
            <span className="mr-4 text-gray-700">Số lượng:</span>
            <div className="flex items-center border rounded">
              <button
                className="px-3 py-1 bg-gray-200 hover:bg-gray-300 transition duration-200 rounded-l"
                onClick={() => setQuantity(q => Math.max(1, q - 1))}
              >
                -
              </button>
              <span className="px-4 text-gray-700">{quantity}</span>
              <button
                className="px-3 py-1 bg-gray-200 hover:bg-gray-300 transition duration-200 rounded-r"
                onClick={() => setQuantity(q => q + 1)}
              >
                +
              </button>
            </div>
          </div>

          {/* Add to Cart Button */}
          <button
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition mb-4"
            onClick={handleAddToCart}
          >
            Thêm vào giỏ hàng
          </button>

          {/* Buy Now Button */}
          <button className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition">
            Mua ngay
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
