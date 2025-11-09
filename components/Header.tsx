import React, { useState, useEffect } from 'react';
import { navLinks } from './data';
import { Menu, X } from 'lucide-react';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled || isMenuOpen ? 'bg-background/80 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center h-20">
        <a href="#home" className="z-50">
          <img src="https://i.postimg.cc/tgpJ2Hcy/Lebron-20251025-153441-0000.png" alt="LeBron Logo" className="h-10 w-auto" />
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map(({ path, name }) => (
            <a key={path} href={path} className="uppercase text-sm font-medium tracking-wider text-foreground hover:text-primary transition-colors duration-300">
              {name}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <div className="lg:hidden z-50">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-foreground focus:outline-none">
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation Panel (Sheet) */}
        <div className={`lg:hidden fixed top-0 right-0 h-full bg-card w-64 transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} shadow-2xl`}>
          <nav className="flex flex-col items-center justify-center h-full space-y-8">
            {navLinks.map(({ path, name }) => (
              <a key={path} href={path} onClick={handleLinkClick} className="uppercase text-lg font-medium tracking-wider text-foreground hover:text-primary transition-colors duration-300">
                {name}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};
