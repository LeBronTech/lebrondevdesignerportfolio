import React, { useState } from 'react';
import SectionTitle from './SectionTitle';
import { tools } from './data';

const Tools: React.FC = () => {
  const [activeTool, setActiveTool] = useState<string | null>(null);

  const handleToolClick = (name: string) => {
    setActiveTool(activeTool === name ? null : name);
  };

  return (
    <section id="tools" className="bg-card relative overflow-hidden">
      <div className="shape-divider-top">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 70" preserveAspectRatio="none">
            <path d="M0,0 L1200,0 L1200,30 C800,70 400,70 0,30 Z" className="shape-fill"></path>
        </svg>
      </div>
      <div className="container mx-auto px-6 md:px-12 py-20">
        <SectionTitle title="Ferramentas Usadas" subtitle="TECNOLOGIAS" />
        <p className="max-w-3xl mx-auto text-center text-foreground/70 mb-16" data-aos="fade-up">
          Utilizo uma gama diversificada de ferramentas líderes de mercado para garantir que cada projeto seja entregue com a máxima qualidade, performance excepcional e um design visualmente impactante.
        </p>
        <div className="space-y-16">
          {Object.entries(tools).map(([category, toolList]) => (
            <div key={category} data-aos="fade-up">
              <h3 className="text-2xl font-secondary font-bold text-center mb-8 gradient-title-animation">{category}</h3>
              <div className="flex flex-wrap justify-center gap-6">
                {toolList.map((tool, index) => (
                  <div key={tool.name} className="flex flex-col items-center group" data-aos="icon-entry" data-aos-delay={index * 30}>
                    <button
                      onClick={() => handleToolClick(tool.name)}
                      className={`relative w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-background flex items-center justify-center transition-all duration-300 transform group-hover:-translate-y-2 shadow-lg ${activeTool === tool.name ? 'scale-110 ring-2 ring-primary' : 'hover:shadow-primary/20'}`}
                    >
                      <div className={`w-full h-full p-3 rounded-2xl transition-all duration-300 ${activeTool === tool.name ? 'bg-gradient-to-br from-primary/20 to-secondary/20' : ''}`}>
                         <img 
                            src={tool.icon} 
                            alt={tool.name} 
                            className="w-full h-full object-contain filter drop-shadow-sm" 
                            loading="lazy" 
                            decoding="async" 
                         />
                      </div>
                    </button>
                    <span className={`mt-3 text-sm font-medium transition-all duration-300 ${activeTool === tool.name ? 'opacity-100 text-primary translate-y-0' : 'opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 text-gray-400'}`}>
                      {tool.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
       <div className="shape-divider-bottom">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 70" preserveAspectRatio="none">
              <path d="M0,0 L1200,0 L1200,30 C800,70 400,70 0,30 Z" className="shape-fill"></path>
          </svg>
      </div>
    </section>
  );
}

export default Tools;