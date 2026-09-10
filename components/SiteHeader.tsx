"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { nav, whatsappLink } from "@/lib/site";

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);

  const onHero = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setSolutionsOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const solid = scrolled || !onHero || open;
  const tone: "brand" | "mono" = solid ? "brand" : "mono";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        solid
          ? "border-b border-line bg-paper/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="u-container flex h-[72px] items-center justify-between">
        <Logo variant="full" tone={tone} />

        <nav className="hidden items-center gap-1 lg:flex">
          {nav.map((item) =>
            item.children ? (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() => setSolutionsOpen(true)}
                onMouseLeave={() => setSolutionsOpen(false)}
              >
                <Link
                  href={item.href}
                  className={`inline-flex items-center gap-1 rounded-full px-3.5 py-2 text-[0.82rem] font-medium transition-colors ${
                    solid ? "text-ink-soft hover:text-brand-blue" : "text-paper/80 hover:text-paper"
                  }`}
                >
                  {item.label}
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                    <path d="M2 3.5 5 6.5 8 3.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                  </svg>
                </Link>
                {solutionsOpen && (
                  <div className="absolute left-0 top-full w-72 pt-3">
                    <div className="overflow-hidden rounded-2xl border border-line bg-paper p-2 shadow-card">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block rounded-xl px-4 py-3 text-[0.86rem] font-medium text-ink-soft transition-colors hover:bg-paper-soft hover:text-brand-blue"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-3.5 py-2 text-[0.82rem] font-medium transition-colors ${
                  pathname === item.href
                    ? solid
                      ? "text-brand-blue"
                      : "text-paper"
                    : solid
                      ? "text-ink-soft hover:text-brand-blue"
                      : "text-paper/80 hover:text-paper"
                }`}
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <div className="hidden lg:block">
          <a
            href={whatsappLink("Olá! Gostaria de falar com a CELIMED.")}
            target="_blank"
            rel="noopener noreferrer"
            className={`arrow-cta rounded-full px-5 py-2.5 text-[0.82rem] font-medium transition-colors ${
              solid ? "bg-ink text-paper hover:bg-brand-blue" : "bg-paper text-ink hover:bg-paper/90"
            }`}
          >
            Fale com a CELIMED
          </a>
        </div>

        <button
          type="button"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className={`relative z-50 flex h-10 w-10 items-center justify-center lg:hidden ${
            solid ? "text-ink" : "text-paper"
          }`}
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
            <div key={item.href} className="py-1">
              <Link
                href={item.href}
                className="block py-4 font-display text-xl tracking-[-0.02em] text-ink"
              >
                {item.label}
              </Link>
              {item.children && (
                <div className="pb-3 pl-1">
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block py-2 text-[0.95rem] text-slate"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
        <a
          href={whatsappLink("Olá! Gostaria de falar com a CELIMED.")}
          target="_blank"
          rel="noopener noreferrer"
          className="arrow-cta mt-8 justify-center rounded-full bg-ink px-6 py-4 text-sm font-medium text-paper"
        >
          Fale com a CELIMED
        </a>
      </div>
    </header>
  );
}
