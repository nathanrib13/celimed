import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import { PageHero } from "@/components/PageHero";
import { CtaBand } from "@/components/CtaBand";
import { CompareTable } from "@/components/CompareTable";
import { Eyebrow, ArrowLink } from "@/components/ui";

export const metadata: Metadata = {
  title: "A CELIMED",
  description:
    "Empresa dedicada ao desenvolvimento, especificação, fornecimento e comercialização de equipamentos médicos e soluções para a área da saúde.",
};

const valores = ["Qualidade", "Segurança", "Transparência", "Confiabilidade", "Tecnologia", "Compromisso"];

const areas = [
  ["01", "Endoscopia & Colonoscopia", "Principal área, com especialização em endoscopia digestiva e colonoscopia."],
  ["02", "Ultrassom e Diagnóstico por Imagem", "Soluções para diferentes especialidades e níveis de complexidade."],
  ["03", "Estética Médica", "Tecnologias para estética médica, dermatologia e tratamentos avançados."],
];

export default function ACelimedPage() {
  return (
    <>
      <PageHero
        eyebrow="A CELIMED"
        title="Tecnologia que conecta inovação e saúde"
        lead="Desenvolvimento, especificação, fornecimento e comercialização de equipamentos médicos, hospitalares e soluções para a área da saúde, conectando tecnologia e eficiência às necessidades de instituições públicas e privadas."
      />

      {/* Quem somos, objetivo */}
      <section className="u-container u-section grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
        <Reveal>
          <Eyebrow>Quem somos</Eyebrow>
        </Reveal>
        <Reveal delay={100}>
          <p className="text-[1.05rem] leading-relaxed text-slate">
            A evolução da saúde depende de soluções cada vez mais eficientes, seguras e acessíveis.
            Identificamos demandas do mercado, acompanhamos tendências tecnológicas e estabelecemos
            conexões estratégicas com fabricantes e parceiros nacionais e internacionais.
          </p>
          <p className="mt-5 text-[1.05rem] leading-relaxed text-slate">
            Mais do que comercializar equipamentos, compreendemos a necessidade de cada operação e
            desenvolvemos a solução alinhada à sua realidade.
          </p>
        </Reveal>
      </section>

      {/* Nossa atuação */}
      <section className="surface-blue border-y border-line">
        <div className="u-container u-section">
          <Reveal className="max-w-2xl">
            <Eyebrow>Nossa atuação</Eyebrow>
            <h2 className="mt-6 text-[clamp(1.8rem,3.4vw,2.6rem)] text-ink">
              Três verticais prioritárias, portfólio aberto
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-x-10 gap-y-8 md:grid-cols-3">
            {areas.map(([n, titulo, texto]) => (
              <Reveal key={n} delay={Number(n) * 40}>
                <div className="border-t-2 border-ink pt-6">
                  <span className="num-accent font-display text-2xl font-medium">{n}</span>
                  <h3 className="mt-3 text-[1.12rem] text-ink">{titulo}</h3>
                  <p className="mt-2 text-[0.92rem] leading-relaxed text-slate">{texto}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-10">
            <p className="text-[0.95rem] text-slate">
              Além das três verticais, a CELIMED mantém busca constante por novas tecnologias e
              oportunidades para ampliar o portfólio.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Qualidade, segurança e conformidade */}
      <section className="u-container u-section grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
        <Reveal>
          <Eyebrow>Qualidade e conformidade</Eyebrow>
          <h2 className="mt-6 text-[clamp(1.7rem,3vw,2.3rem)] text-ink">
            Responsabilidade em cada solução
          </h2>
        </Reveal>
        <Reveal delay={100}>
          <p className="text-[1.02rem] leading-relaxed text-slate">
            Cada equipamento fornecido representa uma responsabilidade que vai além da relação
            comercial. Desenvolvemos portfólio e parcerias considerando qualidade, segurança,
            desempenho e conformidade com os requisitos aplicáveis a cada categoria de produto, e
            acompanhamos os requisitos regulatórios para disponibilização no mercado brasileiro.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {valores.map((v) => (
              <span
                key={v}
                className="rounded-full border border-line-strong bg-paper px-4 py-2 text-[0.88rem] text-ink-soft"
              >
                {v}
              </span>
            ))}
          </div>
        </Reveal>
      </section>

      {/* O que muda com a CELIMED */}
      <section className="surface-green border-y border-line">
        <div className="u-container u-section">
          <Reveal className="max-w-2xl">
            <Eyebrow>O que muda</Eyebrow>
            <h2 className="mt-6 text-[clamp(1.6rem,3vw,2.3rem)] text-ink">
              Uma outra forma de fornecer tecnologia médica
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
              ]}
            />
          </Reveal>
        </div>
      </section>

      {/* Encerramento institucional */}
      <section className="relative overflow-hidden bg-night text-paper">
        <div className="grid-backdrop absolute inset-0 opacity-60" aria-hidden="true" />
        <div className="glow-orb right-[5%] top-[-30%] h-80 w-80 bg-brand-green/25" aria-hidden="true" />
        <div className="u-container relative u-section">
          <Reveal className="max-w-3xl">
            <Eyebrow onDark>Construindo o futuro da saúde</Eyebrow>
            <p className="mt-8 text-[1.1rem] leading-relaxed text-mist">
              A tecnologia deve estar a serviço das pessoas. Nosso objetivo é contribuir para uma
              saúde mais moderna e eficiente, aproximando instituições brasileiras de soluções que
              aprimoram processos e apoiam quem cuida de vidas.
            </p>
            <p className="mt-8 font-display text-[clamp(1.4rem,2.8vw,2rem)] leading-tight tracking-[-0.02em] text-paper">
              Conectando o Brasil às melhores soluções em saúde.
            </p>
            <div className="mt-10">
              <ArrowLink href="/solucoes" className="text-paper!">
                Conheça nossas soluções
              </ArrowLink>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
