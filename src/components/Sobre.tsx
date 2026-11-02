import Image from "next/image";
import type { CSSProperties } from "react";
import { CREDS } from "@/lib/data";
import SplitText from "./SplitText";
import { Eyebrow, delay, gridAuto, sectionPad } from "./ui";

export default function Sobre() {
  return (
    <section id="sobre" className={`bg-nude-light ${sectionPad}`}>
      <div className="mx-auto grid max-w-[1240px] items-center gap-[clamp(48px,6vw,96px)]" style={gridAuto(460)}>
        <div className="relative pb-[clamp(60px,8vw,110px)] pr-[clamp(40px,8vw,120px)]">
          <div className="clip relative aspect-[1350/920] overflow-hidden rounded-[28px] bg-stone">
            <Image
              src="/images/fotos/dr-erich-consultorio-camisa-preta-limpa.jpg"
              alt="Dr. Erich Motta em seu consultório"
              fill
              sizes="(min-width: 1080px) 520px, 90vw"
              className="object-cover"
            />
          </div>
          <div className="parallax absolute bottom-0 right-0 w-[58%]" style={{ "--px": "22px" } as CSSProperties}>
            <div
              className="clip relative aspect-[3/2] overflow-hidden rounded-3xl border-[6px] border-nude-light bg-stone"
              style={delay(200)}
            >
              <Image
                src="/images/fotos/dr-erich-camisa-branca-clinica-limpa.jpg"
                alt="Dr. Erich Motta na clínica"
                fill
                sizes="(min-width: 1080px) 320px, 55vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-[26px]">
          <div className="reveal">
            <Eyebrow tone="nude">Sobre o Dr. Erich</Eyebrow>
          </div>
          <SplitText
            as="h2"
            className="m-0 font-display text-[clamp(36px,4.4vw,60px)] font-light leading-[1.02] tracking-[-0.025em]"
          >
            Dr. Erich <strong className="font-bold text-navy">Motta de Aquino</strong>
          </SplitText>
          <SplitText variant="fade" className="m-0 max-w-[520px] text-pretty text-base font-light leading-[1.75]">
            Há mais de 20 anos atuando como cirurgião plástico em Fortaleza. Cada paciente carrega uma história, uma
            expectativa e uma experiência única, e é a partir dela que o planejamento começa.
          </SplitText>
          <div className="reveal flex flex-col">
            {CREDS.map((c) => (
              <div
                key={c.a}
                className="grid grid-cols-[minmax(0,1fr)_auto] gap-4 border-t border-nude-dark/25 py-4 text-[14.5px]"
              >
                <span className="font-medium">{c.a}</span>
                <span className="text-right font-light">{c.b}</span>
              </div>
            ))}
          </div>
          <div className="reveal relative pl-[54px] pt-7">
            <span
              aria-hidden
              className="absolute -left-1 -top-1.5 font-serif text-[110px] italic leading-none text-lav"
            >
              “
            </span>
            <p className="m-0 text-pretty font-serif text-[clamp(22px,2.1vw,28px)] italic leading-[1.3] text-ink">
              Poder fazer parte dessas jornadas e receber o reconhecimento de quem confia no nosso trabalho é uma das
              maiores satisfações da profissão.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
