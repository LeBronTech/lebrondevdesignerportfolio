
import React from 'react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  skills: string[];
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, skills }) => {
  return (
    <div className="bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-cyan-500/20 transform hover:-translate-y-2 transition-all duration-300 ease-in-out border border-gray-700">
      <div className="flex items-start gap-6">
        <div className="text-cyan-400">{icon}</div>
        <div>
          <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
          <p className="text-gray-400 mb-4">{description}</p>
          <div className="flex flex-wrap gap-2 mt-4">
            {skills.map((skill, index) => (
              <span key={index} className="bg-gray-700 text-cyan-300 text-xs font-semibold px-2.5 py-1 rounded-full">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
