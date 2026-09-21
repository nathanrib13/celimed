"use client";

import { useEffect, useRef, useState } from "react";

type PulseLineProps = {
  className?: string;
  /** "draw" anima o traçado uma vez ao aparecer; "loop" corre continuamente */
  mode?: "draw" | "loop";
  stroke?: string;
};

/**
 * Motivo assinatura da Celimed: a linha de ECG do logo, usada como
 * divisor e acento. Ocupa 100% da largura do container.
 */
export function PulseLine({ className, mode = "draw", stroke }: PulseLineProps) {
  const ref = useRef<SVGPathElement | null>(null);
  const [visible, setVisible] = useState(mode === "loop");

  useEffect(() => {
    if (mode === "loop") return;
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [mode]);

  return (
    <svg
      className={className}
      width="100%"
      height="40"
      viewBox="0 0 1200 40"
      preserveAspectRatio="none"
      fill="none"
      aria-hidden="true"
    >
      <path
        ref={ref}
        d="M0 20 H430 l14 0 l10 -13 l12 26 l14 -30 l12 34 l10 -17 l12 0 H700 l10 0 l8 -8 l9 16 l10 -22 l9 24 l8 -10 h9 H1200"
        stroke={stroke ?? "url(#pulse-grad)"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
        className={mode === "loop" ? "ecg-loop" : `ecg-path ${visible ? "is-visible" : ""}`}
      />
      <defs>
        <linearGradient id="pulse-grad" x1="0" y1="0" x2="1200" y2="0" gradientUnits="userSpaceOnUse">
          <stop stopColor="#1EB673" />
          <stop offset="0.55" stopColor="#12A0AC" />
          <stop offset="1" stopColor="#1F52D9" />
        </linearGradient>
      </defs>
    </svg>
  );
}
