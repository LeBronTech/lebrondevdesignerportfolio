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
    AOS.init({
      duration: 1000,
      once: false, // Alterado para false: animação acontece toda vez que o elemento entra na tela
      mirror: true, // Adicionado: animação acontece também ao rolar para cima e sair/entrar
      offset: 150, // Reduzido de 250 para 150 para melhorar a percepção de carregamento
      easing: 'ease-out-cubic',
    });

    // Refresh AOS logic to ensure accurate positions
    const timer = setTimeout(() => {
      AOS.refresh();
    }, 500);

    return () => clearTimeout(timer);
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