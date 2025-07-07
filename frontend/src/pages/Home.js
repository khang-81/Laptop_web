import React from 'react';
import CategorySection  from '../components/CategorySection';
import FeaturedProducts from '../components/FeaturedProducts';
import NewsList         from '../components/NewsList';
console.log('FeaturedProducts is', FeaturedProducts);

export default function Home() {
  return (
    <main className="pb-12">
      <CategorySection />
      <FeaturedProducts />
      <NewsList />
    </main>
  );
}
