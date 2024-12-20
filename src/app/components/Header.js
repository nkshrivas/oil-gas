'use client';
import React, { useEffect, useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import ContactModal from './ContactModal';

const Header = ({ title }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isModalOpen, setIsModelOpen] = useState(false)

  // Detect if the page is scrolled
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsScrolled(true); // When scrolled more than 50px, apply the scaling effect
      } else {
        setIsScrolled(false); // Reset when scrolled back to the top
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const toggleModal = () => {
    setIsModelOpen(!isModalOpen)
  }
  return (
    <>
      <header
        className={` moving-gradient  main-header flex items-center justify-between px-4 lg:px-6 xl:px-8 sticky top-14 z-30 
          ${isScrolled ? 'h-15' : 'h-20'} border-b-2 border-gray-300 transition-all duration-300 ease-in-out`}
      >
        {/* Hamburger Menu Icon */}
        <div className="lg:hidden flex justify-between w-full">
          <button onClick={toggleMenu} className="focus:outline-none">
            {isMenuOpen ? <HiX className="h-6 w-6" /> : <HiMenu className="h-6 w-6" />}
          </button>
          <button
          onClick={toggleModal}
          className={`
            moving-gradient 
            ${isScrolled ? 'text-sm py-2 px-4' : 'text-lg py-3 px-6'} 
            border rounded-3xl 
            transition-all duration-300 ease-in-out 
            hover:bg-orange-600 hover:text-white
            focus:outline-none
          `}
        >
          Request Callback
        </button>
        </div>

        {/* Navigation Menu */}
        <nav
          className={`lg:flex lg:justify-center lg:items-center shadow-md flex-1 ${isMenuOpen ? 'block' : 'hidden'} 
          absolute lg:static bg-white w-full lg:bg-transparent top-12 left-0 z-50 border-t-2 lg:border-t-0 border-gray-300`}
        >
          <ul className={`flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-4 lg:mr-8 p-4 lg:p-0 transition-all duration-300 ease-in-out ${isScrolled ? 'text-sm' : 'text-base'}`}>
            {[
              { title: 'Home', path: '/' },
              { title: 'About', path: '/about-us' },
              { title: 'Services', path: '/services' },
              { title: 'Downloads', path: '/downloads' },
              { title: 'Careers', path: '/career' },
              { title: 'Gallery', path: '/gallery' },
              { title: 'Our Projects', path: '/our-projects' },
              { title: 'Advisory', path: '/advisory' },
            ].map((item, index) => (
              <li
                key={index}
                className={`px-3 py-2 menu lg:border-l ${item.title === title ? 'active' : ''} 
                 ` }
              >
                <a href={item.path}>
                  <span className={`transition-all duration-300 ${isScrolled ? 'text-sm' : 'text-base'}`}>
                    {item.title}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <ContactModal isOpen={isModalOpen} onClose={toggleModal} />
    </>
  );
};

export default Header;
