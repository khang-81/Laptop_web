import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import productService from '../services/productService';
import CategoryNav from '../components/CategoryNav';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await productService.getFeaturedProducts();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Banner */}
      <div className="mb-8 rounded-lg overflow-hidden">
        <img 
          src="/banner.jpg" 
          alt="Laptop Sale" 
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Categories */}
      <CategoryNav />

      {/* Featured Products */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Sản phẩm nổi bật</h2>
        {loading ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="bg-gray-200 rounded-lg h-64 animate-pulse"></div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map(product => (
              <ProductCard key={product.product_id} product={product} />
            ))}
          </div>
        )}
      </section>

      {/* News Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Tin tức mới nhất</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative pb-[56.25%]">
                <div className="absolute h-full w-full bg-gray-200"></div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2">Tiêu đề tin tức {i+1}</h3>
                <p className="text-gray-600 text-sm mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <span className="text-blue-600 text-sm">Xem thêm</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;