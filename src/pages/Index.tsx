import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Domain from "@/components/Domain";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CVSection from "@/components/cv"

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300">
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Domain />
      <CVSection/>
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
