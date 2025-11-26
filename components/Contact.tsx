
import React from 'react';
import SectionTitle from './SectionTitle';
import { socials } from './data';
import { Mail } from 'lucide-react';

const Contact: React.FC = () => {
  const whatsapp = socials.find(s => s.name === 'WhatsApp');

  return (
    <section id="contact" className="py-20 text-center bg-card">
       <div className="container mx-auto px-6 md:px-12" data-aos="fade-up">
        <SectionTitle title="Fale Comigo" subtitle="Contato"/>
        <p className="text-xl text-foreground/80 max-w-2xl mx-auto mb-10 leading-relaxed">
          Vamos transformar sua ideia em uma <span className="text-secondary font-bold">solução digital de alto impacto</span>? <br/>
          Se você busca um parceiro comprometido com a excelência técnica e visual do seu projeto, estou pronto para atender sua demanda. 
          <br/><span className="block mt-2 font-medium text-white">Entre em contato agora e solicite um orçamento.</span>
        </p>
        
        <div className="flex flex-col md:flex-row justify-center items-center gap-6">
          <a 
            href="mailto:lebronempresas@gmail.com" 
            className="flex items-center gap-2 bg-primary text-primary-foreground font-bold text-lg py-3 px-8 rounded-full hover:bg-secondary transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg w-full md:w-auto justify-center"
          >
            <Mail size={24} />
            Enviar um Email
          </a>

          {whatsapp && (
             <a 
              href={whatsapp.url}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 bg-[#25D366] text-white font-bold text-lg py-3 px-8 rounded-full hover:bg-[#128C7E] transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg w-full md:w-auto justify-center"
            >
              <img src={whatsapp.icon as string} alt="WhatsApp" className="w-6 h-6 object-contain filter brightness-0 invert" />
              WhatsApp
            </a>
          )}
        </div>
       </div>
    </section>
  );
}

export default Contact;