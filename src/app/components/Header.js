'use client';
import React, { useState } from 'react';
import { FaTwitter, FaFacebookF, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { HiMenu, HiX } from 'react-icons/hi';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Contact Details Section */}
      <div className="bg-gray-200 flex justify-around text-sm p-2 text-center">
        <p>Contact us: (123) 456-7890 | email@example.com</p>
        <p>Address: 123 Main St, City, Country</p>
      </div>

      <header className="bg-white main-header h-20 flex items-center justify-between px-4 lg:px-6 xl:px-8 sticky top-0 z-50">
        <a href="/" className="flex-shrink-0 flex items-center">
          <h2 className="text-2xl font-bold text-primary">Indraprastha</h2>
        </a>

        {/* Hamburger Menu Icon */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            {isMenuOpen ? <HiX className="h-6 w-6" /> : <HiMenu className="h-6 w-6" />}
          </button>
        </div>

        {/* Navigation Menu */}
        <nav className={`lg:flex ${isMenuOpen ? 'block' : 'hidden'} absolute lg:static bg-white w-full lg:bg-transparent lg:w-auto top-20 left-0 z-50`}>
          <ul className="flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-4 lg:mr-8 p-4 lg:p-0">
            {[
              { title: 'Home', path: '/' },
              { title: 'Services', path: '/services' },
              { title: 'About', path: '/about-us' },
              { title: 'Projects', path: '/projects' },
              { title: 'Career', path: '/career' },
              { title: 'Contacts', path: '/contacts' }
            ].map((item, index) => (
              <li key={index} className={`p-3 xl:p-6 ${item.title === 'Home' ? 'active' : ''}`}>
                <a href={item.path}>
                  <span>{item.title}</span>
                </a>
              </li>
            ))}

            {/* Contact Me Button for Desktop */}
            <li className="p-3 xl:p-6 hidden lg:block">
              <button className="inline-block rounded-md bg-gradient-to-r from-green-500 to-teal-500 text-white px-6 py-2 text-center shadow-md transition duration-300 hover:shadow-lg hover:opacity-90">Contact Me</button>
            </li>
          </ul>
        </nav>

        {/* Social Icons */}
        <nav className="hidden xl:flex">
          <ul className="flex items-center space-x-4">
            <li>
              <a href="#" className="inline-block rounded-full border p-2 hover:shadow-lg hover:border-opacity-0 duration-200 hover:-translate-y-0.5">
                <FaTwitter className="h-4" />
              </a>
            </li>
            <li>
              <a href="#" className="inline-block rounded-full border p-2 hover:shadow-lg hover:border-opacity-0 duration-200 hover:-translate-y-0.5">
                <FaFacebookF className="h-4" />
              </a>
            </li>
            <li>
              <a href="#" className="inline-block rounded-full border p-2 hover:shadow-lg hover:border-opacity-0 duration-200 hover:-translate-y-0.5">
                <FaLinkedinIn className="h-4" />
              </a>
            </li>
            <li>
              <a href="#" className="inline-block rounded-full border p-2 hover:shadow-lg hover:border-opacity-0 duration-200 hover:-translate-y-0.5">
                <FaInstagram className="h-4" />
              </a>
            </li>
          </ul>
        </nav>
      </header>

      {/* Scrolling Highlight Section */}
      <div className="bg-gradient-to-r from-green-500 to-teal-500 p-4 overflow-hidden">
        <div className="whitespace-nowrap animate-marquee">
          <span className="mx-4">🌟 Special Offer: Get 20% off on all services! 🌟</span>
          <span className="mx-4">🚀 New Project Launch: Check out our latest work! 🚀</span>
          <span className="mx-4">✨ Join our newsletter for updates! ✨</span>
        </div>
      </div>

      <style jsx>{`
        .animate-marquee {
          display: inline-block;
          animation: marquee 10s linear infinite;
        }

        @keyframes marquee {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
      `}</style>
    </>
  );
};

export default Header;
