// app/services/[slug]/page.js

import Header from "@/app/components/Header";
import { servicesData } from "../ServiceData";
export function generateStaticParams() {
    // Generate a list of all slugs that you want to pre-render
    return servicesData.map(service => ({
      slug: service.slug,
    }));
  }
  
// The `slug` parameter is passed in the `params` object
export default async function ServicePage({ params }) {
  const { slug } = await params;

  // Find the service that matches the slug
  const service = servicesData.find((service) => service.slug === slug);

  // If no matching service is found, show a fallback message
  if (!service) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-xl text-gray-500">Service not found.</p>
      </div>
    );
  }

  return (
    <div className="service-page bg-gray-100">
      {/* Banner Section */}
      <div className="relative w-full h-96 md:h-[500px]">
        <img
          src={service.img}
          alt={service.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl text-white font-bold text-center px-6">
            {service.title}
          </h1>
        </div>
      </div>
      <Header title="Services" />

      {/* Service Detail Section */}
      <div className="container mx-auto px-6 md:px-12 py-16 bg-white">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">{service.title}</h2>
        <p className="text-lg md:text-xl text-gray-700 mb-12 leading-relaxed">{service.description}</p>

        <div className="space-y-12">
          {/* Our Offerings */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Our Offerings</h3>
            <div className="space-y-6">
              {service.offerings?.map((offering, index) => (
                <div key={index} className="service-offering bg-gray-50 p-6 rounded-lg shadow-md">
                  <h4 className="text-xl font-semibold text-gray-800">{offering.title}</h4>
                  <p className="text-gray-600">{offering.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* How We Work */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">How We Work</h3>
            <ul className="list-disc pl-6 space-y-4 text-gray-700">
              {service.process?.map((step, index) => (
                <li key={index} className="text-lg">{step}</li>
              ))}
            </ul>
          </div>

          {/* Detailed Description */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Detailed Description</h3>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">{service.detailedDescription}</p>
          </div>
        </div>
      </div>

      {/* Contact Section (Optional, add if needed) */}
      <div className="py-16 bg-gray-200 text-center">
        <h3 className="text-2xl font-semibold text-gray-800 mb-6">Ready to get started?</h3>
        <p className="text-lg text-gray-600 mb-8">Contact us today to discuss how we can help you achieve your goals.</p>
        <button className="bg-primary text-white px-6 py-3 rounded-lg shadow-md hover:bg-primary-dark transition duration-300">
          Get in Touch
        </button>
      </div>
    </div>
  );
}
