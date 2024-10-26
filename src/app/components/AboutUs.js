import Image from 'next/image';
import img from '@/app/images/about.png';
import {MdOutlineWaterDrop} from 'react-icons/md';
const AboutSection = () => {
    return (
        <section className="mt-12">
            <div className="container mx-auto px-15">
                <div className="flex flex-col md:flex-row">
                    {/* Image Section */}
                    <div className="md:w-2/5">
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
                    <div className="md:w-3/5 md:pl-8 mt-6 md:mt-0">
                        <div className="about-right">
                        <div className="title flex gap-2 items-center">
                            <MdOutlineWaterDrop/> <h6>WHY CHOOSE US</h6>
                        </div>
                            <h2 className="text-2xl font-bold mb-3">We are a Certified and Insured Company.</h2>
                            <p className="text-gray-600 mb-6">
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
                            <div className="grid grid-cols-3 gap-6 mt-8 about-box">
                                <div className="text-center">
                                    <h2 className="text-4xl font-bold text-white">567+</h2>
                                    <p className="text-gray-600">Projects Launched</p>
                                </div>
                                <div className="text-center">
                                    <h2 className="text-4xl font-bold text-white">116+</h2>
                                    <p className="text-gray-600">Branch Offices</p>
                                </div>
                                <div className="text-center">
                                    <h2 className="text-4xl font-bold text-white">482+</h2>
                                    <p className="text-gray-600">Happy Clients</p>
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
