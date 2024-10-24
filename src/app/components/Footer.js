import React from 'react';
import footerBg from '@/app/images/Group 339.png'; // Import your footer background image
import logoImg from '@/app/images/banner-slide.png'; // Import the logo image
import postImg from '@/app/images/IMG_1.JPG'; // Import the post image

const Footer = () => {
  return (
    <footer className="position-relative pt-5">
      <div className="footer">
        <img src={footerBg.src} className="footer-bg" alt="footer-bg" />
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
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
            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
              <div className="footer-col ms-5">
                <h5><b>Company</b></h5>
                <ul>
                  <li><a href="#"><i className="ri-arrow-right-s-line"></i>Home</a></li>
                  <li><a href="#"><i className="ri-arrow-right-s-line"></i>About</a></li>
                  <li><a href="#"><i className="ri-arrow-right-s-line"></i>Products</a></li>
                  <li><a href="#"><i className="ri-arrow-right-s-line"></i>Contact</a></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
              <div className="footer-col">
                <h5><b>Latest Posts</b></h5>
                <div className="latest-post">
                  <div className="d-flex">
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
                  <div className="d-flex">
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
            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
              <div className="footer-contact">
                <h5><b>Contacts</b></h5>
                <ul>
                  <li><a href="#"><i className="ri-phone-line"></i>8 (800) 695-2686</a></li>
                  <li><a href="#"><i className="ri-mail-line"></i>oktan@support.com</a></li>
                  <li><a href="#"><i className="ri-map-pin-line"></i>Baker st. 567, San Diego, CA</a></li>
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
