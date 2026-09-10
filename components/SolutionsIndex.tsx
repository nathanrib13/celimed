import Link from "next/link";
import { Reveal } from "./Reveal";
import { solutions } from "@/lib/solutions";

const [endoscopia, ultrassom, estetica, outras] = solutions;

function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M2 8h11M9 4l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function SolutionsIndex() {
  return (
    <div className="grid gap-5">
      {/* Card 01 — destaque principal */}
      <Reveal>
        <Link
          href={`/solucoes/${endoscopia.slug}`}
          className="group relative block overflow-hidden rounded-3xl bg-night p-8 text-paper transition-transform duration-500 hover:-translate-y-1 md:p-14"
        >
          <div className="grid-backdrop absolute inset-0 opacity-60" aria-hidden="true" />
          <div
            className="glow-orb right-[-8%] top-[-20%] h-72 w-72 bg-brand-green/30"
            aria-hidden="true"
          />
          <div className="relative flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <div className="flex items-center gap-4">
                <span className="font-display text-5xl font-light text-white/30 md:text-6xl">01</span>
                <span className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-green">
                  {endoscopia.kicker}
                </span>
              </div>
              <h3 className="mt-6 text-[clamp(1.8rem,3.4vw,2.6rem)] leading-tight text-paper">
                {endoscopia.menuLabel}
              </h3>
              <p className="mt-4 text-[1.02rem] leading-relaxed text-mist">
                Tecnologias e soluções integradas para unidades de endoscopia digestiva e colonoscopia.
              </p>
            </div>
            <span className="arrow-cta shrink-0 text-sm font-medium text-paper">
              Saiba mais
              <ArrowIcon />
            </span>
          </div>
        </Link>
      </Reveal>

      {/* Cards 02 e 03 */}
      <div className="grid gap-5 md:grid-cols-2">
        {[ultrassom, estetica].map((s, i) => (
          <Reveal key={s.slug} delay={i * 80}>
            <Link
              href={`/solucoes/${s.slug}`}
              className="group flex h-full flex-col justify-between rounded-3xl border border-line bg-paper p-8 transition-all duration-500 hover:-translate-y-1 hover:border-brand-blue/40 hover:bg-wash-blue hover:shadow-card md:p-10"
            >
              <div>
                <div className="flex items-center gap-4">
                  <span className="num-accent font-display text-4xl font-medium">{s.order}</span>
                  <span className="text-xs font-semibold uppercase tracking-[0.16em] text-slate">
                    {s.kicker}
                  </span>
                </div>
                <h3 className="mt-6 text-[clamp(1.5rem,2.4vw,1.9rem)] text-ink">{s.menuLabel}</h3>
                <p className="mt-4 text-[0.98rem] leading-relaxed text-slate">
                  {i === 0
                    ? "Soluções em diagnóstico por imagem para diferentes especialidades e ambientes clínicos."
                    : "Tecnologias avançadas para estética, dermatologia e tratamentos médico-estéticos."}
                </p>
              </div>
              <span className="arrow-cta mt-10 text-sm font-medium text-ink">
                Saiba mais
                <ArrowIcon />
              </span>
            </Link>
          </Reveal>
        ))}
      </div>

      {/* 04 — faixa Outras Soluções */}
      <Reveal>
        <Link
          href={`/solucoes/${outras.slug}`}
          className="group flex flex-col gap-6 rounded-3xl border border-line bg-wash-green p-8 transition-colors duration-500 hover:border-brand-green/40 md:flex-row md:items-center md:justify-between md:p-10"
        >
          <div className="max-w-2xl">
            <div className="flex items-center gap-4">
              <span className="num-accent font-display text-3xl font-medium">04</span>
              <h3 className="text-[clamp(1.3rem,2vw,1.6rem)] text-ink">{outras.menuLabel}</h3>
            </div>
            <p className="mt-3 text-[0.95rem] leading-relaxed text-slate">
              Novas tecnologias e soluções desenvolvidas de acordo com as necessidades do mercado e de
              nossos clientes.
            </p>
          </div>
          <span className="arrow-cta shrink-0 text-sm font-medium text-ink">
            Conheça
            <ArrowIcon />
          </span>
        </Link>
      </Reveal>
    </div>
  );
}
