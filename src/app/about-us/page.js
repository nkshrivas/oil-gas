'use client';
import Image from 'next/image';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import AOS from 'aos';

const AboutUs = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="about-us-page">
      {/* Banner Section */}
      <div className="relative w-full h-96" data-aos="fade-up">
        <Image
          src="/images/banner-slide.png"
          alt="Indraprasth Oil Banner"
          layout="fill"
          objectFit="cover"
          className="banner-image"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <h1 className="text-4xl md:text-6xl text-white font-bold">
            About Indraprasth Oil
          </h1>
        </div>
      </div>

      {/* Mission Section */}
      <section className="py-16 bg-white text-center">
        <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Text */}
          <div data-aos="fade-right">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
            <p className="text-lg leading-relaxed mb-4">
              At Indraprasth Oil, our mission is to drive sustainable energy
              solutions that contribute to a cleaner, greener world. We are
              dedicated to providing innovative and eco-friendly energy
              alternatives, including Natural Gas, Green Diesel, and Bio Coal.
            </p>
            <p className="text-lg leading-relaxed">
              Through our commitment to sustainable practices, we aim to reduce
              carbon footprints and offer energy solutions that are both
              economically viable and environmentally responsible.
            </p>
          </div>

          {/* Image */}
          <div data-aos="fade-left">
            <Image
              src="/images/IMG_3.JPG"
              alt="Our Mission"
              width={800}
              height={500}
              className="rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 bg-gray-100 text-center">
        <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Image */}
          <div data-aos="fade-right">
            <Image
              src="/images/IMG_4.JPG"
              alt="Our Vision"
              width={800}
              height={500}
              className="rounded-lg"
            />
          </div>

          {/* Text */}
          <div data-aos="fade-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Vision</h2>
            <p className="text-lg leading-relaxed mb-4">
              Our vision is to become a leading force in the global energy
              transition by making sustainable energy solutions accessible to
              all. We strive to shape a greener tomorrow through innovative
              technologies and strong partnerships, empowering the world to
              build a brighter, cleaner future.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Why Choose Indraprasth Oil?</h2>
            <p className="text-lg mb-8 max-width-900">
            Indraprasth Oil is committed to creating sustainable energy solutions by providing eco-friendly alternatives.
            We work closely with the Indian government to promote biofuel and renewable energy projects that contribute to the country's sustainable future.
            By choosing us, you are not only selecting a trusted energy partner, but also playing a part in making the world a cleaner place.
            </p>

            {/* Cards Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-15 mt-8">
            {/* Card 1 */}
            <div
                className="group relative border shadow-lg p-6 rounded-lg overflow-hidden"
                data-aos="fade-right"
            >
                <h3 className="text-2xl font-bold mb-4 relative z-10">Eco-Friendly Solutions</h3>
                <p className="relative z-10">We provide energy alternatives like Natural Gas and Bio Coal.</p>
                <div className="absolute bottom-0 left-0 w-0 h-0 bg-gradient-to-r from-green-500 to-teal-500  rounded  transition-all duration-700 ease-out group-hover:w-full group-hover:h-full"></div>
            </div>

            {/* Card 2 */}
            <div
                className="group relative border shadow-lg p-6 rounded-lg overflow-hidden"
                data-aos="fade-up"
            >
                <h3 className="text-2xl font-bold mb-4 relative z-10">Government Partnerships</h3>
                <p className="relative z-10">Partnered with the Indian government, we promote sustainable practices.</p>
                <div className="absolute bottom-0 left-0 w-0 h-0 bg-gradient-to-r from-green-500 to-teal-500  rounded  transition-all duration-700 ease-out group-hover:w-full group-hover:h-full"></div>
            </div>

            {/* Card 3 */}
            <div
                className="group relative border shadow-lg p-6 rounded-lg overflow-hidden"
                data-aos="fade-left"
            >
                <h3 className="text-2xl font-bold mb-4 relative z-10">Innovative Technologies</h3>
                <p className="relative z-10">Our innovative energy solutions support a greener future.</p>
                <div className="absolute bottom-0 left-0 w-0 h-0 bg-gradient-to-r from-green-500 to-teal-500  rounded transition-all duration-700 ease-out group-hover:w-full group-hover:h-full"></div>
            </div>
            </div>
        </div>
        </section>




      {/* Call to Action Section */}
      <section className="py-16 bg-gradient-to-r from-green-500 to-teal-500 text-white text-center" data-aos="fade-up">
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Us in Building a Greener Future</h2>
          <p className="text-lg mb-8 max-width-520">
            Contact us today to explore our wide range of sustainable energy solutions and take advantage of government subsidies for biofuel plant installations.
          </p>
          <button className="bg-white text-green-600 font-bold py-3 px-6 rounded-full hover:bg-gray-100">
            Get In Touch
          </button>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
