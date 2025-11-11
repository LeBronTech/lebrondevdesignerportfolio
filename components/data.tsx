import { Instagram, Github } from 'lucide-react';

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
  { name: 'GetNinjas', url: 'https://www.getninjas.com.br/anuncios/design-e-tecnologia/aplicativos-para-celular-e-redes-sociais/design-e-tecnologia-lebrondev-designer?ref=internal', icon: 'https://i.postimg.cc/XNZKCVp6/Design-sem-nome-1.png' },
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
    { name: 'HTML', icon: 'https://i.postimg.cc/pXMmp8Bv/1024x1024-logo-2582748-1280.png' },
    { name: 'CSS', icon: 'https://i.postimg.cc/sXvtdwHX/1024x1024-logo-2582747-960-720.png' },
    { name: 'JavaScript', icon: 'https://i.postimg.cc/g2rNbHcn/1761770699957.png' },
    { name: 'TypeScript', icon: 'https://iili.io/Kpz8mIp.png' },
    { name: 'React', icon: 'https://i.postimg.cc/g00TPxwS/toppng-com-react-native-svg-transformer-allows-you-import-svg-aperture-science-innovators-logo-986x1.png' },
    { name: 'Angular', icon: 'https://iili.io/KbAcdas.png' },
    { name: 'Node.js', icon: 'https://i.postimg.cc/gkh37mNQ/1761417804462.png' },
    { name: 'Next.js', icon: 'https://i.postimg.cc/v8p7YcKN/nextjs-icon.png' },
    { name: 'Python', icon: 'https://i.postimg.cc/s2v1GJQN/pngaaa-com-619137.png' },
    { name: 'Flutter', icon: 'https://i.postimg.cc/brK94JXq/pngwing-com.png' },
    { name: 'Android Studio', icon: 'https://i.postimg.cc/c4XMw04P/Android-Studio-icon-svg.png' },
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
    description: 'Website focado na Igreja Católica, desenvolvido para a comunidade Corações Sagrados. Apresenta um design sereno e inspirador, com seções dedicadas a novenas e à história dos santos, fortalecendo a conexão entre os membros.',
    tools: ['React', 'Next.js', 'Node.js', 'TypeScript'],
    liveUrl: 'https://lebrontech.github.io/Novenascoracoessagrados/#apresentacao_ns',
    logo: 'https://iili.io/KbAVxzG.jpg',
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
  { id: 4, category: 'Apps', title: 'Têca Estoque', images: ['https://i.postimg.cc/8cHTRVxf/1761768850618.jpg', 'https://i.postimg.cc/02kk8bJK/1761768459633.png', 'https://i.postimg.cc/vZcjkfR4/1762430295149.jpg', 'https://i.postimg.cc/MZbZ2yXR/1761769035345.jpg', 'https://i.postimg.cc/bYHYcQdq/1761769176769.jpg', 'https://i.postimg.cc/44b4kznV/1761769244222.jpg', 'https://i.postimg.cc/Mpv4NVkH/1762429896102.jpg', 'https://i.postimg.cc/htfw6TFf/1762430466573.jpg', 'https://i.postimg.cc/VL7pK4hY/1762430613369.jpg'], description: 'Um catálogo completo e gerenciador de estoque desenvolvido para as lojas de almofadas Têca Decoração e Ione Lourenço Decor, centralizando o controle de produtos e otimizando a gestão.', tools: ['Flutter', 'React', 'Figma', 'Android Studio'], liveUrl: 'https://tecalojas.vercel.app/', behanceUrl: null, logo: 'https://i.postimg.cc/PvWWC5rM/Logos-lojas-Teca-2025-20251027-233927-0000.png',
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
    description: 'Website para o restaurante Gusto, com um sistema de reservas online integrado e um cardápio digital interativo para aprimorar a experiência do cliente.', 
    tools: ['HTML', 'CSS', 'JavaScript', 'VSCode'], 
    liveUrl: 'https://lebrontech.github.io/Restaurante-Gusto/index.html',
    logo: 'https://iili.io/KbfPeoJ.png',
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
    description: 'Identidade visual completa para um pet shop e clínica veterinária, transmitindo cuidado, alegria e profissionalismo.', 
    tools: ['Illustrator', 'Photoshop'], 
    liveUrl: null,
    behanceUrl: 'https://www.behance.net/gallery/238148345/Doo-DouPetshop',
    detailedContent: [
      { image: 'https://iili.io/KDvzsDX.png', description: '' },
      { image: 'https://iili.io/KDvxbyP.png', description: '' },
      { image: 'https://iili.io/KDvxpu1.png', description: '' },
      { image: 'https://iili.io/KDvzcN9.png', description: '' },
      { image: 'https://iili.io/KDvIoJV.png', description: '' }
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

export const skills = {
  "Design": [
    { name: 'Photoshop', level: 90 },
    { name: 'Illustrator', level: 95 },
    { name: 'Figma', level: 85 },
    { name: 'Canva', level: 90 },
    { name: 'Capcut (Edição de Vídeo)', level: 80 },
  ],
  "Desenvolvimento": [
    { name: 'HTML & CSS', level: 95 },
    { name: 'JavaScript', level: 85 },
    { name: 'TypeScript', level: 80 },
    { name: 'React / Next.js', level: 80 },
    { name: 'Angular', level: 70 },
    { name: 'Flutter', level: 75 },
    { name: 'WordPress', level: 90 },
  ],
};

export const education = [
  { title: 'Análise e Desenvolvimento de Sistemas', institution: 'Universidade Estácio de Sá', year: '2023 - Cursando' },
  { title: 'Certificação em Design Gráfico', institution: 'Udemy', year: '2022' },
  { title: 'Certificação em Desenvolvimento Web Full Stack', institution: 'Codecademy', year: '2023' },
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
