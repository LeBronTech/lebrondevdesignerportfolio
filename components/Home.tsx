import React, { useState, useEffect } from 'react';

const typingWords = ["Apps.", "Websites.", "Logos."];

const Home: React.FC = () => {
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
        <span className="text-lg font-secondary uppercase tracking-widest font-bold gradient-title-animation">Bem vindo ao</span>
        <img 
          src="https://i.postimg.cc/XJSnSSX9/Lebron-20251029-033750-0000.png" 
          alt="LeBron Dev-Designer Logo"
          className="mx-auto my-4 w-full max-w-sm md:max-w-md lg:max-w-lg"
        />
        <h2 className="text-2xl md:text-3xl font-secondary text-foreground/80 h-10">
          Criação de <span className="font-bold text-secondary gradient-title-animation">{`${typingWords[index].substring(0, subIndex)}`}</span>
          <span className="animate-ping">|</span>
        </h2>
        <a 
          href="#portfolio"
          onClick={handleScrollToPortfolio}
          className="inline-block bg-primary text-primary-foreground font-bold py-3 px-8 rounded-full hover:bg-secondary transition-all duration-300 ease-in-out transform hover:scale-105 mt-8"
        >
          Ver Projetos
        </a>
      </div>
    </section>
  );
}

export default Home;