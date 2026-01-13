import Hero from "./components/HeroSection/Hero";
import Navbar from "./components/Navbar/Navbar";
import EnvironmentSection from "./components/Envrionment/EnvironmentSection";
import AboutUs from "./components/Aboutus/AboutUs";

function App() {
  return (
    <>
      <Navbar />
      <Hero/>
      <AboutUs/>
      <EnvironmentSection/>
      
    </>
  );
}

export default App;
