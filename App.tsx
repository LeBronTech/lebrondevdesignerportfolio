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
    // Refresh AOS logic to ensure accurate positions
    setTimeout(() => {
      window.AOS.refresh();
    }, 500);

    window.AOS.init({
      duration: 1000,
      once: true, // Animação acontece apenas uma vez (melhor performance e evita glitches ao subir a tela)
      offset: 250, // Aumentado: O elemento precisa entrar 250px na tela antes de animar
      mirror: false,
      easing: 'ease-out-cubic',
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