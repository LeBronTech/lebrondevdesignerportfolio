
import React from 'react';
import SectionTitle from './SectionTitle';
import { socials } from './data';
import { Instagram, Github } from 'lucide-react';

const About: React.FC = () => {
  const renderIcon = (IconComponent: React.ElementType | string, props: any) => {
    if (typeof IconComponent === 'string') {
      return <img src={IconComponent} alt={props.alt} className="w-8 h-8 filter-primary" />;
    }
    return <IconComponent {...props} />;
  };

  return (
    <section id="about" className="bg-about-bg relative overflow-hidden">
      <div className="shape-divider-top">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 70" preserveAspectRatio="none">
            <path d="M0,0 L1200,0 L1200,30 C800,70 400,70 0,30 Z" className="shape-fill"></path>
        </svg>
      </div>
      <div className="container mx-auto px-6 md:px-12 pb-20 pt-32">
        <SectionTitle title="Sobre Mim" subtitle="Minha Jornada" />
        
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20">
          
          {/* Image Column */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end" data-aos="fade-up" data-aos-offset="150">
            <div className="relative w-full max-w-sm">
               <div className="absolute inset-0 bg-primary/20 rounded-lg transform translate-x-3 translate-y-3 -z-10"></div>
               <img 
                src="https://i.postimg.cc/P54vTj1n/soueu.webp" 
                alt="Leandro José" 
                className="rounded-lg shadow-2xl w-full h-auto object-cover border border-white/10"
              />
            </div>
          </div>

          {/* Text Column */}
          <div className="w-full lg:w-1/2 text-center lg:text-left" data-aos="fade-up" data-aos-delay="200" data-aos-offset="150">
            <h2 className="text-3xl lg:text-4xl font-bold font-secondary mb-2">Leandro José (LeBron)</h2>
            <p className="font-primary uppercase tracking-widest text-sm gradient-title-animation mb-6 inline-block">
              <span className="font-bold">Designer UI/UX</span> e Programador Full-Stack
            </p>
            
            <p className="text-foreground/80 mb-6 leading-relaxed text-base lg:text-lg">
              Olá! Sou Leandro José, <span className="font-bold text-foreground">Designer UI/UX</span> e Programador Full-Stack com 2 anos na área, especializado no ecossistema <span className="font-bold text-foreground">JavaScript</span> e na metodologia <span className="font-bold text-foreground">Scrum</span>. Foco em transformar ideias em soluções digitais que geram credibilidade e vendas.
            </p>
            
            <ul className="text-foreground/80 list-none space-y-4 mb-8 text-left inline-block mx-auto lg:mx-0 bg-background/30 p-6 rounded-xl border border-white/5">
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

            <div className="flex flex-col items-center lg:items-start">
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
