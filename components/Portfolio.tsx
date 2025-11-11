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

    const getToolIcon = (toolName: string) => {
        const tool = allTools.find(t => t.name.toLowerCase() === toolName.toLowerCase());
        return tool ? tool.icon : '';
    };

    useEffect(() => {
        if (project.images.length <= 1 || isHovered || isPreview) {
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
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={onTogglePreview}
            role="button"
            tabIndex={0}
            aria-label={`View details for ${project.title}`}
        >
            {/* Image Carousel with Fade Transition */}
            {project.images.map((image, index) => (
                <img 
                    key={image}
                    src={image} 
                    alt={project.title} 
                    className={`absolute inset-0 w-full h-full object-cover object-center transition-all duration-700 ease-in-out group-hover:scale-110 ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
                />
            ))}

            {/* Persistent Info Bar */}
            <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/80 to-transparent pointer-events-none z-10 flex justify-between items-end">
                 <div>
                    <h3 className="text-lg font-bold text-white truncate">{project.title}</h3>
                    <div className="flex gap-2 mt-1">
                        {project.tools.slice(0, 4).map(tool => (
                        <img key={tool} src={getToolIcon(tool)} alt={tool} className="w-5 h-5 object-contain"/>
                        ))}
                    </div>
                 </div>
                 <span className="bg-primary/80 backdrop-blur-sm text-primary-foreground text-xs font-semibold py-1 px-2.5 rounded-full whitespace-nowrap">
                    {project.category}
                 </span>
            </div>

            {/* Preview Overlay (controlled by parent) */}
            <div className={`absolute inset-0 bg-card/90 p-4 flex flex-col justify-center items-center text-center transition-opacity duration-300 z-20 ${isPreview ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                <h3 className="text-xl font-bold text-primary">{project.title}</h3>
                 <div className="flex gap-2 my-2">
                    {project.tools.slice(0, 3).map(tool => (
                      <img key={tool} src={getToolIcon(tool)} alt={tool} className="w-6 h-6 object-contain"/>
                    ))}
                  </div>
                <button
                    onClick={handleDetailsClick}
                    className="mt-2 text-sm font-semibold py-2 px-4 bg-primary text-primary-foreground rounded-full hover:bg-secondary transition-colors"
                >
                    Ver mais detalhes
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
            <div className="mb-4 rounded-lg overflow-hidden bg-background/20 p-2 w-full max-w-md">
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
                            className={`w-20 h-20 rounded-md overflow-hidden border-2 transition-all duration-200 ${currentIndex === index ? 'border-primary scale-105' : 'border-transparent hover:border-primary/50'}`}
                            aria-label={`View image ${index + 1}`}
                        >
                            <img 
                                src={img} 
                                alt={`Thumbnail ${index + 1}`} 
                                className="w-full h-full object-cover"
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
      <section id="portfolio" className="pb-20">
        <div className="container mx-auto px-6 md:px-12">
          <SectionTitle title="Meu Portfólo" subtitle="Portfólio" />
          
          <div className="flex justify-center flex-wrap gap-4 mb-12" data-aos="fade-up">
            {filters.map(filter => {
              const Icon = filterIcons[filter];
              return (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-lg transition-all duration-300 ${activeFilter === filter ? 'bg-primary text-primary-foreground' : 'bg-card text-foreground hover:bg-primary/80'}`}
                >
                  {Icon && <Icon size={16} />}
                  <span>{filter}</span>
                </button>
              )
            })}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
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
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 modal-backdrop-animate" onClick={closeModal}>
          <div className="bg-card rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto modal-content-animate" onClick={e => e.stopPropagation()}>
            <div className="p-6 md:p-8 relative">
              <button onClick={closeModal} className="absolute top-4 right-4 text-foreground/70 hover:text-primary z-50 bg-card/50 rounded-full p-1">
                <X size={24} />
              </button>
              
              {/* Header */}
              <div className="flex flex-col sm:flex-row justify-between items-start gap-6 mb-8 text-center sm:text-left">
                <div>
                  <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-2">{selectedProject.title}</h2>
                  <p className="text-foreground/80 max-w-2xl leading-relaxed">{selectedProject.description}</p>
                   {(selectedProject.role || selectedProject.timeline || selectedProject.methodology) && (
                    <div className="mt-4 flex flex-col sm:flex-row sm:flex-wrap items-start text-left gap-x-6 gap-y-2 text-sm">
                        {selectedProject.role && (
                            <div className="flex items-center gap-2">
                                <Briefcase className="w-4 h-4 text-secondary flex-shrink-0" />
                                <span className="text-foreground/80"><strong className="font-semibold text-foreground/90">Função:</strong> {selectedProject.role}</span>
                            </div>
                        )}
                        {selectedProject.timeline && (
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4 text-secondary flex-shrink-0" />
                                <span className="text-foreground/80"><strong className="font-semibold text-foreground/90">Período:</strong> {selectedProject.timeline}</span>
                            </div>
                        )}
                        {selectedProject.methodology && (
                            <div className="flex items-center gap-2">
                                <ClipboardList className="w-4 h-4 text-secondary flex-shrink-0" />
                                <span className="text-foreground/80"><strong className="font-semibold text-foreground/90">Metodologia:</strong> {selectedProject.methodology}</span>
                            </div>
                        )}
                    </div>
                  )}
                </div>
                {selectedProject.logo && (
                  <img src={selectedProject.logo} alt={`${selectedProject.title} Logo`} className="h-24 w-24 rounded-full object-cover flex-shrink-0 mx-auto sm:mx-0 shadow-lg" />
                )}
              </div>
              
              {/* Tools */}
               <div className="mb-12">
                  <h3 className="font-semibold text-center text-xl mb-6 gradient-title-animation">Ferramentas Usadas</h3>
                  <div className="flex flex-wrap gap-4 justify-center">
                    {selectedProject.tools.map(tool => (
                      <div key={tool} className="flex items-center gap-2 bg-background p-2 rounded-md">
                         <img src={getToolIcon(tool)} alt={tool} className="w-6 h-6"/>
                         <span className="text-sm">{tool}</span>
                      </div>
                    ))}
                  </div>
              </div>

              {(selectedProject.liveUrl || selectedProject.behanceUrl) && (
                <div className="flex flex-col sm:flex-row justify-center sm:justify-end items-center gap-4 mb-12">
                  {selectedProject.liveUrl && (
                    <a href={selectedProject.liveUrl} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-bold py-2 px-6 rounded-lg hover:bg-secondary transition-colors w-full sm:w-auto">
                      Ver projeto ao vivo
                    </a>
                  )}
                  {selectedProject.behanceUrl && (
                    <a href={selectedProject.behanceUrl} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 bg-card text-foreground font-bold py-2 px-6 rounded-lg hover:bg-primary/80 border border-primary/50 w-full sm:w-auto">
                       <img src="https://i.postimg.cc/cHJHst0z/beha.png" alt="Behance" className="w-5 h-5" />
                      Ver no Behance
                    </a>
                  )}
                </div>
              )}

             {/* Detailed Content */}
              {selectedProject.category === 'Identidade Visual' && selectedProject.detailedContent ? (
                <div className="flex flex-col">
                  {selectedProject.detailedContent.map((item, index) => (
                      <img 
                          key={index}
                          src={item.image} 
                          alt={`Detalhe ${index + 1} do projeto ${selectedProject.title}`} 
                          className="w-full h-auto"
                      />
                  ))}
                </div>
              ) : selectedProject.category === 'Logos' ? (
                <LogoCarousel project={selectedProject} />
              ) : (
                <div className="flex flex-col items-center gap-y-16 md:gap-y-24">
                  {(selectedProject.detailedContent || [{ image: selectedProject.images[0], description: '' }]).map((item, index, arr) => (
                    <div key={index} className="relative w-full max-w-3xl mx-auto">
                      
                      {/* The wave connector passing behind - hidden on mobile */}
                      {index < arr.length - 1 && (
                        <div className="hidden md:block absolute top-1/2 left-0 w-full h-[150%] z-0">
                          <svg className="w-full h-full" viewBox="0 0 200 300" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path 
                              d={index % 2 === 0 
                                ? "M 50 100 C 150 150, 50 200, 150 250" // Left to Right
                                : "M 150 100 C 50 150, 150 200, 50 250" // Right to Left
                              } 
                              className="stroke-primary/30" 
                              strokeWidth="2"
                            />
                          </svg>
                        </div>
                      )}

                      <div className={`relative z-10 flex flex-col md:items-center md:justify-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                        {/* Image container with z-index to be on top */}
                        <div className="relative z-20 w-full md:w-[45%] flex-shrink-0">
                          <img 
                              src={item.image} 
                              alt={`Detalhe ${index + 1} do projeto ${selectedProject.title}`} 
                              className="rounded-2xl shadow-xl shadow-primary/30 w-full max-w-[260px] mx-auto" 
                          />
                        </div>

                        {/* Text container with block shape, overlapping the image */}
                        <div className={`relative w-full mt-[-2rem] md:mt-0 md:w-[55%] flex-shrink-0 bg-primary rounded-2xl flex items-center p-8 text-center md:text-left ${index % 2 === 0 ? 'md:-ml-40 md:pl-48 md:pr-8' : 'md:-mr-40 md:pr-48 md:pl-8'}`}>
                            <p className="text-primary-foreground/90 leading-relaxed">{item.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              <div className="text-center mt-12">
                <button
                  onClick={closeModal}
                  className="inline-block bg-primary text-primary-foreground font-bold py-3 px-8 rounded-full hover:bg-secondary transition-all duration-300 ease-in-out transform hover:scale-105"
                >
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