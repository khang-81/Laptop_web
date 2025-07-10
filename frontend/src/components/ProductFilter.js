// src/components/ProductFilter.js
import React from 'react';

const brands = ['Apple', 'Dell', 'HP', 'Lenovo', 'Asus', 'Acer', 'MSI'];
const priceRanges = [
  { label: 'Dưới 10 triệu', value: [0, 10000000] },
  { label: '10 - 20 triệu', value: [10000000, 20000000] },
  { label: '20 - 30 triệu', value: [20000000, 30000000] },
  { label: 'Trên 30 triệu', value: [30000000, 50000000] }
];

export default function ProductFilter({ filters, onChange, categoryName }) {
  const handleBrandToggle = (brand) => {
    const newBrands = filters.brands.includes(brand)
      ? filters.brands.filter(b => b !== brand)
      : [...filters.brands, brand];
    onChange({ brands: newBrands });
  };

  const handlePriceRangeChange = (range) => {
    onChange({ priceRange: range });
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm">
      <h3 className="font-bold text-lg mb-4">{categoryName}</h3>
      
      <div className="mb-6">
        <h4 className="font-medium mb-3">Khoảng giá</h4>
        <div className="space-y-2">
          {priceRanges.map((range, index) => (
            <div key={index} className="flex items-center">
              <input
                type="radio"
                id={`price-${index}`}
                name="priceRange"
                checked={filters.priceRange[0] === range.value[0] && filters.priceRange[1] === range.value[1]}
                onChange={() => handlePriceRangeChange(range.value)}
                className="mr-2"
              />
              <label htmlFor={`price-${index}`}>{range.label}</label>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <h4 className="font-medium mb-3">Thương hiệu</h4>
        <div className="space-y-2">
          {brands.map((brand) => (
            <div key={brand} className="flex items-center">
              <input
                type="checkbox"
                id={`brand-${brand}`}
                checked={filters.brands.includes(brand)}
                onChange={() => handleBrandToggle(brand)}
                className="mr-2"
              />
              <label htmlFor={`brand-${brand}`}>{brand}</label>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <h4 className="font-medium mb-3">Sắp xếp</h4>
        <select
          value={filters.sort}
          onChange={(e) => onChange({ sort: e.target.value })}
          className="w-full border rounded px-3 py-2"
        >
          <option value="newest">Mới nhất</option>
          <option value="price-asc">Giá thấp đến cao</option>
          <option value="price-desc">Giá cao đến thấp</option>
          <option value="popular">Bán chạy nhất</option>
        </select>
      </div>

      <button
        onClick={() => onChange({
          priceRange: [0, 50000000],
          brands: [],
          sort: 'newest'
        })}
        className="w-full py-2 bg-gray-100 hover:bg-gray-200 rounded text-sm"
      >
        Xóa bộ lọc
      </button>
    </div>
  );
}