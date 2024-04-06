import React, { useEffect } from 'react';
import Navbar from './components/navbar/Navbar';
import Banner from './components/banner/Banner';
import About from './components/about/About';
import Projects from './components/projects/Projects';
import Education from './components/education/Education';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer'
import Skills from './components/skills/Skills'
import AOS from 'aos';
import 'aos/dist/aos.css';
import WhatsApp from './components/whatsapp/WhatsApp';

function App() {
  useEffect(() => {
    AOS.init({
      offset: 150,
      duration: 700,
    });
    // AOS.refreshHard();
  }, [])

  return (
    <>
      <div className="w-full h-auto bg-bodyColor text-lightText ">
        <Navbar />
        <div className='max-w-screen-xl mx-auto px-8'>
          <Banner />
          <About />
          <Skills />
          <Projects />
          <Education />
          <Contact />
        </div>
      </div>
      <Footer />
      <WhatsApp />
    </>
  );
}

export default App;
