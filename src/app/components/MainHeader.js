'use client';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';

const MainHeader = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    // Detect if the page is scrolled
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true); // When scrolled more than 50px, apply the scaling effect
            } else {
                setIsScrolled(false); // Reset when scrolled back to the top
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <header
                className={`main-header flex items-center justify-between px-6 md:px-8 lg:px-8 xl:px-10 top-0 z-50 fixed w-full transition-all duration-300 ease-in-out ${isScrolled ? 'bg-white h-14' : 'h-20 bg-transparent'
                    }`}
            >
                {/* Logo Section */}
                <a href="/" className="flex-shrink-0 flex items-center">
                    <Image
                        alt="Indraprastha Logo"
                        src="/images/logo.png"
                        width={60}
                        height={60}
                    />
                    {/* <h2
                        className={`text-3xl font-semibold ${
                            isScrolled ? 'text-black text-xl' : 'text-white text-2xl'
                        }`}
                    >
                        Indraprastha
                    </h2> */}
                </a>

                {/* Contact Information */}
                <div
                    className={`flex md:flex-row flex-col md:items-center  md:space-x-6 ${isScrolled ? 'text-black text-xs' : 'text-white text-lg'
                        }`}
                >
                    {/* Phone Icon and Number */}
                    <div className="flex items-center space-x-3">
                        <FaPhoneAlt className="h-7 w-7 lg:h-8 lg:w-8 text-primary" />
                        <div>
                            <p className={`hidden md:block ${isScrolled ? 'text-sm' : 'text-white text-sm'} `}>Have a question? Call us now</p>
                            <p className={`${isScrolled ? 'text-sm' : 'text-white text-sm'} `}>(123) 456-7890</p>
                        </div>
                    </div>

                    {/* Address Icon and Address */}
                    <div className="flex items-center space-x-3">
                        <FaMapMarkerAlt className="h-7 w-7 lg:h-8 lg:w-8 text-primary" />
                        <div>
                            <p className={`hidden md:block ${isScrolled ? 'text-sm' : 'text-white text-sm'} `}>Visit our location</p>
                            <p className={`${isScrolled ? 'text-sm' : 'text-white text-sm'} `}>123 Main St, City, Country</p>
                        </div>
                    </div>
                </div>

                {/* Request Callback Button */}
                <div className="hidden lg:block">
                    <button className="button moving-gradient">
                        Request Callback
                    </button>
                </div>
            </header>
        </>
    );
};

export default MainHeader;
