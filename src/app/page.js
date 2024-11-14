import Slider from "@/app/components/Slider";
// import slider1 from '@/app/images/slider1.mp4';
import slider2 from '@/app/images/banner-slide-2.png';
import AboutSection from "./components/AboutUs";
import Services from "./components/Service";
import DownloadTab from "./components/Downloads";
import Gallery from "./components/Gallery";
import ContactForm from "./components/Contact";
import Header from "./components/Header";
import CardWrapper from "./components/CardWrapper";

const sliderData = [
  {
    video: '/videos/slider1.mp4',
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
      <Slider slides={sliderData} />
      <Header />
      <DownloadTab />
      <AboutSection />
      <CardWrapper />
      <Services />
      <Gallery />
      <ContactForm />
    </div>
  );
}
