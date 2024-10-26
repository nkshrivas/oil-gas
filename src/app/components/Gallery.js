'use client'; 
import React, { useState } from 'react';
import Image from 'next/image';

const Gallery = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const images = [
    '/images/IMG_1.JPG',
    '/images/IMG_2.JPG',
    '/images/IMG_3.JPG',
    '/images/IMG_4.JPG',
    '/images/IMG_5.JPG',
    '/images/IMG_6.JPG',
  ];

  const handleThumbnailClick = (index) => {
    setSelectedImageIndex(index);
  };

  return (
    <section className="gallery py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-15">
        <h2 className="text-3xl font-bold text-center mb-8">Gallery</h2>
        
        {/* Main Image Display */}
        <div className="relative mb-8 w-full h-96">
          <Image
            src={images[selectedImageIndex]}
            alt={`Gallery image ${selectedImageIndex + 1}`}
            layout="fill"
            className="rounded-lg object-cover"
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
                <Image
                  src={image}
                  alt={`Thumbnail ${index + 1}`}
                  layout="fill" // Use fill to maintain aspect ratio
                  className={`object-cover transition-transform duration-200 ${selectedImageIndex === index ? 'scale-110 border-2 border-blue-500' : ''}`} // Highlight selected thumbnail
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
