'use client';
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactModal = ({ isOpen, onClose }) => {
  const form = useRef(); // Reference to access form data
  const [sending, setSending] = useState(false); // New state for sending status
  const [submitted, setSubmitted] = useState(false); // New state for success message

  const sendEmail = (e) => {
    e.preventDefault();
    setSending(true); // Set sending to true when submission starts

    emailjs
      .sendForm(
        'service_44n98hb',     // Replace with your EmailJS Service ID
        'template_u8pwzzg',    // Replace with your EmailJS Template ID
        form.current,
        'WhyK78Kct3j1XJp2O'    // Replace with your EmailJS Public Key
      )
      .then(
        () => {
          setSending(false);  // Stop sending indicator
          setSubmitted(true); // Show thank you message
        },
        (error) => {
          console.error('Failed to send email:', error.text);
          alert('Failed to send email. Please try again later.');
          setSending(false);  // Stop sending indicator even on error
        }
      );
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-lg w-96 relative">
            {submitted ?'':<h2 className="text-2xl font-bold mb-4">Contact Us</h2>}
            
            {submitted ? (  // Show thank you message after submission
              <div className="text-center">
                <p className="text-lg font-semibold mb-4">Thank you for your request!</p>
                <button
                  onClick={onClose}
                  className="text-blue-500 underline"
                >
                  Close
                </button>
              </div>
            ) : (
              <form ref={form} onSubmit={sendEmail} className="space-y-4">
                <div>
                  <label htmlFor="user_name" className="block text-sm font-semibold">
                    Name
                  </label>
                  <input
                    id="user_name"
                    type="text"
                    name="user_name"
                    required
                    className="w-full p-2 border border-gray-300 rounded-md"
                  />
                </div>
                <div>
                  <label htmlFor="user_email" className="block text-sm font-semibold">
                    Email
                  </label>
                  <input
                    id="user_email"
                    type="email"
                    name="user_email"
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
                    type="text"
                    name="user_mobile"
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
                    name="message"
                    required
                    rows="4"
                    className="w-full p-2 border border-gray-300 rounded-md"
                  ></textarea>
                </div>
                <div className="flex justify-end">
                  <button
                    type="submit"
                    className={`moving-gradient text-white px-6 py-2 rounded-md ${
                      sending ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                    disabled={sending}
                  >
                    {sending ? 'Sending...' : 'Submit'}
                  </button>
                </div>
              </form>
            )}

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
