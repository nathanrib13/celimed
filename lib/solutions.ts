/**
 * Dados das áreas de solução.
 *
 * Arquitetura preparada para o futuro (Área -> Categoria -> Produto):
 * cada Solution pode receber, adiante, um array `categories`, e cada
 * categoria um array `products`, sem alterar as páginas ou a navegação.
 * Ver os tipos Category e Product ao final do arquivo.
 */

export type SolutionBlock = {
  heading: string;
  body: string;
};

export type Solution = {
  slug: string;
  order: string; // "01" .. "04"
  menuLabel: string;
  kicker: string;
  title: string;
  subtitle: string;
  lead: string;
  blocks: SolutionBlock[];
  /** aplicações e procedimentos relacionados */
  applications: string[];
  /** componentes que podem compor a solução */
  components: string[];
  shortCall: string;
  ctaLabel: string;
  /** slot de imagem sugerido para quando houver banco de fotos */
  imageHint: string;
  modularNote?: string;
  categories?: Category[];
};

export const solutions: Solution[] = [
  {
    slug: "endoscopia-colonoscopia",
    order: "01",
    menuLabel: "Endoscopia & Colonoscopia",
    kicker: "Área de atuação",
    title: "Endoscopia & Colonoscopia",
    subtitle: "Tecnologia e precisão para diagnóstico endoscópico",
    lead: "Desenvolvimento e fornecimento de soluções para endoscopia digestiva e colonoscopia, com foco em qualidade de imagem, eficiência operacional e confiabilidade nos procedimentos.",
    blocks: [
      {
        heading: "Solução por instituição",
        body: "Analisamos as necessidades de cada unidade para identificar a configuração adequada à realidade técnica, operacional e econômica do projeto.",
      },
      {
        heading: "Escala",
        body: "Configurações para clínicas, centros diagnósticos e estruturas hospitalares de maior complexidade.",
      },
    ],
    applications: [
      "Endoscopia digestiva alta",
      "Colonoscopia",
      "Videoendoscopia",
      "Processamento e visualização de imagem",
    ],
    components: [
      "Plataformas de videoendoscopia",
      "Processadores de imagem",
      "Fontes de luz",
      "Monitores médicos",
      "Gastroscópios e colonoscópios",
      "Acessórios e periféricos",
    ],
    shortCall: "Soluções completas para endoscopia e colonoscopia. Imagem, precisão e eficiência integradas à rotina de clínicas e hospitais.",
    ctaLabel: "Conheça nossas soluções",
    imageHint: "Torre de endoscopia, processador, monitor médico e endoscópios em sala moderna de procedimentos.",
  },
  {
    slug: "ultrassom",
    order: "02",
    menuLabel: "Ultrassom",
    kicker: "Área de atuação",
    title: "Ultrassom e Diagnóstico por Imagem",
    subtitle: "Tecnologia para diferentes especialidades médicas",
    lead: "Soluções em ultrassonografia para hospitais, clínicas, consultórios e centros de diagnóstico, combinando qualidade de imagem, mobilidade e eficiência operacional.",
    blocks: [
      {
        heading: "Especificação",
        body: "Identificação do equipamento por aplicação clínica, recursos tecnológicos, qualidade de imagem, fluxo de atendimento e investimento.",
      },
      {
        heading: "Configurações",
        body: "De equipamentos compactos e portáteis a plataformas para aplicações clínicas avançadas.",
      },
    ],
    applications: [
      "Ultrassonografia geral",
      "Cardiovascular",
      "Ginecologia e obstetrícia",
      "Musculoesquelético",
      "Point-of-care",
      "Aplicações hospitalares",
    ],
    components: [
      "Sistemas de ultrassom de console",
      "Equipamentos portáteis",
      "Transdutores por aplicação",
      "Estações de laudo e integração",
    ],
    shortCall: "Diagnóstico por imagem com tecnologia, precisão e versatilidade.",
    ctaLabel: "Conheça as soluções em ultrassom",
    imageHint: "Equipamento de ultrassom, tela de diagnóstico e profissional de saúde durante o exame.",
  },
  {
    slug: "estetica-medica",
    order: "03",
    menuLabel: "Estética Médica",
    kicker: "Área de atuação",
    title: "Tecnologia para Estética Médica",
    subtitle: "Inovação aplicada à estética, dermatologia e tratamentos avançados",
    lead: "Tecnologias para estética médica, dermatologia e tratamentos não invasivos ou minimamente invasivos, avaliadas no mercado internacional.",
    blocks: [
      {
        heading: "Avaliação de mercado",
        body: "Análise de equipamentos, fabricantes e novas soluções, com foco em inovação, desempenho, segurança e eficiência operacional.",
      },
      {
        heading: "Conformidade",
        body: "Portfólio conforme a estratégia de desenvolvimento da Celimed e as exigências regulatórias aplicáveis a cada equipamento.",
      },
    ],
    applications: [
      "Rejuvenescimento e tratamento da pele",
      "Contorno corporal",
      "Procedimentos dermatológicos",
      "Depilação",
      "Análise de pele",
    ],
    components: [
      "Radiofrequência e microagulhamento com RF",
      "HIFU",
      "Laser (CO2 fracionado, depilação)",
      "IPL / OPT / DPL",
      "Criolipólise",
    ],
    modularNote: "Esta área é modular. Novas categorias, equipamentos e páginas de produto podem ser adicionadas conforme o portfólio aprovado e comercializado, sem reconstruir o site.",
    shortCall: "Tecnologia avançada para a evolução da estética médica.",
    ctaLabel: "Conheça nossas tecnologias",
    imageHint: "Equipamento médico estético moderno em ambiente clínico profissional. Mostrar a tecnologia, não o procedimento.",
  },
  {
    slug: "outras-solucoes",
    order: "04",
    menuLabel: "Outras Soluções em Saúde",
    kicker: "Área de atuação",
    title: "Outras Soluções em Saúde",
    subtitle: "Um portfólio em constante evolução",
    lead: "Novas linhas de produtos e soluções desenvolvidas a partir de demandas do mercado e necessidades específicas de cada cliente.",
    blocks: [
      {
        heading: "Como funciona",
        body: "Sua instituição apresenta a necessidade. A Celimed analisa a demanda e busca a solução adequada ao projeto.",
      },
      {
        heading: "Portfólio aberto",
        body: "Incorporação contínua de equipamentos e tecnologias para diferentes aplicações médicas e hospitalares.",
      },
    ],
    applications: [
      "Hospitais",
      "Clínicas e centros médicos",
      "Centros de diagnóstico",
      "Instituições públicas de saúde",
    ],
    components: [
      "Especificação técnica sob demanda",
      "Prospecção de fabricantes",
      "Estruturação do fornecimento",
    ],
    shortCall: "Novas tecnologias e soluções desenvolvidas de acordo com as necessidades do mercado e de nossos clientes.",
    ctaLabel: "Solicitar uma solução",
    imageHint: "Ambiente hospitalar moderno, equipamentos e profissionais de saúde.",
  },
];

export function getSolution(slug: string) {
  return solutions.find((s) => s.slug === slug);
}

/* ------------------------------------------------------------------ */
/*  Tipos reservados para o crescimento do catálogo.                  */
/*  Ainda não utilizados nas páginas. Estrutura: Área > Categoria >   */
/*  Produto. Basta popular `categories` em cada Solution acima.       */
/* ------------------------------------------------------------------ */

export type Product = {
  slug: string;
  name: string;
  summary: string;
  applications: string[];
  technology: string[];
  features: { label: string; description?: string }[];
  specs: { label: string; value: string }[];
  configurations?: string[];
  downloads?: { label: string; href: string }[];
  image?: string;
};

export type Category = {
  slug: string;
  name: string;
  description?: string;
  products: Product[];
};
