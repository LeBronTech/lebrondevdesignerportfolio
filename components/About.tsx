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
    <section id="about" className="bg-about-bg">
      <div className="shape-divider-top">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 70" preserveAspectRatio="none">
            <path d="M0,0 L1200,0 L1200,30 C800,70 400,70 0,30 Z" className="shape-fill"></path>
        </svg>
      </div>
      <div className="container mx-auto px-6 md:px-12 pb-16">
        <SectionTitle title="Sobre Mim" subtitle="Minha Jornada" />
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          <div className="lg:col-span-2" data-aos="fade-right">
            <img 
              src="https://i.postimg.cc/P54vTj1n/soueu.webp" 
              alt="Leandro José" 
              className="rounded-lg shadow-2xl w-full mx-auto lg:max-w-sm"
            />
          </div>
          <div className="lg:col-span-3 text-left" data-aos="fade-left" data-aos-delay="200">
            <h2 className="text-3xl lg:text-4xl font-bold font-secondary mb-2">Leandro José (LeBron)</h2>
            <p className="font-primary uppercase tracking-widest text-sm gradient-title-animation mb-6"><span className="font-bold">Designer UI/UX</span> e Programador Full-Stack</p>
            <p className="text-foreground/80 mb-6 leading-relaxed">
              Olá! Sou Leandro José, <span className="font-bold text-foreground">Designer UI/UX</span> e Programador Full-Stack com 2 anos na área, especializado no ecossistemas <span className="font-bold text-foreground">JavaScript</span>, usando principalmente da metodologia <span className="font-bold text-foreground">Scrum</span>, focado em transformar ideias em soluções digitais que geram credibilidade e vendas. Minha atuação é especializada em:
            </p>
            <ul className="text-foreground/80 list-none space-y-3 mb-6">
              <li><span className="text-secondary font-bold">💻 Web & Apps de Alto Impacto:</span> Desenvolvimento de Websites Institucionais, Landing Pages, E-commerces e Aplicativos Mobile. Seu projeto com código limpo e foco total na funcionalidade.</li>
              <li><span className="text-secondary font-bold">🖌️ Branding e Design Estratégico:</span> Criação de Identidade Visual completa (Logotipo e Manual de Marca) e material profissional para Marketing Online.</li>
            </ul>
            <p className="text-foreground/80 mb-8 leading-relaxed">
              Se você busca um profissional que une o Design (UI/UX) estratégico à execução técnica Full-Stack, entregando um projeto completo e com o compromisso de crescimento do seu negócio, me envie uma solicitação. Vamos construir a presença digital que sua marca realmente merece.
            </p>
            <div className="mt-8">
              <h3 className="font-primary uppercase tracking-widest text-sm gradient-title-animation text-center mb-4">
                Siga-me
              </h3>
              <div className="flex items-center justify-center gap-4">
                {socials.map(({ name, url, icon }) => (
                  <a key={name} href={url} target="_blank" rel="noreferrer" aria-label={name} className="rn-btn w-16 h-16 rounded-lg bg-card flex items-center justify-center">
                    {renderIcon(icon, { alt: name, className: 'w-8 h-8 text-primary', size: 32 })}
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