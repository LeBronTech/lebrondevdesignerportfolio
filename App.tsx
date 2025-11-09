import React, { useEffect } from 'react';
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

declare global {
  interface Window {
    AOS: any;
  }
}

const App: React.FC = () => {
  useEffect(() => {
    window.AOS.init({
      duration: 1000,
      once: false,
    });
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