'use client';
import React, { useState, useEffect } from 'react';
import { FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
import ContactModal from './ContactModal';

const MainHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <header className={`main-header fixed w-full top-0 z-30 flex items-center justify-between px-4 md:px-8 transition-all duration-300 ease-in-out ${isScrolled ? 'bg-white h-14 shadow-md' : 'bg-transparent h-20'}`}>
        {/* Logo Section */}
        <a href="/" className="flex items-center">
          <img
            alt="Indraprastha Logo"
            src="/images/logo.png"
            width={50}
            height={50}
            className="h-12 w-12 md:h-14 md:w-14"
          />
        </a>

        {/* Contact Information */}
        <div className={`hidden md:flex flex-col md:flex-row md:space-x-6 ${isScrolled ? 'text-black' : 'text-white'}`}>
          <div className="flex items-center space-x-2 md:space-x-3">
            <FaPhoneAlt className="h-6 w-6 text-primary" />
            <div className="hidden sm:block">
              <p className="text-sm">Have a question? Call us now</p>
              <p className="text-sm font-bold">+91 73101 04441</p>
            </div>
          </div>

          <div className="flex items-center space-x-2 md:space-x-3">
            <FaMapMarkerAlt className="h-6 w-6 text-primary" />
            <div className="hidden sm:block">
              <p className="text-sm">DLF MYPAD, Vibhuti Khand, <br /> Gomti Nagar, Lucknow</p>
            </div>
          </div>
        </div>

        {/* Mobile Button */}
        <div className="flex items-center space-x-4">
          <button onClick={openModal} className="button moving-gradient hidden lg:block">
            Request Callback
          </button>
          {/* Hamburger Menu Icon (Optional) */}
        </div>
      </header>

      {/* Mobile Contact Info */}
      {/* <div className={`md:hidden flex flex-col items-center text-center mt-20 ${isScrolled ? 'text-black' : 'text-white'}`}>
        <p className="text-sm font-bold">+91 73101 04441</p>
        <p className="text-xs">DLF MYPAD, Vibhuti Khand, Gomti Nagar, Lucknow</p>
        <button onClick={openModal} className="button moving-gradient mt-2">
          Request Callback
        </button>
      </div> */}

      <ContactModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
};

export default MainHeader;
