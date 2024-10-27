import React from 'react';
import footerBg from '@/app/images/Group 339.png'; // Import your footer background image
import logoImg from '@/app/images/banner-slide.png'; // Import the logo image
import postImg from '@/app/images/IMG_1.JPG'; // Import the post image
import { FaArrowRight, FaEnvelope, FaMapMarker, FaPhoneAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="mt-12 relative">
      <div className="footer">
        <img src={footerBg.src} className="footer-bg" alt="footer-bg" />
        <div className="container mx-auto px-4 sm:px-15">
          <div className="flex flex-wrap -mx-2">
            <div className="w-full sm:w-1/2 lg:w-1/4 px-2">
              <div className="footer-col">
                <div className="logo mb-3">
                  <img src={logoImg.src} alt="footer-img" width="100" />
                </div>
                <p>
                  There are many variations of passages of Lorem Ipsum available, have suffered in form, by
                  injected humour. If you are going to use a passage of Lorem Ipsum, you need to be sure anything
                  embarrassing hidden in the middle of text.
                </p>
              </div>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/4 px-2">
              <div className="footer-col">
                <h5><b>Company</b></h5>
                <ul>
                  <li><a href="#"><b>Home</b></a></li>
                  <li><a href="#"><b>About</b></a></li>
                  <li><a href="#"><b>Products</b></a></li>
                  <li><a href="#"><b>Contact</b></a></li>
                </ul>
              </div>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/4 px-2">
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
            <div className="w-full sm:w-1/2 lg:w-1/4 px-2">
              <div className="footer-contact">
                <h5><b>Contacts</b></h5>
                <ul>
                  <li className='flex'><FaPhoneAlt /><a href="#"><b>8 (800) 695-2686</b></a></li>
                  <li className='flex'><FaEnvelope /><a href="#"><b>oktan@support.com</b></a></li>
                  <li className='flex'><FaMapMarker /><a href="#"><b>Baker st. 567, San Diego, CA</b></a></li>
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