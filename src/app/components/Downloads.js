'use client';
import React, { useState, useEffect } from "react";
import AOS from 'aos';

const DownloadTab = () => {
  const [open, setOpen] = useState("Bio Coal");

  useEffect(() => {
    AOS.init(); // Initialize AOS animations
  }, []);

  const handleTabOpen = (tabCategory) => {
    setOpen(tabCategory);
    setTimeout(() => AOS.refresh(), 100); // Give time for DOM update'
  };

  return (
    <>
      <section className="py-10 bg-gray-100 dark:bg-dark lg:py-[70px]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-6 text-black dark:text-black heading">
            Download Our Booklets
          </h2>
          <p className="text-center mb-10 text-gray-600">
            Explore our informative booklets covering various topics to help you enhance your knowledge.
          </p>
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="flex flex-col sm:flex-row sm:space-x-4 rounded-t border border-[#E4E4E4] bg-white dark:border-dark-3 dark:bg-dark-2 shadow-lg">
                {["Bio Coal", "Bio CNG", "Bio Diesel", "Green Energy Solutions"].map((type) => (
                  <a
                    key={type}
                    onClick={() => handleTabOpen(type)}
                    className={`cursor-pointer flex-1 rounded-t px-6 py-4 text-sm font-medium md:text-base transition-all duration-300 ease-in-out transform text-center ${open === type
                      ? "moving-gradient text-white shadow-lg scale-10"
                      : "text-body-color hover:text-yellow-600"
                      }`}
                  >
                    {type}
                  </a>
                ))}
              </div>

              {/* Bio Coal */}
              <DownloadTabContent
                details="Learn about the benefits and processes involved in using Bio Coal as a sustainable energy source. This booklet covers its environmental impact, production methods, and applications in industries."
                tabCategory="Bio Coal"
                open={open}
                link="/downloads/biocoal.pdf"
              />

              {/* Bio CNG */}
              <DownloadTabContent
                details="Discover how Bio CNG can revolutionize clean energy solutions. This booklet highlights its production process, advantages over traditional fuels, and potential to reduce greenhouse gas emissions."
                tabCategory="Bio CNG"
                open={open}
                link="/downloads/biocng.pdf"
              />

              {/* Bio Diesel */}
              <DownloadTabContent
                details="Explore the role of Bio Diesel in promoting renewable energy. This booklet discusses its benefits for transportation, environmental impact, and future potential in reducing dependency on fossil fuels."
                tabCategory="Bio Diesel"
                open={open}
                link="/downloads/biodiesel.pdf"
              />

              {/* Green Energy Solutions */}
              <DownloadTabContent
                details="Gain insights into various green energy solutions and technologies. This booklet covers renewable energy sources like solar, wind, and biomass, along with innovative practices for sustainable development."
                tabCategory="Green Energy Solutions"
                open={open}
                link="/downloads/green-energy-presentation.pdf"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

// Reusable component for tab content
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
