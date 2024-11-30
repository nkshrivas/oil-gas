'use client';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import AOS from 'aos';
import Header from '../components/Header';

const Career = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="career-page">
      {/* Banner Section */}
      <div className="relative w-full h-96" data-aos="fade-up">
      <video
          src="/images/video2.mp4"
          alt="Career Banner"
          autoPlay
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <h1 className="text-4xl md:text-6xl text-white font-bold">
            Career Opportunities at Indraprasth Oil
          </h1>
        </div>
      </div>

      <Header title="Careers" />

      {/* About the Company Section */}
      <section className="py-16 bg-white text-center">
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">About Indraprasth Oil</h2>
          <p className="text-lg leading-relaxed mb-4">
            Indraprasth Oil is a leader in sustainable energy solutions, providing eco-friendly alternatives such as Natural Gas, Green Diesel, and Bio Coal. We are committed to fostering innovation and sustainability in every aspect of our business.
          </p>
          <p className="text-lg leading-relaxed mb-4">
            Our team is passionate about shaping a greener tomorrow, and we are always on the lookout for talented individuals to join us on this journey.
          </p>
        </div>
      </section>

      {/* Career Opportunities Section */}
      <section className="py-16 bg-gray-100 text-center">
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Current Job Openings</h2>
          <p className="text-lg leading-relaxed mb-4">
            At Indraprasth Oil, we believe in the power of a diverse and talented workforce. Below are some of the current career opportunities:
          </p>

          {/* Career Opportunities List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 sm:px-6 lg:px-8 mt-8">
            {/* Card 1 - Example Position */}
            <div
              className="group relative border shadow-lg p-6 rounded-lg overflow-hidden"
              data-aos="fade-right"
            >
              <h3 className="text-2xl font-bold mb-4 relative z-10">Energy Solutions Engineer</h3>
              <p className="relative z-10">Join our team to help develop and implement eco-friendly energy solutions.</p>
              <div className="absolute bottom-0 left-0 w-0 h-0 bg-gradient-to-r bg-primary rounded transition-all duration-700 ease-out group-hover:w-full group-hover:h-full"></div>
            </div>

            {/* Card 2 - Example Position */}
            <div
              className="group relative border shadow-lg p-6 rounded-lg overflow-hidden"
              data-aos="fade-up"
            >
              <h3 className="text-2xl font-bold mb-4 relative z-10">Sustainability Consultant</h3>
              <p className="relative z-10">Help us assess and improve our sustainability practices across various energy solutions.</p>
              <div className="absolute bottom-0 left-0 w-0 h-0 bg-gradient-to-r bg-primary rounded transition-all duration-700 ease-out group-hover:w-full group-hover:h-full"></div>
            </div>

            {/* Card 3 - Example Position */}
            <div
              className="group relative border shadow-lg p-6 rounded-lg overflow-hidden"
              data-aos="fade-left"
            >
              <h3 className="text-2xl font-bold mb-4 relative z-10">Marketing & Communications Specialist</h3>
              <p className="relative z-10">Join our marketing team and help us spread the word about sustainable energy solutions.</p>
              <div className="absolute bottom-0 left-0 w-0 h-0 bg-gradient-to-r bg-primary rounded transition-all duration-700 ease-out group-hover:w-full group-hover:h-full"></div>
            </div>
          </div>
          
          {/* Apply Now CTA */}
          <p className="text-lg mt-8">
            Interested in any of these positions? We’d love to hear from you. Apply today and become part of a dynamic and growing team!
          </p>
          <button className="bg-primary text-white font-bold py-3 px-6 rounded-full mt-6 hover:bg-gray-100">
            Apply Now
          </button>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-gradient-to-r bg-primary text-white text-center">
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Us in Building a Greener Future</h2>
          <p className="text-lg mb-8 max-width-520">
            Indraprasth Oil offers a unique opportunity to be part of an innovative, eco-conscious company. Join us and help drive the change towards a sustainable energy future.
          </p>
          <button className="bg-white moving-gradient font-bold py-3 px-6 rounded-full hover:bg-gray-100">
            Get In Touch
          </button>
        </div>
      </section>
    </div>
  );
};

export default Career;
