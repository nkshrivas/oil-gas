'use client';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import AOS from 'aos';
import Header from '../components/Header';

const Gallery = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const galleryImages = [
    { src: '/images/gallery1.jpg', alt: 'Image 1', title: 'Our Projects', caption: 'A glimpse of our latest sustainable energy project.' },
    { src: '/images/gallery2.jpg', alt: 'Image 2', title: 'Eco-Friendly Solutions', caption: 'Innovative solutions for a greener tomorrow.' },
    { src: '/images/gallery3.jpg', alt: 'Image 3', title: 'Team Collaboration', caption: 'Our team working together towards sustainability.' },
    { src: '/images/gallery4.jpg', alt: 'Image 4', title: 'Green Energy', caption: 'Harnessing the power of renewable energy sources.' },
    { src: '/images/gallery5.jpg', alt: 'Image 5', title: 'Sustainable Initiatives', caption: 'Indraprasth Oil’s sustainable initiatives at work.' },
    { src: '/images/gallery6.jpg', alt: 'Image 6', title: 'Community Impact', caption: 'Positive impact of our eco-friendly solutions on communities.' },
  ];

  return (
    <div className="gallery-page">
      {/* Banner Section */}
      <div className="relative w-full h-96" data-aos="fade-up">
      <video
          src="/images/video2.mp4"
          alt="Gallery Banner"
          autoPlay
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <h1 className="text-4xl md:text-6xl text-white font-bold">
            Our Gallery
          </h1>
        </div>
      </div>

      <Header title="Gallery" />

      {/* Gallery Section */}
      <section className="py-16 bg-white text-center">
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Explore Our Work</h2>
          <p className="text-lg leading-relaxed mb-4">
            Take a look at some of the key moments and projects we’ve been part of. Our gallery showcases the dedication and passion behind our commitment to a sustainable future.
          </p>
        </div>

        {/* img Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 sm:px-6 lg:px-8 mt-8">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative border shadow-lg p-6 rounded-lg overflow-hidden"
              data-aos="fade-up"
            >
              <img
                src={image.src}
                alt={image.alt}
                width={400}
                height={300}
                className="rounded-lg object-cover mb-4"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out flex items-center justify-center">
                <div className="text-white text-center">
                  <h3 className="text-xl font-bold mb-2">{image.title}</h3>
                  {/* <p className="text-lg">{image.caption}</p> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-gradient-to-r bg-primary text-white text-center">
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Discover More About Our Impact</h2>
          <p className="text-lg mb-8 max-width-520">
            Explore more of our work, projects, and initiatives by browsing our detailed reports or contacting us for further information.
          </p>
          <button className="bg-white moving-gradient font-bold py-3 px-6 rounded-full hover:bg-gray-100">
            Get In Touch
          </button>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
