
import React, { useState, useEffect, useRef } from 'react';
import AOS from 'aos';
import SectionTitle from './SectionTitle';
import { technicalSkills, education, experience, certifications, softSkills, about } from './data';
import { Briefcase, GraduationCap, Award, User, Code, Calendar, FileText } from 'lucide-react';

const Resume: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Experiência');
  const sectionTitleRef = useRef<HTMLDivElement>(null);

  const scrollIntoView = () => {
    sectionTitleRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  useEffect(() => {
    // Refresh AOS whenever the tab changes to recalculate positions for elements below
    AOS.refresh();
  }, [activeTab]);

  const tabs = [
    { name: 'Experiência', icon: Briefcase },
    { name: 'Habilidades', icon: Code },
    { name: 'Formação & Skills', icon: GraduationCap },
  ];

  return (
    <section id="resume" className="py-20 bg-card">
      <div className="container mx-auto px-8 md:px-12">
        <div ref={sectionTitleRef}>
            <SectionTitle title="Currículo" subtitle="Minha Jornada" />
        </div>
        
        {/* Navigation Tabs */}
        <div className="flex justify-center mb-12" data-aos="fade-up">
          <div className="bg-background rounded-xl p-1.5 flex flex-wrap justify-center gap-2 shadow-lg border border-white/5 w-full md:w-auto">
            {tabs.map((tab) => {
               const Icon = tab.icon;
               return (
                <button
                  key={tab.name}
                  onClick={() => { setActiveTab(tab.name); scrollIntoView(); }}
                  className={`flex items-center gap-2 px-3 md:px-6 py-3 rounded-lg transition-all duration-300 text-sm md:text-base font-bold flex-1 md:flex-none justify-center whitespace-nowrap ${activeTab === tab.name ? 'bg-primary text-primary-foreground shadow-md' : 'text-foreground/70 hover:bg-white/5 hover:text-primary'}`}
                >
                  <Icon size={16} className="md:w-[18px] md:h-[18px]" />
                  <span>{tab.name}</span>
                </button>
               );
            })}
          </div>
        </div>

        {/* Resume Downloads */}
        <div className="flex justify-center mb-12 gap-4 flex-wrap" data-aos="fade-up">
            {about.resumes.map((resume) => (
                <a
                    key={resume.title}
                    href={resume.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-lg hover:bg-primary/20 transition-all text-sm font-bold border border-primary/20"
                >
                    <FileText size={16} />
                    {resume.title}
                </a>
            ))}
        </div>

        {/* Content Area - Key prop forces re-render animation on tab change */}
        <div key={activeTab} className="min-h-[400px] print:min-h-0 animate-fade-in">
          
          {/* Experiência Tab */}
          {(activeTab === 'Experiência' || true) && (
            <div className={`relative border-l-2 border-primary/20 ml-3 md:ml-6 space-y-12 ${activeTab !== 'Experiência' ? 'print:block hidden' : 'block'}`}>
              {activeTab !== 'Experiência' && <h3 className="text-2xl font-bold text-black mb-6 hidden print:block">Experiência</h3>}
              {experience.map((item, index) => (
                <div key={index} className="relative pl-8 md:pl-12 group">
                  {/* Timeline Dot */}
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-background border-4 border-primary group-hover:scale-125 transition-transform duration-300 shadow-[0_0_10px_rgba(125,108,186,0.5)] print:border-black print:shadow-none"></div>
                  
                  <div className="flex flex-col sm:flex-row sm:items-start gap-1 mb-2">
                    <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors print:text-black">{item.role}</h3>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-2 sm:items-center text-sm text-gray-400 mb-4 print:text-gray-600">
                     <span className="text-secondary font-semibold print:text-black">{item.company}</span>
                     <span className="hidden sm:block">•</span>
                     <div className="flex items-center gap-1 font-mono bg-background/30 w-fit px-2 py-0.5 rounded border border-white/5 print:border-gray-200">
                        <Calendar size={12} />
                        {item.period}
                     </div>
                  </div>
                  
                  <p className="text-gray-300 leading-relaxed bg-background/20 p-4 rounded-lg border border-white/5 hover:border-primary/30 transition-colors print:text-gray-800 print:bg-transparent print:border-none print:p-0">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          )}

          {/* Habilidades Tab */}
          {(activeTab === 'Habilidades' || true) && (
            <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 ${activeTab !== 'Habilidades' ? 'print:grid hidden' : 'grid'}`}>
              {activeTab !== 'Habilidades' && <h3 className="text-2xl font-bold text-black mb-6 col-span-full hidden print:block">Habilidades</h3>}
              {Object.entries(technicalSkills).map(([category, skills]) => (
                <div 
                  key={category} 
                  className="bg-background/40 rounded-xl p-6 border border-white/5 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 h-full print:border-gray-200"
                >
                  <h3 className="text-lg font-bold text-primary mb-4 border-b border-white/5 pb-2 min-h-[3rem] flex items-center print:text-black print:border-gray-100">{category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.map(skill => (
                      <span 
                        key={skill} 
                        className="bg-card text-gray-300 text-sm px-3 py-1.5 rounded-md border border-white/5 hover:text-white hover:bg-primary/20 transition-colors cursor-default print:text-gray-800 print:bg-gray-50 print:border-gray-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Formação & Soft Skills Tab */}
          {(activeTab === 'Formação & Skills' || true) && (
            <div className={`space-y-16 mt-12 ${activeTab !== 'Formação & Skills' ? 'print:block hidden' : 'block'}`}>
              <div className="grid lg:grid-cols-2 gap-10">
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-white flex items-center gap-3 mb-6 print:text-black">
                    <GraduationCap className="text-secondary print:text-black" /> Educação
                  </h3>
                  {education.map((item, index) => (
                    <div key={index} className="bg-background/40 p-6 rounded-xl border border-white/5 hover:border-primary/30 transition-colors print:border-gray-200">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-3">
                        <h4 className="text-lg font-bold text-primary print:text-black leading-tight">{item.title}</h4>
                        <span className="bg-primary/10 text-primary text-[10px] px-2 py-1 rounded font-bold whitespace-nowrap w-fit print:border print:border-black shrink-0">{item.year}</span>
                      </div>
                      <p className="text-white font-medium mb-3 print:text-black">{item.institution}</p>
                      <div className="flex flex-col gap-2">
                        {item.skills.map((skillLine, idx) => (
                          <p key={idx} className="text-sm text-gray-400 border-l-2 border-primary/20 pl-2 print:text-gray-700 print:border-gray-300">
                              {skillLine}
                          </p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-white flex items-center gap-3 mb-6 print:text-black">
                    <Award className="text-secondary print:text-black" /> Licenças & Certificações
                  </h3>
                  <div className="grid gap-4">
                      {certifications.map((cert, index) => (
                      <div key={index} className="flex items-center gap-4 bg-background/40 p-5 rounded-xl border border-white/5 hover:border-secondary/30 transition-colors print:border-gray-200">
                          <div className="bg-secondary/10 p-3 rounded-full text-secondary flex-shrink-0 print:border print:border-black">
                          <Award size={24} />
                          </div>
                          <div>
                          <h4 className="text-white font-bold print:text-black">{cert.name}</h4>
                          <p className="text-gray-400 text-sm print:text-gray-600">{cert.issuer}</p>
                          </div>
                      </div>
                      ))}
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <h3 className="text-2xl font-bold text-white flex items-center gap-3 mb-6 print:text-black">
                  <User className="text-secondary print:text-black" /> Soft Skills
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {softSkills.map((skill, index) => (
                    <div 
                      key={index} 
                      className="bg-gradient-to-br from-background/60 to-background/30 p-6 rounded-xl border border-white/5 hover:border-primary/40 group transition-all duration-300 h-full print:border-gray-200"
                    >
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform print:border print:border-black">
                        <User size={24} />
                      </div>
                      <h3 className="text-lg font-bold text-white mb-2 print:text-black">{skill.title}</h3>
                      <p className="text-gray-400 text-sm leading-relaxed print:text-gray-800">{skill.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Resume;
