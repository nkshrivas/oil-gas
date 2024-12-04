'use client';
import React, { useEffect, useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactSection = () => {
  const [particles, setParticles] = useState([]);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const form = useRef(); // Form reference for emailjs

  const [sending, setSending] = useState(false); // State for the sending status
  const [success, setSuccess] = useState(false); // State for success message

  useEffect(() => {
    const createParticles = () => {
      const newParticles = [];
      for (let i = 0; i < 20; i++) {
        newParticles.push({
          id: i,
          top: Math.random() * 100 + '%',
          left: Math.random() * 100 + '%',
          size: Math.random() * 10 + 5 + 'px',
          animationDuration: Math.random() * 6 + 4 + 's',
        });
      }
      setParticles(newParticles);
    };

    createParticles();
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true); // Set sending to true when the form is submitted

    emailjs
      .sendForm(
        'service_44n98hb', // Your EmailJS Service ID
        'template_u8pwzzg', // Your EmailJS Template ID
        form.current, // Form reference
        'WhyK78Kct3j1XJp2O' // Your EmailJS Public Key
      )
      .then(
        (result) => {
          console.log('Email sent successfully:', result.text);
          setSending(false);
          setSuccess(true); // Set success message after form submission
        },
        (error) => {
          console.error('Error sending email:', error.text);
          setSending(false);
          alert('There was an error sending the message. Please try again.');
        }
      );
  };

  return (
    <section className="relative overflow-hidden">
      <div className="contact-section flex-col md:flex-row bg-gradient-to-r moving-gradient py-16 px-8 w-100">
        {/* Content Section */}
        <div className="flex-1 text-white p-8 md:pr-16 z-10">
          <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
          <p className="mb-6 mt-5">
            We would love to hear from you! Whether you have a question or need assistance, our team is here to help. Feel free to reach out to us via the contact form, and we will get back to you shortly.
          </p>
          <p>Thank you for considering us!</p>
        </div>

        {/* Contact Form Section */}
        <div className="flex-1 bg-white rounded-lg p-8 shadow-lg z-10 relative" style={{ width: "100%!important" }}>
          <h1 className="text-2xl font-bold text-center heading">Contact Us</h1>
          {success ? (
            <p className="text-center text-green-600 mb-4">Thank you! Your message has been sent successfully.</p>
          ) : (
            <form ref={form} onSubmit={handleSubmit} className="contact-form w-100">
              <div className="mb-4 mt-5">
                <label className="block text-sm font-semibold mb-2" htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="user_name"
                  placeholder="Enter Name..."
                  required
                  className="w-full border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-semibold mb-2" htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="user_email"
                  placeholder="Enter Email..."
                  required
                  className="w-full border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-semibold mb-2" htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Enter your message..."
                  required
                  rows="4"
                  className="w-full border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>

              <div className="flex justify-center">
                <button
                  type="submit"
                  className={`button ${sending ? 'opacity-50 cursor-not-allowed' : ''}`}
                  disabled={sending}
                >
                  {sending ? 'Sending...' : 'Send Message'}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>

      {/* Moving Oil Molecules */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map(particle => (
          <div
            key={particle.id}
            className="absolute rounded-full bg-gradient-to-r from-yellow-400 to-yellow-500 opacity-90"
            style={{
              top: particle.top,
              left: particle.left,
              width: particle.size,
              height: particle.size,
              transition: 'transform 0.2s ease',
              transform: `translate(-50%, -50%) translate(${(mousePos.x / window.innerWidth) * 10 - 5}px, ${(mousePos.y / window.innerHeight) * 10 - 5}px)`,
              animation: `float ${particle.animationDuration} ease-in-out infinite`,
            }}
          />
        ))}
      </div>

      {/* CSS for Particle Animation */}
      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
          100% {
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default ContactSection;
