"use client"; // Required for using Swiper in a client component
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Import core styles
import 'swiper/css/pagination'; // Import pagination styles
import { Pagination, Autoplay } from 'swiper/modules'; // Import Swiper modules
import { FaDropbox, FaWater } from 'react-icons/fa';
import { MdOutlineWaterDrop } from 'react-icons/md';
import Link from 'next/link';

const Slider = ({ slides }) => {
  return (
    <Swiper
      modules={[Pagination, Autoplay]} // Include Pagination and Autoplay modules
      pagination={{ clickable: true }} // Enable clickable pagination
      autoplay={{ delay: 3000, disableOnInteraction: false }} // Auto slide every 3 seconds
      loop={true} // Enable continuous loop mode
      className="mySwiper"
    >
      {slides.map((slide, index) => (
        // Check if the slide has a video
        <SwiperSlide key={index} style={{ position: 'relative' }}>
        {slide.video ? (
          <video
            src={slide.video}
            autoPlay
            loop
            muted
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              zIndex: -1, // Ensure the video stays in the background
            }}
          />
        ) : (
          <div
            style={{
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundImage: `url(${slide.image})`,
              height: '100%',
              width: '100%',
            }}
          />
        )}
        
        <div className="banner md:pt-0">
          <div className="container sm-pt px-15 lg:px-8">
            <div className="hero-content border-rounded">
              <div className="title flex gap-2 items-center">
                <MdOutlineWaterDrop />
                <h6>{slide.title}</h6>
              </div>
              <h2>{slide.subtitle}</h2>
              <p>{slide.description}</p>
              <button className="button"><Link href={slide.buttonLink}>
              {slide.buttonText}</Link></button>
            </div>
          </div>
        </div>
      </SwiperSlide>
      
      ))}
    </Swiper>
  );
};

export default Slider;
