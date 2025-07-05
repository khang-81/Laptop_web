import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import CartItem from '../components/CartItem';
import OrderSummary from '../components/OrderSummary';

const Cart = () => {
  const { cartItems, totalItems, totalPrice, removeFromCart, updateQuantity, clearCart } = useCart();

  if (totalItems === 0) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Giỏ hàng trống</h2>
        <p className="mb-6">Bạn chưa có sản phẩm nào trong giỏ hàng.</p>
        <Link 
          to="/" 
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Tiếp tục mua sắm
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Giỏ hàng của bạn ({totalItems})</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="hidden md:grid grid-cols-12 bg-gray-100 p-4 font-semibold">
              <div className="col-span-5">Sản phẩm</div>
              <div className="col-span-2 text-center">Đơn giá</div>
              <div className="col-span-3 text-center">Số lượng</div>
              <div className="col-span-2 text-center">Thành tiền</div>
            </div>
            
            {cartItems.map(item => (
              <CartItem 
                key={item.product_id} 
                item={item} 
                onRemove={removeFromCart} 
                onUpdateQuantity={updateQuantity} 
              />
            ))}
            
            <div className="p-4 border-t flex justify-end">
              <button 
                onClick={clearCart}
                className="text-red-600 hover:text-red-800 transition"
              >
                Xóa tất cả
              </button>
            </div>
          </div>
        </div>
        
        <div>
          <OrderSummary totalPrice={totalPrice} />
          
          <div className="mt-4">
            <Link 
              to="/checkout" 
              className="block w-full bg-green-600 text-white text-center py-3 rounded-lg hover:bg-green-700 transition"
            >
              Tiến hành thanh toán
            </Link>
          </div>
          
          <div className="mt-4">
            <Link 
              to="/" 
              className="block w-full border border-blue-600 text-blue-600 text-center py-3 rounded-lg hover:bg-blue-50 transition"
            >
              Tiếp tục mua sắm
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;