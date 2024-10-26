import React from 'react';
import img1 from '@/app/images/healthcare.png';
import img2 from '@/app/images/compliant.png'; // Add your other images similarly
import img3 from '@/app/images/chemical.png';
import img4 from '@/app/images/real-estate-agent.png';
import {MdOutlineWaterDrop} from 'react-icons/md';

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
      <div className="container mx-auto px-15">
        <div className="services mt-12">
          <div className="flex flex-wrap -mx-2">
            <div className="w-full sm:w-1/2 lg:w-1/2 px-2">
              <div className="left-service-text">
              <div className="title flex gap-2 items-center">
                <MdOutlineWaterDrop/> <h6>WHY CHOOSE US</h6>
              </div>                
                <h2 className="heading">
                  We craft beautifully useful marketing and digital products that grow <b>- Our Lebuild.</b>
                </h2>
              </div>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/2 px-2">
              <div className="right-service-text md-mt-2">
                <h5 className="mb-3">There are many variations of passages of Lorem Ipsum available, have suffered in form, by injected humour.</h5>
                <p>If you are going to use a passage of Lorem Ipsum, you need to be sure anything embarrassing hidden in the middle of text.</p>
              </div>
            </div>
          </div>

          <div className="mt-5">
            <div className="flex flex-wrap -mx-2">
              {servicesData.map((service, index) => (
                <div key={index} className="w-full sm:w-1/2 lg:w-1/4 px-2">
                  <div className="services-card p-4 mb-2">
                    <img src={service.img.src} alt="services-img" />
                    <h5><b>{service.title}</b></h5>
                    <p>{service.description}</p>
                    <a href={service.link}>Read More</a>
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
