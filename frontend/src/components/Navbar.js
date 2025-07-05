import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, User } from 'react-feather';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white shadow-lg">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">Laptop Store</Link>
        
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-blue-200">Trang chủ</Link>
          <Link to="/products" className="hover:text-blue-200">Sản phẩm</Link>
          <Link to="/news" className="hover:text-blue-200">Tin tức</Link>
          <Link to="/contact" className="hover:text-blue-200">Liên hệ</Link>
        </div>
        
        <div className="flex items-center space-x-4">
          <Link to="/cart" className="relative">
            <ShoppingCart size={20} />
            <span className="absolute -top-2 -right-2 bg-red-500 text-xs rounded-full h-5 w-5 flex items-center justify-center">0</span>
          </Link>
          <Link to="/login">
            <User size={20} />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;