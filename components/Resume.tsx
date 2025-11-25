
import React, { useState } from 'react';
import SectionTitle from './SectionTitle';
import { technicalSkills, education, experience, certifications, softSkills } from './data';
import { Briefcase, GraduationCap, Award, User, Code, Calendar } from 'lucide-react';

const Resume: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Experiência');

  const tabs = [
    { name: 'Experiência', icon: Briefcase },
    { name: 'Habilidades', icon: Code },
    { name: 'Formação', icon: GraduationCap },
    { name: 'Soft Skills', icon: User },
  ];

  return (
    <section id="resume" className="py-20 bg-card">
      <div className="container mx-auto px-6 md:px-12">
        <SectionTitle title="Currículo" subtitle="Minha Jornada" />
        
        {/* Navigation Tabs */}
        <div className="flex justify-center mb-12" data-aos="fade-up">
          <div className="bg-background rounded-xl p-1.5 flex flex-wrap justify-center gap-2 shadow-lg border border-white/5 w-full md:w-auto">
            {tabs.map((tab) => {
               const Icon = tab.icon;
               return (
                <button
                  key={tab.name}
                  onClick={() => setActiveTab(tab.name)}
                  className={`flex items-center gap-2 px-3 md:px-6 py-3 rounded-lg transition-all duration-300 text-sm md:text-base font-bold flex-1 md:flex-none justify-center whitespace-nowrap ${activeTab === tab.name ? 'bg-primary text-primary-foreground shadow-md' : 'text-foreground/70 hover:bg-white/5 hover:text-primary'}`}
                >
                  <Icon size={16} className="md:w-[18px] md:h-[18px]" />
                  <span>{tab.name}</span>
                </button>
               );
            })}
          </div>
        </div>

        {/* Content Area - Key prop forces re-render animation on tab change */}
        <div key={activeTab} className="min-h-[400px] animate-fade-in">
          
          {/* Experiência Tab */}
          {activeTab === 'Experiência' && (
            <div className="relative border-l-2 border-primary/20 ml-3 md:ml-6 space-y-12">
              {experience.map((item, index) => (
                <div key={index} className="relative pl-8 md:pl-12 group">
                  {/* Timeline Dot */}
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-background border-4 border-primary group-hover:scale-125 transition-transform duration-300 shadow-[0_0_10px_rgba(125,108,186,0.5)]"></div>
                  
                  <div className="flex flex-col sm:flex-row sm:items-start gap-1 mb-2">
                    <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">{item.role}</h3>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-2 sm:items-center text-sm text-gray-400 mb-4">
                     <span className="text-secondary font-semibold">{item.company}</span>
                     <span className="hidden sm:block">•</span>
                     <div className="flex items-center gap-1 font-mono bg-background/30 w-fit px-2 py-0.5 rounded border border-white/5">
                        <Calendar size={12} />
                        {item.period}
                     </div>
                  </div>
                  
                  <p className="text-gray-300 leading-relaxed bg-background/20 p-4 rounded-lg border border-white/5 hover:border-primary/30 transition-colors">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          )}

          {/* Habilidades Tab */}
          {activeTab === 'Habilidades' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Object.entries(technicalSkills).map(([category, skills]) => (
                <div 
                  key={category} 
                  className="bg-background/40 rounded-xl p-6 border border-white/5 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 h-full"
                >
                  <h3 className="text-lg font-bold text-primary mb-4 border-b border-white/5 pb-2 min-h-[3rem] flex items-center">{category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.map(skill => (
                      <span 
                        key={skill} 
                        className="bg-card text-gray-300 text-sm px-3 py-1.5 rounded-md border border-white/5 hover:text-white hover:bg-primary/20 transition-colors cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Formação & Certificações Tab */}
          {activeTab === 'Formação' && (
            <div className="grid lg:grid-cols-2 gap-10">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-white flex items-center gap-3 mb-6">
                  <GraduationCap className="text-secondary" /> Educação
                </h3>
                {education.map((item, index) => (
                  <div key={index} className="bg-background/40 p-6 rounded-xl border border-white/5 hover:border-primary/30 transition-colors">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-lg font-bold text-primary">{item.title}</h4>
                      <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded font-bold whitespace-nowrap ml-2">{item.year}</span>
                    </div>
                    <p className="text-white font-medium mb-3">{item.institution}</p>
                    <div className="flex flex-col gap-2">
                      {item.skills.map((skillLine, idx) => (
                        <p key={idx} className="text-sm text-gray-400 border-l-2 border-primary/20 pl-2">
                            {skillLine}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-white flex items-center gap-3 mb-6">
                  <Award className="text-secondary" /> Licenças & Certificações
                </h3>
                <div className="grid gap-4">
                    {certifications.map((cert, index) => (
                    <div key={index} className="flex items-center gap-4 bg-background/40 p-5 rounded-xl border border-white/5 hover:border-secondary/30 transition-colors">
                        <div className="bg-secondary/10 p-3 rounded-full text-secondary flex-shrink-0">
                        <Award size={24} />
                        </div>
                        <div>
                        <h4 className="text-white font-bold">{cert.name}</h4>
                        <p className="text-gray-400 text-sm">{cert.issuer}</p>
                        </div>
                    </div>
                    ))}
                </div>
              </div>
            </div>
          )}

          {/* Soft Skills Tab */}
          {activeTab === 'Soft Skills' && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {softSkills.map((skill, index) => (
                <div 
                  key={index} 
                  className="bg-gradient-to-br from-background/60 to-background/30 p-6 rounded-xl border border-white/5 hover:border-primary/40 group transition-all duration-300 h-full"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform">
                    <User size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{skill.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{skill.desc}</p>
                </div>
              ))}
            </div>
          )}

        </div>
      </div>
    </section>
  );
}

export default Resume;
