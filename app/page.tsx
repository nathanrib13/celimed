import { Reveal } from "@/components/Reveal";
import { PulseLine } from "@/components/PulseLine";
import { HeroGraphic } from "@/components/HeroGraphic";
import { SolutionsIndex } from "@/components/SolutionsIndex";
import { ProcessFlow, type FlowStep } from "@/components/ProcessFlow";
import { CompareTable } from "@/components/CompareTable";
import { CtaBand } from "@/components/CtaBand";
import { Eyebrow, PrimaryButton, GhostButton, ArrowLink, SectionHeading } from "@/components/ui";
import { solutions } from "@/lib/solutions";

const flow: FlowStep[] = [
  ["01", "Necessidade", "Análise da demanda de clínicas, hospitais e profissionais."],
  ["02", "Pesquisa", "Mapeamento de tecnologias e tendências internacionais."],
  ["03", "Fabricantes", "Prospecção e desenvolvimento de parceiros."],
  ["04", "Especificação", "Definição técnica para cada aplicação ou projeto."],
  ["05", "Fornecimento", "Estruturação da cadeia para o mercado brasileiro."],
  ["06", "Portfólio", "Incorporação contínua de novas categorias."],
].map(([n, title, text]) => ({ n, title, text }));

const compareRows = [
  { label: "Catálogo", a: "Lista fechada de produtos", b: "Portfólio desenvolvido conforme a demanda" },
  { label: "Entrega", a: "Venda do equipamento", b: "Especificação da solução completa" },
  { label: "Relação", a: "Transacional", b: "Estratégica e de longo prazo" },
  { label: "Origem", a: "Um fornecedor", b: "Fabricantes nacionais e internacionais" },
  { label: "Foco", a: "Estoque disponível", b: "Necessidade técnica e clínica" },
];

const areasMatrix = solutions.slice(0, 3);

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
              <PrimaryButton href="/#areas" className="bg-paper! text-ink! hover:bg-paper/90!">
                Conheça nossas soluções
              </PrimaryButton>
              <GhostButton
                href="/contato"
                className="border-white/25! text-paper! hover:border-white!"
              >
                Fale com a CELIMED
              </GhostButton>
            </div>
          </Reveal>

          <Reveal delay={120} className="relative mx-auto w-full max-w-[460px]">
            <HeroGraphic />
          </Reveal>
        </div>

        <div className="u-container relative pb-12">
          <PulseLine mode="loop" className="opacity-60" />
        </div>
      </section>

      {/* ---------- ÁREAS ---------- */}
      <section id="areas" className="u-container u-section scroll-mt-24">
        <Reveal>
          <SectionHeading
            eyebrow="Principais áreas"
            title="Tecnologia para diferentes desafios da saúde"
            intro="Atuação concentrada em áreas estratégicas da medicina, na ordem de prioridade da CELIMED."
          />
        </Reveal>
        <div className="mt-14">
          <SolutionsIndex />
        </div>
      </section>

      {/* ---------- MATRIZ DE APLICAÇÕES ---------- */}
      <section className="surface-blue border-y border-line">
        <div className="u-container u-section">
          <Reveal>
            <Eyebrow>Escopo por área</Eyebrow>
            <h2 className="mt-6 max-w-2xl text-[clamp(1.6rem,3vw,2.3rem)] text-ink">
              O que cada vertical contempla
            </h2>
          </Reveal>

          <Reveal className="mt-10">
            <div className="overflow-x-auto rounded-2xl border border-line bg-paper">
              <table className="ctable">
                <thead>
                  <tr>
                    <th scope="col">Área</th>
                    <th scope="col">Aplicações principais</th>
                    <th scope="col" className="col-celimed">Componentes de solução</th>
                  </tr>
                </thead>
                <tbody>
                  {areasMatrix.map((s) => (
                    <tr key={s.slug}>
                      <td className="whitespace-nowrap font-medium text-ink">
                        <span className="num-accent font-display">{s.order}</span>{" "}
                        {s.menuLabel}
                      </td>
                      <td className="col-mark">{s.applications.slice(0, 4).join(", ")}</td>
                      <td className="col-celimed">{s.components.slice(0, 4).join(", ")}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>

          <Reveal className="mt-6">
            <ArrowLink href="/solucoes">Ver todas as soluções</ArrowLink>
          </Reveal>
        </div>
      </section>

      {/* ---------- QUEM SOMOS + COMPARATIVO ---------- */}
      <section className="surface-green border-b border-line">
        <div className="u-container u-section grid gap-14 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal>
            <Eyebrow>A CELIMED</Eyebrow>
            <h2 className="mt-6 text-[clamp(1.8rem,3.4vw,2.6rem)] leading-tight text-ink">
              Não é uma revendedora. É desenvolvimento de solução.
            </h2>
            <p className="mt-5 text-[1rem] leading-relaxed text-slate">
              Identificamos demandas, acompanhamos tendências e conectamos fabricantes nacionais e
              internacionais às necessidades de instituições públicas e privadas.
            </p>
            <div className="mt-7">
              <ArrowLink href="/a-celimed">Conheça a CELIMED</ArrowLink>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <CompareTable
              headers={["", "Distribuidora convencional", "CELIMED"]}
              rows={compareRows}
            />
          </Reveal>
        </div>
      </section>

      {/* ---------- TECNOLOGIA & DESENVOLVIMENTO ---------- */}
      <section className="u-container u-section">
        <Reveal>
          <SectionHeading
            eyebrow="Tecnologia & Desenvolvimento"
            title="Da necessidade à solução, em seis etapas"
          />
        </Reveal>

        <div className="mt-12">
          <ProcessFlow steps={flow} />
        </div>

        <Reveal className="mt-12">
          <ArrowLink href="/tecnologia-desenvolvimento">Como desenvolvemos soluções</ArrowLink>
        </Reveal>
      </section>

      {/* ---------- CONEXÃO GLOBAL ---------- */}
      <section className="relative overflow-hidden bg-night text-paper">
        <div className="grid-backdrop absolute inset-0 opacity-60" aria-hidden="true" />
        <div className="glow-orb left-[20%] top-[-30%] h-80 w-80 bg-brand-blue/40" aria-hidden="true" />
        <div className="u-container relative u-section">
          <Reveal className="max-w-3xl">
            <Eyebrow onDark>Conexão global</Eyebrow>
            <h2 className="mt-6 text-[clamp(1.9rem,4vw,3rem)] text-paper">
              Conexão global. Atuação local.
            </h2>
            <p className="mt-6 max-w-2xl text-[1.02rem] leading-relaxed text-mist">
              Visão internacional para identificar tecnologias, conhecimento do mercado nacional para
              aplicá-las. É essa combinação que estrutura uma cadeia de fornecimento eficiente e
              competitiva.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {["Fabricantes nacionais e internacionais", "Acompanhamento de tendências", "Ambiente regulatório brasileiro"].map(
                (chip) => (
                  <span
                    key={chip}
                    className="rounded-full border border-white/15 px-4 py-2 text-[0.85rem] text-paper/80"
                  >
                    {chip}
                  </span>
                ),
              )}
            </div>
            <p className="mt-10 font-display text-[clamp(1.3rem,2.6vw,1.9rem)] leading-tight tracking-[-0.02em] text-paper">
              Tecnologias globais. Soluções desenvolvidas para o mercado brasileiro.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ---------- SETOR PÚBLICO / PRIVADO ---------- */}
      <section className="surface-blue border-y border-line">
        <div className="u-container u-section">
          <Reveal>
            <Eyebrow>Setores</Eyebrow>
            <h2 className="mt-6 max-w-2xl text-[clamp(1.6rem,3vw,2.3rem)] text-ink">
              Atendimento ao setor privado e ao setor público
            </h2>
          </Reveal>

          <Reveal className="mt-10">
            <CompareTable
              headers={["", "Setor Privado", "Setor Público"]}
              rows={[
                {
                  label: "Instituições",
                  a: "Hospitais, clínicas, centros de diagnóstico e consultórios",
                  b: "Hospitais públicos, prefeituras, secretarias e unidades do SUS",
                },
                {
                  label: "Condução",
                  a: "Relação comercial direta e continuada",
                  b: "Processo conforme requisitos administrativos e regulatórios",
                },
                { label: "Contato", a: "Setor comercial", b: "Setor institucional" },
              ]}
              highlightB={false}
            />
          </Reveal>

          <div className="mt-8 flex flex-wrap gap-4">
            <ArrowLink href="/setor-privado">Setor Privado</ArrowLink>
            <ArrowLink href="/setor-publico">Setor Público</ArrowLink>
          </div>
        </div>
      </section>

      {/* ---------- CTA ---------- */}
      <CtaBand />
    </>
  );
}
