import Image from "next/image";
import type { CSSProperties } from "react";
import { HERO_STATS, WA } from "@/lib/data";
import SplitText from "./SplitText";
import { Eyebrow, SLine, delay, gridAuto } from "./ui";

const H1 = [
  { t: "Resultados" },
  { t: "que" },
  { t: "parecem" },
  { t: "naturalmente", b: true },
  { t: "seus.", b: true },
];

export default function Hero() {
  return (
    <section
      id="topo"
      className="relative overflow-hidden px-[clamp(20px,4vw,40px)] pb-[clamp(56px,7vw,96px)] pt-[clamp(110px,14vw,150px)]"
    >
      <SLine className="right-[38%] top-[-40px] h-[120%] opacity-55" />
      <div
        className="relative mx-auto grid max-w-[1240px] items-center gap-[clamp(40px,6vw,88px)]"
        style={gridAuto(460)}
      >
        <div className="flex flex-col gap-[30px]">
          <div className="reveal">
            <Eyebrow>Membro Especialista SBCP · Fortaleza/CE</Eyebrow>
          </div>

          <h1 className="m-0 text-balance font-display text-[clamp(46px,6.6vw,96px)] font-light leading-[0.98] tracking-[-0.025em] text-ink">
            {H1.map((w, i) => (
              <span key={w.t}>
                <span className="word">
                  <span style={{ "--i": i } as CSSProperties} className={w.b ? "font-bold text-navy" : undefined}>
                    {w.t}
                  </span>
                </span>{" "}
              </span>
            ))}
          </h1>

          <SplitText
            variant="fade"
            delay={450}
            className="m-0 max-w-[500px] text-pretty text-[clamp(16px,1.3vw,18px)] font-light leading-[1.65] text-ink"
          >
            Cirurgião plástico há mais de 20 anos em Fortaleza. Membro Especialista da SBCP. Planejamento individual do
            primeiro contato ao pós-operatório.
          </SplitText>

          <div className="reveal flex flex-wrap gap-3" style={delay(550)}>
            <a
              href={WA}
              target="_blank"
              rel="noopener"
              className="flex items-center gap-3 rounded-full bg-navy px-[30px] py-[19px] text-[15px] font-medium text-white shadow-[0_14px_34px_rgba(31,38,80,.22)] transition duration-300 hover:-translate-y-0.5 hover:bg-night"
            >
              Agendar pelo WhatsApp
            </a>
            <a
              href="#procedimentos"
              className="flex items-center rounded-full border border-ink/[0.22] px-7 py-[19px] text-[15px] text-ink transition-colors duration-300 hover:border-lav hover:bg-lav-light"
            >
              Conhecer os procedimentos
            </a>
          </div>

          <div className="reveal flex items-center gap-3.5 pt-2" style={delay(650)}>
            <Image
              src="/images/fotos/dr-erich-avatar.jpg"
              alt=""
              width={46}
              height={46}
              className="h-[46px] w-[46px] flex-none rounded-full object-cover"
            />
            <div className="flex items-center gap-2.5 text-[13.5px] text-ink">
              <span className="font-semibold">Dr. Erich Motta</span>
              <span className="h-3.5 w-px bg-stone" />
              <span className="font-light">Cirurgia Plástica</span>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="clip relative aspect-[4/5] overflow-hidden rounded-[32px] bg-stone" style={delay(150)}>
            <Image
              src="/images/fotos/dr-erich-terno-azul-sentado-hero.jpg"
              alt="Dr. Erich Motta sorrindo, de terno azul-marinho"
              fill
              priority
              sizes="(min-width: 1080px) 560px, 100vw"
              className="object-cover"
            />
          </div>
          <div
            className="parallax pointer-events-none absolute inset-x-[clamp(12px,2vw,24px)] bottom-[clamp(12px,2vw,24px)]"
            style={{ "--px": "18px" } as CSSProperties}
          >
            <div className="reveal" style={delay(700)}>
              <div className="grid grid-cols-2 gap-px overflow-hidden rounded-[22px] border border-white/40 bg-white/[0.28] shadow-[0_20px_50px_rgba(9,12,19,.18)] backdrop-blur-[22px] backdrop-saturate-150">
                {HERO_STATS.map((s) => (
                  <div key={s.label} className="flex flex-col gap-0.5 bg-lav-dark/[0.52] px-[18px] py-4 text-white">
                    <span className="font-display text-[clamp(20px,2vw,26px)] font-bold tracking-[-0.02em]">
                      {s.value}
                    </span>
                    <span className="text-xs leading-[1.35]">{s.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
