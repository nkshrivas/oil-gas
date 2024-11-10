"use client"; // Required for using Swiper in a client component
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Import core styles
import 'swiper/css/pagination'; // Import pagination styles
import { Pagination, Autoplay } from 'swiper/modules'; // Import Swiper modules
import { FaDropbox, FaWater } from 'react-icons/fa';
import { MdOutlineWaterDrop } from 'react-icons/md';

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
        <SwiperSlide
          key={index}
          style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            direction: 'vertical',
            effect: 'slide',
            background: slide.video ? `url(${slide.video})` : `url(${slide.image})`,
          }}
        >
          <div className="banner">
            <div className="container px-15 lg:px-8">
              <div className="hero-content border-rounded">
                <div className="title flex gap-2 items-center">
                  <MdOutlineWaterDrop />
                  <h6>{slide.title}</h6>
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
