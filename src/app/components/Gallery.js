'use client'; 
import React, { useState } from 'react';

const Gallery = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const images = [
    '/images/gallery1.jpg',
    '/images/gallery2.jpg',
    '/images/gallery3.jpg',
    '/images/gallery4.jpg',
    '/images/gallery5.jpg',
    '/images/gallery6.jpg',
  ];

  const handleThumbnailClick = (index) => {
    setSelectedImageIndex(index);
  };

  return (
    <section className="gallery py-16 lg:px-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-15">
        <h2 className="text-3xl font-bold text-center heading">Gallery</h2>
        
        {/* Main Image Display */}
        <div className="relative mb-8 w-full h-96 rounded mt-6">
          <img
            src={images[selectedImageIndex]}
            alt={`Gallery image ${selectedImageIndex + 1}`}
            className="rounded-lg object-cover w-full h-full" // Use w-full and h-full for proper sizing
          />
        </div>

        {/* Thumbnail Navigation */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2">
          {images.map((image, index) => (
            <div 
              key={index} 
              className="relative cursor-pointer" 
              onClick={() => handleThumbnailClick(index)}
            >
              <div className="w-24 h-24 overflow-hidden rounded-lg"> {/* Fixed size with overflow hidden */}
                <img
                  src={image}
                  alt={`Thumbnail ${index + 1}`}
                  className={`object-cover w-24 h-24 transition-transform duration-200 ${selectedImageIndex === index ? 'scale-110 border-2 border-blue-500' : ''}`} // Highlight selected thumbnail
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
