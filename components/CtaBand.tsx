import { Reveal } from "./Reveal";
import { PulseLine } from "./PulseLine";
import { PrimaryButton } from "./ui";

type CtaBandProps = {
  title?: string;
  text?: string;
  buttonLabel?: string;
  href?: string;
};

export function CtaBand({
  title = "Vamos conversar sobre a sua necessidade?",
  text = "Conte a área de interesse ou o desafio da sua instituição. Nossa equipe responde diretamente por WhatsApp ou e-mail.",
  buttonLabel = "Fale com a gente",
  href = "/#contato",
}: CtaBandProps) {
  return (
    <section className="relative overflow-hidden bg-night text-paper">
      <div className="grid-backdrop absolute inset-0" aria-hidden="true" />
      <div className="glow-orb right-[-10%] top-[-20%] h-80 w-80 bg-brand-green/30" aria-hidden="true" />
      <div className="glow-orb bottom-[-30%] left-[10%] h-72 w-72 bg-brand-blue/40" aria-hidden="true" />

      <div className="u-container relative u-section">
        <Reveal className="max-w-3xl">
          <h2 className="text-[clamp(1.9rem,4vw,3rem)] text-paper">{title}</h2>
          <p className="mt-6 max-w-2xl text-[1.05rem] leading-relaxed text-mist">{text}</p>
          <div className="mt-9">
            <PrimaryButton href={href} className="bg-paper! text-ink! hover:bg-paper/90!">
              {buttonLabel}
            </PrimaryButton>
          </div>
        </Reveal>

        <div className="mt-16">
          <PulseLine mode="loop" className="opacity-50" />
        </div>
      </div>
    </section>
  );
}
