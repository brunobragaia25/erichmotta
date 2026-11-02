"use client";

import Image from "next/image";
import { useState } from "react";
import type { CSSProperties } from "react";
import { AREAS, waDuvida } from "@/lib/data";
import SplitText from "./SplitText";
import { Eyebrow, gridAuto, h2Class, sectionPad } from "./ui";

export default function Procedimentos() {
  const [active, setActive] = useState(0);
  const area = AREAS[active];

  return (
    <section id="procedimentos" className={`bg-white ${sectionPad}`}>
      <div className="mx-auto flex max-w-[1240px] flex-col gap-[clamp(36px,4vw,56px)]">
        <div className="flex flex-wrap items-end justify-between gap-7">
          <div className="flex max-w-[720px] flex-col gap-5">
            <div className="reveal">
              <Eyebrow>Procedimentos</Eyebrow>
            </div>
            <SplitText as="h2" className={h2Class}>
              Cada corpo é único. <strong className="font-bold text-navy">Cada plano também.</strong>
            </SplitText>
          </div>
          <SplitText variant="fade" className="m-0 max-w-[380px] text-[15.5px] font-light leading-[1.7] text-ink">
            Escolha uma área para entender cada procedimento. As dúvidas específicas do seu caso, você tira direto com a
            equipe no WhatsApp.
          </SplitText>
        </div>

        <div className="reveal flex max-w-full flex-wrap gap-2 self-start rounded-[28px] bg-off p-1.5" role="tablist">
          {AREAS.map((a, i) => (
            <button
              key={a.label}
              role="tab"
              aria-selected={i === active}
              onClick={() => setActive(i)}
              className={`cursor-pointer rounded-full border-0 px-[22px] py-[13px] text-sm font-medium transition-colors duration-300 ${
                i === active ? "bg-navy text-white" : "bg-transparent text-ink hover:bg-white/70"
              }`}
            >
              {a.label}
            </button>
          ))}
        </div>

        <div className="grid items-start gap-[clamp(32px,5vw,72px)]" style={gridAuto(440)}>
          <div className="relative aspect-[4/3] overflow-hidden rounded-[28px] bg-nude-light dt:sticky dt:top-[110px] dt:aspect-[4/5]">
            <Image
              key={area.img}
              src={area.img}
              alt=""
              fill
              sizes="(min-width: 1080px) 560px, 100vw"
              className="swap-in object-cover"
              style={{ objectPosition: area.pos ?? "center" }}
            />
            <div
              className="parallax pointer-events-none absolute inset-x-[18px] bottom-[18px]"
              style={{ "--px": "12px" } as CSSProperties}
            >
              <div className="glass rounded-[20px] px-6 py-[22px] text-white">
                <SplitText
                  key={active}
                  variant="fade"
                  className="split-now m-0 font-display text-[clamp(20px,1.9vw,26px)] font-light leading-[1.2] tracking-[-0.015em]"
                >
                  {area.quoteA}
                  <strong className="font-bold">{area.quoteB}</strong>
                </SplitText>
              </div>
            </div>
          </div>

          <div key={active} className="flex flex-col">
            {area.items.map((p, i) => (
              <div
                key={p.name}
                className="swap-in grid grid-cols-[44px_minmax(0,1fr)] gap-4 border-t border-off py-7"
                style={{ animationDelay: `${i * 70}ms` }}
              >
                <span className="pt-2 font-display text-sm font-semibold text-lav">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="flex flex-col gap-2.5">
                  <h3 className="m-0 font-display text-[clamp(24px,2.3vw,30px)] font-semibold tracking-[-0.02em] text-ink">
                    {p.name}
                  </h3>
                  <p className="m-0 max-w-[520px] text-pretty text-[15px] font-light leading-[1.65] text-ink">
                    {p.desc}
                  </p>
                  {p.regions && (
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {p.regions.map((r) => (
                        <span
                          key={r}
                          className="rounded-full bg-nude-light px-[13px] py-[7px] text-[12.5px] font-medium text-nude-dark"
                        >
                          {r}
                        </span>
                      ))}
                    </div>
                  )}
                  <a
                    href={waDuvida(p.name.toLowerCase())}
                    target="_blank"
                    rel="noopener"
                    className="flex items-center gap-2 self-start pt-1 text-[13.5px] font-medium text-lav-dark transition-colors hover:text-navy"
                  >
                    Tirar dúvidas no WhatsApp <span>→</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
