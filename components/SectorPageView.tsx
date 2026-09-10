import { Reveal } from "./Reveal";
import { PageHero } from "./PageHero";
import { CtaBand } from "./CtaBand";
import { Prose, TagList } from "./Prose";
import { PrimaryButton, GhostButton, Eyebrow } from "./ui";
import { whatsappLink } from "@/lib/site";

type SectorPageViewProps = {
  eyebrow: string;
  title: string;
  lead: string;
  paragraphs: string[];
  listTitle: string;
  items: string[];
  closing: string;
  buttonLabel: string;
  whatsappMessage: string;
};

export function SectorPageView({
  eyebrow,
  title,
  lead,
  paragraphs,
  listTitle,
  items,
  closing,
  buttonLabel,
  whatsappMessage,
}: SectorPageViewProps) {
  return (
    <>
      <PageHero eyebrow={eyebrow} title={title} lead={lead} />

      <section className="u-container u-section grid gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        <Reveal>
          <Prose>
            {paragraphs.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </Prose>
        </Reveal>

        <Reveal delay={100}>
          <div className="rounded-3xl border border-line bg-wash-blue p-8">
            <Eyebrow>{listTitle}</Eyebrow>
            <div className="mt-6">
              <TagList items={items} />
            </div>
          </div>
        </Reveal>
      </section>

      <section className="surface-green border-y border-line">
        <div className="u-container u-section">
          <Reveal className="max-w-3xl">
            <h2 className="text-[clamp(1.6rem,3vw,2.3rem)] leading-tight text-ink">{closing}</h2>
            <div className="mt-9 flex flex-wrap gap-4">
              <PrimaryButton href="/contato">{buttonLabel}</PrimaryButton>
              <GhostButton href={whatsappLink(whatsappMessage)}>Falar no WhatsApp</GhostButton>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
