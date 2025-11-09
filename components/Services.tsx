import React from 'react';
import SectionTitle from './SectionTitle';
import { services } from './data';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-6 md:px-12">
        <SectionTitle title="Nossos Serviços" subtitle="O que fazemos" />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="portfolio-card relative rounded-lg overflow-hidden group shadow-lg"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <img src={service.image} alt={service.title} className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/40"></div>
              <div className="title-overlay absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/80 to-transparent transition-opacity duration-300 group-hover:opacity-0">
                <h3 className="text-2xl font-bold text-white">{service.title}</h3>
              </div>
              <div className="details-overlay absolute bottom-0 left-0 w-full p-6 bg-card/90 backdrop-blur-sm transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
                <h3 className="text-2xl font-bold text-primary mb-2">{service.title}</h3>
                <p className="text-foreground/80">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
