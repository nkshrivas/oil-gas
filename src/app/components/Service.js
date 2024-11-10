import React from 'react';
import img1 from '@/app/images/healthcare.png';
import img2 from '@/app/images/compliant.png';
import img3 from '@/app/images/chemical.png';
import img4 from '@/app/images/real-estate-agent.png';
import { MdOutlineWaterDrop } from 'react-icons/md';

const servicesData = [
  {
    img: img1,
    title: 'Automotive Manufacturing',
    description: 'Eiusmod tempor incididunt ut labore et dolore magna.',
    link: '#',
  },
  {
    img: img2,
    title: 'Construction And Engineering',
    description: 'Eiusmod tempor incididunt ut labore et dolore magna.',
    link: '#',
  },
  {
    img: img3,
    title: 'Industrial Chemical Research',
    description: 'Eiusmod tempor incididunt ut labore et dolore magna.',
    link: '#',
  },
  {
    img: img4,
    title: "Owner's Representation",
    description: 'Eiusmod tempor incididunt ut labore et dolore magna.',
    link: '#',
  },
];

const Services = () => {
  return (
    <section>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="services mt-12">
          <div className="flex flex-wrap -mx-2">
            <div className="w-full sm:w-1/2 lg:w-1/2 px-2">
              <div className="left-service-text">
                <div className="title flex gap-2 items-center">
                  <MdOutlineWaterDrop /> <h6>WHY CHOOSE US</h6>
                </div>
                <h2 className="heading">
                  We craft beautifully useful marketing and digital products that grow <b>- Our Lebuild.</b>
                </h2>
              </div>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/2 px-2">
              <div className="right-service-text md:mt-2">
                <p>There are many variations of passages of Lorem Ipsum available, have suffered in form, by injected humour. If you are going to use a passage of Lorem Ipsum, you need to be sure anything embarrassing hidden in the middle of text.</p>
              </div>
            </div>
          </div>

          <div className="mt-5">
            <div className="flex flex-wrap -mx-2">
              {servicesData.map((service, index) => (
                <div key={index} className="w-full sm:w-1/2 lg:w-1/4 px-2 mb-4">
                  <div className="services-card relative p-4 overflow-hidden group">
                    <img src={service.img.src} alt="services-img" className="w-full h-auto" />

                    {/* Initial text */}
                    <div className="relative z-10 text-black transition-opacity duration-300 group-hover:opacity-0">
                      <h5 className="mt-2"><b>{service.title}</b></h5>
                      <p>{service.description}</p>
                      <a href={service.link} className="text-blue-500 underline">Read More</a>
                    </div>

                    {/* Hover text */}
                    <div className="absolute inset-0 flex flex-col justify-center items-center text-white opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100 z-20">
                      <h5><b className='text-white'>{service.title}</b></h5>
                      <p className='text-white'>{service.description}</p>
                      <a href={service.link} className="text-white underline">Read More</a>
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
