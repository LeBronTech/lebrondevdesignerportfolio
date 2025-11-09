import React, { useState } from 'react';
import SectionTitle from './SectionTitle';
import { skills, education } from './data';

interface SkillBarProps {
  skill: string;
  percentage: number;
}

const SkillBar: React.FC<SkillBarProps> = ({ skill, percentage }) => (
  <div className="mb-4">
    <div className="flex justify-between mb-1">
      <span className="font-semibold text-foreground/90">{skill}</span>
      <span className="text-sm font-bold text-primary">{percentage}%</span>
    </div>
    <div className="w-full bg-background rounded-full h-2.5">
      <div 
        className="bg-gradient-to-r from-secondary to-primary h-2.5 rounded-full" 
        style={{ width: `${percentage}%` }}
        data-aos="slide-right"
        data-aos-duration="1000"
      ></div>
    </div>
  </div>
);

const Resume: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Habilidades');

  return (
    <section id="resume" className="py-20 bg-card">
      <div className="container mx-auto px-6 md:px-12">
        <SectionTitle title="Currículo" subtitle="Minha Jornada" />
        
        <div className="flex justify-center mb-8" data-aos="fade-up">
          <div className="bg-background rounded-lg p-1 flex gap-1">
            <button
              onClick={() => setActiveTab('Habilidades')}
              className={`px-6 py-2 rounded-md transition-colors text-sm font-bold ${activeTab === 'Habilidades' ? 'bg-primary text-primary-foreground' : 'hover:bg-primary/20'}`}
            >
              Habilidades
            </button>
            <button
              onClick={() => setActiveTab('Formação')}
              className={`px-6 py-2 rounded-md transition-colors text-sm font-bold ${activeTab === 'Formação' ? 'bg-primary text-primary-foreground' : 'hover:bg-primary/20'}`}
            >
              Formação
            </button>
          </div>
        </div>

        <div key={activeTab}>
          {activeTab === 'Habilidades' && (
            <div className="grid md:grid-cols-2 gap-10">
              {Object.entries(skills).map(([category, skillList]) => (
                <div key={category} data-aos="fade-up">
                  <h3 className="text-2xl font-secondary font-bold text-center mb-6">{category}</h3>
                  {skillList.map(skill => <SkillBar key={skill.name} skill={skill.name} percentage={skill.level} />)}
                </div>
              ))}
            </div>
          )}

          {activeTab === 'Formação' && (
            <div className="space-y-6">
              {education.map((item, index) => (
                <div key={index} className="bg-background p-6 rounded-lg" data-aos="fade-up">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-bold text-primary">{item.title}</h3>
                      <p className="text-foreground/80">{item.institution}</p>
                    </div>
                    <span className="text-sm bg-primary/20 text-primary font-semibold py-1 px-3 rounded-full">{item.year}</span>
                  </div>
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