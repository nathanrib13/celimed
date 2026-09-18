/**
 * Ilustrações de produto por área de atuação.
 *
 * O repositório ainda não possui banco de fotografia de produtos. Enquanto
 * isso não existir, cada área recebe uma ilustração vetorial própria e
 * consistente (mesma paleta, mesmo traço) para funcionar como "imagem do
 * produto" dentro do card — pronta para ser substituída por uma fotografia
 * real bastando trocar este componente por um <Image>.
 */

type ProductVisualProps = {
  slug: string;
  /** "light" (padrão) para cards claros; "dark" para uso sobre fundos escuros, como o hero. */
  tone?: "light" | "dark";
  className?: string;
};

export function ProductVisual({ slug, tone = "light", className }: ProductVisualProps) {
  const Illustration = illustrations[slug] ?? GenericIllustration;
  const toneClass =
    tone === "dark" ? "bg-gradient-to-br from-white/10 to-white/0" : "bg-gradient-to-br from-wash-blue to-wash-green";
  return (
    <div
      className={`relative flex aspect-[4/3] w-full items-center justify-center overflow-hidden rounded-2xl ${toneClass} ${className ?? ""}`}
    >
      <div className="grid-backdrop absolute inset-0 opacity-30" aria-hidden="true" />
      <Illustration />
    </div>
  );
}

function EndoscopiaIllustration() {
  return (
    <svg viewBox="0 0 200 150" className="relative h-[72%] w-[72%]" aria-hidden="true">
      <defs>
        <linearGradient id="pv-endo" x1="20" y1="20" x2="180" y2="130" gradientUnits="userSpaceOnUse">
          <stop stopColor="#1EB673" />
          <stop offset="0.5" stopColor="#12A0AC" />
          <stop offset="1" stopColor="#1F52D9" />
        </linearGradient>
      </defs>
      {/* torre / monitor */}
      <rect x="24" y="18" width="62" height="46" rx="4" fill="none" stroke="url(#pv-endo)" strokeWidth="3" />
      <path d="M32 32h20l4-8 5 18 6-24 4 14h14" stroke="url(#pv-endo)" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="34" y="70" width="38" height="10" rx="2" fill="none" stroke="url(#pv-endo)" strokeWidth="2.5" />
      <line x1="53" y1="64" x2="53" y2="70" stroke="url(#pv-endo)" strokeWidth="2.5" />
      {/* cabo / endoscópio */}
      <path
        d="M96 40c22 4 34 20 40 40s18 34 40 30"
        stroke="url(#pv-endo)"
        strokeWidth="4"
        fill="none"
        strokeLinecap="round"
      />
      <circle cx="176" cy="110" r="6" fill="none" stroke="url(#pv-endo)" strokeWidth="3" />
    </svg>
  );
}

function UltrassomIllustration() {
  return (
    <svg viewBox="0 0 200 150" className="relative h-[72%] w-[72%]" aria-hidden="true">
      <defs>
        <linearGradient id="pv-us" x1="20" y1="20" x2="180" y2="130" gradientUnits="userSpaceOnUse">
          <stop stopColor="#1EB673" />
          <stop offset="0.5" stopColor="#12A0AC" />
          <stop offset="1" stopColor="#1F52D9" />
        </linearGradient>
      </defs>
      {/* console */}
      <rect x="30" y="30" width="70" height="50" rx="4" fill="none" stroke="url(#pv-us)" strokeWidth="3" />
      <path d="M40 65c6-14 10-20 15-20s7 18 12 18 6-12 10-12 6 8 10 8" stroke="url(#pv-us)" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="44" y="86" width="42" height="8" rx="2" fill="none" stroke="url(#pv-us)" strokeWidth="2.5" />
      <line x1="65" y1="80" x2="65" y2="86" stroke="url(#pv-us)" strokeWidth="2.5" />
      {/* transdutor */}
      <path d="M118 50c8 0 14 6 14 14s-6 22-14 22-14-14-14-22 6-14 14-14Z" stroke="url(#pv-us)" strokeWidth="3" fill="none" />
      <path d="M118 86v20" stroke="url(#pv-us)" strokeWidth="3" strokeLinecap="round" />
      {/* ondas */}
      <path d="M150 70c6-6 6-14 0-20M162 78c12-12 12-28 0-40" stroke="url(#pv-us)" strokeWidth="2.5" fill="none" strokeLinecap="round" />
    </svg>
  );
}

function EsteticaIllustration() {
  return (
    <svg viewBox="0 0 200 150" className="relative h-[72%] w-[72%]" aria-hidden="true">
      <defs>
        <linearGradient id="pv-est" x1="20" y1="20" x2="180" y2="130" gradientUnits="userSpaceOnUse">
          <stop stopColor="#1EB673" />
          <stop offset="0.5" stopColor="#12A0AC" />
          <stop offset="1" stopColor="#1F52D9" />
        </linearGradient>
      </defs>
      {/* base / carrinho */}
      <rect x="26" y="24" width="54" height="60" rx="6" fill="none" stroke="url(#pv-est)" strokeWidth="3" />
      <circle cx="53" cy="42" r="9" stroke="url(#pv-est)" strokeWidth="2.5" fill="none" />
      <line x1="38" y1="64" x2="68" y2="64" stroke="url(#pv-est)" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="38" y1="72" x2="60" y2="72" stroke="url(#pv-est)" strokeWidth="2.5" strokeLinecap="round" />
      {/* peça de mão */}
      <path d="M100 50c18-6 34 2 44 16" stroke="url(#pv-est)" strokeWidth="4" fill="none" strokeLinecap="round" />
      <rect x="140" y="56" width="30" height="14" rx="6" transform="rotate(24 140 56)" stroke="url(#pv-est)" strokeWidth="3" fill="none" />
      {/* pulsos de energia */}
      <path d="M104 96c14 4 26 4 40 0M100 108c18 6 34 6 50 0" stroke="url(#pv-est)" strokeWidth="2.5" fill="none" strokeLinecap="round" opacity="0.7" />
    </svg>
  );
}

function GenericIllustration() {
  return (
    <svg viewBox="0 0 200 150" className="relative h-[72%] w-[72%]" aria-hidden="true">
      <defs>
        <linearGradient id="pv-gen" x1="20" y1="20" x2="180" y2="130" gradientUnits="userSpaceOnUse">
          <stop stopColor="#1EB673" />
          <stop offset="0.5" stopColor="#12A0AC" />
          <stop offset="1" stopColor="#1F52D9" />
        </linearGradient>
      </defs>
      <rect x="40" y="34" width="46" height="46" rx="8" fill="none" stroke="url(#pv-gen)" strokeWidth="3" />
      <rect x="98" y="52" width="30" height="30" rx="6" fill="none" stroke="url(#pv-gen)" strokeWidth="3" />
      <rect x="140" y="34" width="34" height="46" rx="8" fill="none" stroke="url(#pv-gen)" strokeWidth="3" />
      <path d="M63 34V22M63 92v10M113 52V38M113 92v8M157 34V20M157 92v10" stroke="url(#pv-gen)" strokeWidth="2.5" strokeLinecap="round" opacity="0.7" />
    </svg>
  );
}

const illustrations: Record<string, () => React.JSX.Element> = {
  "endoscopia-colonoscopia": EndoscopiaIllustration,
  ultrassom: UltrassomIllustration,
  "estetica-medica": EsteticaIllustration,
  "outras-solucoes": GenericIllustration,
};
