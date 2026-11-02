import type { CSSProperties, ReactNode } from "react";

/** Linha em S do logo (contorno de silhueta). Os paths usam pathLength=1 para o .draw desenhar. */
const S_SMALL = "M17 2 C 3 14, 4 26, 12 31 C 20 36, 21 48, 7 58";
const S_BIG = "M300 0 C 40 220, 60 420, 200 500 C 340 580, 360 800, 100 1000";

export function Logo({ size = 24, align = "end" }: { size?: number; align?: "start" | "end" }) {
  return (
    <span className={`flex flex-col leading-none text-navy ${align === "end" ? "items-end" : "items-start"}`}>
      <span className="flex items-center gap-[3px] font-logo font-light tracking-[0.01em]" style={{ fontSize: size }}>
        <span>Erich</span>
        <svg
          className="draw"
          viewBox="0 0 24 60"
          width={size / 2}
          height={size * 1.33}
          fill="none"
          stroke="currentColor"
          strokeWidth={1.6}
          strokeLinecap="round"
          // Como no logo original, o S sobe acima das letras e não invade o subtítulo
          style={{ margin: `-${size / 4}px 1px`, transform: "translateY(-24%)" }}
          aria-hidden
        >
          <path d={S_SMALL} pathLength={1} />
        </svg>
        <span>Motta</span>
      </span>
      <span
        className="self-end whitespace-nowrap font-logo uppercase tracking-[0.14em] text-lav-dark"
        style={{ fontSize: size * 0.4, marginTop: -2 }}
      >
        Cirurgia Plástica
      </span>
    </span>
  );
}

/** Linha em S grande, decorativa, que se desenha ao entrar e flutua. */
export function SLine({
  className = "",
  stroke = "#8899BD",
  width = 1.2,
  n = 0,
}: {
  className?: string;
  stroke?: string;
  width?: number;
  n?: number;
}) {
  return (
    <div aria-hidden className={`pointer-events-none absolute ${className}`}>
      <div className="s-float h-full" style={{ ["--n" as string]: n } as CSSProperties}>
        <svg className="draw h-full w-auto" viewBox="0 0 400 1000" fill="none">
          <path d={S_BIG} stroke={stroke} strokeWidth={width} pathLength={1} />
        </svg>
      </div>
    </div>
  );
}

export function Eyebrow({ children, tone = "lav" }: { children: ReactNode; tone?: "lav" | "nude" }) {
  const c = tone === "nude" ? "text-nude-dark" : "text-lav-dark";
  const b = tone === "nude" ? "bg-nude-dark" : "bg-lav-dark";
  return (
    <div className={`flex items-center gap-3 text-xs font-medium uppercase tracking-[0.16em] ${c}`}>
      <span className={`h-px w-7 ${b}`} />
      {children}
    </div>
  );
}

export const h2Class =
  "m-0 font-display font-light text-[clamp(36px,4.6vw,64px)] leading-[1.02] tracking-[-0.025em] text-balance";

export const labelClass = "text-[11px] font-medium uppercase tracking-[0.16em] text-lav-dark";

export const sectionPad = "px-[clamp(20px,4vw,40px)] py-[clamp(80px,10vw,140px)] scroll-mt-[70px]";

export const gridAuto = (min: number) =>
  ({ gridTemplateColumns: `repeat(auto-fit,minmax(min(100%,${min}px),1fr))` }) as CSSProperties;

export const delay = (ms: number) => ({ transitionDelay: `${ms}ms` }) as CSSProperties;
