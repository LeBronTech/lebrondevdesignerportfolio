import React, { useState, useEffect, useRef } from 'react';
import SectionTitle from './SectionTitle';
import { socialMediaBrands, SocialMediaBrand } from './data';
import { Instagram, ExternalLink, Loader2, ChevronLeft, ChevronRight, Play, Pause, ChevronDown, ChevronUp } from 'lucide-react';

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
  const [selectedBrandId, setSelectedBrandId] = useState<number>(socialMediaBrands[0]?.id || 1);
  const [loadedIframes, setLoadedIframes] = useState<{ [key: number]: boolean }>({});
  const [isPaused, setIsPaused] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const autoplayTimerRef = useRef<NodeJS.Timeout | null>(null);
  const [progress, setProgress] = useState(0); // For story transition progress bar
  const progressIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const [expandedLongImages, setExpandedLongImages] = useState<{ [key: number]: boolean }>({});
  const [hasClickedStory, setHasClickedStory] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const toggleLongImage = (postId: number) => {
    setExpandedLongImages(prev => ({
      ...prev,
      [postId]: !prev[postId]
    }));
  };

  const selectedBrand = socialMediaBrands.find(b => b.id === selectedBrandId) || socialMediaBrands[0];

  // Auto-advance logic
  useEffect(() => {
    // Clear existing timers
    if (autoplayTimerRef.current) clearInterval(autoplayTimerRef.current);
    if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);

    if (isPaused || hasClickedStory) {
      return;
    }

    // Reset progress when brand changes
    setProgress(0);

    const duration = 6000; // 6 seconds per brand
    const updateInterval = 60; // Update progress bar every 60ms
    const step = (updateInterval / duration) * 100;

    progressIntervalRef.current = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          // Time to go to next brand
          const currentIndex = socialMediaBrands.findIndex(b => b.id === selectedBrandId);
          const nextIndex = (currentIndex + 1) % socialMediaBrands.length;
          setSelectedBrandId(socialMediaBrands[nextIndex].id);
          setIsExpanded(false);
          setExpandedLongImages({});
          return 0;
        }
        return prev + step;
      });
    }, updateInterval);

    return () => {
      if (autoplayTimerRef.current) clearInterval(autoplayTimerRef.current);
      if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
    };
  }, [selectedBrandId, isPaused, hasClickedStory]);

  const handleBrandSelect = (brandId: number) => {
    setSelectedBrandId(brandId);
    setProgress(0);
    setIsExpanded(false);
    setExpandedLongImages({});
    setHasClickedStory(true);
    
    // Smooth scroll up to the social-media section/title
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
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
          className="flex flex-col items-center justify-center mb-16 relative"
          data-aos="fade-up"
          onMouseEnter={() => !hasClickedStory && setIsPaused(true)}
          onMouseLeave={() => !hasClickedStory && setIsPaused(false)}
        >
          {/* Pause / Play Indicator Badge */}
          <div className="absolute -top-6 right-4 flex items-center gap-2 text-xs text-foreground/40 bg-card/40 border border-white/5 px-2.5 py-1 rounded-full backdrop-blur-sm">
            {isPaused || hasClickedStory ? (
              <>
                <Pause size={10} className="text-amber-500 animate-pulse" />
                <span>Rotação pausada</span>
              </>
            ) : (
              <>
                <Play size={10} className="text-primary animate-pulse" />
                <span>Auto-avançando</span>
              </>
            )}
          </div>

          <div className="flex items-center justify-start md:justify-center gap-5 md:gap-8 overflow-x-auto py-3 w-full no-scrollbar px-6 scroll-smooth">
            {socialMediaBrands.map((brand) => {
              const isSelected = brand.id === selectedBrandId;
              return (
                <button
                  key={brand.id}
                  onClick={() => handleBrandSelect(brand.id)}
                  className="flex flex-col items-center gap-2 group cursor-pointer focus:outline-none flex-shrink-0"
                >
                  {/* Story Outer Circle */}
                  <div className="relative">
                    {/* Ring background: colored gradient for active or unselected */}
                    <div 
                      className={`absolute inset-[-4px] rounded-full transition-all duration-500 ${
                        isSelected 
                          ? 'bg-gradient-to-tr from-pink-500 via-purple-600 to-orange-400 rotate-180 scale-105 shadow-lg shadow-pink-500/20' 
                          : 'bg-white/10 group-hover:bg-gradient-to-tr group-hover:from-pink-500/50 group-hover:via-purple-600/50 group-hover:to-orange-400/50 group-hover:scale-102'
                      }`}
                    />

                    {/* Circular Progress Overlay for the Selected Story (Using Fluid ViewBox) */}
                    {isSelected && !isPaused && (
                      <svg viewBox="0 0 100 100" className="absolute inset-[-4px] w-[calc(100%+8px)] h-[calc(100%+8px)] -rotate-90 pointer-events-none z-10">
                        <circle
                          cx="50"
                          cy="50"
                          r="46"
                          stroke="url(#story-gradient)"
                          strokeWidth="3"
                          fill="transparent"
                          strokeDasharray="289"
                          strokeDashoffset={289 - (289 * progress) / 100}
                          className="transition-all duration-75 ease-linear"
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
                    
                    {/* Inner Content Area - Reduced sizes */}
                    <div className="relative w-16 h-16 md:w-18 md:h-18 rounded-full bg-background p-1 overflow-hidden z-0">
                      <div className="w-full h-full rounded-full overflow-hidden bg-card border border-white/5 relative group-hover:scale-105 transition-transform duration-300">
                        <img
                          src={brand.logo}
                          alt={`${brand.companyName} Logo`}
                          className="w-full h-full object-cover select-none"
                        />
                        {/* Overlay shadow on inactive */}
                        {!isSelected && (
                          <div className="absolute inset-0 bg-black/35 group-hover:bg-black/0 transition-colors duration-300" />
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

        {/* Selected Brand Gallery Area */}
        <div 
          className="bg-card/40 border border-white/5 rounded-3xl p-6 md:p-10 backdrop-blur-md relative"
          data-aos="fade-up"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Header of selected brand */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-white/5 mb-10">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full overflow-hidden border border-white/10 flex-shrink-0">
                <img
                  src={selectedBrand.logo}
                  alt={`${selectedBrand.companyName} Logo`}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight">
                  {selectedBrand.companyName}
                </h3>
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-primary/20 text-primary uppercase tracking-wider w-fit">
                  {selectedBrand.category}
                </span>
                <p className="text-sm text-foreground/60 mt-0.5">
                  Trabalhos criativos e estratégicos de Social Media
                </p>
              </div>
            </div>

            {/* Services provided list */}
            {selectedBrand.servicesList && selectedBrand.servicesList.length > 0 && (
              <div className="flex flex-wrap items-center gap-2 max-w-2xl md:justify-end">
                {selectedBrand.servicesList.map((service, sIdx) => (
                  <span 
                    key={sIdx} 
                    className="text-xs font-semibold px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:border-primary/40 hover:text-primary transition-all duration-300 flex items-center gap-1.5"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {service}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Collapsible Wrapper for Grid Layout */}
          <div 
            className={`relative transition-all duration-1000 ease-in-out overflow-hidden ${
              isExpanded || selectedBrand.posts.length <= 1
                ? 'max-h-[5000px] pb-24' 
                : 'max-h-[820px] pb-32'
            }`}
          >
            {/* Grid Layout of the posts of the selected brand */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8 justify-center">
              {selectedBrand.posts.map((post) => (
                <div
                  key={post.id}
                  className="w-full max-w-[400px] bg-background/50 rounded-2xl border border-white/5 shadow-2xl overflow-hidden hover:border-primary/45 hover:shadow-primary/5 transition-all duration-300 flex flex-col group mx-auto"
                >
                  {/* Header of Card */}
                  <div className="p-4 flex items-center justify-between border-b border-white/5 bg-black/10">
                    <div className="flex items-center gap-3">
                      <div className="relative w-8 h-8 rounded-full overflow-hidden border border-white/15 flex-shrink-0">
                        <img
                          src={selectedBrand.logo}
                          alt={`${selectedBrand.companyName} Logo`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="text-xs font-semibold text-white tracking-wide">
                          {selectedBrand.companyName}
                        </h4>
                        <span className="text-[9px] text-gray-400 font-medium">
                          Publicado no Instagram
                        </span>
                      </div>
                    </div>
                    
                    <a
                      href={post.postUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-full bg-black/30 hover:bg-primary/20 text-gray-400 hover:text-primary transition-all duration-300"
                      title="Ver no Instagram"
                    >
                      <Instagram size={14} />
                    </a>
                  </div>

                  {/* Instagram Live Embed Preview container */}
                  {post.isImage ? (
                    post.isLongImage ? (
                      <div 
                        className="relative w-full bg-black/25 flex-grow overflow-hidden flex flex-col items-center transition-all duration-500 ease-in-out"
                        style={{ maxHeight: expandedLongImages[post.id] ? '2000px' : '350px' }}
                      >
                        <img
                          src={post.embedUrl}
                          alt={`Publicação de ${selectedBrand.companyName}`}
                          className="w-full h-auto object-top group-hover:scale-[1.01] transition-transform duration-500 select-none pointer-events-none"
                        />
                        
                        {!expandedLongImages[post.id] ? (
                          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent flex items-end justify-center pb-8 z-10">
                            <button
                              onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                toggleLongImage(post.id);
                              }}
                              className="text-xs font-bold text-white bg-primary hover:bg-primary/90 px-4 py-2.5 rounded-full flex items-center gap-1.5 shadow-lg shadow-primary/20 hover:scale-105 transition-all duration-300 pointer-events-auto"
                            >
                              <ChevronDown size={14} />
                              Ver mais da imagem
                            </button>
                          </div>
                        ) : (
                          <div className="absolute bottom-4 left-0 right-0 flex justify-center z-10">
                            <button
                              onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                toggleLongImage(post.id);
                              }}
                              className="text-xs font-bold text-white bg-black/80 hover:bg-black border border-white/10 px-4 py-2 rounded-full flex items-center gap-1.5 shadow-lg hover:scale-105 transition-all duration-300 pointer-events-auto"
                            >
                              <ChevronUp size={14} />
                              Ver menos
                            </button>
                          </div>
                        )}
                      </div>
                    ) : (
                      <div className="relative w-full aspect-[4/5] bg-black/25 flex-grow overflow-hidden flex items-center justify-center">
                        <img
                          src={post.embedUrl}
                          alt={`Publicação de ${selectedBrand.companyName}`}
                          className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500 select-none pointer-events-none"
                        />
                        {/* Elegant hover badge indicating interactive preview */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                          <span className="text-[11px] font-bold text-white bg-primary/95 px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg">
                            <Instagram size={12} />
                            Ver Imagem Completa
                          </span>
                        </div>
                      </div>
                    )
                  ) : (
                    <div className="relative w-full aspect-[4/5] bg-black/40 min-h-[440px] flex-grow flex flex-col">
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

                  {/* Card Footer */}
                  <div className="p-4 bg-black/10 border-t border-white/5 flex justify-center">
                    <a
                      href={post.postUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-xs font-bold text-gray-400 group-hover:text-secondary transition-colors duration-300"
                    >
                      <span>{post.isImage ? 'Abrir imagem em alta definição' : 'Abrir publicação original'}</span>
                      <ExternalLink size={12} className="opacity-70" />
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Purple vignette behind collapsed view */}
            {!isExpanded && selectedBrand.posts.length > 1 && (
              <div className="absolute bottom-0 left-0 right-0 h-72 bg-gradient-to-t from-background via-purple-950/60 to-transparent pointer-events-none z-20" />
            )}

            {/* "Ver mais" / "Ver menos" Button */}
            {selectedBrand.posts.length > 1 && (
              <div className="absolute bottom-6 left-0 right-0 flex justify-center z-30">
                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="px-6 py-3 rounded-full bg-gradient-to-r from-primary to-purple-600 hover:from-primary/95 hover:to-purple-600/95 text-white font-bold text-sm tracking-wide shadow-xl shadow-primary/30 hover:shadow-primary/45 active:scale-95 transition-all duration-300 flex items-center gap-2 border border-white/10"
                >
                  <span>{isExpanded ? 'Ver menos' : 'Ver mais'}</span>
                  {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialMedia;
