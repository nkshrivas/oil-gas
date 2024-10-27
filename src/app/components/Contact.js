'use client'; 
import React, { useEffect, useState } from 'react';

const ContactSection = () => {
  const [particles, setParticles] = useState([]);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

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

  return (
    <section className="relative overflow-hidden">
      <div className="flex flex-col md:flex-row bg-gradient-to-r from-green-500 to-teal-500 py-16">
        {/* Content Section */}
        <div className="flex-1 text-white p-8 md:pr-16">
          <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
          <p className="mb-6">
            We would love to hear from you! Whether you have a question or need assistance, our team is here to help. 
          </p>
          <p className="mb-4">Feel free to reach out to us via the contact form, and we will get back to you shortly.</p>
          <p>Thank you for considering us!</p>
        </div>

        {/* Contact Form Section */}
        <div className="flex-1 bg-white rounded-lg p-8 shadow-lg z-10 relative">
          <h2 className="text-2xl font-bold mb-6">Contact Us</h2>
          <form onSubmit={(e) => { e.preventDefault(); console.log('Form submitted'); }}>
            <div className="mb-4">
              <label className="block text-sm font-semibold mb-2" htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                required
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-semibold mb-2" htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                required
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-semibold mb-2" htmlFor="message">Message</label>
              <textarea
                id="message"
                required
                rows="4"
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-green-500 text-white font-semibold py-3 rounded hover:bg-green-600 transition duration-200"
            >
              Send Message
            </button>
          </form>
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