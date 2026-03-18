import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-background border-t border-card/50 py-8">
      <div className="container mx-auto px-6 md:px-12 text-center text-foreground/60">
        <img 
          src="https://iili.io/qXAudla.webp" 
          alt="LeBron Logo" 
          className="h-10 w-auto mx-auto mb-4" 
          width="160"
          height="40"
          loading="lazy"
        />
        <p>&copy; {new Date().getFullYear()}. Direitos reservados a <a href="https://github.com/LeBronTech" target="_blank" rel="noreferrer" className="text-primary hover:underline">Lebron Tech</a>.</p>
      </div>
    </footer>
  );
}

export default Footer;