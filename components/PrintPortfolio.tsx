import React from 'react';
import { portfolio, tools, experience, about, education } from './data';
import { FileText, Mail, Phone, Globe, MapPin, Briefcase, Calendar, GraduationCap, ExternalLink } from 'lucide-react';

const PrintPortfolio: React.FC = () => {
    const allTools = Object.values(tools).flat();

    const getToolIcon = (toolName: string) => {
        const tool = allTools.find(t => t.name.toLowerCase() === toolName.toLowerCase());
        return tool ? tool.icon : '';
    };

    const handlePrint = () => {
        window.print();
    };

    return (
        <div className="bg-white min-h-screen text-black p-4 md:p-8 font-sans max-w-[210mm] mx-auto shadow-xl print:shadow-none print:p-0">
            {/* Inline Styles for High Fidelity Print */}
            <style dangerouslySetInnerHTML={{ __html: `
                @media print {
                    @page {
                        size: A4;
                        margin: 0;
                    }
                    body {
                        background-color: white !important;
                        -webkit-print-color-adjust: exact !important;
                        print-color-adjust: exact !important;
                    }
                    .print-container {
                        width: 210mm !important;
                        margin: 0 auto !important;
                        padding: 15mm !important;
                        background-color: white !important;
                    }
                    .page-break {
                        page-break-before: always;
                    }
                    /* Force visibility of backgrounds and colors */
                    div, span, p, h1, h2, h3, h4, h5, img {
                        -webkit-print-color-adjust: exact !important;
                        print-color-adjust: exact !important;
                    }
                }
            ` }} />
            
            <div className="print-container">
                {/* Control Bar (Hidden in Print) */}
            <div className="mb-8 p-4 bg-gray-50 rounded-lg flex justify-between items-center print:hidden border border-gray-200">
                <div>
                    <h1 className="text-xl font-bold text-gray-800">Visualização de Portfólio Otimizada</h1>
                    <p className="text-sm text-gray-600">Esta página foi desenhada para uma impressão perfeita ou salvamento em PDF.</p>
                </div>
                <button 
                    onClick={handlePrint}
                    className="flex items-center gap-2 bg-primary text-white font-bold py-2 px-6 rounded-lg hover:bg-secondary transition-all shadow-md"
                >
                    <FileText size={20} />
                    Imprimir / Salvar PDF
                </button>
            </div>

            {/* Resume Header */}
            <header className="border-b-4 border-primary pb-4 mb-4 flex flex-col md:flex-row items-center gap-4">
                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-primary shadow-lg flex-shrink-0">
                    <img src={about.image} alt={about.name} className="w-full h-full object-cover" />
                </div>
                <div className="text-center md:text-left flex-1">
                    <h1 className="text-4xl font-extrabold uppercase tracking-tighter text-gray-900 mb-1">{about.name}</h1>
                    <h2 className="text-xl font-medium text-primary uppercase tracking-widest mb-4">Desenvolvedor Full Stack & Designer</h2>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-4 text-sm text-gray-700">
                        <div className="flex items-center gap-2">
                             <Mail size={14} className="text-primary" />
                             <span>{about.email}</span>
                        </div>
                        <div className="flex items-center gap-2">
                             <Phone size={14} className="text-primary" />
                             <span>{about.phone}</span>
                        </div>
                        <div className="flex items-center gap-2">
                             <Globe size={14} className="text-primary" />
                             <a href={about.url} target="_blank" rel="noopener noreferrer" className="hover:underline">
                                 {about.url?.replace('https://', '')}
                             </a>
                        </div>
                        <div className="flex items-center gap-2">
                             <MapPin size={14} className="text-primary" />
                             <span>Brasília, Brasil</span>
                        </div>
                    </div>
                </div>
            </header>

            {/* About / Summary */}
            <section className="mb-4">
                <h3 className="text-xl font-bold uppercase tracking-wider text-gray-800 border-b-2 border-gray-100 pb-2 mb-4 flex items-center gap-2">
                    <span className="w-2 h-6 bg-primary rounded-sm"></span>
                    Sobre Mim
                </h3>
                <p className="text-gray-700 leading-relaxed text-base italic">
                    "{about.summary}"
                </p>
            </section>

            {/* Experience & Skills Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
                <div className="lg:col-span-2">
                    <h3 className="text-xl font-bold uppercase tracking-wider text-gray-800 border-b-2 border-gray-100 pb-2 mb-6 flex items-center gap-2">
                        <span className="w-2 h-6 bg-primary rounded-sm"></span>
                        Experiência Profissional
                    </h3>
                    <div className="space-y-6">
                        {experience.map((exp, idx) => (
                            <div key={idx} className="relative pl-6 border-l-2 border-gray-100">
                                <div className="absolute -left-1.5 top-1.5 w-3 h-3 bg-primary rounded-full"></div>
                                <h4 className="text-lg font-bold text-gray-900">{exp.role}</h4>
                                <div className="flex justify-between items-center text-sm text-primary font-semibold mb-2">
                                    <span>{exp.company}</span>
                                    <span>{exp.period}</span>
                                </div>
                                <p className="text-gray-600 text-sm leading-relaxed">{exp.description}</p>
                            </div>
                        ))}
                    </div>

                    <h3 className="text-xl font-bold uppercase tracking-wider text-gray-800 border-b-2 border-gray-100 pb-2 mt-10 mb-6 flex items-center gap-2">
                        <span className="w-2 h-6 bg-primary rounded-sm"></span>
                        Formação Acadêmica
                    </h3>
                    <div className="space-y-6">
                        {education.map((edu, idx) => (
                            <div key={idx} className="relative pl-6 border-l-2 border-gray-100">
                                <div className="absolute -left-1.5 top-1.5 w-3 h-3 bg-primary rounded-full"></div>
                                <div className="flex items-center gap-2 mb-1">
                                    <GraduationCap size={16} className="text-primary" />
                                    <h4 className="text-lg font-bold text-gray-900">{edu.title}</h4>
                                </div>
                                <div className="flex justify-between items-center text-sm text-primary font-semibold mb-2">
                                    <span>{edu.institution}</span>
                                    <span>{edu.year}</span>
                                </div>
                                <ul className="list-disc list-inside text-gray-600 text-xs space-y-1">
                                    {edu.skills.map((skill, sIdx) => (
                                        <li key={sIdx}>{skill}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                <div>
                    <h3 className="text-xl font-bold uppercase tracking-wider text-gray-800 border-b-2 border-gray-100 pb-2 mb-6 flex items-center gap-2">
                        <span className="w-2 h-6 bg-primary rounded-sm"></span>
                        Principais Hard Skills
                    </h3>
                    <div className="space-y-4">
                        {Object.entries(tools).map(([category, items]) => (
                            <div key={category}>
                                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">{category}</h4>
                                <div className="flex flex-wrap gap-1.5">
                                    {items.slice(0, 5).map(item => (
                                        <span key={item.name} className="text-[10px] bg-gray-100 text-gray-800 px-2 py-0.5 rounded border border-gray-200 font-medium">
                                            {item.name}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Portfolio Section - The main focus */}
            <section className="page-break-before-always pt-4">
                <h3 className="text-2xl font-black uppercase tracking-tighter text-gray-900 border-b-4 border-primary pb-2 mb-4 text-center bg-gray-50 py-2 rounded-t-xl">
                    Portfólio de Projetos
                </h3>
                
                <div className="grid grid-cols-1 gap-8">
                    {portfolio.map((project, idx) => (
                        <div key={project.id} className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start page-break-inside-avoid border-b-2 border-gray-100 pb-6 last:border-0">
                            {/* Images Gallery Container */}
                            <div className="space-y-4">
                                <div className="relative group">
                                    <img 
                                        src={project.images[0]} 
                                        alt={project.title} 
                                        className="w-full h-auto rounded-xl shadow-lg border border-gray-100" 
                                    />
                                    <div className="absolute top-4 left-4 bg-primary text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider shadow-sm">
                                        Imagem Principal
                                    </div>
                                </div>
                                <div className="grid grid-cols-3 gap-2">
                                    {project.images.slice(1, 4).map((img, i) => (
                                        <img key={i} src={img} alt={`${project.title} ${i+2}`} className="w-full h-24 object-cover rounded-lg border border-gray-100 shadow-sm transition-transform hover:scale-105" />
                                    ))}
                                </div>
                                {project.detailedContent && project.detailedContent.length > 0 && (
                                    <div className="grid grid-cols-2 gap-2 mt-2">
                                        {project.detailedContent.slice(0, 2).map((item, id) => (
                                            <div key={id} className="relative">
                                                <img src={item.image} alt="Process" className="w-full h-28 object-cover rounded-lg shadow-inner opacity-90" />
                                                <div className="absolute inset-0 bg-black/10 rounded-lg"></div>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                            
                            <div className="flex flex-col h-full py-2">
                                <div className="mb-6">
                                    <span className="text-xs font-bold text-primary uppercase tracking-[0.2em] mb-1 block">
                                        {project.category}
                                    </span>
                                    <h4 className="text-3xl font-extrabold text-gray-900 mb-4 leading-none">{project.title}</h4>
                                    <p className="text-gray-700 text-base leading-relaxed mb-6">
                                        {project.description}
                                    </p>
                                </div>

                                {/* Project Links */}
                                {(project.liveUrl || project.behanceUrl) && (
                                    <div className="mb-6 flex flex-col gap-3">
                                        {project.liveUrl && (
                                            <div className="flex flex-col gap-1">
                                                <a 
                                                    href={project.liveUrl} 
                                                    target="_blank" 
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center gap-2 text-primary font-bold hover:underline group"
                                                >
                                                    <ExternalLink size={18} />
                                                    <span>Ver Projeto Ao Vivo</span>
                                                </a>
                                                <span className="text-[10px] text-gray-400 font-mono break-all bg-gray-50 p-1.5 rounded border border-gray-100">
                                                    {project.liveUrl}
                                                </span>
                                            </div>
                                        )}
                                        {project.behanceUrl && (
                                            <div className="flex flex-col gap-1">
                                                <a 
                                                    href={project.behanceUrl} 
                                                    target="_blank" 
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center gap-2 text-blue-600 font-bold hover:underline group"
                                                >
                                                    <img src="https://iili.io/qXVjM0b.webp" alt="Behance" className="w-4 h-4" />
                                                    <span>Ver no Behance</span>
                                                </a>
                                                <span className="text-[10px] text-gray-400 font-mono break-all bg-gray-50 p-1.5 rounded border border-gray-100">
                                                    {project.behanceUrl}
                                                </span>
                                            </div>
                                        )}
                                    </div>
                                )}

                                {(project.role || project.timeline) && (
                                    <div className="grid grid-cols-2 gap-4 mb-8 bg-gray-50 p-4 rounded-xl border border-gray-100">
                                        {project.role && (
                                            <div className="flex items-center gap-3">
                                                <div className="p-2 bg-white rounded-lg shadow-sm">
                                                    <Briefcase size={16} className="text-primary" />
                                                </div>
                                                <div className="flex flex-col">
                                                    <span className="text-[10px] text-gray-400 uppercase font-bold tracking-wider">Função</span>
                                                    <span className="text-sm font-bold text-gray-700 leading-tight">{project.role}</span>
                                                </div>
                                            </div>
                                        )}
                                        {project.timeline && (
                                            <div className="flex items-center gap-3">
                                                <div className="p-2 bg-white rounded-lg shadow-sm">
                                                    <Calendar size={16} className="text-primary" />
                                                </div>
                                                <div className="flex flex-col">
                                                    <span className="text-[10px] text-gray-400 uppercase font-bold tracking-wider">Período</span>
                                                    <span className="text-sm font-bold text-gray-700 leading-tight">{project.timeline}</span>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                )}

                                <div className="mt-auto">
                                    <h5 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3">Tecnologias Utilizadas</h5>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tools.map(tool => (
                                            <div key={tool} className="flex items-center gap-2 bg-[#f8f9fa] border border-gray-200 px-3 py-1.5 rounded-lg shadow-sm hover:border-primary/30 transition-colors">
                                                {getToolIcon(tool) && <img src={getToolIcon(tool)} alt={tool} className="w-4 h-4 object-contain grayscale-0" />}
                                                <span className="text-xs font-bold text-gray-700">{tool}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Footer Only for Print */}
            <footer className="hidden print:block mt-16 pt-10 border-t-2 border-gray-100 text-center">
                <div className="flex justify-center gap-8 mb-4">
                    <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">Leandro José • Full Stack Developer & Designer</div>
                </div>
                <p className="text-[10px] text-gray-400 max-w-md mx-auto leading-relaxed">
                    Este documento é uma representação compacta do meu portfólio profissional. 
                    Para a experiência completa com animações e interatividade, acesse o link abaixo.
                </p>
                <a href={about.url} target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-primary mt-2 block underline">
                    {about.url?.replace('https://', '')}
                </a>
            </footer>
            </div>
        </div>
    );
};

export default PrintPortfolio;
