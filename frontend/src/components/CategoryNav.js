import React from 'react';
import { Link } from 'react-router-dom';

const CategoryNav = () => {
  const categories = [
    { id: 1, name: 'Máy tính xách tay' },
    { id: 2, name: 'Laptop Gaming - Đồ Họa' },
    { id: 3, name: 'Laptop Văn phòng' },
    { id: 4, name: 'Laptop Lập trình' },
    { id: 5, name: 'Laptop cao cấp' },
    { id: 6, name: 'Apple Macbook' },
    { id: 7, name: 'RAM - SSD' },
    { id: 8, name: 'Kho phụ kiện' },
  ];

  return (
    <div className="bg-white shadow-sm mb-8 overflow-x-auto">
      <div className="container mx-auto px-4">
        <div className="flex space-x-6 py-4">
          {categories.map(category => (
            <Link 
              key={category.id} 
              to={`/category/${category.id}`}
              className="whitespace-nowrap px-3 py-1 bg-gray-100 rounded-full hover:bg-blue-100 hover:text-blue-600 transition"
            >
              {category.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryNav;