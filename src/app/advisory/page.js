'use client';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import AOS from 'aos';
import Header from '../components/Header';

const Advisory = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const advisoryServices = [
    {
      title: 'Sustainability Consulting',
      description: 'We offer expert advice on transitioning to sustainable energy solutions, from biofuels to renewable energy.',
      img: '/images/IMG_0737.JPG',
    },
    {
      title: 'Government Liaison',
      description: 'We guide companies in navigating government policies and securing subsidies for renewable energy projects.',
      img: '/images/IMG_0702.JPG',
    },
    {
      title: 'Technology & Innovation Advisory',
      description: 'Our team assists in integrating cutting-edge technologies to optimize energy solutions and improve efficiency.',
      img: '/images/IMG_0715.JPG',
    },
    {
      title: 'Investment Advisory',
      description: 'We provide investment strategies and insights for sustainable energy ventures and green projects.',
      img: '/images/IMG_0718.JPG',
    },
  ];

  return (
    <div className="advisory-page">
      {/* Banner Section */}
      <div className="relative w-full h-96" data-aos="fade-up">
      <video
          src="/images/video2.mp4"
          alt="Advisory Banner"
          autoPlay
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <h1 className="text-4xl md:text-6xl  font-bold">
            Our Advisory Services
          </h1>
        </div>
      </div>

      <Header title="Advisory" />

      {/* Advisory Overview Section */}
      <section className="py-16 bg-white text-center">
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Expert Guidance for a Sustainable Future</h2>
          <p className="text-lg leading-relaxed mb-4">
            At Indraprasth Oil, our advisory services aim to help businesses and governments transition to sustainable energy solutions. Whether you're looking for insights on renewable energy, investment opportunities, or navigating government policies, we are here to provide the expertise needed to succeed in a greener future.
          </p>
        </div>
      </section>

      {/* Advisory Services Grid Section */}
      <section className="py-16 bg-gray-100 text-center">
        <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advisoryServices.map((service, index) => (
            <div
              key={index}
              className="group relative border shadow-lg p-6 rounded-lg overflow-hidden"
              data-aos="fade-up"
            >
              <img
                src={service.img}
                alt={service.title}
                width={400}
                height={250}
                className="rounded-lg object-cover mb-6"
              />
              <div className="absolute bottom-0 left-0 w-0 h-0 bg-gradient-to-r bg-primary rounded transition-all duration-700 ease-out group-hover:w-full group-hover:h-full"></div>
              <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out flex items-center justify-center">
                <div className=" text-center px-4">
                  <h3 className="text-xl text-black font-bold mb-2">{service.title}</h3>
                  <p className="text-lg text-black">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white text-center">
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose Our Advisory Services?</h2>
          <p className="text-lg leading-relaxed mb-8">
            With a proven track record in providing top-tier advisory services for sustainable energy and renewable resources, Indraprasth Oil is the trusted partner for navigating the complexities of the energy transition. Our team of experts brings deep industry knowledge and a passion for innovation to help you succeed.
          </p>
          <button className="bg-primary  font-bold py-3 px-6 rounded-full hover:bg-gray-100">
            Get In Touch
          </button>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-gradient-to-r bg-primary text-white text-center">
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Start Your Sustainability Journey Today</h2>
          <p className="text-lg mb-8 max-width-520">
            Connect with us to explore how our advisory services can help your business adopt sustainable energy solutions and lead the way to a greener future.
          </p>
          <button className="bg-white moving-gradient font-bold py-3 px-6 rounded-full hover:bg-gray-100">
            Contact Us Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default Advisory;
