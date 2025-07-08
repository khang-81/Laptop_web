// src/components/AdBanner.js
import React, { useState } from 'react';

const AdBanner = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    '/images/image.png',
    '/images/image2.png',
    '/images/image3.png',
    '/images/image4.png',
    '/images/image1.png',
  ];

  const handlePrevClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center justify-center">
      {/* Banner Image Carousel */}
      <div className="relative w-full h-96 overflow-hidden rounded-lg">
        <img
          src={images[currentImageIndex]}
          alt="Lenovo Ideapad"
          className="w-full h-full object-cover transition-all"
        />
        
        {/* Previous Button */}
        <button
          onClick={handlePrevClick}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black text-white p-2 rounded-full opacity-50 hover:opacity-100"
        >
          &lt;
        </button>

        {/* Next Button */}
        <button
          onClick={handleNextClick}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black text-white p-2 rounded-full opacity-50 hover:opacity-100"
        >
          &gt;
        </button>
      </div>

      
    </div>
  );
};

export default AdBanner;
