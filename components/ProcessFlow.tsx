import { Reveal } from "./Reveal";

export type FlowStep = {
  n: string;
  title: string;
  text: string;
};

/** Fluxo horizontal de etapas, conectado por uma trilha com nós. */
export function ProcessFlow({ steps }: { steps: FlowStep[] }) {
  return (
    <div className="-mx-6 overflow-x-auto px-6 md:mx-0 md:overflow-visible md:px-0">
      <ol className="flex min-w-[720px] gap-0 md:min-w-0">
        {steps.map((step, i) => (
          <Reveal
            as="li"
            key={step.n}
            delay={i * 70}
            className="relative flex-1 pt-10"
          >
            {/* trilha */}
            <span
              className="absolute left-0 right-0 top-[7px] h-px bg-line-strong"
              aria-hidden="true"
            />
            <span
              className="absolute left-0 top-0 h-3.5 w-3.5 rounded-full border-2 border-paper bg-brand-gradient ring-1 ring-line-strong"
              aria-hidden="true"
            />
            <div className="pr-6">
              <span className="num-accent font-display text-lg font-medium">{step.n}</span>
              <h3 className="mt-2 text-[1.02rem] leading-snug text-ink">{step.title}</h3>
              <p className="mt-2 text-[0.86rem] leading-relaxed text-slate">{step.text}</p>
            </div>
          </Reveal>
        ))}
      </ol>
    </div>
  );
}
