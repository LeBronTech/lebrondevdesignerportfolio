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
      once: false, // Alterado para false: animação acontece toda vez que o elemento entra na tela
      mirror: true, // Adicionado: animação acontece também ao rolar para cima e sair/entrar
      offset: 300, // Aumentado para 300px para garantir que o elemento esteja bem visível antes de animar
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