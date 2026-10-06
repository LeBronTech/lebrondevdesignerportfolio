import React, { useState, useCallback } from 'react';
import SectionTitle from './SectionTitle';
import { testimonials } from './data';
import { ArrowLeft, ArrowRight, Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = useCallback(() => {
    setCurrentIndex(prev => (prev + 1) % testimonials.length);
  }, []);

  const prevTestimonial = useCallback(() => {
    setCurrentIndex(prev => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  const { name, title, quote, image, project, rating, projectLogo } = testimonials[currentIndex];

  return (
    <section id="testimonials" className="py-20">
      <div className="container mx-auto px-8 md:px-12">
        <SectionTitle title="Depoimentos" subtitle="O que dizem" />
        <div className="relative max-w-3xl mx-auto bg-card p-8 rounded-lg shadow-lg" data-aos="fade-up">
          <div className="text-center">
            {image && (
              <img 
                src={image} 
                alt={name} 
                width="96"
                height="96"
                loading="eager"
                decoding="async"
                className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-primary object-cover shadow-lg bg-card"
                onError={(e) => {
                  const target = e.currentTarget;
                  if (!target.dataset.fallback) {
                    target.dataset.fallback = 'true';
                    target.src = '/patricia.jpg';
                  } else {
                    target.style.display = 'none';
                    const fallback = target.nextElementSibling as HTMLElement;
                    if (fallback) fallback.style.display = 'flex';
                  }
                }}
              />
            )}
            <div 
              style={{ display: image ? 'none' : 'flex' }}
              className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-primary bg-primary/20 items-center justify-center text-primary font-bold text-3xl shadow-lg select-none"
            >
              {name.charAt(0)}
            </div>
            <div className="flex justify-center mb-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className={`w-5 h-5 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-500'}`} />
              ))}
            </div>
            <p className="text-lg text-foreground/80 italic mb-6">"{quote}"</p>
            <h4 className="text-xl font-bold text-primary">{name}</h4>
            <p className="text-foreground/70 mb-4">{title}</p>
            <div className="flex justify-center items-center gap-3 mt-4 border-t border-primary/20 pt-4">
              {projectLogo && (
                <img 
                  src={projectLogo} 
                  alt={`${project} logo`} 
                  width="32"
                  height="32"
                  loading="lazy"
                  decoding="async"
                  className="h-8 w-8 rounded-full object-contain"
                />
              )}
              <span className="text-foreground/80 font-semibold">{project}</span>
            </div>
          </div>
          <button onClick={prevTestimonial} className="absolute top-1/2 left-0 -translate-x-1/2 bg-primary p-3 rounded-full text-white hover:bg-secondary transition-colors hidden md:block">
            <ArrowLeft />
          </button>
          <button onClick={nextTestimonial} className="absolute top-1/2 right-0 translate-x-1/2 bg-primary p-3 rounded-full text-white hover:bg-secondary transition-colors hidden md:block">
            <ArrowRight />
          </button>
        </div>
         <div className="flex md:hidden justify-center gap-8 mt-8">
            <button onClick={prevTestimonial} className="bg-primary p-3 rounded-full text-white hover:bg-secondary transition-colors">
              <ArrowLeft />
            </button>
            <button onClick={nextTestimonial} className="bg-primary p-3 rounded-full text-white hover:bg-secondary transition-colors">
              <ArrowRight />
            </button>
          </div>
      </div>
    </section>
  );
}

export default Testimonials;