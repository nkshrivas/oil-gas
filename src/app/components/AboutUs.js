'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import img from '@/app/images/about.png';
import { MdOutlineWaterDrop } from 'react-icons/md';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AboutSection = () => {
    const [projects, setProjects] = useState(0);
    const [branches, setBranches] = useState(0);
    const [clients, setClients] = useState(0);

    useEffect(() => {
        AOS.init({ duration: 1000 });

        const animateCount = (setter, endValue) => {
            let startValue = 0;
            const duration = 2000; // total duration in ms
            const incrementTime = Math.abs(Math.floor(duration / endValue));
            const timer = setInterval(() => {
                if (startValue < endValue) {
                    startValue += Math.ceil(endValue / (duration / incrementTime)); // Increment by a fraction
                    setter(startValue > endValue ? endValue : startValue); // Ensure it doesn't exceed endValue
                } else {
                    clearInterval(timer);
                }
            }, incrementTime);
            
            return () => clearInterval(timer); // Cleanup interval on unmount
        };

        animateCount(setProjects, 567);
        animateCount(setBranches, 116);
        animateCount(setClients, 482);
    }, []);

    return (
        <section className="mt-12">
            <div className="container mx-auto px-4 sm:px-6 lg:px-15">
                <div className="flex flex-col md:flex-row">
                    {/* Image Section */}
                    <div className="md:w-2/5 mb-6 md:mb-0" data-aos="fade-right">
                        <div className="about-img">
                            <Image 
                                src={img} 
                                alt="about-img" 
                                width={500} 
                                height={500} 
                                layout="responsive"
                                className="w-full"
                            />
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="md:w-3/5 md:pl-8" data-aos="fade-left">
                        <div className="about-right">
                            <div className="title flex gap-2 items-center">
                                <MdOutlineWaterDrop /> <h6>WHY CHOOSE US</h6>
                            </div>
                            <h2 className="text-2xl font-bold mb-3">We are a Certified and Insured Company.</h2>
                            <p className="mb-6">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.
                            </p>

                            {/* Features */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="flex items-center gap-2">
                                    <i className="ri-checkbox-circle-line text-green-600"></i>
                                    <p>Great Technology</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <i className="ri-checkbox-circle-line text-green-600"></i>
                                    <p>Best Branding</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <i className="ri-checkbox-circle-line text-green-600"></i>
                                    <p>Delivery On Time</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <i className="ri-checkbox-circle-line text-green-600"></i>
                                    <p>We are Expert</p>
                                </div>
                            </div>

                            {/* Statistics Section */}
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8 about-box">
                                <div className="text-center" data-aos="zoom-in">
                                    <h2 className="text-4xl font-bold text-white">{projects}+</h2>
                                    <h4 className="color-secondary font-bold">Projects Launched</h4>
                                </div>
                                <div className="text-center" data-aos="zoom-in" data-aos-delay="100">
                                    <h2 className="text-4xl font-bold text-white">{branches}+</h2>
                                    <h4 className="color-secondary font-bold">Branch Offices</h4>
                                </div>
                                <div className="text-center" data-aos="zoom-in" data-aos-delay="200">
                                    <h2 className="text-4xl font-bold text-white">{clients}+</h2>
                                    <h4 className="color-secondary font-bold">Happy Clients</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
