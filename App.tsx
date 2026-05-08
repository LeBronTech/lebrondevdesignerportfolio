import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
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
import PrintPortfolio from './components/PrintPortfolio';

const MainSite: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      offset: 100,
      easing: 'ease-out',
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

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<MainSite />} />
      <Route path="/pdf-version" element={<PrintPortfolio />} />
    </Routes>
  );
};

export default App;
