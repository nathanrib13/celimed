/**
 * Composição gráfica do hero: arcos concêntricos que ecoam o "C" da marca,
 * com varredura de diagnóstico. Discreto, sem foto. Slot de imagem opcional
 * pode substituir este bloco no futuro.
 */
export function HeroGraphic() {
  return (
    <svg
      viewBox="0 0 520 520"
      fill="none"
      aria-hidden="true"
      className="h-full w-full"
    >
      <defs>
        <linearGradient id="hero-arc" x1="80" y1="60" x2="440" y2="470" gradientUnits="userSpaceOnUse">
          <stop stopColor="#1EB673" />
          <stop offset="0.5" stopColor="#12A0AC" />
          <stop offset="1" stopColor="#1F52D9" />
        </linearGradient>
        <radialGradient id="hero-core" cx="0.5" cy="0.5" r="0.5">
          <stop stopColor="#1F52D9" stopOpacity="0.5" />
          <stop offset="1" stopColor="#1F52D9" stopOpacity="0" />
        </radialGradient>
      </defs>

      <circle cx="260" cy="260" r="170" fill="url(#hero-core)" />

      {[210, 168, 126, 84].map((r, i) => (
        <path
          key={r}
          d={describeArc(260, 260, r, 44, 316)}
          stroke="url(#hero-arc)"
          strokeWidth={i === 0 ? 2.5 : 1.25}
          strokeLinecap="round"
          opacity={0.9 - i * 0.15}
        />
      ))}

      {/* eixo de varredura */}
      <line x1="260" y1="70" x2="260" y2="450" stroke="#ffffff" strokeOpacity="0.08" strokeWidth="1" />
      <line x1="70" y1="260" x2="450" y2="260" stroke="#ffffff" strokeOpacity="0.08" strokeWidth="1" />

      {/* pulso central */}
      <path
        d="M150 260h60l10-26 16 60 18-92 12 44 10-18 14 0h130"
        stroke="url(#hero-arc)"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="ecg-loop"
        style={{ strokeDasharray: "300 900" }}
      />

      <circle cx="260" cy="260" r="6" fill="#1EB673" />
    </svg>
  );
}

function polarToCartesian(cx: number, cy: number, r: number, angleDeg: number) {
  const a = ((angleDeg - 90) * Math.PI) / 180;
  return { x: cx + r * Math.cos(a), y: cy + r * Math.sin(a) };
}

function describeArc(cx: number, cy: number, r: number, startAngle: number, endAngle: number) {
  const start = polarToCartesian(cx, cy, r, endAngle);
  const end = polarToCartesian(cx, cy, r, startAngle);
  const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";
  return `M ${start.x} ${start.y} A ${r} ${r} 0 ${largeArcFlag} 0 ${end.x} ${end.y}`;
}
