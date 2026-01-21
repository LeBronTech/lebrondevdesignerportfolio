
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
    { name: 'Tailwind CSS', icon: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg' },
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
    id: 15,
    category: 'Websites',
    title: 'VitalTrimPro',
    images: [
      'https://iili.io/frGuvn4.png',
      'https://iili.io/frGPhAl.png',
      'https://iili.io/frGuetf.png',
      'https://iili.io/frGuWFI.png',
      'https://iili.io/frGuNus.png'
    ],
    description: 'Landing page de alta conversão desenvolvida para promover o suplemento natural VitalTrimPro. O projeto apresenta um design moderno em tons de verde vibrante, focado em Direct Response Marketing. Inclui seções de prova social, garantia, composição do produto e um sistema bilíngue (Inglês/Português) com alternância fluida.',
    tools: ['HTML', 'CSS', 'JavaScript', 'Tailwind CSS', 'Figma'],
    liveUrl: 'https://vital-trim-pro.vercel.app/',
    role: 'Desenvolvedor Front-end & UI Designer',
    timeline: 'Jan. de 2026',
    methodology: 'Direct Response Marketing',
    detailedContent: [
      { image: 'https://iili.io/frGuvn4.png', description: 'Visão geral da Landing Page VitalTrimPro, destacando a promessa principal e o design vibrante.' },
      { image: 'https://iili.io/frGPhAl.png', description: 'Hero Section otimizada com destaque para os três produtos (Shape Boost, Lean Protein, Night Guard) e CTA claro.' },
      { image: 'https://iili.io/frGuetf.png', description: 'Interface responsiva exibindo o switch de idiomas (EN/PT) e a promessa de transformação em 30 dias.' },
      { image: 'https://iili.io/frGuWFI.png', description: 'Experiência mobile-first impecável garantindo conversão em qualquer dispositivo (iPad e iPhone).' },
      { image: 'https://iili.io/frGuNus.png', description: 'Sistema de notificações de "Compra Recente" (Social Proof) para gerar urgência e confiança no visitante.' }
    ]
  },
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
    description: 'Logomarca para uma marca de moda surfwear, incorporando elementos dinâmicos e vibrantes que remetem ao movimento do mar e ao estilo de vida praiano.', 
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
  }
];

export const experience = [
  {
    role: "Engenheiro de Software Full Stack",
    company: "Freelancer / Autônomo",
    period: "2023 - Presente",
    description: "Desenvolvimento de soluções web e mobile completas, utilizando React, Next.js, Flutter e Node.js. Especializado em transformar designs Figma em código limpo e performático, com foco em SEO e experiência do usuário."
  },
  {
    role: "Designer UI/UX",
    company: "Projetos Diversos",
    period: "2022 - 2023",
    description: "Criação de identidades visuais e interfaces intuitivas para clientes de diversos nichos, focando em usabilidade e estética moderna."
  }
];

export const technicalSkills = {
  "Frontend": ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML5", "CSS3"],
  "Backend": ["Node.js", "Express", "Python", "API REST"],
  "Mobile": ["Flutter", "React Native", "Android Studio"],
  "Design": ["Figma", "Photoshop", "Illustrator", "Canva"]
};

export const education = [
  {
    title: "Análise e Desenvolvimento de Sistemas",
    year: "2023 - 2025",
    institution: "Universidade",
    skills: ["Engenharia de Software", "Estrutura de Dados", "Programação Web e Mobile"]
  }
];

export const certifications = [
  { name: "Desenvolvimento Web Completo", issuer: "Udemy" },
  { name: "UI/UX Design Masterclass", issuer: "Domestika" }
];

export const softSkills = [
  { title: "Comunicação", desc: "Clareza na transmissão de ideias e alinhamento com clientes." },
  { title: "Autodidata", desc: "Capacidade de aprender novas tecnologias rapidamente." },
  { title: "Visão de Negócio", desc: "Foco em criar soluções que geram valor real." }
];

export const testimonials = [
    {
        name: "Ione",
        title: "Proprietária da Ionedecor",
        quote: "O Leandro transformou a gestão da minha loja. O sistema integrado facilitou tudo, e o aplicativo ficou lindo!",
        image: "https://randomuser.me/api/portraits/women/44.jpg",
        project: "Têca Estoque",
        rating: 5,
        projectLogo: "https://i.postimg.cc/PvWWC5rM/Logos-lojas-Teca-2025-20251027-233927-0000.png"
    },
    {
        name: "Comunidade Corações Sagrados",
        title: "Líder Comunitário",
        quote: "O site ficou incrível, muito além do que imaginávamos. A área de novenas é muito acessada.",
        image: "https://randomuser.me/api/portraits/men/32.jpg",
        project: "Corações Sagrados",
        rating: 5,
        projectLogo: "https://iili.io/KbAVxzG.jpg"
    }
];
