
import React, { useState } from 'react';
import SectionTitle from './SectionTitle';
import { socials } from './data';
import { Instagram, Github, Download, Code, Palette, Server, ChevronDown } from 'lucide-react';

const About: React.FC = () => {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const renderIcon = (IconComponent: React.ElementType | string, props: any) => {
    if (typeof IconComponent === 'string') {
      return <img src={IconComponent} alt={props.alt} loading="lazy" decoding="async" className="w-8 h-8 filter-primary" />;
    }
    return <IconComponent {...props} />;
  };

  const resumes = [
    { 
      label: 'Desenvolvedor', 
      url: 'https://drive.google.com/file/d/1gH3kWCA_xbNP2UNmVojWr8aHQpIpYPdk/view?usp=sharing', 
      icon: Code 
    },
    { 
      label: 'Designer UI/UX', 
      url: 'https://drive.google.com/file/d/1Ej-3rq5z3bviiggwhYvQ5HgmSUmSsYbn/view?usp=sharing', 
      icon: Palette 
    },
    { 
      label: 'Infraestrutura', 
      url: 'https://drive.google.com/file/d/1COsS7IDryEoxg2Ng40pJS1AUeEV6FXN_/view?usp=sharing', 
      icon: Server 
    },
  ];

  return (
    <section id="about" className="bg-about-bg relative overflow-hidden">
      <div className="shape-divider-top">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 70" preserveAspectRatio="none">
            <path d="M0,0 L1200,0 L1200,30 C800,70 400,70 0,30 Z" className="shape-fill"></path>
        </svg>
      </div>
      <div className="container mx-auto px-6 md:px-12 pb-20 pt-32">
        <SectionTitle title="Sobre Mim" subtitle="Minha Jornada" />
        
        {/* Changed from Flex to Grid for better vertical alignment stability */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Image Column */}
          <div className="w-full flex justify-center lg:justify-end" data-aos="fade-up">
            <div className="relative w-full max-w-sm mx-auto lg:mx-0">
               <div className="absolute inset-0 bg-primary/20 rounded-lg transform translate-x-3 translate-y-3 -z-10"></div>
               <img 
                src="https://i.postimg.cc/P54vTj1n/soueu.webp" 
                alt="Leandro José" 
                loading="lazy"
                decoding="async"
                className="rounded-lg shadow-2xl w-full h-auto object-cover border border-white/10"
              />
            </div>
          </div>

          {/* Text Column */}
          <div className="w-full text-center lg:text-left flex flex-col items-center lg:items-start" data-aos="fade-up" data-aos-delay="200">
            <h2 className="text-3xl lg:text-4xl font-bold font-secondary mb-2">Leandro José (LeBron)</h2>
            <p className="font-primary uppercase tracking-widest text-sm gradient-title-animation mb-6 inline-block">
              <span className="font-bold">Designer UI/UX</span> e Programador Full-Stack
            </p>
            
            <p className="text-foreground/80 mb-6 leading-relaxed text-base lg:text-lg">
              Olá! Sou Leandro José, <span className="font-bold text-foreground">Designer UI/UX</span> e Programador Full-Stack com 2 anos na área, especializado no ecossistema <span className="font-bold text-foreground">JavaScript</span> e na metodologia <span className="font-bold text-foreground">Scrum</span>. Foco em transformar ideias em soluções digitais que geram credibilidade e vendas.
            </p>
            
            <ul className="text-foreground/80 list-none space-y-4 mb-8 text-left inline-block bg-background/30 p-6 rounded-xl border border-white/5 w-full md:w-auto">
              <li className="flex items-start gap-3">
                <span className="text-xl">💻</span>
                <span><span className="text-secondary font-bold">Web & Apps:</span> Websites Institucionais, Landing Pages, E-commerces e Apps Mobile com código limpo.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-xl">🖌️</span>
                <span><span className="text-secondary font-bold">Branding:</span> Identidade Visual estratégica (Logotipo e Manual de Marca) para elevar sua presença digital.</span>
              </li>
            </ul>

            <p className="text-foreground/80 mb-8 leading-relaxed font-medium">
              Vamos construir a presença digital que sua marca realmente merece?
            </p>

            {/* Resume Button Dropdown */}
            <div className="relative mb-10 w-full flex flex-col items-center lg:items-start z-30">
              <div className="relative inline-block text-left">
                <button
                  onClick={() => setIsResumeOpen(!isResumeOpen)}
                  onBlur={() => setTimeout(() => setIsResumeOpen(false), 200)}
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-bold py-3 px-8 rounded-full hover:bg-secondary transition-all duration-300 shadow-lg transform hover:scale-105"
                >
                  <Download size={20} />
                  Baixar Currículo
                  <ChevronDown size={16} className={`transition-transform duration-300 ${isResumeOpen ? 'rotate-180' : ''}`} />
                </button>

                {isResumeOpen && (
                  <div className="absolute left-1/2 lg:left-0 -translate-x-1/2 lg:translate-x-0 mt-2 w-56 rounded-xl shadow-2xl bg-card border border-white/10 ring-1 ring-black ring-opacity-5 focus:outline-none overflow-hidden animate-zoom-in origin-top">
                    <div className="py-1">
                      {resumes.map((resume) => {
                        const Icon = resume.icon;
                        return (
                          <a
                            key={resume.label}
                            href={resume.url}
                            target="_blank"
                            rel="noreferrer"
                            className="group flex items-center gap-3 px-4 py-3 text-sm text-foreground/80 hover:bg-primary hover:text-white transition-colors"
                          >
                            <Icon size={18} className="text-primary group-hover:text-white transition-colors" />
                            {resume.label}
                          </a>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="flex flex-col items-center lg:items-start w-full">
              <h3 className="font-primary uppercase tracking-widest text-xs text-gray-400 mb-4">
                Siga-me nas redes
              </h3>
              <div className="flex items-center justify-center lg:justify-start gap-4">
                {socials.map(({ name, url, icon }) => (
                  <a key={name} href={url} target="_blank" rel="noreferrer" aria-label={name} className="rn-btn w-12 h-12 rounded-lg bg-card flex items-center justify-center border border-white/5 hover:border-primary/50">
                    {renderIcon(icon, { alt: name, className: 'w-6 h-6 text-primary', size: 24 })}
                  </a>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
