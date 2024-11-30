// app/services/page.js
import Link from 'next/link';
import { servicesData } from './ServiceData';
import Header from '../components/Header';

const Services = () => {
  return (
    <div className="services-page">
      {/* Banner Section */}
      <div className="relative w-full h-96">
      <video
          src="/images/video2.mp4"
          alt="Services Banner"
          autoPlay
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <h1 className="text-4xl md:text-6xl text-white font-bold">
            Our Services
          </h1>
        </div>
      </div>
      <Header title="Services" />

      <div className="container mx-auto px-6 md:px-12 text-center py-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Our Expertise</h2>
        <p className="text-lg mb-12 max-w-900 mx-auto">
          Explore our diverse range of services that cater to various industries such as automotive, manufacturing, and energy.
        </p>

        {/* Services Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="group relative border shadow-lg p-6 rounded-lg overflow-hidden"
            >
              <Link
                              href={`/services/${service.slug}`}>
              <img
                src={service.img}
                alt={service.title}
                width={400}
                height={200}
                className="rounded-lg mb-6 object-cover"
              />
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-lg mb-4">{service.meta}</p>

              {/* Link to Service Detail */}
                {/* <Link
                  href={`/services/${service.slug}`}
                  className="absolute bottom-0 left-0 bg-gradient-to-r bg-primary text-white p-4 w-full text-center"
                >
                  View Details
                </Link> */}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
