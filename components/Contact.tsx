import React from 'react';
import SectionTitle from './SectionTitle';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 text-center bg-card">
       <div className="container mx-auto px-6 md:px-12" data-aos="fade-up">
        <SectionTitle title="Fale Comigo" subtitle="Contato"/>
        <p className="text-xl text-foreground/80 max-w-2xl mx-auto mb-8">
          Interessado em colaborar? Sinta-se à vontade para entrar em contato!
        </p>
        <a 
          href="mailto:lebronempresas@gmail.com" 
          className="inline-block bg-primary text-primary-foreground font-bold text-lg py-3 px-8 rounded-full hover:bg-secondary transition-all duration-300 ease-in-out transform hover:scale-105"
        >
          Enviar um Email
        </a>
       </div>
    </section>
  );
}

export default Contact;