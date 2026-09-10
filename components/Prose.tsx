import type { ReactNode } from "react";

export function Prose({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={`space-y-5 text-[1.02rem] leading-relaxed text-slate [&_strong]:font-medium [&_strong]:text-ink ${className ?? ""}`}
    >
      {children}
    </div>
  );
}

export function TagList({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-wrap gap-3">
      {items.map((item) => (
        <li
          key={item}
          className="rounded-full border border-line-strong bg-paper px-4 py-2 text-[0.88rem] text-ink-soft"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
