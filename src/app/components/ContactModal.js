'use client';
import React, { useState } from 'react';

const ContactModal = ({ isOpen, onClose }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., send an API request, etc.)
    alert('Form submitted');
    onClose(); // Close modal after submission
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 ">
          <div className="bg-white p-8 rounded-lg w-96">
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label htmlFor="mobile" className="block text-sm font-semibold">
                  Mobile No
                </label>
                <input
                  id="mobile"
                  type="number"
                  required
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-semibold">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows="4"
                  className="w-full p-2 border border-gray-300 rounded-md"
                ></textarea>
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="moving-gradient text-white px-6 py-2 rounded-md"
                >
                  Submit
                </button>
              </div>
            </form>
            <button
              onClick={onClose}
              className="absolute top-2 right-2 text-gray-500 text-xl font-bold"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ContactModal;
