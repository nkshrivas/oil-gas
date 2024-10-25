import Image from 'next/image';

const AboutUs = () => {
  return (
    <div className="about-us-page">
      {/* Banner Section */}
      <div className="relative w-full h-96">
        <Image
          src="/images/banner-slide.png" // Use a banner image here
          alt="Indraprasth Oil Banner"
          layout="fill"
          objectFit="cover"
          className="banner-image"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <h1 className="text-4xl md:text-6xl text-white font-bold">About Indraprasth Oil</h1>
        </div>
      </div>

      {/* Mission Section */}
      <section className="py-16 bg-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Our Mission</h2>
        <div className="container mx-auto px-6 md:px-12">
          <p className="text-lg leading-relaxed mb-8">
            At Indraprasth Oil, our mission is to drive sustainable energy solutions that contribute to a cleaner, greener world. We are dedicated to providing innovative and eco-friendly energy alternatives, including Natural Gas, Green Diesel, and Bio Coal. 
            Through our commitment to sustainable practices, we aim to reduce carbon footprints and offer energy solutions that are both economically viable and environmentally responsible.
          </p>
          <Image
            src="/images/mission.jpg" // Image reflecting sustainability or energy production
            alt="Our Mission"
            width={800}
            height={500}
            className="mx-auto rounded-lg"
          />
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 bg-gray-100 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Our Vision</h2>
        <div className="container mx-auto px-6 md:px-12">
          <p className="text-lg leading-relaxed mb-8">
            Our vision is to become a leading force in the global energy transition by making sustainable energy solutions accessible to all. 
            We strive to shape a greener tomorrow through innovative technologies and strong partnerships, empowering the world to build a brighter, cleaner future.
          </p>
          <Image
            src="/images/vision.jpg" // Vision-related image (like green energy or technology)
            alt="Our Vision"
            width={800}
            height={500}
            className="mx-auto rounded-lg"
          />
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Why Choose Indraprasth Oil?</h2>
          <p className="text-lg mb-8">
            Indraprasth Oil is committed to creating sustainable energy solutions by providing eco-friendly alternatives. 
            We work closely with the Indian government to promote biofuel and renewable energy projects that contribute to the country's sustainable future. 
            By choosing us, you are not only selecting a trusted energy partner, but also playing a part in making the world a cleaner place.
          </p>
          <div className="flex justify-center">
            <Image
              src="/images/IMG_2.JPG" // Image of biofuels or sustainable energy solutions
              alt="Green Diesel Production"
              width={800}
              height={500}
              className="mx-auto rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-gradient-to-r from-green-500 to-teal-500 text-white text-center">
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Us in Building a Greener Future</h2>
          <p className="text-lg mb-8">
            Contact us today to explore our wide range of sustainable energy solutions and take advantage of government subsidies for biofuel plant installations.
          </p>
          <button className="bg-white text-green-600 font-bold py-3 px-6 rounded-full hover:bg-gray-100">
            Get In Touch
          </button>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
