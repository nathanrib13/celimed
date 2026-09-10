import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { ContactDirect } from "@/components/ContactDirect";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Fale com a CELIMED sobre endoscopia, ultrassom, estética médica, parcerias comerciais ou uma demanda específica.",
};

export default function ContatoPage() {
  return (
    <>
      <PageHero
        eyebrow="Contato"
        title="Fale com a CELIMED"
        lead="Conte a necessidade e a área de interesse. Podemos analisar a demanda e buscar a solução adequada ao projeto, mesmo quando o equipamento ainda não estiver listado no site."
      />
      <ContactDirect />
    </>
  );
}
