import Link from "next/link";
import { Reveal } from "./Reveal";
import { PageHero } from "./PageHero";
import { CtaBand } from "./CtaBand";
import { PrimaryButton, GhostButton, Eyebrow } from "./ui";
import { solutions, type Solution } from "@/lib/solutions";
import { whatsappLink } from "@/lib/site";

export function SolutionPageView({ solution }: { solution: Solution }) {
  const others = solutions.filter((s) => s.slug !== solution.slug);

  return (
    <>
      <PageHero
        eyebrow={solution.kicker}
        index={solution.order}
        title={solution.title}
        lead={solution.lead}
      >
        <p className="text-[0.95rem] font-medium uppercase tracking-[0.14em] text-brand-blue">
          {solution.subtitle}
        </p>
      </PageHero>

      {/* IMAGE SLOT — {solution.imageHint} */}

      {/* escopo: aplicações + componentes lado a lado */}
      <section className="surface-blue border-b border-line">
        <div className="u-container u-section">
          <Reveal>
            <Eyebrow>Escopo de soluções</Eyebrow>
          </Reveal>
          <div className="mt-10 grid gap-x-14 gap-y-12 md:grid-cols-2">
            <Reveal>
              <h2 className="text-[1.15rem] text-ink">Aplicações e procedimentos</h2>
              <ul className="mt-4">
                {solution.applications.map((item) => (
                  <li key={item} className="spec-item">
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="text-[1.15rem] text-ink">Componentes de solução</h2>
              <ul className="mt-4">
                {solution.components.map((item) => (
                  <li key={item} className="spec-item">
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          {solution.modularNote && (
            <Reveal className="mt-12">
              <p className="max-w-2xl border-l-2 border-brand-green pl-5 text-[0.92rem] leading-relaxed text-slate">
                {solution.modularNote}
              </p>
            </Reveal>
          )}
        </div>
      </section>

      {/* dois pontos objetivos */}
      <section className="u-container u-section">
        <div className="grid gap-x-14 gap-y-10 md:grid-cols-2">
          {solution.blocks.map((block, i) => (
            <Reveal key={block.heading} delay={i * 70}>
              <article className="flex gap-5 border-t-2 border-ink pt-6">
                <span className="num-accent font-display text-xl font-medium">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h2 className="text-[1.2rem] text-ink">{block.heading}</h2>
                  <p className="mt-3 text-[0.98rem] leading-relaxed text-slate">{block.body}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* chamada + CTA */}
      <section className="surface-green border-y border-line">
        <div className="u-container u-section">
          <Reveal className="max-w-3xl">
            <h2 className="text-[clamp(1.6rem,3vw,2.3rem)] leading-tight text-ink">
              {solution.shortCall}
            </h2>
            <div className="mt-9 flex flex-wrap gap-4">
              <PrimaryButton href="/contato">{solution.ctaLabel}</PrimaryButton>
              <GhostButton href={whatsappLink(`Olá! Tenho interesse em ${solution.menuLabel}.`)}>
                Fale com um especialista
              </GhostButton>
            </div>
          </Reveal>
        </div>
      </section>

      {/* outras áreas */}
      <section className="u-container u-section">
        <Eyebrow>Outras áreas</Eyebrow>
        <div className="mt-8 divide-y divide-line">
          {others.map((s) => (
            <Link
              key={s.slug}
              href={`/solucoes/${s.slug}`}
              className="group flex items-center justify-between gap-6 py-6"
            >
              <span className="flex items-baseline gap-4">
                <span className="num-accent font-display text-xl font-medium">{s.order}</span>
                <span className="text-[1.15rem] text-ink transition-colors group-hover:text-brand-blue">
                  {s.menuLabel}
                </span>
              </span>
              <svg
                width="18"
                height="18"
                viewBox="0 0 16 16"
                fill="none"
                aria-hidden="true"
                className="shrink-0 text-slate transition-transform duration-300 group-hover:translate-x-1"
              >
                <path
                  d="M2 8h11M9 4l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
