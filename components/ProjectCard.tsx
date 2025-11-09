
import React from 'react';

interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
  tags: string[];
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ image, title, description, tags }) => {
  return (
    <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden group">
      <div className="relative overflow-hidden">
        <img src={image} alt={title} className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500 ease-in-out"/>
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-400 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span key={index} className="bg-gray-700 text-cyan-300 text-xs font-semibold px-2.5 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
