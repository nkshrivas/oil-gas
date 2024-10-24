// components/Slider.js
"use client"; // Required for using Swiper in a client component

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Import core styles
import 'swiper/css/pagination'; // Import pagination styles
import { Pagination, Autoplay } from 'swiper/modules'; // Import Swiper modules
import slider1 from '@/app/images/banner-slide.png'

const Slider = () => {
  return (
    <Swiper
      modules={[Pagination, Autoplay]} // Include Pagination and Autoplay modules
      pagination={{ clickable: true }} // Enable clickable pagination
      autoplay={{ delay: 3000, disableOnInteraction: false }} // Auto slide every 3 seconds
      loop={true} // Enable continuous loop mode
      className="mySwiper"
    >
      <SwiperSlide style={{ backgroundImage: `url(${slider1.src})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="banner">
          <div className="container">
            <div className="hero-content p-4 border-rounded">
              <h6 className="title mb-3">
                <i className="ri-drop-line"></i> OIL AND GAS
              </h6>
              <h2 className="mb-3">We are a Certified and Insured Company.</h2>
              <p>
                Specifically designed for any types of Small Factory, Company, Electronic Business,
                Power, Petroleum, Gas, Plants construction etc.
              </p>
              <button className="button">READ MORE</button>
            </div>
          </div>
        </div>
      </SwiperSlide>

    
      
      {/* Add more SwiperSlides as needed */}
    </Swiper>
  );
};

export default Slider;
