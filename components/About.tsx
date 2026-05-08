
import React, { useState } from 'react';
import SectionTitle from './SectionTitle';
import { socials } from './data';
import { Instagram, Github, Download, Code, Palette, Server, ChevronDown, Layout } from 'lucide-react';

const About: React.FC = () => {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const renderIcon = (IconComponent: React.ElementType | string, props: any) => {
    if (typeof IconComponent === 'string') {
      return <img src={IconComponent} alt={props.alt} loading="lazy" decoding="async" width="32" height="32" className="w-8 h-8 object-contain" />;
    }
    return <IconComponent {...props} />;
  };

  const handleSocialClick = (e: React.MouseEvent<HTMLAnchorElement>, url: string) => {
    e.preventDefault();
    setTimeout(() => {
      window.open(url, '_blank', 'noopener,noreferrer');
    }, 400);
  };

  const resumes = [
    { 
      label: 'Engenheiro de Software & UI/UX', 
      url: 'https://drive.google.com/file/d/10pNzzqjIGHbvKvNN7-lP6hjAAN4aWBVb/view', 
      icon: Code 
    },
    { 
      label: 'Designer Gráfico & Social Media', 
      url: 'https://drive.google.com/file/d/1TEpg0dOj7_V4u47ELD5YNOBdlBdt_E34/view', 
      icon: Palette 
    },
    { 
      label: 'Especialista em Infra & Redes', 
      url: 'https://drive.google.com/file/d/1qWalqIC9vv74FCRO6OjUZr5S_qXfobcU/view', 
      icon: Server 
    },
  ];

  return (
    <section id="about" className="bg-about-bg relative">
      <div className="shape-divider-top">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 70" preserveAspectRatio="none">
            <path d="M0,0 L1200,0 L1200,30 C800,70 400,70 0,30 Z" className="shape-fill"></path>
        </svg>
      </div>
      <div className="container mx-auto px-8 md:px-12 pb-24 pt-32">
        <SectionTitle title="Sobre Mim" subtitle="Minha Jornada" />
        
        {/* Changed from Flex to Grid for better vertical alignment stability */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center lg:items-start">
          
          {/* Image Column */}
          <div className="w-full flex justify-center lg:justify-end" data-aos="fade-up">
            <div className="relative w-full max-w-sm mx-auto lg:mx-0">
               <div className="absolute inset-0 bg-primary/20 rounded-lg transform translate-x-3 translate-y-3 -z-10"></div>
                {/* Desktop Image */}
                <img 
                  src="https://iili.io/qXCrxtt.webp" 
                  alt="Leandro José" 
                  fetchPriority="high"
                  decoding="async"
                  width="400"
                  height="400"
                  className="hidden md:block rounded-lg shadow-2xl w-full h-auto object-cover border border-white/10"
                />
                {/* Mobile Image */}
                <img 
                  src="https://iili.io/qX817sV.webp" 
                  alt="Leandro José" 
                  fetchPriority="high"
                  width="400"
                  height="400"
                  className="md:hidden rounded-lg shadow-2xl w-full h-auto object-cover border border-white/10"
                />
            </div>
          </div>

          {/* Text Column */}
          <div className="w-full text-center lg:text-left flex flex-col items-center lg:items-start" data-aos="fade-up" data-aos-delay="200">
            <h2 className="text-3xl lg:text-4xl font-bold font-secondary mb-2">Leandro José (LeBron)</h2>
            <p className="font-primary uppercase tracking-widest text-sm gradient-title-animation mb-6 inline-block">
              <span className="font-bold">Designer UI/UX</span> e Desenvolvedor Front-End
            </p>
            
            <p className="text-foreground/80 mb-6 leading-relaxed text-base lg:text-lg">
              Olá! Sou <span className="font-bold text-foreground">Leandro José (LeBron)</span>, um profissional híbrido que une a precisão do Desenvolvimento Front-End à sensibilidade do Design UI/UX.
            </p>
            
            <p className="text-foreground/80 mb-6 leading-relaxed text-base lg:text-lg">
              Com 2 anos de experiência e formação em ADS, atualmente especializo-me em Sistemas para Internet para criar ecossistemas digitais de alta performance. Meu foco é transformar ideias complexas em interfaces intuitivas e códigos limpos que geram credibilidade e conversão.
            </p>
            
            <div className="text-left w-full mb-8">
              <h3 className="text-xl font-bold mb-4 text-primary">O que eu entrego:</h3>
              <ul className="text-foreground/80 list-none space-y-4 bg-background/30 p-6 rounded-xl border border-white/5">
                <li className="flex items-start gap-3">
                  <span className="text-xl">💻</span>
                  <span><span className="text-secondary font-bold">Desenvolvimento Front-End & Mobile:</span> Especialista no ecossistema JavaScript (React, Next.js) e Apps nativos com Flutter, com foco em performance e Scrum.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-xl">🎨</span>
                  <span><span className="text-secondary font-bold">Design Estratégico & UI/UX:</span> Criação de Identidades Visuais e prototipagem avançada no Figma, garantindo jornadas impecáveis.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-xl">📈</span>
                  <span><span className="text-secondary font-bold">Social Media & Tráfego Pago:</span> Gestão de redes sociais e campanhas de Ads (Google/Meta) focadas em ROI e conversão.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-xl">🎬</span>
                  <span><span className="text-secondary font-bold">Edição de Vídeo & SEO:</span> Produção audiovisual dinâmica e otimização para buscas, elevando o alcance da sua marca.</span>
                </li>
              </ul>
            </div>

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
                  <div className="absolute left-1/2 lg:left-0 -translate-x-1/2 lg:translate-x-0 mt-2 w-64 rounded-xl shadow-2xl bg-card border border-white/10 ring-1 ring-black ring-opacity-5 focus:outline-none">
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
                  <a 
                    key={name} 
                    href={url} 
                    onClick={(e) => handleSocialClick(e, url)}
                    aria-label={name} 
                    className="rn-btn w-12 h-12 rounded-lg bg-card flex items-center justify-center cursor-pointer"
                  >
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
