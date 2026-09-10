import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { SolutionsIndex } from "@/components/SolutionsIndex";
import { CtaBand } from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Soluções",
  description:
    "Endoscopia e colonoscopia, ultrassom e diagnóstico por imagem, estética médica e outras soluções em saúde.",
};

export default function SolucoesPage() {
  return (
    <>
      <PageHero
        eyebrow="Produtos e Soluções"
        title="Tecnologia para diferentes desafios da saúde"
        lead="Nossa atuação está concentrada em áreas estratégicas da medicina, combinando conhecimento de mercado, desenvolvimento de fornecedores e acesso a novas tecnologias."
      />
      <section className="u-container u-section">
        <SolutionsIndex />
      </section>
      <CtaBand />
    </>
  );
}
