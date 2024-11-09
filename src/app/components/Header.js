'use client';
import React, { useEffect, useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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

  return (
    <>
      <header
        className={`bg-white main-header flex items-center justify-between px-4 lg:px-6 xl:px-8 sticky top-14 z-50 
          ${isScrolled ? 'h-14' : 'h-20'} border-b-2 border-gray-300 transition-all duration-300 ease-in-out`}
      >
        {/* Hamburger Menu Icon */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            {isMenuOpen ? <HiX className="h-6 w-6" /> : <HiMenu className="h-6 w-6" />}
          </button>
        </div>

        {/* Navigation Menu */}
        <nav
          className={`lg:flex lg:justify-center lg:items-center flex-1 ${isMenuOpen ? 'block' : 'hidden'} 
          absolute lg:static bg-white w-full lg:bg-transparent top-20 left-0 z-50 border-t-2 lg:border-t-0 border-gray-300`}
        >
          <ul className={`flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-4 lg:mr-8 p-4 lg:p-0 transition-all duration-300 ease-in-out ${isScrolled ? 'text-sm' : 'text-base'}`}>
            {[
              { title: 'Home', path: '/' },
              { title: 'About', path: '/about-us' },
              { title: 'Services', path: '/services' },
              { title: 'Downloads', path: '/downloads' },
              { title: 'Career', path: '/career' },
              { title: 'Gallery', path: '/gallery' },
              { title: 'Our project', path: '/our-project' },
              { title: 'Advisory', path: '/advisory' },
            ].map((item, index) => (
              <li
                key={index}
                className={`p-3 xl:p-6 ${item.title === 'Home' ? 'active' : ''} 
                 border-gray-300` }
              >
                <a href={item.path}>
                  <span className={`transition-all duration-300 ${isScrolled ? 'text-xs' : 'text-base'}`}>
                    {item.title}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
