
import { Instagram, Github, Linkedin } from 'lucide-react';

export const navLinks = [
  { name: 'Home', path: '#home' },
  { name: 'Sobre', path: '#about' },
  { name: 'Portfólio', path: '#portfolio' },
  { name: 'Currículo', path: '#resume' },
  { name: 'Depoimentos', path: '#testimonials' },
  { name: 'Contato', path: '#contact' },
];

export const socials = [
  { name: 'Behance', url: 'https://www.behance.net/lebrondesigner1', icon: 'https://i.postimg.cc/cHJHst0z/beha.png' },
  { name: 'WhatsApp', url: 'https://wa.me/5561984836034?text=Ol%C3%A1%2C%20vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20saber%20mais%20sobre%20seus%20servi%C3%A7os', icon: 'https://i.postimg.cc/nhk9pJqZ/whatsapp.png' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/leandro-josé-455389398/', icon: Linkedin },
  { name: 'Instagram', url: 'https://www.instagram.com/lebrondesign?igsh=bjJpNDV0cDRoeTh5', icon: Instagram },
  { name: 'GitHub', url: 'https://github.com/LeBronTech', icon: Github },
];

export const services = [
  {
    title: "Websites",
    description: "Criação de websites responsivos e otimizados para performance.",
    image: "https://picsum.photos/seed/websites/600/800",
  },
  {
    title: "Aplicativos Mobile",
    description: "Desenvolvimento de aplicativos nativos e híbridos para iOS e Android.",
    image: "https://picsum.photos/seed/mobile/600/800",
  },
  {
    title: "Identidade Visual",
    description: "Design de logotipos, manuais de marca e materiais de marketing.",
    image: "https://picsum.photos/seed/branding/600/800",
  },
];

export const tools = {
  "Design & Edição": [
    { name: 'Photoshop', icon: 'https://i.postimg.cc/hvdKj9w0/photoshop.png' },
    { name: 'Illustrator', icon: 'https://i.postimg.cc/HxjYGG9S/ilus.png' },
    { name: 'Capcut', icon: 'https://i.postimg.cc/br7NH6b4/capcuticon.webp' },
    { name: 'Canva', icon: 'https://i.postimg.cc/wMCTcWJS/canva500.png' },
    { name: 'Figma', icon: 'https://i.postimg.cc/t4H4sM9R/figma500.png' },
  ],
  "Desenvolvimento": [
    { name: 'TypeScript', icon: 'https://iili.io/Kpz8mIp.png' },
    { name: 'HTML', icon: 'https://i.postimg.cc/pXMmp8Bv/1024x1024-logo-2582748-1280.png' },
    { name: 'CSS', icon: 'https://i.postimg.cc/sXvtdwHX/1024x1024-logo-2582747-960-720.png' },
    { name: 'JavaScript', icon: 'https://i.postimg.cc/g2rNbHcn/1761770699957.png' },
    { name: 'React', icon: 'https://i.postimg.cc/g00TPxwS/toppng-com-react-native-svg-transformer-allows-you-import-svg-aperture-science-innovators-logo-986x1.png' },
    { name: 'Next.js', icon: 'https://i.postimg.cc/v8p7YcKN/nextjs-icon.png' },
    { name: 'Angular', icon: 'https://iili.io/KbAcdas.png' },
    { name: 'Node.js', icon: 'https://i.postimg.cc/gkh37mNQ/1761417804462.png' },
    { name: 'Python', icon: 'https://i.postimg.cc/s2v1GJQN/pngaaa-com-619137.png' },
    { name: 'Flutter', icon: 'https://i.postimg.cc/brK94JXq/pngwing-com.png' },
    { name: 'Android Studio', icon: 'https://i.postimg.cc/c4XMw04P/Android-Studio-icon-svg.png' },
    { name: 'Bootstrap', icon: 'https://iili.io/KpTVxrQ.png' },
    { name: 'WordPress', icon: 'https://i.postimg.cc/GmQTdCvb/word500.png' },
    { name: 'VSCode', icon: 'https://i.postimg.cc/QdbKh31z/vscode500.png' },
  ],
};

export const portfolio = [
  {
    id: 14,
    category: 'Websites',
    title: 'Corações Sagrados',
    images: [
      'https://iili.io/KbAVqJt.png',
      'https://iili.io/KbAVCen.png',
      'https://iili.io/KbAVB5X.png',
      'https://iili.io/KbAVnbs.png',
    ],
    description: 'Atuei como responsável pelo desenvolvimento do website para a comunidade Corações Sagrados. O projeto iniciou com o design da interface (UI/UX) no Figma, buscando um visual sereno e inspirador. Em seguida, desenvolvi o site focado na Igreja Católica, implementando seções dedicadas a novenas e à história dos santos, com o objetivo de fortalecer a conexão entre os membros.',
    tools: ['React', 'Next.js', 'Node.js', 'TypeScript', 'Figma'],
    liveUrl: 'https://lebrontech.github.io/Novenascoracoessagrados/#apresentacao_ns',
    logo: 'https://iili.io/KbAVxzG.jpg',
    role: 'Desenvolvedor Full Stack & UI/UX Designer',
    timeline: 'jul. de 2025 – Atual',
    methodology: 'Scrum (princípios ágeis)',
    detailedContent: [
      { image: 'https://iili.io/KbAVqJt.png', description: 'Visualização inicial do site, focado na Igreja Católica, com acesso a novenas, histórias de santos e informações de contato para a comunidade.' },
      { image: 'https://iili.io/KbAVCen.png', description: "Uma seção especial dedicada a São José, com sua história, orações e informações relevantes para os devotos." },
      { image: 'https://iili.io/KbAVB5X.png', description: 'Página da novena, onde os fiéis podem acompanhar as orações diárias e se aprofundar na sua jornada de fé.' },
      { image: 'https://iili.io/KbAVnbs.png', description: "Aba 'Santo do Dia', apresentando a biografia e os ensinamentos do santo celebrado em cada data, inspirando os visitantes." }
    ]
  },
  { 
    id: 13, 
    category: 'Logos', 
    title: 'Maré Alta', 
    images: [
      'https://iili.io/Kbx9CB4.png',
      'https://iili.io/Kbx9qQf.png',
      'https://iili.io/Kbx9fhG.png',
      'https://iili.io/Kbx9nEl.png',
      'https://iili.io/Kbx98vt.png',
      'https://iili.io/Kbx9o42.png'
    ], 
    description: 'Logo para uma marca de surfwear, com uma estética vibrante e dinâmica, inspirada nas ondas e na cultura do surfe.', 
    tools: ['Illustrator', 'Photoshop'], 
    liveUrl: null,
  },
  { 
    id: 3, 
    category: 'Websites', 
    title: 'Capital Arte', 
    images: [
      'https://iili.io/KbnLbR4.png',
      'https://iili.io/KbnLmOl.png',
      'https://iili.io/KbnLDJf.png'
    ], 
    description: 'Loja online de souvenirs e lembranças de Brasília, com um design que celebra a cultura e arquitetura da capital.', 
    tools: ['HTML', 'CSS', 'JavaScript', 'WordPress'], 
    liveUrl: '#',
    logo: 'https://iili.io/KbnLLfn.png',
    detailedContent: [
      { image: 'https://iili.io/KbnLbR4.png', description: 'Página principal da loja, apresentando uma seleção de souvenirs que capturam a essência de Brasília, convidando o visitante a explorar os produtos.' },
      { image: 'https://iili.io/KbnLmOl.png', description: 'Página de detalhes do produto, onde o cliente pode ver fotos, ler sobre a história do souvenir e adicioná-lo ao carrinho de compras.' },
      { image: 'https://iili.io/KbnLDJf.png', description: 'Mapa interativo mostrando os principais pontos turísticos de Brasília que inspiram os souvenirs, além de informações de contato e localização.' }
    ]
  },
  { 
    id: 4, 
    category: 'Apps', 
    title: 'Têca Estoque', 
    images: ['https://i.postimg.cc/8cHTRVxf/1761768850618.jpg', 'https://i.postimg.cc/02kk8bJK/1761768459633.png', 'https://i.postimg.cc/vZcjkfR4/1762430295149.jpg', 'https://i.postimg.cc/MZbZ2yXR/1761769035345.jpg', 'https://i.postimg.cc/bYHYcQdq/1761769176769.jpg', 'https://i.postimg.cc/44b4kznV/1761769244222.jpg', 'https://i.postimg.cc/Mpv4NVkH/1762429896102.jpg', 'https://i.postimg.cc/htfw6TFf/1762430466573.jpg', 'https://i.postimg.cc/VL7pK4hY/1762430613369.jpg'], 
    description: 'Atuei como o principal responsável por arquitetar e desenvolver uma plataforma digital integrada para a loja de decorações Ionedecor. Minha responsabilidade foi unificar os canais de venda (E-commerce, Aplicativo Mobile e PDV Físico) para permitir uma gestão centralizada. O projeto incluiu o desenvolvimento do E-commerce (Next.js/React) otimizado para SEO, um aplicativo nativo (Flutter) para iOS e Android, e o sistema de Ponto de Venda (PDV) para a loja física. Criei também a API Backend (Node.js) para controlar o inventário, pedidos e dados de clientes de forma unificada em todas as frentes.', 
    tools: ['Next.js', 'React', 'TypeScript', 'Flutter', 'Node.js', 'Figma', 'Illustrator'], 
    liveUrl: 'https://tecalojas.vercel.app/', 
    behanceUrl: null, 
    logo: 'https://i.postimg.cc/PvWWC5rM/Logos-lojas-Teca-2025-20251027-233927-0000.png',
    role: 'Engenheiro de Software Full Stack',
    timeline: 'jun. de 2025 – Atual',
    methodology: 'Scrum (princípios ágeis)',
    detailedContent: [
        { image: 'https://i.postimg.cc/8cHTRVxf/1761768850618.jpg', description: 'Visualização do catálogo de produtos, permitindo uma navegação fácil e intuitiva entre as diferentes categorias de almofadas.' },
        { image: 'https://i.postimg.cc/02kk8bJK/1761768459633.png', description: 'A tela inicial do app, chamada de "Vitrine", apresenta os produtos em destaque e as principais categorias, oferecendo uma experiência de navegação convidativa e visual.' },
        { image: 'https://i.postimg.cc/vZcjkfR4/1762430295149.jpg', description: 'Interface com Modo Escuro, proporcionando maior conforto visual para o usuário em ambientes com pouca luz e economia de bateria.' },
        { image: 'https://i.postimg.cc/MZbZ2yXR/1761769035345.jpg', description: 'Gerenciamento de estoque em tempo real, com funcionalidades para adicionar, editar e remover produtos de forma eficiente.' },
        { image: 'https://i.postimg.cc/bYHYcQdq/1761769176769.jpg', description: 'Ferramenta exclusiva de geração automática de composições, permitindo visualizar combinações de almofadas em diferentes ambientes para inspirar os clientes.' },
        { image: 'https://i.postimg.cc/44b4kznV/1761769244222.jpg', description: 'Visualização detalhada do produto, exibindo informações completas sobre a almofada, como dimensões, tecidos, e disponibilidade em estoque.' },
        { image: 'https://i.postimg.cc/Mpv4NVkH/1762429896102.jpg', description: 'Sistema de Ponto de Venda (PDV) integrado, facilitando o registro de vendas e o controle financeiro diretamente no aplicativo.' },
        { image: 'https://i.postimg.cc/htfw6TFf/1762430466573.jpg', description: 'Geração de QR Codes individuais para cada almofada, agilizando a consulta de informações e a gestão de inventário.' },
        { image: 'https://i.postimg.cc/VL7pK4hY/1762430613369.jpg', description: 'Assistente inteligente com sistema de alertas, que notifica sobre estoque baixo e outras informações importantes para a gestão da loja.' }
    ]
  },
  { 
    id: 1, 
    category: 'Websites', 
    title: 'Restaurante Gusto', 
    images: [
      'https://iili.io/KbqqjRt.png',
      'https://iili.io/KbqqkWG.png',
      'https://iili.io/KbqqwOX.png',
      'https://iili.io/Kbqqexs.png',
      'https://iili.io/KbqBHe1.png',
      'https://iili.io/KbqBndN.png'
    ], 
    description: 'Atuei como o principal responsável pelo projeto de website institucional do restaurante. Minha responsabilidade começou na fase de Design UI/UX, onde desenhei os protótipos e a interface (usando Figma). Após a aprovação do design, desenvolvi o site completo usando HTML5, CSS3, JavaScript e o framework Bootstrap para garantir um design responsivo e moderno (mobile-first). O projeto foi gerido com práticas ágeis (Scrum) e incluiu a criação de um cardápio digital e um sistema de agendamento de reservas online.', 
    tools: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Figma', 'Illustrator'], 
    liveUrl: 'https://lebrontech.github.io/Restaurante-Gusto/index.html',
    logo: 'https://iili.io/KbfPeoJ.png',
    role: 'Desenvolvedor Frontend & UI/UX Designer',
    timeline: 'Fev. de 2023 – mar. de 2023',
    methodology: 'Scrum (princípios ágeis)',
    detailedContent: [
      { image: 'https://iili.io/KbqqjRt.png', description: 'Este projeto apresenta um design totalmente responsivo, garantindo uma experiência de usuário perfeita em desktops, tablets e smartphones.' },
      { image: 'https://iili.io/KbqqkWG.png', description: 'A página inicial foi cuidadosamente projetada para ser convidativa, com uma navegação clara e acesso rápido às principais seções do restaurante.' },
      { image: 'https://iili.io/KbqqwOX.png', description: 'A seção \'Sobre Nós\' conta a história e a paixão por trás do Gusto, criando uma conexão mais profunda com os clientes.' },
      { image: 'https://iili.io/Kbqqexs.png', description: 'Uma área dedicada para apresentar os chefs, destacando sua experiência e filosofia culinária para agregar credibilidade e um toque pessoal.' },
      { image: 'https://iili.io/KbqBHe1.png', description: 'Cardápio digital interativo, apresentando pratos com fotos de alta qualidade e descrições detalhadas para abrir o apetite.' },
      { image: 'https://iili.io/KbqBndN.png', description: 'Rodapé completo com informações de contato, horário de funcionamento e mapa de localização para facilitar a visita.' }
    ]
  },
  { 
    id: 7, 
    category: 'Identidade Visual', 
    title: 'Doo&Dou', 
    images: [
      'https://iili.io/KDvzsDX.png',
      'https://iili.io/KDvxbyP.png',
      'https://iili.io/KDvxpu1.png',
      'https://iili.io/KDvzcN9.png',
      'https://iili.io/KDvIoJV.png'
    ], 
    description: 'Projeto de identidade visual completo para o petshop Doo & Dou, com o conceito central de "Paixão Profissional", abrangendo desde o briefing e conceituação até a execução técnica e a entrega de um manual de marca detalhado.', 
    tools: ['Illustrator', 'Photoshop', 'Figma'], 
    liveUrl: null,
    behanceUrl: 'https://www.behance.net/gallery/238148345/Doo-DouPetshop',
    role: 'Designer de Identidade Visual (Freelance)',
    timeline: 'out. de 2025',
    methodology: 'Design Centrado no Usuário',
    detailedContent: [
      { image: 'https://iili.io/KDvzsDX.png', description: 'O conceito central "Paixão Profissional" guiou a criação do logotipo no Illustrator, resultando em uma marca que transmite cuidado, alegria e profissionalismo.' },
      { image: 'https://iili.io/KDvxbyP.png', description: 'A paleta de cores e a tipografia foram definidas no Figma para criar um Style Guide coeso, garantindo consistência em todas as comunicações da marca.' },
      { image: 'https://iili.io/KDvxpu1.png', description: 'O processo incluiu a criação de mockups no Photoshop para visualizar a aplicação da identidade em materiais de papelaria, como cartões de visita.' },
      { image: 'https://iili.io/KDvzcN9.png', description: 'A versatilidade da marca foi testada em diversos produtos e embalagens, assegurando um visual impactante e alinhado com os valores do petshop.' },
      { image: 'https://iili.io/KDvIoJV.png', description: 'O projeto foi finalizado com a entrega de um Manual de Marca completo, detalhando todas as diretrizes para o uso correto do logotipo e elementos visuais.' }
    ]
  },
  { 
    id: 11, 
    category: 'Logos', 
    title: 'Sabor & Prosa', 
    images: [
      'https://iili.io/KbAx0xa.png',
      'https://iili.io/KbAxMfR.png',
      'https://iili.io/KbAxEiv.png',
      'https://iili.io/KbAx1WJ.png'
    ], 
    description: 'Criação de logotipo para uma cafeteria e bistrô que une o aconchego do café com a sofisticação da boa conversa. O resultado é uma marca acolhedora, moderna e memorável, projetada para conectar e encantar clientes.', 
    tools: ['Canva', 'Photoshop'], 
    liveUrl: null 
  },
  { id: 9, category: 'Identidade Visual', title: 'Capilar Ela', images: ['https://i.postimg.cc/SRBN7ZCq/Capilar2.jpg'], description: 'Identidade para um salão de beleza especializado em terapia capilar.', tools: ['Illustrator', 'Canva'], liveUrl: null,
    detailedContent: [
      { image: 'https://i.postimg.cc/SRBN7ZCq/Capilar2.jpg', description: 'Design de marca que transmite cuidado, saúde e beleza, com um logotipo delicado e aplicações em materiais de divulgação.' }
    ]
  },
  { id: 8, category: 'Identidade Visual', title: 'Automotic', images: ['https://i.postimg.cc/50t0xQb3/Automotic4.jpg'], description: 'Identidade visual para uma startup de automação residencial.', tools: ['Illustrator', 'Figma'], liveUrl: null,
    detailedContent: [
      { image: 'https://i.postimg.cc/50t0xQb3/Automotic4.jpg', description: 'Conceito de marca que combina tecnologia e simplicidade, refletido em um logotipo moderno e uma paleta de cores sóbria e elegante.' }
    ]
  },
];

// NOVOS DADOS DO CURRÍCULO

export const experience = [
  {
    role: "Empreendedor | Desenvolvedor Full-Stack e Designer UI/UX",
    company: "LeBronDev-Designer (Autônomo)",
    period: "mar. de 2022 – o momento",
    description: "Criador e microempreendedor de uma marca de programação e design gráfico, gerenciando projetos de ponta-a-ponta, desde o briefing com o cliente até a entrega final do software e design."
  },
  {
    role: "Engenheiro de Software (Freelance)",
    company: "Projeto: lonedecor",
    period: "jun. de 2025 – nov. de 2025 (6 meses)",
    description: "Plataforma de Vendas Omni-channel (E-commerce, App e PDV Físico). Criei uma plataforma digital integrada para uma loja de decorações, unificando os canais de venda online, mobile e físico para uma gestão centralizada. Inclui Web E-commerce (Next.js/React), App Mobile (Flutter), Sistema PDV e API Backend (Node.js)."
  },
  {
    role: "Designer de Identidade Visual (Freelance)",
    company: "Projeto: Doo & Dou Petshop",
    period: "out. de 2025 (1 mês)",
    description: "Conceito Central: 'Paixão Profissional'. Conduzi o projeto desde o Briefing até a Conceituação e Execução Técnica. Entrega com Manual de Marca completo e Style Guide."
  },
  {
    role: "Especialista em Rede de Computadores",
    company: "7Tech",
    period: "out. de 2024 – out. de 2025 (1 ano e 1 mês)",
    description: "Técnico de Infraestrutura e Redes (Projeto/Contrato). Atendimento a clientes como McDonald's e Postos Shell. Instalação e manutenção de infraestrutura de rede local, cabeamento estruturado (Cisco), CFTV (Intelbras) e suporte a servidores."
  },
  {
    role: "Estagiário de TI",
    company: "Única Kids",
    period: "18 de mar. de 2024 – 18 de nov. de 2024 (6 meses)",
    description: "Suporte técnico a usuários e hardware. Manutenção de sistemas e redes. Instalação e configuração de softwares."
  }
];

export const technicalSkills = {
  "Frontend": ["React.js", "Next.js", "Angular", "HTML5", "CSS3", "JavaScript (ES6+)", "Python"],
  "Backend": ["Node.js", "Firebase"],
  "Mobile": ["Flutter", "React Native"],
  "Metodologias": ["Scrum", "Kanban", "Metodologias Ágeis"],
  "Design & UI/UX": ["Figma", "Adobe Illustrator", "Adobe Photoshop", "Canva", "UI/UX Design", "Identidade Visual"],
  "DevOps": ["Git", "GitHub", "Docker", "Linux", "Apache"],
  "Infraestrutura & Redes": ["Protocolo Cisco", "Roteadores/Switches", "Suporte a Servidores", "Cabeamento", "CFTV (Intelbras)"],
  "Cloud & IA": ["Microsoft Azure (Fundamentals, Security)", "Conceitos de IA"],
  "CMS & Frameworks": ["WordPress", "Vue.js", "Bootstrap"]
};

export const education = [
  { 
    title: 'Análise e Desenvolvimento de Sistemas', 
    institution: 'Cruzeiro do Sul Virtual', 
    year: 'Cursando',
    skills: ['Frontend: HTML, CSS, JS, React, Next.js', 'Backend: Node.js, PHP, Python', 'Mobile: Flutter, React Native', 'Metodologias Ágeis']
  }
];

export const certifications = [
  { name: "Microsoft Certified: Azure Fundamentals", issuer: "Microsoft" },
  { name: "Cisco Certified Network Associate (CCNA)", issuer: "Cisco" }
];

export const softSkills = [
  { title: "Liderança e Mentoria", desc: "Experiência coordenando equipes e mentorando +30 estudantes de programação e design." },
  { title: "Pensamento Analítico", desc: "Otimização de processos e análise de dados para tomada de decisão estratégica." },
  { title: "Comunicação Eficaz", desc: "Habilidade em apresentar projetos técnicos e conceitos de design de forma clara." },
  { title: "Adaptabilidade", desc: "Transição eficiente entre diferentes tecnologias e contextos de projeto (autônomo, freelancer, PJ)." },
  { title: "Foco em Resultados", desc: "Histórico de entrega de projetos com impacto mensurável, seguindo metodologias ágeis (Scrum)." }
];

export const testimonials = [
  {
    name: "Ana Silva",
    title: "CEO, Café Aroma",
    project: "Identidade Visual",
    quote: "O trabalho foi excepcional! A nova identidade visual capturou perfeitamente a essência da nossa marca e tem recebido muitos elogios.",
    image: "https://i.pravatar.cc/150?img=1",
    rating: 5,
    projectLogo: null,
  },
  {
    name: "Ione Lourenço",
    title: "CEO da Têca Lojas",
    project: "App Têca Estoque",
    quote: "O aplicativo Têca Estoque transformou a gestão da nossa loja. Ter o catálogo e o estoque na palma da mão otimizou todo o nosso processo. Um trabalho incrível e indispensável!",
    image: "https://iili.io/KbBMVXn.png",
    rating: 5,
    projectLogo: "https://i.postimg.cc/PvWWC5rM/Logos-lojas-Teca-2025-20251027-233927-0000.png",
  },
  {
    name: "Juliana Pereira",
    title: "Gerente, EcoWear",
    project: "E-commerce",
    quote: "O e-commerce superou nossas expectativas. O design é limpo, a navegação é intuitiva e o processo de compra é muito fluido. Excelente!",
    image: "https://i.pravatar.cc/150?img=3",
    rating: 5,
    projectLogo: null,
  },
];
