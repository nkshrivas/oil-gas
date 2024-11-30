'use client';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import AOS from 'aos';
import Header from '../components/Header';

const Downloads = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  // Sample downloadable items (can be changed based on your actual files)
  const downloadItems = [
    {
      title: 'Company Brochure',
      description: 'Download our company brochure to learn more about our mission, services, and solutions.',
      file: '/downloads/company-brochure.pdf',
      img: '/images/gallery1.jpg', // Replace with your actual image
    },
    {
      title: 'Annual Report 2023',
      description: 'Read our latest annual report for insights on our achievements and sustainability efforts.',
      file: '/downloads/annual-report-2023.pdf',
      img: '/images/gallery2.jpg', // Replace with your actual image
    },
    {
      title: 'Sustainability Whitepaper',
      description: 'Download our whitepaper on sustainable energy and the future of renewable solutions.',
      file: '/downloads/sustainability-whitepaper.pdf',
      img: '/images/gallery3.jpg', // Replace with your actual image
    },
    {
      title: 'Green Energy Solutions Presentation',
      description: 'Download our presentation to learn more about green energy alternatives and technologies.',
      file: '/downloads/green-energy-presentation.pdf',
      img: '/images/gallery4.jpg', // Replace with your actual image
    },
    {
      title: 'Bio Oil Solutions',
      description: 'Download our presentation to learn more about Bio oil alternatives and technologies.',
      file: '/downloads/green-energy-presentation.pdf',
      img: '/images/gallery5.jpg', // Replace with your actual image
    },
  ];

  return (
    <div className="downloads-page">
      {/* Banner Section */}
      <div className="relative w-full h-96" data-aos="fade-up">
      <video
          src="/images/video2.mp4"
          alt="Download Banner"
          autoPlay
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <h1 className="text-4xl md:text-6xl text-white font-bold">
            Downloads
          </h1>
        </div>
      </div>

      <Header title="Downloads" />

      {/* Downloads Overview Section */}
      <section className="py-16 bg-white text-center">
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Explore Our Resources</h2>
          <p className="text-lg leading-relaxed mb-4">
            Download a variety of resources including our company brochures, annual reports, whitepapers, and presentations.
            Stay informed about our products, services, and sustainability efforts.
          </p>
        </div>
      </section>

      {/* Downloadable Resources Grid Section */}
      <section className="py-16 bg-gray-100 text-center">
        <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {downloadItems.map((item, index) => (
            <div
              key={index}
              className="group relative border shadow-lg p-6 rounded-lg overflow-hidden"
              data-aos="fade-up"
            >
              <img
                src={item.img}
                alt={item.title}
                width={400}
                height={250}
                className="rounded-lg mb-6 object-cover"
              />
              <div className="absolute bottom-0 left-0 w-0 h-0 bg-gradient-to-r bg-primary rounded transition-all duration-700 ease-out group-hover:w-full group-hover:h-full"></div>
              <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out flex items-center justify-center">
                <div className="text-white text-center px-4">
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-lg mb-4">{item.description}</p>
                  <a
                    href={item.file}
                    download
                    className=" moving-gradient  text-primary font-bold py-2 px-4 rounded-full hover:bg-gray-100"
                  >
                    Download
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-gradient-to-r bg-primary text-white text-center">
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Need More Information?</h2>
          <p className="text-lg mb-8 max-width-520">
            If you have any questions or need additional resources, feel free to get in touch with us. We are happy to assist you with any information you need.
          </p>
          <button className="bg-white moving-gradient font-bold py-3 px-6 rounded-full hover:bg-gray-100">
            Contact Us
          </button>
        </div>
      </section>
    </div>
  );
};

export default Downloads;
