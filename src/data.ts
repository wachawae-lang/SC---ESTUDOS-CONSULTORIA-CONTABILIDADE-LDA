import { Service, Differential, Stat, Testimonial } from './types';

export const SERVICES_DATA: Service[] = [
  {
    id: 'contabilidade',
    title: 'Serviços de Contabilidade',
    description: 'Execução e acompanhamento da contabilidade geral, analítica ou de gestão de forma rigorosa e em conformidade legal.',
    detailedDescription: 'Auxiliamos as empresas na manutenção de uma situação financeira organizada, transparente e em estrita conformidade com o Plano Geral de Contabilidade (PGC) angolano e normas internacionais (IFRS). Fornecemos reports periódicos pormenorizados para que a direcção possa tomar decisões baseadas em dados fidedignos.',
    icon: 'Calculator',
    features: [
      'Contabilidade geral e analítica personalizada',
      'Elaboração de demonstrações financeiras (balancetes, balanços, DRE)',
      'Apoio à consolidação de contas do grupo',
      'Recuperação e actualização de contabilidades atrasadas',
      'Acompanhamento de auditorias externas'
    ]
  },
  {
    id: 'auditoria',
    title: 'Auditoria Financeira',
    description: 'Exame minucioso e independente das demonstrações financeiras para certificar o rigor e a fiabilidade das suas contas.',
    detailedDescription: 'Garantimos que os seus relatórios e demonstrações financeiras reflectem fielmente a realidade económica e financeira da empresa. O nosso trabalho de auditoria fornece credibilidade perante accionistas, investidores e instituições bancárias.',
    icon: 'FileSearch',
    features: [
      'Auditoria interna, externa e de conformidade legal',
      'Diagnóstico e avaliação de controlo interno',
      'Detecção e prevenção de riscos e fraudes',
      'Emissão de relatórios e de opinião profissional independente',
      'Recomendações detalhadas para optimização de processos'
    ]
  },
  {
    id: 'fiscal',
    title: 'Consultoria Fiscal',
    description: 'Planeamento tributário estratégico e entrega rigorosa de todas as obrigações fiscais da sua empresa.',
    detailedDescription: 'Garantimos uma gestão fiscal eficiente visando a optimização lícita de impostos (NIF, IVA, Imposto Industrial, IRT, etc.). Ajudamos o seu negócio a evitar coimas e a navegar nas constantes alterações e atualizações legislativas em Angola.',
    icon: 'Briefcase',
    features: [
      'Apoio contínuo no cumprimento das obrigações declarativas (AGT)',
      'Revisão e planeamento fiscal corporativo anual',
      'Apoio na preparação de dossiers de Preços de Transferência',
      'Acompanhamento e suporte em inspecções tributárias',
      'Apoio na submissão de reclamações e recursos hierárquicos'
    ]
  },
  {
    id: 'financeira',
    title: 'Consultoria Financeira',
    description: 'Gestão estratégica de tesouraria, optimização de recursos, redução de custos e planeamento financeiro robusto.',
    detailedDescription: 'Apoiamos a sua organização a gerir a liquidez de forma eficiente, a analisar margens de lucro, a renegociar endividamento e a orientar investimentos estratégicos. Colocamos à sua disposição analistas financeiros altamente experientes.',
    icon: 'TrendingUp',
    features: [
      'Planeamento orçamental e controlo de gestão',
      'Optimizaçao e planeamento estratégico do fluxo de caixa (Cash Flow)',
      'Análise de rácios económico-financeiros e rentabilidade',
      'Consultoria na reestruturação de dívidas e obtenção de fundos',
      'Relatórios e dashboards financeiros corporativos'
    ]
  },
  {
    id: 'viabilidade',
    title: 'Estudos de Viabilidade',
    description: 'Desenvolvimento de planos de negócios e estudos económico-financeiros detalhados para novos investimentos.',
    detailedDescription: 'Reduza a incerteza de novas ideias ou investimentos industriais, comerciais ou de serviços. Elaboramos estudos de viabilidade técnica, económica e financeira altamente profissionais para fundamentar decisões internas ou para apresentação a potenciais parceiros e bancos de investimento.',
    icon: 'PieChart',
    features: [
      'Estudo de mercado e estimativas realistas de procura/oferta',
      'Projecção estruturada de proveitos, custos e capitais de investimento',
      'Cálculo de indicadores financeiros de decisão (VAL, TIR, Payback)',
      'Análise de sensibilidade, riscos e cenários alternativos',
      'Relatórios estruturados para financiamento bancário ou programas de fomento'
    ]
  },
  {
    id: 'software',
    title: 'Softwares de Gestão',
    description: 'Venda, parametrização, formação certificada e suporte contínuo das melhores soluções de ERP e facturação.',
    detailedDescription: 'Digitalize e automatize as operações administrativas da sua empresa. Fornecemos soluções certificadas pela AGT que abrangem facturação, gestão de stock, recursos humanos e contabilidade integrada. Preparamos a sua equipa para tirar o máximo partido da tecnologia.',
    icon: 'Cpu',
    features: [
      'Implementação de sistemas de facturação homologados pela AGT',
      'Parametrização personalizada de ERPs corporativos',
      'Instalação, rede e configuração de base de dados seguras',
      'Formação operacional intensiva para operadores e administradores',
      'Suporte técnico pós-venda preventivo e correctivo'
    ]
  },
  {
    id: 'projectos',
    title: 'Gestão de Projectos',
    description: 'Planeamento, supervisão e controlo de projectos para assegurar qualidade, cumprimento de prazos e orçamentos.',
    detailedDescription: 'Implementação profissional desde a concepção inicial até ao fecho operativo de projectos de expansão, captação ou reestruturação. Mitigamos riscos e removemos bloqueios técnicos e logísticos para alinhar os resultados com as metas traçadas.',
    icon: 'Layers',
    features: [
      'Definição clara do âmbito, cronograma de actividades e marcos críticos',
      'Mapeamento rigoroso de recursos necessários e gestão de orçamento',
      'Avaliação proactiva de riscos institucionais e operacionais',
      'Relatórios constantes de progresso e controlo de desvios',
      'Garantia de conformidade técnica e altos padrões de qualidade'
    ]
  },
  {
    id: 'materiais',
    title: 'Fornecimento de Materiais',
    description: 'Abastecimento confiável e célere de consumíveis de escritório, equipamentos informáticos e suportes administrativos.',
    detailedDescription: 'Garanta a continuidade das operações sem contratempos. Oferecemos um catálogo adaptado para suprir as necessidades rotineiras ou pontuais de papelaria de alta qualidade, mobiliário executivo, hardware informático moderno e licenças.',
    icon: 'ShoppingBag',
    features: [
      'Consumíveis de escritório de marcas líderes de mercado',
      'Equipamentos informáticos (computadores, periféricos, impressoras)',
      'Mobiliário de escritório ergonómico e corporativo',
      'Logística de entrega rápida directamente nas instalações do cliente',
      'Contratos mensais de abastecimento garantido com tarifas vantajosas'
    ]
  },
  {
    id: 'comunicacao',
    title: 'Comunicação e Imagem',
    description: 'Criação de identidade visual corporativa, branding estratégico e canais de relacionamento digital.',
    detailedDescription: 'A sua imagem de marca é o primeiro elemento que gera confiança no cliente final. Ajudamos a criar logotipos, marcas, websites modernos, designs de fardas de trabalho, frotas, materiais de promoção e gestão estratégica de redes sociais.',
    icon: 'Award',
    features: [
      'Criação de marcas, logótipos elegantes e manuais de normas gráficas',
      'Design profissional de estacionários oficiais (cartões, papel timbrado, envelopes)',
      'Estratégias de presença e marketing digital empresarial',
      'Produção gráfica de folhetos, brochuras e catálogos corporativos',
      'Desenvolvimento de websites e de presença omnicanal refinada'
    ]
  }
];

export const DIFFERENTIALS_DATA: Differential[] = [
  {
    id: 'equipa',
    title: 'Equipa Altamente Qualificada',
    description: 'Profissionais multidisciplinares, compostos por contabilistas certificados pela OCPCA e consultores experientes prontos a actuar.',
    icon: 'Users'
  },
  {
    id: 'personalizado',
    title: 'Atendimento Personalizado',
    description: 'Acreditamos que cada negócio tem o seu pulsar único. Desenhamos soluções sob medida, adaptadas rigorosamente à sua dimensão.',
    icon: 'HeartHandshake'
  },
  {
    id: 'solucoes',
    title: 'Soluções Modernas e ERP',
    description: 'Integração de softwares de topo que simplificam processos de reporte financeiro e análise de custos, gerando agilidade ao seu negócio.',
    icon: 'ShieldCheck'
  },
  {
    id: 'rapidez',
    title: 'Rapidez na Resposta',
    description: 'Comunicação transparente, canais directos de apoio e tempos de resposta rápidos para assegurar a continuidade do seu negócio.',
    icon: 'Zap'
  },
  {
    id: 'experiencia',
    title: 'Experiência Ampla no Mercado',
    description: 'Profundo entendimento do tecido económico de Angola, enquadramento regulatório da AGT e melhores práticas corporativas internacionais.',
    icon: 'CalendarDays'
  },
  {
    id: 'compromisso',
    title: 'Compromisso com os Resultados',
    description: 'Foque-se no crescimento. Nós asseguramos o rigor fiscal e contabilístico necessários para impulsionar a sua solidez financeira.',
    icon: 'CheckCircle'
  }
];

export const STATS_DATA: Stat[] = [
  {
    id: 'clientes',
    value: 150,
    suffix: '+',
    label: 'Clientes Satisfeitos',
    icon: 'Users',
    targetValue: 150
  },
  {
    id: 'projectos',
    value: 420,
    suffix: '+',
    label: 'Projectos Concluídos',
    icon: 'FileText',
    targetValue: 420
  },
  {
    id: 'anos',
    value: 12,
    suffix: '',
    label: 'Anos de Experiência',
    icon: 'Award',
    targetValue: 12
  },
  {
    id: 'parceiros',
    value: 45,
    suffix: '+',
    label: 'Parceiros de Negócio',
    icon: 'Handshake',
    targetValue: 45
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: '1',
    name: 'Dr. Carlos Silva',
    role: 'Director Geral',
    company: 'TecnoHuambo Lda',
    comment: 'A transição dos nossos relatórios contabilísticos e a parametrização do software de facturação com a equipa da SC foi um marco fantástico. O profissionalismo, rigor e agilidade com que conduzem todos os processos fiscais dá-nos total tranquilidade operativa.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=facearea&facepad=2&w=256&h=256&q=80',
    rating: 5
  },
  {
    id: '2',
    name: 'Eng.ª Ana Martins',
    role: 'Directora Financeira',
    company: 'GlobalLog Logística',
    comment: 'O estudo de viabilidade económica elaborado pela SC permitiu-nos alcançar o financiamento necessário para as novas instalações industriais. Revelaram um profundo conhecimento das exigências do mercado bancário angolano.',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?fit=facearea&facepad=2&w=256&h=256&q=80',
    rating: 5
  },
  {
    id: '3',
    name: 'Dr. Manuel Castro',
    role: 'Administrador executivo',
    company: 'Grupo Agro-Sustentável',
    comment: 'Mais do que uma empresa de contabilidade externa, consideramo-los um verdadeiro conselheiro de negócios. A resposta deles a consultas fiscais complexas ou ao fornecimento urgente de consumíveis corporativos é sempre incrivelmente célere.',
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?fit=facearea&facepad=2&w=256&h=256&q=80',
    rating: 5
  }
];
