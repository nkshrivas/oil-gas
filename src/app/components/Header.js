import React from 'react';
import { FaTwitter, FaFacebookF, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="bg-white shadow-lg h-24 hidden md:flex">
      <a href="/" className="border flex-shrink-0 flex items-center justify-center px-4 lg:px-6 xl:px-8">
        <img src="https://i.ibb.co/W6ZXdqN/2021-10-26-16h20-21.png" alt="Logo" />
      </a>
      <nav className="header-links contents font-semibold text-base lg:text-lg">
        <ul className="flex items-center ml-4 xl:ml-8 mr-auto">
          {['Home', 'Services', 'About', 'Projects', 'Skills', 'Contacts'].map((item, index) => (
            <li key={index} className={`p-3 xl:p-6 ${item === 'Home' ? 'active' : ''}`}>
              <a href="#">
                <span>{item}</span>
              </a>
            </li>
          ))}
          <li className="p-3 xl:p-6">
            <a href="#" className="flex items-center">
              <span>Pages</span>
              <svg className="h-3 opacity-30 ml-2" aria-hidden="true" focusable="false" data-prefix="far" data-icon="chevron-down" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path fill="currentColor" d="M441.9 167.3l-19.8-19.8c-4.7-4.7-12.3-4.7-17 0L224 328.2 42.9 147.5c-4.7-4.7-12.3-4.7-17 0L6.1 167.3c-4.7 4.7-4.7 12.3 0 17l209.4 209.4c4.7 4.7 12.3 4.7 17 0l209.4-209.4c4.7-4.7 4.7-12.3 0-17z"></path>
              </svg>
            </a>
          </li>
        </ul>
      </nav>
      <nav className="hidden xl:flex">
        <ul className="flex items-center mr-4 lg:mr-6 xl:mr-8">
          <li className="p-1">
            <a href="#" className="inline-block rounded-full border p-2 hover:shadow-lg hover:border-opacity-0 duration-200 hover:-translate-y-0.5">
              <FaTwitter className="h-4" />
            </a>
          </li>
          <li className="p-1">
            <a href="#" className="inline-block rounded-full border p-2 hover:shadow-lg hover:border-opacity-0 duration-200 hover:-translate-y-0.5">
              <FaFacebookF className="h-4" />
            </a>
          </li>
          <li className="p-1">
            <a href="#" className="inline-block rounded-full border p-2 hover:shadow-lg hover:border-opacity-0 duration-200 hover:-translate-y-0.5">
              <FaLinkedinIn className="h-4" />
            </a>
          </li>
          <li className="p-1">
            <a href="#" className="inline-block rounded-full border p-2 hover:shadow-lg hover:border-opacity-0 duration-200 hover:-translate-y-0.5">
              <FaInstagram className="h-4" />
            </a>
          </li>
        </ul>
      </nav>
      <div className="border flex items-center px-4 lg:px-6 xl:px-8">
        <button className="bg-black hover:bg-gray-700 text-white font-bold px-4 xl:px-6 py-2 xl:py-3 rounded">Contact Me</button>
      </div>
    </header>
  );
};

const getIconPath = (icon) => {
  switch (icon) {
    case 'twitter':
      return 'M459.37 151.716c.325 4.548...'; // Add the full path here
    case 'facebook-f':
      return 'M279.14 288l14.22-92.66h...'; // Add the full path here
    case 'linkedin-in':
      return 'M100.28 448H7.4V148.9h...'; // Add the full path here
    case 'instagram':
      return 'M224.1 141c-63.6 0-114.9...'; // Add the full path here
    default:
      return '';
  }
};

export default Header;
