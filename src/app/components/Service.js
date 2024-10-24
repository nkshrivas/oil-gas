import React from 'react';
import img1 from '@/app/images/IMG_3.JPG';
import img2 from '@/app/images/compliant.png'; // Add your other images similarly
import img3 from '@/app/images/chemical.png';
import img4 from '@/app/images/real-estate-agent.png';

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
      <div className="container">
        <div className="services mt-12">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="left-service-text">
                <h6 className="title mb-2"><i className="ri-drop-line"></i> OUR SERVICES</h6>
                <h2 className="heading">
                  We craft beautifully useful marketing and digital products that grow <b>- Our Lebuild.</b>
                </h2>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="right-service-text md-mt-2">
                <h5 className="mb-3">There are many variations of passages of Lorem Ipsum available, have suffered in form, by injected humour.</h5>
                <p>If you are going to use a passage of Lorem Ipsum, you need to be sure anything embarrassing hidden in the middle of text.</p>
              </div>
            </div>
          </div>

          <div className="mt-5">
            <div className="row">
              {servicesData.map((service, index) => (
                <div key={index} className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                  <div className="services-card p-4 mb-2">
                    <img src={service.img.src} alt="services-img" />
                    <h5 className="mt-3"><b>{service.title}</b></h5>
                    <p className="mt-2">{service.description}</p>
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
