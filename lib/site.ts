/**
 * Configuração central do site.
 * Ajuste os dados de contato antes de publicar.
 */
export const site = {
  name: "CELIMED",
  legalName: "CELIMED",
  tagline: "Tecnologia que conecta inovação e saúde.",
  description:
    "A CELIMED desenvolve, especifica e fornece equipamentos médicos e soluções tecnológicas para a área da saúde, conectando instituições brasileiras a fabricantes e tecnologias nacionais e internacionais.",
  // Trocar pelo domínio próprio quando estiver disponível (ex.: https://celimed.com.br).
  url: "https://nathanrib13.github.io/celimed",

  // TODO: substituir pelos dados comerciais reais.
  whatsapp: "5599999999999",
  whatsappLabel: "(00) 00000-0000",
  email: "contato@celimed.com.br",
  location: "Brasil",
};

export type NavItem = {
  label: string;
  href: string;
  children?: NavItem[];
};

export const solutionsNav: NavItem[] = [
  { label: "Endoscopia & Colonoscopia", href: "/solucoes/endoscopia-colonoscopia" },
  { label: "Ultrassom", href: "/solucoes/ultrassom" },
  { label: "Estética Médica", href: "/solucoes/estetica-medica" },
  { label: "Outras Soluções em Saúde", href: "/solucoes/outras-solucoes" },
];

export const nav: NavItem[] = [
  { label: "A CELIMED", href: "/a-celimed" },
  { label: "Soluções", href: "/solucoes", children: solutionsNav },
  { label: "Setor Público", href: "/setor-publico" },
  { label: "Setor Privado", href: "/setor-privado" },
  { label: "Tecnologia & Desenvolvimento", href: "/tecnologia-desenvolvimento" },
  { label: "Contato", href: "/contato" },
];

export function whatsappLink(message?: string) {
  const base = `https://wa.me/${site.whatsapp}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export function mailtoLink(subject: string, body?: string) {
  const params = new URLSearchParams();
  params.set("subject", subject);
  if (body) params.set("body", body);
  return `mailto:${site.email}?${params.toString()}`;
}
