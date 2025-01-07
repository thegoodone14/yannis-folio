import Navbar from '@/components/Navbar';
import Hero from '../components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Skills from '@/components/Skills';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero /> 
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}

