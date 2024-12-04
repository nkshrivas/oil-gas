'use client';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';
import AOS from 'aos';
import Header from '../components/Header';

const Gallery = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const galleryImages = [
    { src: '/images/coal1.jpeg', alt: 'Image 1', category: 'Coal' },
    { src: '/images/coal2.jpeg', alt: 'Image 2',  category: 'Coal' },
    { src: '/images/coal3.jpeg', alt: 'Image 3', category: 'Coal' },
    { src: '/images/coal4.jpeg', alt: 'Image 4',category: 'Coal' },
    { src: '/images/coal5.jpeg', alt: 'Image 5',  category: 'Coal' },
    { src: '/images/coal6.jpeg', alt: 'Image 6',category: 'Coal' },
    { src: '/images/coal7.jpeg', alt: 'Image 7',category: 'Coal' },

    { src: '/images/bio1.jpeg', alt: 'Image 1', category: 'Biodiesel' },
    { src: '/images/bio2.jpeg', alt: 'Image 2',  category: 'Biodiesel' },
    { src: '/images/bio3.jpeg', alt: 'Image 3', category: 'Biodiesel' },
    { src: '/images/bio4.jpeg', alt: 'Image 4',category: 'Biodiesel' },
    { src: '/images/bio5.jpeg', alt: 'Image 5',  category: 'Biodiesel' },
    { src: '/images/bio6.jpeg', alt: 'Image 6',category: 'Biodiesel' },
    { src: '/images/bio7.jpeg', alt: 'Image 7',category: 'Biodiesel' },
    { src: '/images/bio8.jpeg', alt: 'Image 5',  category: 'Biodiesel' },
    { src: '/images/bio9.jpeg', alt: 'Image 6',category: 'Biodiesel' },
    { src: '/images/bio10.jpeg', alt: 'Image 7',category: 'Biodiesel' },

  ];

  const [selectedCategory, setSelectedCategory] = useState('All');
  const categories = ['All', ...new Set(galleryImages.map(image => image.category))];
  const filteredImages = selectedCategory === 'All'
    ? galleryImages
    : galleryImages.filter(image => image.category === selectedCategory);

  return (
    <div className="gallery-page">
      {/* Banner Section */}
      <div className="relative w-full h-96" data-aos="fade-up">
        <video
          src="/images/video2.mp4"
          autoPlay
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <h1 className="text-4xl md:text-6xl text-white font-bold">Our Gallery</h1>
        </div>
      </div>

      <Header title="Gallery" />

      {/* Category Filter Buttons */}
      <div className="flex justify-center space-x-4 py-4 flex-wrap">
        {categories.map((category, index) => (
          <button
            key={index}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full font-semibold transition ${
              selectedCategory === category
                ? 'bg-primary text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Masonry Gallery */}
      <section className="py-16 bg-white text-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Explore Our Work</h2>
          <div className="masonry sm:masonry-sm md:masonry-md lg:masonry-lg">
            {filteredImages.map((image, index) => (
              <div
                key={index}
                className="break-inside p-2"
                data-aos="fade-up"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="rounded-lg shadow-lg w-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
