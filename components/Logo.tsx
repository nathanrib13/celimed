import Link from "next/link";

type LogoProps = {
  /** "mark" = apenas o símbolo; "full" = símbolo + wordmark Celimed */
  variant?: "mark" | "full";
  /** "brand" usa o degradê; "mono" herda currentColor */
  tone?: "brand" | "mono";
  className?: string;
  withLink?: boolean;
};

/**
 * Marca Celimed reconstruída em SVG a partir do logo fornecido:
 * anel "C" em degradê verde/azul, cruz médica e linha de ECG.
 * A linha de ECG é um recorte (mask) na cruz, por isso aparece
 * em qualquer fundo, inclusive no rodapé escuro.
 * Sem os textos de assinatura do arquivo original.
 */
export function Logo({
  variant = "full",
  tone = "brand",
  className,
  withLink = true,
}: LogoProps) {
  const markFill = tone === "brand" ? "url(#celimed-grad)" : "currentColor";

  const content = (
    <span
      className={`inline-flex items-center gap-3 ${className ?? ""}`}
      aria-label="Celimed"
    >
      <svg
        width="40"
        height="40"
        viewBox="0 0 100 100"
        fill="none"
        aria-hidden="true"
        className="shrink-0"
      >
        <defs>
          <linearGradient
            id="celimed-grad"
            x1="12"
            y1="14"
            x2="86"
            y2="90"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#1EB673" />
            <stop offset="0.5" stopColor="#12A0AC" />
            <stop offset="1" stopColor="#1F52D9" />
          </linearGradient>
          <mask id="celimed-ecg-mask">
            <rect x="0" y="0" width="100" height="100" fill="white" />
            <path
              d="M25 53h12l3.5 -9 4.5 16 4.5 -20 3.5 13h22"
              stroke="black"
              strokeWidth="5"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
          </mask>
        </defs>

        {/* anel C aberto à direita */}
        <path
          d="M74 24.5A34 34 0 1 0 74 75.5"
          stroke={markFill}
          strokeWidth="13"
          strokeLinecap="round"
        />

        {/* cruz médica com a linha de ECG recortada */}
        <path
          d="M43 30h14a3 3 0 0 1 3 3v10h10a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H60v10a3 3 0 0 1-3 3H43a3 3 0 0 1-3-3V60H30a3 3 0 0 1-3-3v-8a3 3 0 0 1 3-3h10V33a3 3 0 0 1 3-3Z"
          fill={markFill}
          mask="url(#celimed-ecg-mask)"
        />
      </svg>

      {variant === "full" && (
        <span
          className={`font-display text-[1.35rem] font-semibold tracking-[-0.03em] ${
            tone === "brand" ? "text-gradient" : ""
          }`}
        >
          Celimed
        </span>
      )}
    </span>
  );

  if (!withLink) return content;

  return (
    <Link href="/" className="inline-flex items-center" aria-label="Celimed, página inicial">
      {content}
    </Link>
  );
}
