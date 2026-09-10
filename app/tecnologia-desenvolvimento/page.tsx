import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import { PageHero } from "@/components/PageHero";
import { CtaBand } from "@/components/CtaBand";
import { ProcessFlow, type FlowStep } from "@/components/ProcessFlow";
import { CompareTable } from "@/components/CompareTable";
import { Eyebrow } from "@/components/ui";

export const metadata: Metadata = {
  title: "Tecnologia & Desenvolvimento",
  description:
    "Identificação de necessidades, pesquisa tecnológica, avaliação de fabricantes, especificação de soluções e evolução do portfólio.",
};

const steps: FlowStep[] = [
  ["01", "Identificação de necessidades", "Análise de demandas de clínicas, hospitais e profissionais da saúde."],
  ["02", "Pesquisa tecnológica", "Mapeamento de tecnologias e tendências nos principais mercados internacionais."],
  ["03", "Avaliação de fabricantes", "Prospecção e relacionamento com parceiros que atendam aos requisitos definidos."],
  ["04", "Especificação de soluções", "Definição das características técnicas para cada aplicação ou projeto."],
  ["05", "Estruturação do fornecimento", "Desenvolvimento da cadeia para disponibilização no mercado brasileiro."],
  ["06", "Evolução do portfólio", "Busca contínua por novas oportunidades, tecnologias e categorias."],
].map(([n, title, text]) => ({ n, title, text }));

export default function TecnologiaPage() {
  return (
    <>
      <PageHero
        eyebrow="Tecnologia & Desenvolvimento"
        title="Desenvolvimento e inteligência de mercado"
        lead="Busca contínua por novas tecnologias, produtos e oportunidades, acompanhando tendências internacionais e necessidades do mercado brasileiro."
      >
        <p className="text-[0.95rem] font-medium uppercase tracking-[0.14em] text-brand-blue">
          Identificar. Encontrar. Desenvolver.
        </p>
      </PageHero>

      <section className="u-container u-section">
        <Reveal>
          <Eyebrow>Como trabalhamos</Eyebrow>
          <h2 className="mt-6 max-w-2xl text-[clamp(1.6rem,3vw,2.3rem)] text-ink">
            Da necessidade à solução, em seis etapas
          </h2>
        </Reveal>
        <div className="mt-12">
          <ProcessFlow steps={steps} />
        </div>
      </section>

      <section className="surface-green border-y border-line">
        <div className="u-container u-section">
          <Reveal>
            <Eyebrow>O que nos diferencia</Eyebrow>
            <h2 className="mt-6 max-w-2xl text-[clamp(1.6rem,3vw,2.3rem)] text-ink">
              Ponte entre necessidade, tecnologia e solução
            </h2>
          </Reveal>
          <Reveal className="mt-10">
            <CompareTable
              headers={["", "Distribuidora convencional", "CELIMED"]}
              rows={[
                { label: "Catálogo", a: "Lista fechada de produtos", b: "Portfólio desenvolvido conforme a demanda" },
                { label: "Entrega", a: "Venda do equipamento", b: "Especificação da solução completa" },
                { label: "Relação", a: "Transacional", b: "Estratégica e de longo prazo" },
                { label: "Origem", a: "Um fornecedor", b: "Fabricantes nacionais e internacionais" },
                { label: "Foco", a: "Estoque disponível", b: "Necessidade técnica e clínica" },
              ]}
            />
          </Reveal>
        </div>
      </section>

      {/* Conexão global */}
      <section className="relative overflow-hidden bg-night text-paper">
        <div className="grid-backdrop absolute inset-0 opacity-60" aria-hidden="true" />
        <div className="glow-orb left-[15%] top-[-30%] h-80 w-80 bg-brand-blue/40" aria-hidden="true" />
        <div className="u-container relative u-section">
          <Reveal className="max-w-3xl">
            <Eyebrow onDark>Conexão global</Eyebrow>
            <h2 className="mt-6 text-[clamp(1.9rem,4vw,3rem)] text-paper">
              Conexão global. Atuação local.
            </h2>
            <p className="mt-6 text-[1.02rem] leading-relaxed text-mist">
              A presença em mercados internacionais e o acompanhamento da evolução tecnológica
              permitem identificar produtos com potencial para o Brasil. O conhecimento do mercado
              nacional e do seu ambiente regulatório permite aplicá-los.
            </p>
            <p className="mt-10 font-display text-[clamp(1.3rem,2.6vw,1.9rem)] leading-tight tracking-[-0.02em] text-paper">
              Tecnologias globais. Soluções desenvolvidas para o mercado brasileiro.
            </p>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
