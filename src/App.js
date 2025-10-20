import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import FireBackground from './components/FireBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Innovation from './components/Innovation';
import Research from './components/Research';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
      offset: 100,
    });
  }, []);

  return (
    <div className="App">
      <FireBackground />
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Innovation />
      <Research />
      <Achievements />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
