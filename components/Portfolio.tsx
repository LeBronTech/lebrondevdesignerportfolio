import React, { useState, useMemo, useCallback, useEffect } from 'react';
import SectionTitle from './SectionTitle';
import { portfolio, tools } from './data';
import { ArrowLeft, ArrowRight, X, LayoutGrid, Globe, Smartphone, Palette, PenTool, Briefcase, Calendar, ClipboardList } from 'lucide-react';

const allTools = Object.values(tools).flat();

interface Project {
  id: number;
  category: string;
  title: string;
  images: string[];
  description: string;
  tools: string[];
  liveUrl: string | null;
  behanceUrl?: string | null;
  logo?: string;
  detailedContent?: Array<{
    image: string;
    description: string;
  }>;
  role?: string;
  timeline?: string;
  methodology?: string;
}


// A card component that is controlled by its parent
const ProjectCard = ({ 
    project, 
    onOpenModal,
    isPreview,
    onTogglePreview
}: { 
    project: Project, 
    onOpenModal: (project: Project) => void,
    isPreview: boolean,
    onTogglePreview: () => void
}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    // Optimization: Only load secondary images if user interacts
    const [hasInteracted, setHasInteracted] = useState(false);

    const getToolIcon = (toolName: string) => {
        const tool = allTools.find(t => t.name.toLowerCase() === toolName.toLowerCase());
        return tool ? tool.icon : '';
    };

    const handleMouseEnter = () => {
        setIsHovered(true);
        setHasInteracted(true);
    };

    useEffect(() => {
        if (project.images.length <= 1 || !isHovered || isPreview) {
            return;
        };

        const timer = setInterval(() => {
            setCurrentIndex(prev => (prev + 1) % project.images.length);
        }, 3000);
        return () => clearInterval(timer);
    }, [isHovered, isPreview, project.images.length]);

    const handleDetailsClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        onOpenModal(project);
    };
    
    return (
        <div
            className="group relative rounded-lg overflow-hidden cursor-pointer shadow-lg h-72"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={() => setIsHovered(false)}
            onClick={onTogglePreview}
            role="button"
            tabIndex={0}
            aria-label={`View details for ${project.title}`}
        >
            {/* Image Carousel with Fade Transition */}
            {project.images.map((image, index) => {
                // PERFORMANCE OPTIMIZATION:
                // Only render the first image initially. 
                // Render others only if hovered/interacted to save bandwidth.
                if (index !== 0 && !hasInteracted && !isPreview) return null;

                return (
                    <img 
                        key={image}
                        src={image} 
                        alt={project.title}
                        loading="lazy" 
                        decoding="async"
                        className={`absolute inset-0 w-full h-full object-cover object-center transition-all duration-700 ease-in-out group-hover:scale-110 ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
                    />
                );
            })}

            {/* Persistent Info Bar */}
            <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/80 to-transparent pointer-events-none z-10 flex justify-between items-end">
                 <div>
                    <h3 className="text-lg font-bold text-white truncate drop-shadow-md">{project.title}</h3>
                    <div className="flex gap-2 mt-1">
                        {project.tools.slice(0, 4).map(tool => (
                        <img key={tool} src={getToolIcon(tool)} alt={tool} loading="lazy" className="w-5 h-5 object-contain bg-white/10 rounded-sm p-0.5 backdrop-blur-sm"/>
                        ))}
                    </div>
                 </div>
                 <span className="bg-primary/90 backdrop-blur-sm text-primary-foreground text-xs font-semibold py-1 px-2.5 rounded-full whitespace-nowrap shadow-sm">
                    {project.category}
                 </span>
            </div>

            {/* Preview Overlay (controlled by parent) */}
            <div className={`absolute inset-0 bg-card/95 p-4 flex flex-col justify-center items-center text-center transition-opacity duration-300 z-20 ${isPreview ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                <h3 className="text-xl font-bold text-primary mb-2">{project.title}</h3>
                 <div className="flex gap-3 mb-4 flex-wrap justify-center">
                    {project.tools.map(tool => (
                      <div key={tool} className="bg-background/50 p-1.5 rounded-md" title={tool}>
                        <img src={getToolIcon(tool)} alt={tool} className="w-6 h-6 object-contain"/>
                      </div>
                    ))}
                  </div>
                <button
                    onClick={handleDetailsClick}
                    className="mt-2 text-sm font-semibold py-2.5 px-6 bg-primary text-primary-foreground rounded-full hover:bg-secondary transition-all transform hover:scale-105 shadow-lg"
                >
                    Ver detalhes completos
                </button>
            </div>
        </div>
    );
};

// New component for the logo carousel in the modal
const LogoCarousel = ({ project }: { project: Project }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    if (!project.images || project.images.length === 0) {
        return <p className="text-center text-foreground/70">Nenhuma imagem disponível.</p>;
    }

    return (
        <div className="flex flex-col items-center">
            {/* Main Image */}
            <div className="mb-4 rounded-lg overflow-hidden bg-background/20 p-4 w-full max-w-md border border-white/5">
                <img 
                    src={project.images[currentIndex]} 
                    alt={`${project.title} - view ${currentIndex + 1}`} 
                    className="w-full h-auto object-contain max-h-[50vh] transition-opacity duration-300"
                />
            </div>
            
            {/* Thumbnails (only if more than one image) */}
            {project.images.length > 1 && (
                <div className="flex justify-center gap-2 flex-wrap max-w-lg">
                    {project.images.map((img, index) => (
                        <button 
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`w-16 h-16 rounded-md overflow-hidden border-2 transition-all duration-200 ${currentIndex === index ? 'border-primary scale-105 ring-2 ring-primary/30' : 'border-transparent hover:border-primary/50 opacity-70 hover:opacity-100'}`}
                            aria-label={`View image ${index + 1}`}
                        >
                            <img 
                                src={img} 
                                alt={`Thumbnail ${index + 1}`} 
                                className="w-full h-full object-cover"
                                loading="lazy"
                            />
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

const Portfolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('Todos');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [previewedProjectId, setPreviewedProjectId] = useState<number | null>(null);

  const filters = ['Todos', ...Array.from(new Set(portfolio.map(p => p.category)))];
  
  const filterIcons: { [key: string]: React.ElementType } = {
    'Todos': LayoutGrid,
    'Websites': Globe,
    'Apps': Smartphone,
    'Identidade Visual': Palette,
    'Logos': PenTool,
  };

  const filteredPortfolio = useMemo(() => {
    if (activeFilter === 'Todos') return portfolio;
    return portfolio.filter(p => p.category === activeFilter);
  }, [activeFilter]);

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setPreviewedProjectId(null); // Close preview when opening modal
  };

  const closeModal = () => setSelectedProject(null);
  
  const handleTogglePreview = (projectId: number) => {
    setPreviewedProjectId(prevId => (prevId === projectId ? null : projectId));
  };

  const getToolIcon = (toolName: string) => {
    const tool = allTools.find(t => t.name.toLowerCase() === toolName.toLowerCase());
    return tool ? tool.icon : '';
  };
  
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [selectedProject]);


  return (
    <>
      <section id="portfolio" className="pb-20 pt-10">
        <div className="container mx-auto px-4 md:px-12">
          <SectionTitle title="Meu Portfólio" subtitle="Projetos Recentes" />
          
          <div className="flex justify-center flex-wrap gap-3 mb-12" data-aos="fade-up">
            {filters.map(filter => {
              const Icon = filterIcons[filter];
              return (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`flex items-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-full transition-all duration-300 shadow-sm ${activeFilter === filter ? 'bg-primary text-primary-foreground transform scale-105' : 'bg-card text-foreground hover:bg-card/80 border border-white/5'}`}
                >
                  {Icon && <Icon size={16} />}
                  <span>{filter}</span>
                </button>
              )
            })}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {filteredPortfolio.map((project, index) => (
              <div key={project.id} data-aos="fade-up" data-aos-delay={index * 50}>
                <ProjectCard 
                    project={project} 
                    onOpenModal={openModal} 
                    isPreview={previewedProjectId === project.id}
                    onTogglePreview={() => handleTogglePreview(project.id)}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 sm:p-6 modal-backdrop-animate backdrop-blur-sm" onClick={closeModal}>
          <div className="bg-card rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto modal-content-animate border border-white/10 shadow-2xl" onClick={e => e.stopPropagation()}>
            <div className="p-6 md:p-10 relative">
              <button onClick={closeModal} className="absolute top-4 right-4 text-foreground/70 hover:text-primary z-50 bg-background/50 hover:bg-background rounded-full p-2 transition-colors">
                <X size={24} />
              </button>
              
              {/* Header */}
              <div className="flex flex-col lg:flex-row justify-between items-start gap-8 mb-10">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                     <span className="bg-primary/20 text-primary text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">{selectedProject.category}</span>
                  </div>
                  <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">{selectedProject.title}</h2>
                  <p className="text-gray-300 leading-relaxed text-lg">{selectedProject.description}</p>
                   {(selectedProject.role || selectedProject.timeline || selectedProject.methodology) && (
                    <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm bg-background/30 p-4 rounded-xl border border-white/5">
                        {selectedProject.role && (
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-secondary/10 rounded-lg text-secondary"><Briefcase size={18} /></div>
                                <div className="flex flex-col">
                                    <span className="text-xs text-gray-400 font-semibold uppercase">Função</span>
                                    <span className="text-gray-200">{selectedProject.role}</span>
                                </div>
                            </div>
                        )}
                        {selectedProject.timeline && (
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-secondary/10 rounded-lg text-secondary"><Calendar size={18} /></div>
                                <div className="flex flex-col">
                                    <span className="text-xs text-gray-400 font-semibold uppercase">Período</span>
                                    <span className="text-gray-200">{selectedProject.timeline}</span>
                                </div>
                            </div>
                        )}
                        {selectedProject.methodology && (
                            <div className="flex items-center gap-3 sm:col-span-2">
                                <div className="p-2 bg-secondary/10 rounded-lg text-secondary"><ClipboardList size={18} /></div>
                                <div className="flex flex-col">
                                    <span className="text-xs text-gray-400 font-semibold uppercase">Metodologia</span>
                                    <span className="text-gray-200">{selectedProject.methodology}</span>
                                </div>
                            </div>
                        )}
                    </div>
                  )}
                </div>
                {selectedProject.logo && (
                  <div className="flex-shrink-0 mx-auto lg:mx-0">
                    <img src={selectedProject.logo} alt={`${selectedProject.title} Logo`} className="h-32 w-32 rounded-full object-cover shadow-2xl border-4 border-card bg-white" />
                  </div>
                )}
              </div>
              
              {/* Tools */}
               <div className="mb-12 border-t border-white/10 pt-8">
                  <h3 className="font-semibold text-lg mb-6 flex items-center gap-2">
                    <span className="w-1 h-6 bg-secondary rounded-full"></span>
                    Tecnologias Utilizadas
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {selectedProject.tools.map(tool => (
                      <div key={tool} className="flex items-center gap-2 bg-background/50 border border-white/5 px-4 py-2 rounded-lg hover:border-primary/50 transition-colors">
                         <img src={getToolIcon(tool)} alt={tool} loading="lazy" className="w-5 h-5 object-contain"/>
                         <span className="text-sm font-medium text-gray-300">{tool}</span>
                      </div>
                    ))}
                  </div>
              </div>

              {(selectedProject.liveUrl || selectedProject.behanceUrl) && (
                <div className="flex flex-col sm:flex-row gap-4 mb-12">
                  {selectedProject.liveUrl && (
                    <a href={selectedProject.liveUrl} target="_blank" rel="noreferrer" className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-bold py-3 px-8 rounded-xl hover:bg-secondary transition-all transform hover:-translate-y-1 shadow-lg shadow-primary/20">
                      <Globe size={20} />
                      Ver projeto ao vivo
                    </a>
                  )}
                  {selectedProject.behanceUrl && (
                    <a href={selectedProject.behanceUrl} target="_blank" rel="noreferrer" className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 bg-[#1769ff] text-white font-bold py-3 px-8 rounded-xl hover:bg-[#1769ff]/80 transition-all transform hover:-translate-y-1 shadow-lg shadow-blue-500/20">
                       <img src="https://i.postimg.cc/cHJHst0z/beha.png" alt="Behance" className="w-5 h-5 invert brightness-0" />
                      Ver no Behance
                    </a>
                  )}
                </div>
              )}

             {/* Detailed Content */}
             <div className="space-y-12">
              {selectedProject.category === 'Identidade Visual' && selectedProject.detailedContent ? (
                <div className="grid gap-6">
                  {selectedProject.detailedContent.map((item, index) => (
                      <img 
                          key={index}
                          src={item.image} 
                          alt={`Detalhe ${index + 1}`} 
                          loading="lazy"
                          className="w-full h-auto rounded-lg shadow-lg"
                      />
                  ))}
                </div>
              ) : selectedProject.category === 'Logos' ? (
                <LogoCarousel project={selectedProject} />
              ) : (
                <div className="flex flex-col gap-y-16">
                  {(selectedProject.detailedContent || [{ image: selectedProject.images[0], description: '' }]).map((item, index, arr) => (
                    <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-center`}>
                        
                        <div className="w-full lg:w-1/2 group">
                          <div className="relative overflow-hidden rounded-2xl shadow-2xl border border-white/5 bg-background">
                            <img 
                                src={item.image} 
                                alt={`Detalhe ${index + 1}`} 
                                loading="lazy"
                                className="w-full h-auto transform transition-transform duration-700 group-hover:scale-105" 
                            />
                          </div>
                        </div>

                        <div className="w-full lg:w-1/2">
                             <div className="flex items-start gap-4">
                                <span className="text-6xl font-bold text-white/5 -mt-4 font-secondary">{String(index + 1).padStart(2, '0')}</span>
                                <p className="text-gray-300 leading-relaxed text-lg pt-2 border-l-2 border-primary/30 pl-6">{item.description}</p>
                             </div>
                        </div>
                    </div>
                  ))}
                </div>
              )}
             </div>

              <div className="text-center mt-16 pt-8 border-t border-white/5">
                <button
                  onClick={closeModal}
                  className="inline-flex items-center gap-2 text-gray-400 hover:text-primary transition-colors font-medium"
                >
                  <ArrowLeft size={16} />
                  Voltar aos projetos
                </button>
              </div>

            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Portfolio;