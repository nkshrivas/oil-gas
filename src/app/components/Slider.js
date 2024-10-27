"use client"; // Required for using Swiper in a client component
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Import core styles
import 'swiper/css/pagination'; // Import pagination styles
import { Pagination, Autoplay } from 'swiper/modules'; // Import Swiper modules
import { FaDropbox, FaWater } from 'react-icons/fa';
import {MdOutlineWaterDrop} from 'react-icons/md';

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
        <SwiperSlide
          key={index}
          style={{
            backgroundImage: `url(${slide.image.src})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="banner px-15">
            <div className="container">
              <div className="hero-content border-rounded">
                <div className="title flex gap-2 items-center">
                  <MdOutlineWaterDrop/> <h6> {slide.title}</h6>
                </div>
                <h2>{slide.subtitle}</h2>
                <p>{slide.description}</p>
                <button className="button">{slide.buttonText}</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
