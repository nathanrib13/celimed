import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

export function Eyebrow({
  children,
  onDark = false,
  className,
}: {
  children: ReactNode;
  onDark?: boolean;
  className?: string;
}) {
  return (
    <span className={`eyebrow ${onDark ? "on-dark" : ""} ${className ?? ""}`}>{children}</span>
  );
}

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

type LinkProps = ComponentProps<typeof Link>;

export function PrimaryButton({ children, className, ...props }: LinkProps) {
  return (
    <Link
      {...props}
      className={`arrow-cta group rounded-full bg-ink px-6 py-3.5 text-sm font-medium text-paper transition-colors duration-300 hover:bg-brand-blue ${className ?? ""}`}
    >
      {children}
      <ArrowIcon />
    </Link>
  );
}

export function GhostButton({ children, className, ...props }: LinkProps) {
  return (
    <Link
      {...props}
      className={`arrow-cta group rounded-full border border-line-strong px-6 py-3.5 text-sm font-medium text-ink transition-colors duration-300 hover:border-ink ${className ?? ""}`}
    >
      {children}
      <ArrowIcon />
    </Link>
  );
}

export function ArrowLink({ children, className, ...props }: LinkProps) {
  return (
    <Link
      {...props}
      className={`arrow-cta group text-sm font-medium text-ink ${className ?? ""}`}
    >
      <span className="link-wipe">{children}</span>
      <ArrowIcon />
    </Link>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  onDark = false,
  align = "left",
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: string;
  onDark?: boolean;
  align?: "left" | "center";
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <Eyebrow onDark={onDark}>{eyebrow}</Eyebrow>
      <h2
        className={`mt-6 text-[clamp(1.9rem,3.6vw,2.9rem)] ${
          onDark ? "text-paper" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {intro && (
        <p className={`mt-5 text-[1.05rem] leading-relaxed ${onDark ? "text-mist" : "text-slate"}`}>
          {intro}
        </p>
      )}
    </div>
  );
}
