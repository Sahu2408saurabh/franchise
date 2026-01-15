import Hero from "./components/HeroSection/Hero";
import Navbar from "./components/Navbar/Navbar";
import EnvironmentSection from "./components/Envrionment/EnvironmentSection";
import AboutUs from "./components/Aboutus/AboutUs";
import AimSection from "./components/AimSection/AimSection";
import Education from "./components/Education/Education";
import TestimonialsSection from "./Testimonial/TestimonialsSection";


function App() {
  return (
    <>
      <Navbar />
      <Hero/>
      <AboutUs/>
      <br/>
      
      <EnvironmentSection/>
      <Education/>

      <AimSection/>
      <TestimonialsSection/>
     
      
      
      
    </>
  );
}

export default App;
