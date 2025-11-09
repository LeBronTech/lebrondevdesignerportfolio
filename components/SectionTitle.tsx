import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle }) => {
  return (
    <div className="text-center mb-12" data-aos="fade-up">
      <span className="subtitle font-primary uppercase tracking-widest text-sm gradient-title-animation">
        {subtitle}
      </span>
      <h2 className="text-4xl lg:text-5xl font-bold font-secondary mt-2">
        {title}
      </h2>
    </div>
  );
};

export default SectionTitle;
