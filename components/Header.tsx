import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { navLinks } from './data';
import { Menu, X, FileText } from 'lucide-react';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled || isMenuOpen ? 'bg-background/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
        }`}
        style={{
          clipPath: isScrolled ? 'none' : 'ellipse(150% 100% at 50% 0%)'
        }}
      >
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center h-20">
          <a href="#home" className="z-50">
            <img 
              src="https://iili.io/qXe4t9f.webp" 
              alt="LeBron Logo" 
              className="h-10 w-auto" 
              fetchPriority="high"
              loading="eager"
              decoding="async"
              width="120"
              height="40"
            />
          </a>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map(({ path, name }) => (
              <a key={path} href={path} className="uppercase text-sm font-medium tracking-wider text-foreground hover:text-primary transition-colors duration-300">
                {name}
              </a>
            ))}
            <Link 
              to="/pdf-version" 
              target="_blank" 
              className="flex items-center gap-2 px-5 py-2 bg-primary text-primary-foreground text-xs font-bold rounded-full hover:bg-secondary transition-all"
            >
              <FileText size={16} />
              PDF
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="lg:hidden z-50">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-foreground focus:outline-none p-2" aria-label="Toggle Menu">
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Panel (Sheet) */}
      {/* Backdrop */}
      <div 
        className={`lg:hidden fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 z-40 ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsMenuOpen(false)}
      />
      
      <div className={`lg:hidden fixed top-0 right-0 h-full bg-background w-72 transform transition-transform duration-500 ease-out z-50 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} shadow-2xl flex flex-col border-l border-white/10`}>
        <div className="flex justify-end p-6">
            <button onClick={() => setIsMenuOpen(false)} className="text-foreground focus:outline-none">
              <X size={28} />
            </button>
        </div>
        <nav className="flex flex-col items-center justify-center flex-1 space-y-8 pb-20">
          {navLinks.map(({ path, name }) => (
            <a key={path} href={path} onClick={handleLinkClick} className="uppercase text-xl font-light tracking-widest text-foreground hover:text-primary transition-colors duration-300">
              {name}
            </a>
          ))}
          <Link 
            to="/pdf-version" 
            target="_blank" 
            onClick={handleLinkClick}
            className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-bold rounded-full hover:bg-secondary transition-all"
          >
            <FileText size={20} />
            Versão PDF
          </Link>
        </nav>
      </div>
    </>
  );
};
