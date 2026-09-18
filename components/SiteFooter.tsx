"use client";

import Link from "next/link";
import { useState } from "react";
import { Logo } from "./Logo";
import { PulseLine } from "./PulseLine";
import { nav, site, whatsappLink } from "@/lib/site";

function WhatsAppIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.85.5 3.58 1.37 5.07L2 22l5.2-1.36a9.86 9.86 0 0 0 4.84 1.24h.01c5.46 0 9.91-4.45 9.91-9.91C21.96 6.45 17.5 2 12.04 2Zm5.78 14.06c-.24.68-1.4 1.3-1.93 1.38-.5.08-1.12.11-1.8-.11-.42-.13-.96-.31-1.65-.6-2.9-1.25-4.8-4.16-4.94-4.35-.14-.19-1.18-1.57-1.18-3 0-1.43.75-2.13 1.02-2.42.27-.29.58-.36.78-.36.19 0 .39 0 .55.01.18.01.42-.07.65.5.24.58.82 2.01.89 2.16.07.15.12.32.02.51-.1.19-.15.31-.29.48-.15.17-.31.38-.44.51-.15.15-.3.31-.13.6.17.29.75 1.24 1.62 2.01 1.12.99 2.06 1.3 2.35 1.45.29.15.46.13.63-.08.17-.21.72-.84.92-1.13.19-.29.39-.24.65-.14.27.1 1.7.8 1.99.94.29.15.48.22.55.34.07.13.07.72-.17 1.4Z" />
    </svg>
  );
}

function WeChatIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M8.66 3.5C4.53 3.5 1.2 6.4 1.2 9.95c0 2.02 1.08 3.82 2.77 5l-.7 2.1 2.44-1.22c.6.16 1.24.26 1.9.3a5.9 5.9 0 0 1-.15-1.32c0-3.61 3.5-6.54 7.82-6.54.24 0 .48.01.72.03C15.36 5.4 12.32 3.5 8.66 3.5Zm-2.5 3.4c.55 0 1 .43 1 .96 0 .53-.45.96-1 .96s-1-.43-1-.96c0-.53.45-.96 1-.96Zm5 0c.55 0 1 .43 1 .96 0 .53-.45.96-1 .96s-1-.43-1-.96c0-.53.45-.96 1-.96Z" />
      <path d="M15.9 10.9c-3.68 0-6.66 2.5-6.66 5.58 0 3.08 2.98 5.58 6.66 5.58.57 0 1.13-.07 1.65-.2l2.1 1.05-.58-1.83c1.46-1.02 2.39-2.5 2.39-4.6 0-3.08-2.98-5.58-6.56-5.58Zm-2.15 2.9c.46 0 .84.36.84.8 0 .44-.38.8-.84.8-.46 0-.83-.36-.83-.8 0-.44.37-.8.83-.8Zm4.3 0c.46 0 .84.36.84.8 0 .44-.38.8-.84.8-.46 0-.83-.36-.83-.8 0-.44.37-.8.83-.8Z" />
    </svg>
  );
}

export function SiteFooter() {
  const year = new Date().getFullYear();
  const [wechatOpen, setWechatOpen] = useState(false);

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

        <div className="grid gap-12 py-16 md:grid-cols-[1.2fr_1fr_1fr]">
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
            {nav.map((i) => (
              <Link key={i.href} href={i.href} className="text-mist transition-colors hover:text-paper">
                {i.label}
              </Link>
            ))}
          </nav>

          <div className="flex flex-col gap-4 text-sm">
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-white/40">
              Contato
            </span>
            <a href={`mailto:${site.email}`} className="text-mist transition-colors hover:text-paper">
              {site.email}
            </a>
            <span className="text-mist">{site.location}</span>

            <div className="mt-2 flex items-center gap-3">
              <a
                href={whatsappLink("Olá! Gostaria de falar com a CELIMED.")}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                title="WhatsApp"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-paper transition-colors hover:border-brand-green hover:text-brand-green"
              >
                <WhatsAppIcon />
              </a>

              <div className="relative">
                <button
                  type="button"
                  aria-label="WeChat"
                  title="WeChat"
                  aria-expanded={wechatOpen}
                  onClick={() => setWechatOpen((v) => !v)}
                  onBlur={() => setWechatOpen(false)}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-paper transition-colors hover:border-brand-green hover:text-brand-green"
                >
                  <WeChatIcon />
                </button>
                {wechatOpen && (
                  <div
                    role="tooltip"
                    className="absolute bottom-full left-1/2 mb-3 w-max -translate-x-1/2 rounded-lg border border-white/15 bg-night-soft px-3 py-2 text-xs text-paper shadow-card"
                  >
                    WeChat: {site.wechatId}
                    <span
                      className="absolute left-1/2 top-full -translate-x-1/2 border-4 border-transparent border-t-white/15"
                      aria-hidden="true"
                    />
                  </div>
                )}
              </div>
            </div>
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
