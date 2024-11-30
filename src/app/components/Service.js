import React from 'react';
import img1 from '@/app/images/healthcare.png';
import img2 from '@/app/images/compliant.png';
import img3 from '@/app/images/chemical.png';
import img4 from '@/app/images/real-estate-agent.png';
import { MdOutlineWaterDrop } from 'react-icons/md';

const servicesData = [
  {
    img: img1,
    title: 'Cutting-Edge Technology',
    description: 'Leveraging advanced technologies to optimize energy efficiency and resource utilization.',
    link: '#',
  },
  {
    img: img2,
    title: 'End-to-End Support',
    description: 'Expert consulting for project planning and regulatory compliance.',
    link: '#',
  },
  {
    img: img3,
    title: 'Cost-Effective Solutions',
    description: 'Delivering high-quality results while ensuring competitive pricing.',
    link: '#',
  },
  {
    img: img4,
    title: "Strong Industry Partnerships",
    description: 'Collaborations with leading technology providers to deliver best-in-class solutions.',
    link: '#',
  },
];

const Services = () => {
  return (
    <section>
      <div className="container py-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div>
          <div className="flex flex-col flex-wrap -mx-2">
            <div className="w-full  px-2">
              <div className="left-service-text">
                <div className="title flex gap-2 items-center">
                  <MdOutlineWaterDrop /> <h6>WHY CHOOSE US</h6>
                </div>
                <h2 className="heading">
                  Here’s why we stand out as your trusted partner in renewable energy
                </h2>
              </div>
            </div>
            <div className="w-full  px-2">
              <div className="right-service-text md:mt-2">
                <p> 
                  At Indraprasth Oil, we pride ourselves on delivering innovative and sustainable energy solutions that empower industries and communities. 
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3  mt-5">
            <div className="flex flex-wrap -mx-2">
              {servicesData.map((service, index) => (
                <div key={index} className="w-full sm:w-1/2 lg:w-1/4 px-2 mb-4">
                  <div className="services-card relative p-4 overflow-hidden group">
                    <img src={service.img.src} alt="services-img" className="w-full h-auto" />

                    {/* Initial text */}
                    <div className="relative z-10 text-black transition-opacity duration-300 group-hover:opacity-0">
                      <h5 className="mt-2"><b>{service.title}</b></h5>
                      <p>{service.description}</p>
                      {/* <a href={service.link} className="text-blue-500 underline">Read More</a> */}
                    </div>

                    {/* Hover text */}
                    <div className="absolute inset-0 flex flex-col justify-center items-center text-white opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100 z-20">
                      <h5><b className='text-white'>{service.title}</b></h5>
                      <p className='text-white'>{service.description}</p>
                      {/* <a href={service.link} className="text-white underline">Read More</a> */}
                    </div>

                    {/* Background gradient */}
                    <div className="absolute inset-0 bg-gradient-to-r bg-primary opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
