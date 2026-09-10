import type { Metadata } from "next";
import { SectorPageView } from "@/components/SectorPageView";

export const metadata: Metadata = {
  title: "Setor Privado",
  description:
    "Soluções para hospitais, clínicas, centros de endoscopia, centros de diagnóstico e demais instituições privadas da área da saúde.",
};

export default function SetorPrivadoPage() {
  return (
    <SectorPageView
      eyebrow="Setor Privado"
      title="Soluções para hospitais, clínicas e centros médicos"
      lead="A CELIMED desenvolve relações comerciais com instituições privadas de diferentes portes e especialidades, buscando compreender as características de cada operação."
      paragraphs={[
        "Buscamos compreender as características de cada operação para identificar soluções compatíveis com suas necessidades técnicas, assistenciais e econômicas.",
        "Nossa proposta é construir relações comerciais duradouras, baseadas em tecnologia, qualidade, suporte e confiabilidade.",
      ]}
      listTitle="Podemos atender"
      items={[
        "Hospitais",
        "Clínicas",
        "Centros de endoscopia",
        "Centros de diagnóstico",
        "Consultórios",
        "Centros médicos",
        "Clínicas dermatológicas",
        "Clínicas de estética médica",
        "Demais instituições da área da saúde",
      ]}
      closing="Vamos entender a sua operação e identificar as soluções compatíveis com o seu projeto."
      buttonLabel="Fale com nosso setor comercial"
      whatsappMessage="Olá! Sou de uma instituição privada e gostaria de falar com o setor comercial da CELIMED."
    />
  );
}
