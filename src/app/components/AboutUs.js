'use client'
import React, { useEffect, useState } from 'react';
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
        // <section className="mt-12">
        //     <div className="container mx-auto px-4 sm:px-6 lg:px-15">
        //         <div className="flex flex-col md:flex-row">
        //             {/* Image Section */}
        //             <div className="md:w-2/5 mb-6 md:mb-0" data-aos="fade-right">
        //                 <div className="about-img">
        //                     <Image 
        //                         src={img} 
        //                         alt="about-img" 
        //                         width={500} 
        //                         height={500} 
        //                         layout="responsive"
        //                         className="w-full"
        //                     />
        //                 </div>
        //             </div>

        //             {/* Content Section */}
        //             <div className="md:w-3/5 md:pl-8" data-aos="fade-left">
        //                 <div className="about-right">
        //                     <div className="title flex gap-2 items-center">
        //                         <MdOutlineWaterDrop /> <h6>WHY CHOOSE US</h6>
        //                     </div>
        //                     <h2 className="text-2xl font-bold mb-3">We are a Certified and Insured Company.</h2>
        //                     <p className="mb-6">
        //                         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.
        //                     </p>

        //                     {/* Features */}
        //                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        //                         <div className="flex items-center gap-2">
        //                             <i className="ri-checkbox-circle-line text-green-600"></i>
        //                             <p>Great Technology</p>
        //                         </div>
        //                         <div className="flex items-center gap-2">
        //                             <i className="ri-checkbox-circle-line text-green-600"></i>
        //                             <p>Best Branding</p>
        //                         </div>
        //                         <div className="flex items-center gap-2">
        //                             <i className="ri-checkbox-circle-line text-green-600"></i>
        //                             <p>Delivery On Time</p>
        //                         </div>
        //                         <div className="flex items-center gap-2">
        //                             <i className="ri-checkbox-circle-line text-green-600"></i>
        //                             <p>We are Expert</p>
        //                         </div>
        //                     </div>

        //                     {/* Statistics Section */}
        //                     <div className="grid grid-cols-3 gap-6 mt-8 about-box">
        //                         <div className="text-center">
        //                             <h1 className="text-4xl font-bold text-white">567+</h1>
        //                             <h4 className="color-secondary font-bold">Projects Launched</h4>
        //                         </div>
        //                         <div className="text-center">
        //                             <h1 className="text-4xl font-bold text-white">116+</h1>
        //                             <h4 className="color-secondary font-bold">Branch Offices</h4>
        //                         </div>
        //                         <div className="text-center">
        //                             <h1 className="text-4xl font-bold text-white">482+</h1>
        //                             <h4 className="color-secondary font-bold">Happy Clients</h4>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </section>
        <div >
            <section className='container mx-auto px-4 sm:px-6 lg:px-8 py-10'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                    <div className='lg:col-span-1'>
                        <h1 className='heading'>About us</h1>
                        <button className='button mt-5 lg:mt-10'>More Information</button>
                    </div>
                    <div className='lg:col-span-2'>
                        <h6 className='color-secondary font-bold text-sm'>
                            We help interesting companies create and improve industry products and services through long lasting and mutually rewarding relationships.
                        </h6>
                        <p className='mt-3 color-grey'>
                            We work with our partners to streamline project plans that don’t just deliver on product perfection, but also delivers on time – crucial to success in a highly competitive market where every day counts.
                        </p>
                    </div>
                    <div className='lg:col-span-1'>
                        <h5 className='font-bold text-lg color-secondary'>Sheldon Moreno</h5>
                        <h6 className='font-bold text-xs mt-3'>HEAD OF OPERATIONS</h6>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutSection;
