import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Search, ShoppingCart, User } from 'react-feather';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { cartItems } = useCart();
  const [searchQuery, setSearchQuery] = useState('');

  // Xử lý tìm kiếm
  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
      setSearchQuery('');
    }
  };

  // Main menu items - Chỉ giữ lại 3 mục theo yêu cầu
  const mainMenu = [
    { path: '/introduce', name: 'Giới thiệu' },
    { path: '/promotions', name: 'Khuyến mãi' },
    { path: '/news', name: 'Tin tức' },
  ];

  return (
    <header className="bg-white dark:bg-gray-800 shadow-sm sticky top-0 z-50 transition-colors duration-300">
      <nav className="container mx-auto px-4 py-3">
        <div className="flex flex-col md:flex-row md:items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-4 md:mb-0"
          >
            Laptop
            <span className="text-orange-500 dark:text-orange-400">Store</span>
          </Link>

          {/* Search bar */}
          <form
            onSubmit={handleSearch}
            className="relative flex-grow max-w-xl mx-4 mb-4 md:mb-0"
          >
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Tìm kiếm laptop và phụ kiện..."
              className="w-full border border-gray-300 dark:border-gray-600 rounded-full py-2 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
            />
            <button
              type="submit"
              className="absolute left-3 top-3 text-gray-400 dark:text-gray-300"
            >
              <Search size={18} />
            </button>
          </form>

          {/* Icons */}
          <div className="flex items-center space-x-6">
            <Link
              to="/cart"
              className="relative text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
            >
              <ShoppingCart size={22} />
              {cartItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItems.reduce((total, item) => total + item.quantity, 0)}
                </span>
              )}
            </Link>
            <Link 
              to="/login" 
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
            >
              <User size={22} />
            </Link>
          </div>
        </div>

        {/* Main menu - Chỉ hiển thị 3 mục như yêu cầu */}
        <div className="hidden md:flex justify-center space-x-8 mt-4">
          {mainMenu.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className={`py-2 px-4 font-medium text-lg ${
                location.pathname === item.path
                  ? 'text-orange-500 dark:text-orange-400 border-b-2 border-orange-500 dark:border-orange-400'
                  : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;