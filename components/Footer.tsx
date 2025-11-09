import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-background border-t border-card/50 py-8">
      <div className="container mx-auto px-6 md:px-12 text-center text-foreground/60">
        <img src="https://i.postimg.cc/tgpJ2Hcy/Lebron-20251025-153441-0000.png" alt="LeBron Logo" className="h-10 w-auto mx-auto mb-4" />
        <p>&copy; {new Date().getFullYear()}. Direitos reservados a <a href="https://github.com/LeBronTech" target="_blank" rel="noreferrer" className="text-primary hover:underline">Lebron Tech</a>.</p>
      </div>
    </footer>
  );
}

export default Footer;