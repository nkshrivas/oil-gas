import Slider from "@/app/components/Slider";
import Header from "./components/Header";
import slider1 from '@/app/images/banner-slide.png';
import slider2 from '@/app/images/banner-slide-2.png';
import AboutSection from "./components/AboutUs";
import Services from "./components/Service";
import Footer from "./components/Footer";

const sliderData = [
  {
    image: slider1,
    title: "OIL AND GAS",
    subtitle: "We are a Certified and Insured Company.",
    description: "Specifically designed for any types of Small Factory, Company, Electronic Business, Power, Petroleum, Gas, Plants construction etc.",
    buttonText: "READ MORE"
  },
  {
    image: slider2,
    title: "ANOTHER SERVICE",
    subtitle: "Your Trusted Partner.",
    description: "Providing top-notch solutions for your business needs.",
    buttonText: "LEARN MORE"
  },
  // Add more slides as needed
];

// In your main component

export default function Home() {
  return (
    <div>
      <Header/>
      <Slider slides={sliderData} />
      <AboutSection />
      <Services />
      <Footer />
    </div>
  );
}
