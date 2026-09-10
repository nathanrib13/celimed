import type { Metadata } from "next";
import { SectorPageView } from "@/components/SectorPageView";

export const metadata: Metadata = {
  title: "Setor Público",
  description:
    "Tecnologia e soluções para hospitais públicos, prefeituras, secretarias de saúde e instituições vinculadas ao SUS.",
};

export default function SetorPublicoPage() {
  return (
    <SectorPageView
      eyebrow="Setor Público"
      title="Tecnologia e soluções para a saúde pública"
      lead="A CELIMED está preparada para atuar no atendimento às necessidades da administração pública e das instituições integrantes do sistema de saúde brasileiro."
      paragraphs={[
        "Nossa atuação poderá contemplar fornecimentos destinados a hospitais públicos, prefeituras, secretarias municipais e estaduais de saúde, unidades vinculadas ao SUS e demais órgãos públicos relacionados à área da saúde.",
        "Cada processo deve ser conduzido considerando os requisitos técnicos, administrativos, comerciais e regulatórios aplicáveis à contratação.",
      ]}
      listTitle="Atendimento a"
      items={[
        "Hospitais públicos",
        "Prefeituras",
        "Secretarias municipais de saúde",
        "Secretarias estaduais de saúde",
        "Unidades e instituições vinculadas ao SUS",
        "Demais órgãos públicos da área da saúde",
      ]}
      closing="Soluções para contribuir com uma saúde pública mais moderna, eficiente e equipada."
      buttonLabel="Fale com nosso setor institucional"
      whatsappMessage="Olá! Represento um órgão público e gostaria de falar com o setor institucional da CELIMED."
    />
  );
}
