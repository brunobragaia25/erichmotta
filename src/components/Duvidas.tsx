"use client";

import Image from "next/image";
import { useState } from "react";
import { CONCERNS, FAQS, WA, wa } from "@/lib/data";
import SplitText from "./SplitText";
import { Eyebrow, gridAuto, h2Class, sectionPad } from "./ui";

export default function Duvidas() {
  const [faq, setFaq] = useState(0);
  const [concern, setConcern] = useState<string | null>(null);
  const relaxed = concern === "Nada me preocupa";

  return (
    <section id="duvidas" className={`bg-off ${sectionPad}`}>
      <div className="mx-auto grid max-w-[1240px] items-start gap-[clamp(40px,6vw,88px)]" style={gridAuto(440)}>
        <div className="flex flex-col gap-7">
          <div className="reveal">
            <Eyebrow>Dúvidas frequentes</Eyebrow>
          </div>
          <SplitText as="h2" className={h2Class}>
            Perguntas que você <strong className="font-bold text-navy">já nos fez.</strong>
          </SplitText>
          <div className="clip relative aspect-[4/3] overflow-hidden rounded-[28px] bg-stone">
            <Image
              src="/images/fotos/protese-mamaria-maos-implante-limpa.jpg"
              alt="Mãos com luvas segurando implantes mamários"
              fill
              sizes="(min-width: 1080px) 560px, 100vw"
              className="object-cover"
            />
          </div>
          <div className="reveal flex flex-col gap-[18px] rounded-3xl bg-night p-[26px] text-white">
            <p className="m-0 font-display text-[22px] font-light leading-[1.2] tracking-[-0.015em]">
              Qual aspecto da cirurgia <strong className="font-bold text-lav">mais te preocupa?</strong>
            </p>
            <div className="flex flex-wrap gap-2">
              {CONCERNS.map((c) => (
                <button
                  key={c}
                  onClick={() => setConcern(concern === c ? null : c)}
                  aria-pressed={concern === c}
                  className={`cursor-pointer rounded-full border border-lav-dark px-[18px] py-[11px] text-[13.5px] font-medium transition-colors duration-300 ${
                    concern === c ? "bg-lav text-night" : "bg-transparent text-lav-light hover:bg-white/5"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
            {concern && (
              <a
                key={concern}
                href={
                  relaxed ? WA : wa(`Olá, Dr. Erich! Vim pelo site. O que mais me preocupa na cirurgia é: ${concern}.`)
                }
                target="_blank"
                rel="noopener"
                className="swap-in flex items-center gap-2 text-sm font-medium text-lav-light hover:text-white"
              >
                {relaxed
                  ? "Ótimo! Vamos agendar sua avaliação"
                  : `Conversar sobre ${concern.toLowerCase()} no WhatsApp`}{" "}
                <span>→</span>
              </a>
            )}
          </div>
        </div>

        <div className="flex flex-col gap-2.5">
          {FAQS.map((f, i) => {
            const open = faq === i;
            return (
              <div key={f.q} className="reveal" style={{ transitionDelay: `${i * 60}ms` }}>
                <div
                  className={`rounded-[22px] border bg-white transition-colors duration-300 ${open ? "border-lav" : "border-transparent"}`}
                >
                  <button
                    onClick={() => setFaq(open ? -1 : i)}
                    aria-expanded={open}
                    className="flex w-full cursor-pointer items-center justify-between gap-5 border-0 bg-transparent px-[26px] py-6 text-left"
                  >
                    <span className="font-display text-[clamp(19px,1.7vw,22px)] font-semibold tracking-[-0.015em] text-ink">
                      {f.q}
                    </span>
                    <span
                      className={`flex h-9 w-9 flex-none items-center justify-center rounded-full text-xl font-light transition-colors duration-300 ${
                        open ? "bg-navy text-white" : "bg-lav-light text-navy"
                      }`}
                    >
                      {open ? "−" : "+"}
                    </span>
                  </button>
                  <div
                    className={`grid transition-[grid-template-rows] duration-500 ease-out ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
                  >
                    <div className="overflow-hidden">
                      <p className="m-0 max-w-[620px] text-pretty px-[26px] pb-[26px] text-[15px] font-light leading-[1.75] text-ink">
                        {f.a}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
