import React, { useState, useEffect } from 'react';
import { FileText } from 'lucide-react';

const typingWords = ["Apps.", "Websites.", "Logos.", "Identidade Visual."];

const TypingText: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    if (subIndex === typingWords[index].length + 1 && !reverse) {
      setTimeout(() => setReverse(true), 1000);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % typingWords.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? 75 : 150);

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  return (
    <h2 className="text-2xl md:text-3xl font-secondary text-foreground/80 h-10">
      Criação de <span className="font-bold text-secondary gradient-title-animation">
        {`${typingWords[index].substring(0, subIndex)}`}
      </span>
      <span className="animate-ping">|</span>
    </h2>
  );
};

const Home: React.FC = () => {
  const handleScrollToPortfolio = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const portfolioSection = document.getElementById('portfolio');
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="flex items-center justify-center text-center pt-32 pb-8">
      <div className="container mx-auto px-6" data-aos="fade-up">
        {/* Print Tip */}
        <div className="hidden print:block mb-8 text-center border-2 border-primary p-4 rounded-lg">
          <h2 className="text-xl font-bold mb-2">Versão PDF de Portfólio</h2>
          <p>Para baixar, selecione "Salvar como PDF" no destino da impressão.</p>
        </div>

        <span className="text-lg font-secondary uppercase tracking-widest font-bold gradient-title-animation">Bem vindo A</span>
        {/* Desktop Logo */}
        <img 
          src="https://iili.io/qXfYpql.webp" 
          alt="LeBron Dev-Designer Logo"
          className="hidden md:block mx-auto my-4 w-full max-w-sm md:max-w-md lg:max-w-lg"
          fetchPriority="high"
          loading="eager"
          decoding="async"
          width="512"
          height="205"
        />
        {/* Mobile Logo */}
        <img 
          src="https://iili.io/qXvzEzu.webp" 
          alt="LeBron Dev-Designer Logo"
          className="md:hidden mx-auto my-4 w-full max-w-sm"
          fetchPriority="high"
          loading="eager"
          decoding="async"
          width="512"
          height="205"
        />
        
        <TypingText />

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
          <a 
            href="#portfolio"
            onClick={handleScrollToPortfolio}
            className="w-full sm:w-auto inline-block bg-primary text-primary-foreground font-bold py-3 px-8 rounded-full hover:bg-secondary transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            Ver Projetos
          </a>
          <button 
            type="button"
            onClick={() => {
              console.log('Triggering browser print dialog...');
              window.print();
            }}
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-card text-foreground font-bold py-3 px-8 rounded-full border border-white/10 hover:border-primary/50 transition-all duration-300 ease-in-out transform hover:scale-105 cursor-pointer relative z-10"
          >
            <FileText size={20} />
            Versão PDF
          </button>
        </div>
      </div>
    </section>
  );
}

export default Home;