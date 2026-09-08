import About from "../components/About";
import Experience from "../components/Experience";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import TechStack from "../components/TechStack";


function Home() {
  return (
    <>
      <Navbar />
      <Hero/>
      <TechStack/>
      <About/>
      <Skills/>
      <Experience/>
      <Projects/>
      <Footer/>
      
    </>
  );
}

export default Home;