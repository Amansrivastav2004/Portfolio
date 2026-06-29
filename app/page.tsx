import Navbar from "@/components/Navbar";
import Hero from "@/components/hero/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Timeline from "@/components/Timeline";
import Certificates from "@/components/Certificates";
import TechStack from "@/components/TechStack";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import BackgroundBlobs from "@/components/BackgroundBlobs";
import ScrollProgress from "@/components/ScrollProgress";

export default function Home() {
  return (
    <>
      <ScrollProgress />

      <BackgroundBlobs />

      <Navbar />

      <Hero />

      <About />

      <Skills />

      <TechStack />

      <Projects />

      <Timeline />

      <Certificates />

      <Contact />

      <Footer />
    </>
  );
}