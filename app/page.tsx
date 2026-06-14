import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Timeline from "@/components/Timeline";
import Certificates from "@/components/Certificates";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import BackgroundBlobs from "@/components/BackgroundBlobs";
import ScrollProgress from "@/components/ScrollProgress";
import TechStack from "@/components/TechStack";


export default function Home() {
  return (
   <>
  <ScrollProgress />

  <BackgroundBlobs />

  <Navbar />
  <Hero />
  <About />
  <Skills />
  <Projects />
  <Timeline />
  <Certificates />
  <TechStack />
  <Contact />
  <Footer />
</>
  );
  
}