'use client';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import AOS from 'aos';
import Header from '../components/Header';

const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const projectsData = [
    {
      img: '/images/project1.jpg',
      title: 'Sustainable Energy Project 1',
      description: 'A large-scale wind energy project contributing to renewable energy production.',
    },
    {
      img: '/images/project2.jpg',
      title: 'Biofuel Innovation',
      description: 'Developing advanced biofuel technology for eco-friendly energy production.',
    },
    {
      img: '/images/project3.jpg',
      title: 'Solar Energy Initiatives',
      description: 'Implementing solar energy systems across rural and urban areas.',
    },
    {
      img: '/images/project4.jpg',
      title: 'Green Diesel Production',
      description: 'Aiming for reduced carbon emissions through green diesel solutions.',
    },
    {
      img: '/images/project5.jpg',
      title: 'Government Partnerships',
      description: 'Collaborating with the Indian government to promote sustainable energy practices.',
    },
    {
      img: '/images/project6.jpg',
      title: 'Community Solar Projects',
      description: 'Providing solar solutions to empower rural communities with clean energy.',
    },
  ];

  return (
    <div className="projects-page">
      {/* Banner Section */}
      <div className="relative w-full h-96" data-aos="fade-up">
      <video
          src="/images/video2.mp4"
          alt="Project Banner"
          autoPlay
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <h1 className="text-4xl md:text-6xl text-white font-bold">
            Our Projects
          </h1>
        </div>
      </div>

      <Header title="Our Projects" />

      {/* Projects Section */}
      <section className="py-16 bg-white text-center">
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Innovative Projects for a Sustainable Future</h2>
          <p className="text-lg leading-relaxed mb-4">
            At Indraprasth Oil, we are committed to delivering eco-friendly energy solutions. Our projects aim to drive the transition to renewable energy and reduce the carbon footprint.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 sm:px-6 lg:px-8 mt-8">
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="group relative border shadow-lg p-6 rounded-lg overflow-hidden"
              data-aos="fade-up"
            >
              <img
                src={project.img}
                alt={project.title}
                width={400}
                height={250}
                className="rounded-lg object-cover mb-6"
              />
              <div className="absolute bottom-0 left-0 w-0 h-0 bg-gradient-to-r bg-primary rounded transition-all duration-700 ease-out group-hover:w-full group-hover:h-full"></div>
              <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out flex items-center justify-center">
                <div className="text-white text-center px-4">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-lg">{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-gradient-to-r bg-primary text-white text-center">
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Be Part of Our Mission</h2>
          <p className="text-lg mb-8 max-width-520">
            Join us in advancing sustainable energy solutions and make a positive impact on the planet. Contact us today to learn more about our projects and how you can contribute.
          </p>
          <button className="bg-white moving-gradient font-bold py-3 px-6 rounded-full hover:bg-gray-100">
            Get In Touch
          </button>
        </div>
      </section>
    </div>
  );
};

export default Projects;
