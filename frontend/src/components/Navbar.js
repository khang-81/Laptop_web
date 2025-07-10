// src/components/Navbar.js
import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Search, ShoppingCart, User, Edit3 } from 'react-feather';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { cartItems } = useCart();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    const q = searchQuery.trim();
    if (q) {
      navigate(`/search?q=${encodeURIComponent(q)}`);
      setSearchQuery('');
    }
  };

  const mainMenu = [
    { path: '/introduce', name: 'Giới thiệu' },
    { path: '/promotions', name: 'Khuyến mãi' },
    { path: '/news', name: 'Tin tức' },
  ];

  return (
    <header className="bg-white dark:bg-gray-800 shadow sticky top-0 z-50 transition-colors">
      <nav className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-3 md:mb-0"
          aria-label="Trang chủ"
        >
          Laptop
          <span className="text-orange-500 dark:text-orange-400">Store</span>
        </Link>

        {/* Search */}
        <form
          onSubmit={handleSearch}
          className="relative flex-grow max-w-md mx-4 w-full md:w-auto"
          role="search"
        >
          <input
            type="search"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            placeholder="Tìm kiếm laptop & phụ kiện..."
            className="w-full md:w-80 border border-gray-300 dark:border-gray-600 rounded-full py-2 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
            aria-label="Tìm kiếm"
          />
          <button
            type="submit"
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-300"
            aria-label="Tìm kiếm"
          >
            <Search size={18} />
          </button>
        </form>

        {/* Icons */}
        <div className="flex items-center space-x-6">
          {/* Cart */}
          <Link
            to="/cart"
            className="relative text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
            aria-label="Giỏ hàng"
          >
            <ShoppingCart size={22} />
            {cartItems.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                {cartItems.reduce((sum, item) => sum + item.quantity, 0)}
              </span>
            )}
          </Link>

          {/* Login/User */}
          <Link
            to="/login"
            className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
            aria-label="Đăng nhập"
          >
            <User size={22} />
          </Link>

          {/* Profile Edit */}
          <Link
            to="/profile"
            className="text-gray-700 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400"
            aria-label="Trang cá nhân"
            title="Chỉnh sửa hồ sơ"
          >
            <Edit3 size={22} />
          </Link>
        </div>

        {/* Main menu */}
        <ul className="hidden md:flex space-x-8 mt-4 md:mt-0">
          {mainMenu.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`text-lg font-medium py-2 px-1 transition-colors ${
                  location.pathname === item.path
                    ? 'text-orange-500 dark:text-orange-400 border-b-2 border-orange-500 dark:border-orange-400'
                    : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
