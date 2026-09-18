import { Reveal } from "./Reveal";
import { Prose, TagList } from "./Prose";
import { Eyebrow } from "./ui";
import { whatsappLink } from "@/lib/site";

function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M2 8h11M9 4l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

type Sector = {
  eyebrow: string;
  title: string;
  paragraphs: string[];
  items: string[];
  buttonLabel: string;
  whatsappMessage: string;
};

const sectors: Sector[] = [
  {
    eyebrow: "Setor Privado",
    title: "Hospitais, clínicas e centros médicos",
    paragraphs: [
      "Desenvolvemos relações comerciais com instituições privadas de diferentes portes e especialidades, compreendendo as características técnicas, assistenciais e econômicas de cada operação.",
      "A proposta é construir relações duradouras, baseadas em tecnologia, qualidade, suporte e confiabilidade.",
    ],
    items: [
      "Hospitais",
      "Clínicas",
      "Centros de endoscopia",
      "Centros de diagnóstico",
      "Consultórios",
      "Clínicas de estética médica",
    ],
    buttonLabel: "Falar com o setor comercial",
    whatsappMessage: "Olá! Sou de uma instituição privada e gostaria de falar com o setor comercial da CELIMED.",
  },
  {
    eyebrow: "Setor Público",
    title: "Saúde pública e instituições do SUS",
    paragraphs: [
      "Atendemos às necessidades da administração pública e das instituições integrantes do sistema de saúde brasileiro, incluindo hospitais públicos, prefeituras e secretarias de saúde.",
      "Cada processo é conduzido considerando os requisitos técnicos, administrativos e regulatórios aplicáveis à contratação pública.",
    ],
    items: [
      "Hospitais públicos",
      "Prefeituras",
      "Secretarias municipais de saúde",
      "Secretarias estaduais de saúde",
      "Unidades vinculadas ao SUS",
      "Demais órgãos públicos",
    ],
    buttonLabel: "Falar com o setor institucional",
    whatsappMessage: "Olá! Represento um órgão público e gostaria de falar com o setor institucional da CELIMED.",
  },
];

export function SectorsSection() {
  return (
    <div className="grid gap-8 lg:grid-cols-2">
      {sectors.map((sector, i) => (
        <Reveal key={sector.eyebrow} delay={i * 100}>
          <div className="flex h-full flex-col rounded-3xl border border-line bg-paper p-8 md:p-10">
            <Eyebrow>{sector.eyebrow}</Eyebrow>
            <h3 className="mt-5 text-[1.35rem] leading-tight text-ink">{sector.title}</h3>
            <Prose className="mt-5 text-[0.96rem]">
              {sector.paragraphs.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </Prose>
            <div className="mt-6">
              <TagList items={sector.items} />
            </div>
            <a
              href={whatsappLink(sector.whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="arrow-cta group mt-8 inline-flex w-fit rounded-full bg-ink px-6 py-3.5 text-sm font-medium text-paper transition-colors duration-300 hover:bg-brand-blue"
            >
              {sector.buttonLabel}
              <ArrowIcon />
            </a>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
