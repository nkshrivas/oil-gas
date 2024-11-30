'use client';
import React, { useState, useEffect } from "react";
import AOS from 'aos';

const DownloadTab = () => {
  const [open, setOpen] = useState("Sustainable Practices");

  useEffect(() => {
    AOS.init(); // Initialize AOS animations
  }, []);

  const handleTabOpen = (tabCategory) => {
    setOpen(tabCategory);
    AOS.refresh(); // Refresh AOS to re-evaluate the elements and trigger animations
  };

  return (
    <>
      <section className="py-10 bg-gray-100 dark:bg-dark lg:py-[70px]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-6 text-black dark:text-black heading">
            Download Our Booklets
          </h2>
          <p className="text-center mb-10 text-gray-600 ">
            Explore our informative booklets covering various topics to help you enhance your knowledge and skills.
          </p>
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="w-full">
                <div className="flex flex-col sm:flex-row sm:space-x-4 rounded-t border border-[#E4E4E4] bg-white dark:border-dark-3 dark:bg-dark-2 shadow-lg">
                  {["Sustainable Practices", "Innovative Technologies", "Advanced Strategies for Growth", "Leadership and Management"].map((type) => (
                    <a
                      key={type}
                      onClick={() => handleTabOpen(type)}
                      className={`cursor-pointer flex-1 rounded-t px-6 py-4 text-sm font-medium md:text-base transition-all duration-300 ease-in-out transform text-center ${open === type
                        ? "moving-gradient text-white shadow-lg scale-10"
                        : "text-body-color  hover: hover:text-yellow-600"
                        }`}
                    >
                      {type}
                    </a>
                  ))}
                </div>

                <DownloadTabContent
                  details="This booklet provides a comprehensive overview of sustainable practices that can be implemented in daily operations. It includes tips on reducing waste, energy efficiency measures, and sustainable sourcing strategies."
                  tabCategory="Sustainable Practices"
                  open={open}
                  link="/downloads/booklet1.pdf"
                />
                <DownloadTabContent
                  details="Explore the latest innovations in technology that are shaping the future of various industries. This booklet covers emerging trends such as artificial intelligence, renewable energy solutions, and digital transformation strategies."
                  tabCategory="Innovative Technologies"
                  open={open}
                  link="/downloads/booklet2.pdf"
                />
                <DownloadTabContent
                  details="Dive deep into advanced strategies for business growth in today's competitive landscape. This booklet discusses market analysis techniques, customer engagement tactics, and effective marketing strategies."
                  tabCategory="Advanced Strategies for Growth"
                  open={open}
                  link="/downloads/booklet3.pdf"
                />
                <DownloadTabContent
                  details="This booklet focuses on the essential skills needed for effective leadership and management. It covers topics such as team dynamics, conflict resolution, and decision-making processes."
                  tabCategory="Leadership and Management"
                  open={open}
                  link="/downloads/booklet4.pdf"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

const DownloadTabContent = ({ open, tabCategory, details, link }) => {
  return (
    <div>
      <div
        className={`shadow-md p-6 text-base bg-white rounded-b leading-relaxed text-body-color dark:text-dark-6 transition-all duration-500 ${open === tabCategory ? "block" : "hidden"
          }`}
        data-aos="fade-up" // AOS animation for the content
      >
        <p className="mb-4">{details}</p>
        <div className="flex justify-center">
          <a
            href={link}
            className="mt-4 inline-block button bg-gradient-to-r from-green-500 to-teal-500 text-white px-6 py-2 text-center shadow-md transition duration-300 hover:shadow-lg hover:opacity-90"
            download
          >
            Download Booklet
          </a>
        </div>
      </div>
    </div>
  );
};

export default DownloadTab;
