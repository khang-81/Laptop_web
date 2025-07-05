import React from 'react';
import { Link } from 'react-router-dom';

const CartItem = ({ item, onRemove, onUpdateQuantity }) => {
  return (
    <div className="p-4 border-b last:border-b-0">
      <div className="grid grid-cols-12 gap-4 items-center">
        <div className="col-span-5 flex items-center">
          <Link to={`/product/${item.product_id}`} className="flex items-center">
            <img 
              src={item.image_url || '/placeholder-product.jpg'} 
              alt={item.product_name}
              className="w-16 h-16 object-cover rounded mr-4"
            />
            <span className="font-medium hover:text-blue-600">{item.product_name}</span>
          </Link>
        </div>
        
        <div className="col-span-2 text-center">
          {new Intl.NumberFormat('vi-VN', { 
            style: 'currency', 
            currency: 'VND' 
          }).format(item.price)}
        </div>
        
        <div className="col-span-3 flex justify-center">
          <div className="flex items-center border rounded">
            <button 
              className="px-3 py-1 bg-gray-200"
              onClick={() => onUpdateQuantity(item.product_id, item.quantity - 1)}
            >
              -
            </button>
            <span className="px-4">{item.quantity}</span>
            <button 
              className="px-3 py-1 bg-gray-200"
              onClick={() => onUpdateQuantity(item.product_id, item.quantity + 1)}
            >
              +
            </button>
          </div>
        </div>
        
        <div className="col-span-2 text-center font-semibold">
          {new Intl.NumberFormat('vi-VN', { 
            style: 'currency', 
            currency: 'VND' 
          }).format(item.price * item.quantity)}
        </div>
      </div>
      
      <div className="mt-2 flex justify-end">
        <button 
          onClick={() => onRemove(item.product_id)}
          className="text-red-600 hover:text-red-800 transition"
        >
          Xóa
        </button>
      </div>
    </div>
  );
};

export default CartItem;