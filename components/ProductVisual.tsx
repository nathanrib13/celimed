import Image from "next/image";

/**
 * Imagem de produto por área de atuação.
 *
 * Fotografias reais, genéricas (sem marca de fabricante específico),
 * obtidas em bancos gratuitos para uso comercial (Pexels License —
 * https://www.pexels.com/license/). Arquivos em `public/images/`.
 *
 * Fontes:
 * - Endoscopia & Colonoscopia: pexels.com/photo/19447365 (foto: tkirkgoz)
 * - Ultrassom: pexels.com/photo/7089394 (foto: MART PRODUCTION)
 * - Estética Médica: pexels.com/photo/5069612 (foto: Anna Shvets)
 * - Outras Soluções: pexels.com/photo/11660582
 */

type ProductVisualProps = {
  slug: string;
  /** "light" (padrão) para cards claros; "dark" para uso sobre fundos escuros, como o hero. */
  tone?: "light" | "dark";
  className?: string;
};

type ImageMeta = {
  src: string;
  alt: string;
};

const images: Record<string, ImageMeta> = {
  "endoscopia-colonoscopia": {
    src: "/images/endoscopia.jpg",
    alt: "Profissional de saúde realizando procedimento endoscópico em sala cirúrgica equipada",
  },
  ultrassom: {
    src: "/images/ultrassom.jpg",
    alt: "Console de ultrassom em consultório médico moderno",
  },
  "estetica-medica": {
    src: "/images/estetica.jpg",
    alt: "Procedimento de estética médica com equipamento a laser",
  },
  "outras-solucoes": {
    src: "/images/outras-solucoes.jpg",
    alt: "Corredor hospitalar moderno com equipamentos médicos",
  },
};

const fallback: ImageMeta = {
  src: "/images/outras-solucoes.jpg",
  alt: "Equipamento médico em ambiente clínico",
};

export function ProductVisual({ slug, tone = "light", className }: ProductVisualProps) {
  const image = images[slug] ?? fallback;

  return (
    <div
      className={`relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-night-soft ${className ?? ""}`}
    >
      <Image
        src={image.src}
        alt={image.alt}
        fill
        sizes="(min-width: 1024px) 420px, (min-width: 640px) 45vw, 90vw"
        className="object-cover"
      />
      {tone === "dark" && (
        <div
          className="absolute inset-0 bg-gradient-to-t from-night/60 via-night/0 to-night/0"
          aria-hidden="true"
        />
      )}
    </div>
  );
}
