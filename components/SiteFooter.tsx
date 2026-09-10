import Link from "next/link";
import { Logo } from "./Logo";
import { PulseLine } from "./PulseLine";
import { nav, solutionsNav, site, whatsappLink } from "@/lib/site";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-night text-paper">
      <div className="grid-backdrop absolute inset-0 opacity-60" aria-hidden="true" />
      <div className="glow-orb -left-24 top-10 h-72 w-72 bg-brand-blue/40" aria-hidden="true" />

      <div className="u-container relative">
        <div className="border-b border-white/10 py-20">
          <p className="max-w-3xl font-display text-[clamp(1.8rem,3.6vw,2.8rem)] leading-[1.1] tracking-[-0.02em]">
            Tecnologia. Inovação. Soluções para a saúde.
          </p>
          <p className="mt-5 max-w-xl text-mist">
            Conectando o Brasil às novas tecnologias em saúde.
          </p>
        </div>

        <div className="grid gap-12 py-16 md:grid-cols-[1.2fr_1fr_1fr_1fr]">
          <div>
            <Logo variant="full" tone="mono" className="text-paper" />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-mist">
              Desenvolvimento, especificação, fornecimento e comercialização de equipamentos médicos e
              soluções para a área da saúde.
            </p>
          </div>

          <nav className="flex flex-col gap-3 text-sm">
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-white/40">
              Navegação
            </span>
            {nav
              .filter((i) => !i.children)
              .map((i) => (
                <Link key={i.href} href={i.href} className="text-mist transition-colors hover:text-paper">
                  {i.label}
                </Link>
              ))}
          </nav>

          <nav className="flex flex-col gap-3 text-sm">
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-white/40">
              Soluções
            </span>
            {solutionsNav.map((i) => (
              <Link key={i.href} href={i.href} className="text-mist transition-colors hover:text-paper">
                {i.label}
              </Link>
            ))}
          </nav>

          <div className="flex flex-col gap-3 text-sm">
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-white/40">
              Contato
            </span>
            <a
              href={whatsappLink("Olá! Gostaria de falar com a CELIMED.")}
              target="_blank"
              rel="noopener noreferrer"
              className="text-mist transition-colors hover:text-paper"
            >
              WhatsApp comercial
            </a>
            <a href={`mailto:${site.email}`} className="text-mist transition-colors hover:text-paper">
              {site.email}
            </a>
            <span className="text-mist">{site.location}</span>
          </div>
        </div>

        <PulseLine mode="loop" className="opacity-40" stroke="url(#pulse-grad)" />

        <div className="flex flex-col gap-2 py-8 text-xs text-white/40 md:flex-row md:items-center md:justify-between">
          <span>© {year} {site.legalName}. Todos os direitos reservados.</span>
          <span>Tecnologia global. Soluções desenvolvidas para o mercado brasileiro.</span>
        </div>
      </div>
    </footer>
  );
}
