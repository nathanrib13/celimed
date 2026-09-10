import type { ReactNode } from "react";
import { Reveal } from "./Reveal";
import { PulseLine } from "./PulseLine";
import { Eyebrow } from "./ui";

type PageHeroProps = {
  eyebrow: string;
  title: ReactNode;
  lead?: string;
  index?: string;
  children?: ReactNode;
};

/** Cabeçalho padrão das páginas internas. Fundo claro, muito respiro. */
export function PageHero({ eyebrow, title, lead, index, children }: PageHeroProps) {
  return (
    <section className="surface-mesh relative overflow-hidden border-b border-line pt-[128px]">
      <div className="u-container relative pb-16 md:pb-24">
        <Reveal>
          <div className="flex items-baseline gap-6">
            {index && (
              <span className="font-display text-[clamp(2.5rem,6vw,4.5rem)] font-light leading-none text-line-strong">
                {index}
              </span>
            )}
            <Eyebrow>{eyebrow}</Eyebrow>
          </div>

          <h1 className="mt-8 max-w-4xl text-[clamp(2.4rem,5.4vw,4.1rem)] leading-[1.03] text-ink">
            {title}
          </h1>

          {lead && (
            <p className="mt-8 max-w-2xl text-[1.1rem] leading-relaxed text-slate">{lead}</p>
          )}

          {children && <div className="mt-10">{children}</div>}
        </Reveal>
      </div>

      <div className="u-container pb-10">
        <PulseLine />
      </div>
    </section>
  );
}
