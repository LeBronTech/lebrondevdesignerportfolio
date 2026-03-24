import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Header } from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Tools from './components/Tools';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

const App: React.FC = () => {
  useEffect(() => {
    // Small delay to ensure DOM is fully ready
    const initAOS = () => {
      AOS.init({
        duration: 800,
        once: false, // Changed to false to allow re-animation when filtering
        offset: 100,
        easing: 'ease-out',
        disable: false,
        startEvent: 'DOMContentLoaded',
      });
    };

    if (document.readyState === 'complete') {
      initAOS();
    } else {
      window.addEventListener('load', initAOS);
      return () => window.removeEventListener('load', initAOS);
    }
  }, []);

  return (
    <div className="bg-background text-foreground font-primary">
      <Header />
      <main>
        <Home />
        <About />
        <Tools />
        <Portfolio />
        <Resume />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default App;