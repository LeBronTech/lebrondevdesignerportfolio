import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { navLinks } from './data';
import { Menu, X, FileText } from 'lucide-react';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [sectionWeights, setSectionWeights] = useState<{ [key: string]: number }>({ '#home': 1 });

  useEffect(() => {
    let ticking = false;

    const calculateWeights = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // Handle bottom of page (Contato active)
      if (scrollY + windowHeight >= documentHeight - 50) {
        setSectionWeights({ '#contact': 1 });
        return;
      }

      // Handle top of page (Home active)
      if (scrollY <= 60) {
        setSectionWeights({ '#home': 1 });
        return;
      }

      // Ordered list of main section anchors in page flow
      const anchorIds = ['home', 'about', 'social-media', 'portfolio', 'resume', 'testimonials', 'contact'];
      
      const sections = anchorIds
        .map((id) => {
          const el = document.getElementById(id);
          if (!el && id !== 'home') return null;
          const top = id === 'home' ? 0 : (el?.getBoundingClientRect().top ?? 0) + scrollY;
          return {
            path: `#${id}`,
            top,
          };
        })
        .filter(Boolean) as { path: string; top: number }[];

      if (sections.length === 0) return;

      // Scroll reference focal point
      const focal = scrollY + 120;

      // Find the active segment
      let idx = 0;
      for (let i = 0; i < sections.length; i++) {
        if (focal >= sections[i].top) {
          idx = i;
        } else {
          break;
        }
      }

      const current = sections[idx];
      const next = sections[idx + 1];

      const weights: { [key: string]: number } = {};

      if (next) {
        const segHeight = Math.max(1, next.top - current.top);
        const progress = Math.max(0, Math.min(1, (focal - current.top) / segHeight));

        // Smooth gradual fade in last 25% of the section towards next section
        const blendThreshold = 0.75;
        if (progress > blendThreshold) {
          const blend = (progress - blendThreshold) / (1 - blendThreshold);
          weights[current.path] = 1 - blend;
          weights[next.path] = blend;
        } else {
          weights[current.path] = 1;
        }
      } else {
        weights[current.path] = 1;
      }

      setSectionWeights(weights);
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 40);
          calculateWeights();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    calculateWeights();

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
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled || isMenuOpen ? 'bg-background/95 backdrop-blur-md border-b border-white/5 shadow-md' : 'bg-transparent'
        }`}
        style={{
          clipPath: isScrolled ? 'none' : 'ellipse(150% 100% at 50% 0%)'
        }}
      >
        <div className="container mx-auto px-4 md:px-8 xl:px-12 flex justify-between items-center h-20">
          {/* Logo with Lebron Name - Shrink-0 ensures it is never crushed */}
          <a href="#home" className="shrink-0 flex items-center mr-2 xl:mr-6 z-50">
            <img 
              src="https://iili.io/qXe4t9f.webp" 
              alt="LeBron Logo" 
              className="h-9 xl:h-10 w-auto" 
              fetchPriority="high"
              loading="eager"
              decoding="async"
              width="120"
              height="40"
            />
          </a>
          
          {/* Desktop Navigation - Compact spacing to prevent squeezing logo */}
          <nav className="hidden lg:flex items-center space-x-1 lg:space-x-1.5 xl:space-x-3">
            {navLinks.map(({ path, name }) => {
              const isSocialMedia = path === '#social-media';
              const weight = sectionWeights[path] || 0;

              return (
                <a 
                  key={path} 
                  href={path} 
                  className="relative px-2 xl:px-2.5 py-1 uppercase text-xs xl:text-xs 2xl:text-sm font-semibold tracking-normal xl:tracking-wider transition-all duration-200 group flex flex-col items-center"
                >
                  {/* Clean outline contour pill (no blurry glow/bloom) */}
                  <span 
                    className={`absolute inset-0 rounded-full pointer-events-none transition-all duration-200 ${
                      isSocialMedia 
                        ? 'border border-pink-500/40 bg-pink-500/5' 
                        : 'border border-primary/40 bg-primary/5'
                    }`}
                    style={{ 
                      opacity: weight > 0.05 ? weight : 0,
                    }}
                  />

                  {/* Text Label with crisp transition */}
                  <span
                    className={`relative z-10 transition-all duration-200 ${
                      isSocialMedia
                        ? 'bg-gradient-to-r from-pink-500 via-purple-500 to-orange-400 bg-clip-text text-transparent font-bold'
                        : 'text-foreground/75 group-hover:text-foreground'
                    }`}
                    style={{
                      opacity: isSocialMedia ? 1 : Math.max(0.7, 0.7 + weight * 0.3),
                      fontWeight: isSocialMedia ? 700 : (weight > 0.35 ? 700 : 600),
                      color: !isSocialMedia && weight > 0.35 ? '#ffffff' : undefined,
                    }}
                  >
                    {name}
                  </span>

                  {/* Dynamic Crisp Underline Contour (no blur glow) */}
                  <span 
                    className={`absolute -bottom-0.5 h-[2px] rounded-full transition-all duration-200 ${
                      isSocialMedia 
                        ? 'bg-gradient-to-r from-pink-500 via-purple-600 to-orange-400' 
                        : 'bg-primary'
                    }`}
                    style={{
                      width: '60%',
                      opacity: weight,
                      transform: `scaleX(${Math.max(0, weight)})`,
                    }}
                  />
                </a>
              );
            })}
            
            <Link 
              to="/pdf-version" 
              target="_blank" 
              className="flex items-center gap-1.5 px-3.5 py-1.5 xl:px-4 xl:py-2 bg-primary text-primary-foreground text-xs font-bold rounded-full hover:bg-secondary transition-all shrink-0 ml-1.5 xl:ml-3 shadow-none"
            >
              <FileText size={15} />
              <span>PDF</span>
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
        <nav className="flex flex-col items-center justify-center flex-1 space-y-4 pb-20 px-6">
          {navLinks.map(({ path, name }) => {
            const isSocialMedia = path === '#social-media';
            const weight = sectionWeights[path] || 0;

            return (
              <a 
                key={path} 
                href={path} 
                onClick={handleLinkClick} 
                className="relative w-full text-center py-2 px-4 rounded-xl uppercase text-base tracking-widest transition-all duration-200 flex flex-col items-center justify-center"
              >
                {/* Mobile clean outline contour */}
                <span 
                  className={`absolute inset-0 rounded-xl pointer-events-none transition-all duration-200 ${
                    isSocialMedia 
                      ? 'border border-pink-500/40 bg-pink-500/5' 
                      : 'border border-primary/40 bg-primary/5'
                  }`}
                  style={{ 
                    opacity: weight > 0.05 ? weight : 0,
                  }}
                />

                <span
                  className={`relative z-10 transition-all duration-200 ${
                    isSocialMedia 
                      ? 'bg-gradient-to-r from-pink-500 via-purple-500 to-orange-400 bg-clip-text text-transparent font-bold' 
                      : 'text-foreground/80 hover:text-primary'
                  }`}
                  style={{
                    opacity: isSocialMedia ? 1 : undefined,
                    fontWeight: isSocialMedia ? 700 : (weight > 0.35 ? 700 : 500),
                    color: !isSocialMedia && weight > 0.35 ? '#ffffff' : undefined,
                  }}
                >
                  {name}
                </span>
              </a>
            );
          })}
          <Link 
            to="/pdf-version" 
            target="_blank" 
            onClick={handleLinkClick}
            className="flex items-center gap-2 px-6 py-2.5 bg-primary text-primary-foreground font-bold rounded-full hover:bg-secondary transition-all mt-4 text-sm"
          >
            <FileText size={18} />
            Versão PDF
          </Link>
        </nav>
      </div>
    </>
  );
};
