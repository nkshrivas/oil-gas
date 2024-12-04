import React from 'react';
import footerBg from '@/app/images/Group 339.png'; // Import your footer background image
import logoImg from '@/app/images/banner-slide.png'; // Import the logo image
import postImg from '@/app/images/IMG_1.JPG'; // Import the post image
import { FaArrowRight, FaEnvelope, FaMapMarker, FaPhoneAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <img src={footerBg.src} className="footer-bg" alt="footer-bg" />
        <div className="container mx-auto px-4 sm:px-15">
          <div className="flex flex-wrap -mx-2">
            {/* <div className="w-full sm:w-1/2 lg:w-1/4 px-2">
              <div className="footer-col">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.190208887449!2d81.00377637456535!3d26.865697262111055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399be331f5fb853b%3A0x8b178fe6d88456ca!2sINDRAPRASTH%20OIL!5e0!3m2!1sen!2sin!4v1732974752290!5m2!1sen!2sin"
                  width="100%"
                  height="260"
                  style={{ border: 0 }}
                  loading="lazy"
                ></iframe>
              </div>
            </div> */}
            <div className="w-full sm:w-1/2 lg:w-1/3 px-2">
              <div className="footer-col">
                <h5><b>Company</b></h5>
                <ul>
                  <li><a href="/"><b>Home</b></a></li>
                  <li><a href="/about-us"><b>About</b></a></li>
                  <li><a href="/services"><b>Services</b></a></li>
                  <li><a href="/gallery"><b>Gallery</b></a></li>
                </ul>
              </div>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/3 px-2">
              <div className="footer-col">
                <h5><b>Latest Posts</b></h5>
                <div className="latest-post">
                  <div className="flex">
                    <img src={postImg.src} alt="" width="70" />
                    <div className="ms-3">
                      <p className="mb-0">We are best for any industrial & business solution.</p>
                      <div className="date">
                        <h6 className="color-primary">January 23, 2019</h6>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="latest-post">
                  <div className="flex">
                    <img src={postImg.src} alt="" width="70" />
                    <div className="ms-3">
                      <p className="mb-0">We are best for any industrial & business solution.</p>
                      <div className="date">
                        <h6 className="color-primary">January 23, 2019</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/3 px-2">
              <div className="footer-contact">
                <h5><b>Contacts</b></h5>
                <ul>
                  <li className='flex'><FaPhoneAlt /><a href="tel:+91 73101 04441"><b>+91 73101 04441</b></a></li>
                  <li className='flex'><FaEnvelope /><a href="mailto:Connect@indraprasthoil.com"><b>Connect@indraprasthoil.com</b></a></li>
                  <li className='flex'><FaMapMarker /><a href="https://maps.app.goo.gl/S1nUTaAvFDNtHzBv6"><b>DLF MYPAD, Vijaipur Colony, Vibhuti Khand, Gomti Nagar, Lucknow, Uttar Pradesh 226010</b></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
