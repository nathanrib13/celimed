import { Reveal } from "@/components/Reveal";
import { PulseLine } from "@/components/PulseLine";
import { ProductVisual } from "@/components/ProductVisual";
import { SolutionsIndex } from "@/components/SolutionsIndex";
import { SectorsSection } from "@/components/SectorsSection";
import { ContactDirect } from "@/components/ContactDirect";
import { CtaBand } from "@/components/CtaBand";
import { Eyebrow, PrimaryButton, GhostButton, SectionHeading } from "@/components/ui";
import { solutions } from "@/lib/solutions";

export default function HomePage() {
  return (
    <>
      {/* ---------- HERO ---------- */}
      <section className="relative overflow-hidden bg-night text-paper">
        <div className="grid-backdrop absolute inset-0 opacity-70" aria-hidden="true" />
        <div className="glow-orb left-[-10%] top-[-10%] h-96 w-96 bg-brand-blue/40" aria-hidden="true" />
        <div className="glow-orb bottom-[-20%] right-[-5%] h-80 w-80 bg-brand-green/25" aria-hidden="true" />

        <div className="u-container relative grid items-center gap-16 pb-24 pt-[168px] lg:grid-cols-[1.1fr_0.9fr] lg:pb-32 lg:pt-[184px]">
          <Reveal>
            <Eyebrow onDark>Healthtech e soluções médicas</Eyebrow>
            <h1 className="mt-7 text-[clamp(2.6rem,6vw,4.6rem)] leading-[1.02] text-paper">
              Tecnologia que conecta <span className="text-gradient">inovação e saúde.</span>
            </h1>
            <p className="mt-8 max-w-xl text-[1.1rem] leading-relaxed text-paper/85">
              Equipamentos médicos e soluções para acompanhar a evolução da saúde. A CELIMED conecta
              instituições brasileiras a tecnologias e fabricantes nacionais e internacionais.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <PrimaryButton href="#solucoes" className="bg-paper! text-ink! hover:bg-paper/90!">
                Conheça nossas soluções
              </PrimaryButton>
              <GhostButton href="#contato" className="border-white/25! text-paper! hover:border-white!">
                Fale com a CELIMED
              </GhostButton>
            </div>
          </Reveal>

          <Reveal delay={120} className="grid grid-cols-2 gap-4">
            {solutions.map((s) => (
              <div key={s.slug} className="overflow-hidden rounded-2xl bg-paper/5 p-2 ring-1 ring-white/10">
                <ProductVisual slug={s.slug} tone="dark" />
              </div>
            ))}
          </Reveal>
        </div>

        <div className="u-container relative pb-12">
          <PulseLine mode="loop" className="opacity-60" />
        </div>
      </section>

      {/* ---------- SOBRE ---------- */}
      <section id="sobre" className="u-container u-section scroll-mt-24">
        <Reveal>
          <Eyebrow>A CELIMED</Eyebrow>
          <h2 className="mt-6 max-w-2xl text-[clamp(1.8rem,3.4vw,2.6rem)] leading-tight text-ink">
            Conectamos instituições de saúde a tecnologia médica de ponta.
          </h2>
          <p className="mt-6 max-w-2xl text-[1.05rem] leading-relaxed text-slate">
            Desenvolvemos, especificamos e fornecemos equipamentos médicos e hospitalares, conectando
            fabricantes nacionais e internacionais às necessidades de instituições públicas e privadas
            em todo o Brasil.
          </p>
        </Reveal>
      </section>

      {/* ---------- SOLUÇÕES ---------- */}
      <section id="solucoes" className="surface-blue border-y border-line scroll-mt-24">
        <div className="u-container u-section">
          <Reveal>
            <SectionHeading
              eyebrow="Áreas de atuação"
              title="Tecnologia para diferentes desafios da saúde"
              intro="Portfólio desenvolvido em áreas estratégicas da medicina, combinando tecnologia, qualidade e suporte."
            />
          </Reveal>
          <div className="mt-14">
            <SolutionsIndex />
          </div>
        </div>
      </section>

      {/* ---------- CTA ---------- */}
      <CtaBand />

      {/* ---------- SETORES ---------- */}
      <section id="setores" className="u-container u-section scroll-mt-24">
        <Reveal>
          <SectionHeading
            eyebrow="Setores"
            title="Atendimento ao setor privado e ao setor público"
            intro="Relações comerciais e institucionais construídas conforme a realidade de cada operação."
          />
        </Reveal>
        <div className="mt-14">
          <SectorsSection />
        </div>
      </section>

      {/* ---------- CONTATO ---------- */}
      <ContactDirect />
    </>
  );
}
