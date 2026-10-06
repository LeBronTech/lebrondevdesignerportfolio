import React, { useState, useEffect, useRef } from 'react';
import SectionTitle from './SectionTitle';
import { socialMediaBrands } from './data';
import { Instagram, ExternalLink, Loader2, ChevronLeft, ChevronRight, Play, Pause, X, ZoomIn } from 'lucide-react';

const socialMediaWords = [
  "edição de vídeo.",
  "criação de post.",
  "gerenciamento de Instagram.",
  "captação de leads.",
  "gestão de tráfego pago.",
  "resposta de comentários."
];

const SocialMediaTypingText: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    if (subIndex === socialMediaWords[index].length + 1 && !reverse) {
      setTimeout(() => setReverse(true), 800);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % socialMediaWords.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? 30 : 60);

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  return (
    <div className="text-lg md:text-xl font-secondary text-foreground/75 h-8 flex items-center justify-center gap-1 mt-2">
      <span className="font-bold text-secondary gradient-title-animation">
        {`${socialMediaWords[index].substring(0, subIndex)}`}
      </span>
      <span className="animate-pulse text-secondary font-bold">|</span>
    </div>
  );
};

const SocialMedia: React.FC = () => {
  const [selectedBrandId, setSelectedBrandId] = useState<number>(socialMediaBrands[0]?.id || 11);
  const [loadedIframes, setLoadedIframes] = useState<{ [key: number]: boolean }>({});
  const [isPaused, setIsPaused] = useState(false);
  const autoplayTimerRef = useRef<NodeJS.Timeout | null>(null);
  const [progress, setProgress] = useState(0); // For story transition progress bar
  const progressIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const [isFlashing, setIsFlashing] = useState(false);
  const [flashKey, setFlashKey] = useState(0);
  const flashTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const storiesTrayRef = useRef<HTMLDivElement>(null);
  const storiesCarouselRef = useRef<HTMLDivElement>(null);
  const storyButtonsRef = useRef<{ [key: number]: HTMLButtonElement | null }>({});
  const showcaseRef = useRef<HTMLDivElement>(null);
  const [selectedModalImage, setSelectedModalImage] = useState<string | null>(null);
  const brandPostsScrollRef = useRef<HTMLDivElement>(null);

  const scrollBrandPosts = (direction: 'left' | 'right') => {
    if (brandPostsScrollRef.current) {
      const scrollAmount = 360;
      brandPostsScrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  // Centraliza o story selecionado horizontalmente no carrossel de stories
  const centerStoryHorizontally = (brandId: number) => {
    const container = storiesCarouselRef.current;
    const button = storyButtonsRef.current[brandId];
    if (container && button) {
      const buttonLeft = button.offsetLeft;
      const buttonWidth = button.offsetWidth;
      const containerWidth = container.clientWidth;
      const targetLeft = buttonLeft - (containerWidth / 2) + (buttonWidth / 2);
      container.scrollTo({
        left: Math.max(0, targetLeft),
        behavior: 'smooth'
      });
    }
  };

  const scrollStories = (direction: 'left' | 'right') => {
    if (storiesCarouselRef.current) {
      const scrollAmount = 280;
      storiesCarouselRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    centerStoryHorizontally(selectedBrandId);
    if (brandPostsScrollRef.current) {
      brandPostsScrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
    }
  }, [selectedBrandId]);

  const selectedBrand = socialMediaBrands.find(b => b.id === selectedBrandId) || socialMediaBrands[0];

  // Auto-advance logic configurado para 3 segundos por story
  useEffect(() => {
    // Clear existing timers
    if (autoplayTimerRef.current) clearInterval(autoplayTimerRef.current);
    if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);

    if (isPaused) {
      return;
    }

    // Reset progress when brand changes
    setProgress(0);

    const duration = 3000; // 3 segundos exatos por marca
    const updateInterval = 30; // Atualiza a barra de progresso a cada 30ms para animação fluida
    const step = (updateInterval / duration) * 100;

    progressIntervalRef.current = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          // Passagem automática para o próximo story
          const currentIndex = socialMediaBrands.findIndex(b => b.id === selectedBrandId);
          const nextIndex = (currentIndex + 1) % socialMediaBrands.length;
          setSelectedBrandId(socialMediaBrands[nextIndex].id);
          return 0;
        }
        return prev + step;
      });
    }, updateInterval);

    return () => {
      if (autoplayTimerRef.current) clearInterval(autoplayTimerRef.current);
      if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
    };
  }, [selectedBrandId, isPaused]);

  const handleBrandSelect = (brandId: number) => {
    setSelectedBrandId(brandId);
    setProgress(0);
    
    // Trigger flashing border effect (2 pulses with the story gradient)
    setFlashKey(prev => prev + 1);
    setIsFlashing(true);
    if (flashTimeoutRef.current) clearTimeout(flashTimeoutRef.current);
    flashTimeoutRef.current = setTimeout(() => {
      setIsFlashing(false);
    }, 1300);
    
    // Smooth scroll positioning so the stories carousel stays right at the top and fully visible
    if (storiesTrayRef.current) {
      const headerOffset = 80;
      const elementRect = storiesTrayRef.current.getBoundingClientRect();
      const currentScrollY = window.pageYOffset || window.scrollY;
      const targetScroll = currentScrollY + elementRect.top - headerOffset;
      
      // Apenas rola se o carrossel de stories não estiver já próximo do topo
      if (Math.abs(elementRect.top - headerOffset) > 25) {
        window.scrollTo({
          top: Math.max(0, targetScroll),
          behavior: 'smooth'
        });
      }
    }
  };

  const handleIframeLoad = (id: number) => {
    setLoadedIframes(prev => ({ ...prev, [id]: true }));
  };

  return (
    <section ref={sectionRef} id="social-media" className="py-20 bg-background relative overflow-hidden border-t border-white/5">
      {/* Decorative background gradients */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl pointer-events-none animate-pulse" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-secondary/10 rounded-full filter blur-3xl pointer-events-none animate-pulse" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <SectionTitle title="Social Media" subtitle="Gerenciamento de redes sociais" />
        
        <div className="max-w-3xl mx-auto text-center mb-12" data-aos="fade-up">
          <p className="text-foreground/80 text-xl font-bold tracking-wide">
            +de 10 empresas gerenciadas
          </p>
          <SocialMediaTypingText />
        </div>

        {/* Stories Horizontal Tray */}
        <div 
          ref={storiesTrayRef}
          id="stories-tray"
          className="flex flex-col items-center justify-center mb-16 relative scroll-mt-24 w-full"
          data-aos="fade-up"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Pause / Play Indicator Badge - Clicável para pausar ou retomar */}
          <button
            onClick={() => setIsPaused(prev => !prev)}
            className="absolute -top-6 right-4 flex items-center gap-2 text-xs text-foreground/60 hover:text-foreground bg-card/60 hover:bg-card border border-white/10 px-2.5 py-1 rounded-full backdrop-blur-sm transition-colors cursor-pointer"
            title={isPaused ? "Retomar rotação automática" : "Pausar rotação automática"}
          >
            {isPaused ? (
              <>
                <Pause size={10} className="text-amber-500 animate-pulse" />
                <span>Rotação pausada</span>
              </>
            ) : (
              <>
                <Play size={10} className="text-primary animate-pulse" />
                <span>Auto-avançando (3s)</span>
              </>
            )}
          </button>

          {/* Botões de seta para rolagem horizontal suave no desktop */}
          <button
            onClick={() => scrollStories('left')}
            className="hidden md:flex absolute -left-2 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-background/90 hover:bg-background border border-white/15 items-center justify-center text-foreground/80 hover:text-white shadow-xl hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
            aria-label="Rolar stories para a esquerda"
          >
            <ChevronLeft size={18} />
          </button>

          <button
            onClick={() => scrollStories('right')}
            className="hidden md:flex absolute -right-2 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-background/90 hover:bg-background border border-white/15 items-center justify-center text-foreground/80 hover:text-white shadow-xl hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
            aria-label="Rolar stories para a direita"
          >
            <ChevronRight size={18} />
          </button>

          <div 
            ref={storiesCarouselRef}
            className="flex items-center justify-start gap-4 sm:gap-6 md:gap-7 overflow-x-auto py-3 w-full no-scrollbar px-4 sm:px-6 md:px-8 scroll-smooth"
          >
            {socialMediaBrands.map((brand) => {
              const isSelected = brand.id === selectedBrandId;
              return (
                <button
                  key={brand.id}
                  ref={(el) => { storyButtonsRef.current[brand.id] = el; }}
                  onClick={() => handleBrandSelect(brand.id)}
                  className="flex flex-col items-center gap-2 group cursor-pointer focus:outline-none flex-shrink-0"
                >
                  {/* Story Outer Circle */}
                  <div className="relative">
                    {/* Ring background: colored gradient for active or unselected */}
                    <div 
                      className={`absolute inset-[-2.5px] rounded-full transition-all duration-300 ${
                        isSelected 
                          ? 'bg-gradient-to-tr from-pink-500 via-purple-600 to-orange-400 rotate-180' 
                          : 'bg-white/15 group-hover:bg-gradient-to-tr group-hover:from-pink-500/40 group-hover:via-purple-600/40 group-hover:to-orange-400/40'
                      }`}
                    />

                    {/* Circular Progress Overlay for the Selected Story (Using Fluid ViewBox) */}
                    {isSelected && !isPaused && (
                      <svg viewBox="0 0 100 100" className="absolute inset-[-2.5px] w-[calc(100%+5px)] h-[calc(100%+5px)] -rotate-90 pointer-events-none z-10">
                        <circle
                          cx="50"
                          cy="50"
                          r="48"
                          stroke="url(#story-gradient)"
                          strokeWidth="2"
                          fill="transparent"
                          strokeDasharray="301.6"
                          strokeDashoffset={301.6 - (301.6 * progress) / 100}
                          className="transition-all duration-30 ease-linear"
                        />
                        <defs>
                          <linearGradient id="story-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#ec4899" />
                            <stop offset="50%" stopColor="#a855f7" />
                            <stop offset="100%" stopColor="#f97316" />
                          </linearGradient>
                        </defs>
                      </svg>
                    )}
                    
                    {/* Inner Content Area */}
                    <div className="relative w-16 h-16 md:w-[72px] md:h-[72px] rounded-full bg-background p-[2px] overflow-hidden z-0">
                      <div className="w-full h-full rounded-full overflow-hidden bg-card border border-white/5 relative group-hover:scale-105 transition-transform duration-300 flex items-center justify-center">
                        <img
                          src={brand.logo}
                          alt={`${brand.companyName} Logo`}
                          className="w-full h-full object-cover select-none"
                          referrerPolicy="no-referrer"
                          loading="eager"
                        />
                        {/* Overlay shadow on inactive */}
                        {!isSelected && (
                          <div className="absolute inset-0 bg-black/35 group-hover:bg-black/0 transition-colors duration-300 pointer-events-none" />
                        )}
                      </div>
                    </div>

                    {/* Active Check Dot */}
                    {isSelected && (
                      <span className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-primary border-2 border-background rounded-full z-10 animate-bounce" />
                    )}
                  </div>

                  {/* Brand Name */}
                  <span 
                    className={`text-[11px] md:text-xs font-semibold tracking-wide transition-colors duration-300 ${
                      isSelected 
                        ? 'text-primary font-bold scale-105' 
                        : 'text-foreground/60 group-hover:text-foreground'
                    }`}
                  >
                    {brand.companyName === 'Gonçalves Engenharia' ? 'Gonçalves' : brand.companyName}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Brand Gallery Area - Tamanho Fixo Padrão para não empurrar os elementos de baixo */}
        <div 
          ref={showcaseRef}
          id="brand-showcase"
          className="scroll-mt-24 bg-card/40 border border-white/10 rounded-3xl p-6 md:p-8 backdrop-blur-md relative transition-all duration-300 min-h-[720px] md:h-[750px] flex flex-col justify-between overflow-hidden"
          data-aos="fade-up"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Subtle thin gradient contour with 2-pulse flash animation on select */}
          <div 
            key={`flash-${flashKey}`}
            className={`absolute inset-0 rounded-3xl p-[1px] pointer-events-none transition-opacity duration-300 ${
              isFlashing ? 'animate-border-flash z-30 opacity-100' : 'opacity-20 hover:opacity-40'
            }`}
            style={{
              background: 'linear-gradient(135deg, #ec4899, #8b5cf6, #f97316)',
              WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
              WebkitMaskComposite: 'xor',
              maskComposite: 'exclude',
            }}
          />

          {/* Selected Brand Content with unified smooth transition for all brands */}
          <div key={`brand-content-${selectedBrand.id}`} className="animate-brand-fade flex flex-col h-full justify-between">
            {/* Header of selected brand */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/5 flex-shrink-0">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full overflow-hidden border border-white/10 flex-shrink-0 bg-card">
                  <img
                    src={selectedBrand.logo}
                    alt={`${selectedBrand.companyName} Logo`}
                    className="w-full h-full object-cover select-none"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2.5 flex-wrap">
                    <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight">
                      {selectedBrand.companyName}
                    </h3>
                    <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-primary/20 text-primary uppercase tracking-wider">
                      {selectedBrand.category}
                    </span>
                  </div>
                  <p className="text-xs md:text-sm text-foreground/60">
                    Trabalhos criativos e estratégicos de Social Media
                  </p>
                </div>
              </div>

              {/* Services provided list */}
              {selectedBrand.servicesList && selectedBrand.servicesList.length > 0 && (
                <div className="flex flex-wrap items-center gap-1.5 max-w-xl md:justify-end">
                  {selectedBrand.servicesList.map((service, sIdx) => (
                    <span 
                      key={sIdx} 
                      className="text-[11px] font-semibold px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-gray-300 flex items-center gap-1.5"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      <span className="truncate">{service}</span>
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* Posts Carousel Container com altura fixa padrão */}
            <div className="relative flex-grow flex items-center justify-center my-auto min-h-[510px] py-2 overflow-hidden">
              {/* Left & Right navigation buttons for brands with multiple posts */}
              {selectedBrand.posts.length > 1 && (
                <>
                  <button
                    onClick={() => scrollBrandPosts('left')}
                    className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-background/90 hover:bg-background border border-white/20 flex items-center justify-center text-white shadow-2xl hover:scale-110 active:scale-95 transition-all cursor-pointer backdrop-blur-md"
                    aria-label="Ver publicação anterior"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    onClick={() => scrollBrandPosts('right')}
                    className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-background/90 hover:bg-background border border-white/20 flex items-center justify-center text-white shadow-2xl hover:scale-110 active:scale-95 transition-all cursor-pointer backdrop-blur-md"
                    aria-label="Ver próxima publicação"
                  >
                    <ChevronRight size={20} />
                  </button>
                </>
              )}

              {/* Horizontal Posts Scroll Row */}
              <div 
                ref={brandPostsScrollRef}
                className={`flex items-center gap-6 overflow-x-auto no-scrollbar scroll-smooth px-2 py-1 w-full h-[510px] ${
                  selectedBrand.posts.length <= 2 ? 'justify-center' : 'justify-start md:justify-center'
                }`}
              >
                {selectedBrand.posts.map((post) => (
                  <div
                    key={post.id}
                    className="post-card-container w-[300px] sm:w-[330px] md:w-[340px] h-[495px] bg-background/60 rounded-2xl border border-white/10 shadow-2xl overflow-hidden hover:border-primary/50 hover:shadow-primary/10 transition-all duration-300 flex flex-col flex-shrink-0 group select-none snap-center"
                  >
                    {/* Header of Card */}
                    <div className="p-3.5 flex items-center justify-between border-b border-white/5 bg-black/20 flex-shrink-0 h-[52px]">
                      <div className="flex items-center gap-2.5">
                        <div className="relative w-7 h-7 rounded-full overflow-hidden border border-white/15 flex-shrink-0">
                          <img
                            src={selectedBrand.logo}
                            alt={`${selectedBrand.companyName} Logo`}
                            className="w-full h-full object-cover"
                            referrerPolicy="no-referrer"
                          />
                        </div>
                        <div className="overflow-hidden">
                          <h4 className="text-xs font-semibold text-white tracking-wide truncate max-w-[170px]">
                            {selectedBrand.companyName}
                          </h4>
                          <span className="text-[9px] text-gray-400 block truncate">
                            Publicado no Instagram
                          </span>
                        </div>
                      </div>
                      
                      <a
                        href={post.postUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded-full bg-black/40 hover:bg-primary/20 text-gray-400 hover:text-primary transition-all duration-300"
                        title="Ver no Instagram"
                      >
                        <Instagram size={14} />
                      </a>
                    </div>

                    {/* Media Area (Exact uniform height 395px across all cards) */}
                    <div className="relative w-full h-[395px] bg-black/40 flex-grow flex items-center justify-center overflow-hidden">
                      {post.isImage ? (
                        <>
                          <img
                            src={post.embedUrl}
                            alt={`Publicação de ${selectedBrand.companyName}`}
                            className={`w-full h-full select-none ${
                              post.isLongImage ? 'object-contain p-2' : 'object-cover'
                            } group-hover:scale-[1.02] transition-transform duration-500`}
                          />
                          {/* Hover Overlay with High-Resolution Lightbox Button */}
                          <div 
                            onClick={() => setSelectedModalImage(post.embedUrl)}
                            className="absolute inset-0 bg-black/55 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-2 cursor-pointer p-4 text-center"
                          >
                            <span className="text-xs font-bold text-white bg-primary hover:bg-primary/90 px-4 py-2 rounded-full flex items-center gap-1.5 shadow-xl hover:scale-105 transition-all">
                              <ZoomIn size={14} />
                              Ver em Alta Resolução
                            </span>
                            <span className="text-[10px] text-gray-300">
                              Clique para abrir em tela cheia
                            </span>
                          </div>
                        </>
                      ) : (
                        <div className="relative w-full h-full bg-black/40 flex flex-col">
                          {!loadedIframes[post.id] && (
                            <div className="absolute inset-0 flex flex-col items-center justify-center bg-card/95 backdrop-blur-sm z-10 transition-opacity duration-300">
                              <Loader2 className="w-8 h-8 text-primary animate-spin mb-2" />
                              <span className="text-xs text-gray-400 font-medium">Sincronizando com Instagram...</span>
                            </div>
                          )}
                          
                          <iframe
                            src={post.embedUrl}
                            onLoad={() => handleIframeLoad(post.id)}
                            className="w-full h-full border-0 absolute inset-0 z-0 bg-transparent"
                            allowtransparency="true"
                            allow="encrypted-media"
                            scrolling="no"
                            title={`Instagram post from ${selectedBrand.companyName}`}
                          ></iframe>
                        </div>
                      )}
                    </div>

                    {/* Card Footer (Exact uniform height 48px) */}
                    <div className="p-3 bg-black/20 border-t border-white/5 flex items-center justify-center flex-shrink-0 h-[48px]">
                      {post.isImage ? (
                        <button
                          onClick={() => setSelectedModalImage(post.embedUrl)}
                          className="flex items-center gap-1.5 text-xs font-semibold text-gray-300 hover:text-white transition-colors cursor-pointer"
                        >
                          <ZoomIn size={12} className="text-primary" />
                          <span>Visualizar imagem ampliada</span>
                        </button>
                      ) : (
                        <a
                          href={post.postUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 text-xs font-semibold text-gray-400 group-hover:text-secondary transition-colors duration-300"
                        >
                          <span>Abrir publicação original</span>
                          <ExternalLink size={12} className="opacity-70" />
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Showcase Bottom Info Bar (Fixed height 40px) */}
            <div className="flex items-center justify-between pt-4 border-t border-white/5 text-xs text-foreground/60 flex-shrink-0 h-[40px]">
              <span className="flex items-center gap-1.5 font-medium">
                <Instagram size={13} className="text-primary" /> 
                {selectedBrand.posts.length > 1 
                  ? `${selectedBrand.posts.length} publicações desta marca`
                  : 'Publicação em destaque'}
              </span>
              
              {selectedBrand.posts.length > 1 ? (
                <div className="flex items-center gap-2">
                  <span className="text-[11px] text-foreground/50">
                    Use as setas ou deslize para ver todas
                  </span>
                </div>
              ) : (
                <a 
                  href={selectedBrand.posts[0]?.postUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-primary hover:underline flex items-center gap-1 text-[11px] font-medium"
                >
                  Abrir no Instagram <ExternalLink size={11} />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Full-Screen Lightbox Modal para imagens em alta resolução sem afetar layout da página */}
      {selectedModalImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 md:p-8 animate-fade-in"
          onClick={() => setSelectedModalImage(null)}
        >
          <button
            onClick={() => setSelectedModalImage(null)}
            className="absolute top-6 right-6 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer z-50 border border-white/15"
            aria-label="Fechar visualização"
          >
            <X size={22} />
          </button>
          <div 
            className="relative max-w-4xl max-h-[90vh] overflow-auto rounded-2xl border border-white/10 shadow-2xl p-2 bg-black/60 flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedModalImage}
              alt="Publicação em alta definição"
              className="w-auto h-auto max-h-[85vh] max-w-full object-contain mx-auto rounded-xl select-none"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default SocialMedia;
