import { Reveal } from "./Reveal";
import { ProductVisual } from "./ProductVisual";
import { solutions } from "@/lib/solutions";
import { whatsappLink } from "@/lib/site";

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

/**
 * Grade de cards de produto por área de atuação, sem numeração e sem
 * hierarquia entre eles — cada card traz uma imagem representativa e um
 * resumo curto, no estilo usado por grandes fabricantes de equipamentos
 * médicos (imagem do produto + poucas linhas de contexto).
 */
export function SolutionsIndex() {
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {solutions.map((s, i) => (
        <Reveal key={s.slug} delay={i * 60}>
          <a
            href={whatsappLink(`Olá! Tenho interesse em ${s.menuLabel}.`)}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-paper p-5 transition-all duration-500 hover:-translate-y-1 hover:border-brand-blue/40 hover:shadow-card"
          >
            <ProductVisual slug={s.slug} />
            <div className="flex flex-1 flex-col pt-6">
              <span className="text-xs font-semibold uppercase tracking-[0.16em] text-slate">
                {s.kicker}
              </span>
              <h3 className="mt-2 text-[1.2rem] text-ink">{s.menuLabel}</h3>
              <p className="mt-2 flex-1 text-[0.92rem] leading-relaxed text-slate">{s.shortCall}</p>
              <span className="arrow-cta mt-5 text-sm font-medium text-ink">
                Falar sobre esta área
                <ArrowIcon />
              </span>
            </div>
          </a>
        </Reveal>
      ))}
    </div>
  );
}
