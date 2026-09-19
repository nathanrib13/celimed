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

  whatsapp: "5521995776588",
  // Exibição visível na página, no padrão comercial brasileiro (sem +55).
  // O "+55" só deve aparecer em identificadores técnicos (href do wa.me, WeChat ID).
  whatsappLabel: "(21) 99577-6588",
  wechatId: "+5521995776588",
  email: "pedromaduce@gmail.com",
  location: "Brasil",
};

export type NavItem = {
  label: string;
  href: string;
};

/** Navegação por âncora: a home é uma página única com seções internas. */
export const nav: NavItem[] = [
  { label: "A CELIMED", href: "/#sobre" },
  { label: "Soluções", href: "/#solucoes" },
  { label: "Setores", href: "/#setores" },
  { label: "Contato", href: "/#contato" },
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
