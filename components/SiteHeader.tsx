"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { nav, whatsappLink } from "@/lib/site";

/**
 * Header com cor sólida fixa (sem transição transparente -> sólida ao rolar).
 * Navegação por âncora: a home é uma página única com seções internas.
 */
export function SiteHeader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-paper/95 backdrop-blur-md">
      <div className="u-container flex h-[72px] items-center justify-between">
        <Logo variant="full" tone="brand" />

        <nav className="hidden items-center gap-1 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-3.5 py-2 text-[0.82rem] font-medium text-ink-soft transition-colors hover:text-brand-blue"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a
            href={whatsappLink("Olá! Gostaria de falar com a Celimed.")}
            target="_blank"
            rel="noopener noreferrer"
            className="arrow-cta rounded-full bg-ink px-5 py-2.5 text-[0.82rem] font-medium text-paper transition-colors hover:bg-brand-blue"
          >
            Fale com a Celimed
          </a>
        </div>

        <button
          type="button"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="relative z-50 flex h-10 w-10 items-center justify-center text-ink lg:hidden"
        >
          <span className="relative block h-3.5 w-6">
            <span
              className={`absolute left-0 block h-[1.5px] w-6 bg-current transition-all duration-300 ${
                open ? "top-1.5 rotate-45" : "top-0"
              }`}
            />
            <span
              className={`absolute left-0 top-1.5 block h-[1.5px] w-6 bg-current transition-all duration-300 ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 block h-[1.5px] w-6 bg-current transition-all duration-300 ${
                open ? "top-1.5 -rotate-45" : "top-3"
              }`}
            />
          </span>
        </button>
      </div>

      {/* menu mobile */}
      <div
        className={`fixed inset-0 top-0 z-40 flex flex-col bg-paper px-6 pt-24 pb-10 transition-all duration-300 lg:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <nav className="flex flex-col divide-y divide-line">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block py-4 font-display text-xl tracking-[-0.02em] text-ink"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <a
          href={whatsappLink("Olá! Gostaria de falar com a Celimed.")}
          target="_blank"
          rel="noopener noreferrer"
          className="arrow-cta mt-8 justify-center rounded-full bg-ink px-6 py-4 text-sm font-medium text-paper"
        >
          Fale com a Celimed
        </a>
      </div>
    </header>
  );
}
