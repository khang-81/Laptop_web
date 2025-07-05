import React from 'react';
import { Link } from 'react-router-dom';

const OrderSummary = ({ totalPrice, showCheckoutButton = true }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold mb-4">Tóm tắt đơn hàng</h2>
      
      <div className="space-y-3 mb-6">
        <div className="flex justify-between">
          <span>Tạm tính</span>
          <span>
            {new Intl.NumberFormat('vi-VN', { 
              style: 'currency', 
              currency: 'VND' 
            }).format(totalPrice)}
          </span>
        </div>
        
        <div className="flex justify-between">
          <span>Phí vận chuyển</span>
          <span>Miễn phí</span>
        </div>
        
        <div className="border-t pt-3 flex justify-between font-bold text-lg">
          <span>Tổng cộng</span>
          <span className="text-red-600">
            {new Intl.NumberFormat('vi-VN', { 
              style: 'currency', 
              currency: 'VND' 
            }).format(totalPrice)}
          </span>
        </div>
      </div>
      
      {showCheckoutButton && (
        <Link 
          to="/checkout" 
          className="block w-full bg-green-600 text-white text-center py-3 rounded-lg hover:bg-green-700 transition"
        >
          Thanh toán
        </Link>
      )}
    </div>
  );
};

export default OrderSummary;