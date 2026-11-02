import Image from "next/image";
import type { CSSProperties } from "react";
import { STEPS } from "@/lib/data";
import SplitText from "./SplitText";
import { Eyebrow, delay, gridAuto, h2Class, sectionPad } from "./ui";

export default function ComoFunciona() {
  return (
    <section id="como-funciona" className={`bg-white ${sectionPad}`}>
      <div className="mx-auto flex max-w-[1240px] flex-col gap-[clamp(40px,5vw,64px)]">
        <div className="flex max-w-[760px] flex-col gap-5">
          <div className="reveal">
            <Eyebrow>Como funciona</Eyebrow>
          </div>
          <SplitText as="h2" className={h2Class}>
            Do primeiro contato <strong className="font-bold text-navy">ao pós-operatório.</strong>
          </SplitText>
        </div>

        <div className="relative">
          <svg
            className="draw pointer-events-none absolute left-0 top-[22px] h-[60px] w-full"
            viewBox="0 0 1200 60"
            preserveAspectRatio="none"
            fill="none"
            aria-hidden
          >
            <path
              d="M0 30 C 150 0, 150 60, 300 30 S 450 0, 600 30 S 750 60, 900 30 S 1050 0, 1200 30"
              stroke="#8899BD"
              strokeWidth={1.2}
              vectorEffect="non-scaling-stroke"
              pathLength={1}
            />
          </svg>
          <div className="relative grid gap-4" style={gridAuto(250)}>
            {STEPS.map((s, i) => (
              <div key={s.title} className="reveal" style={delay(i * 110)}>
                <div className="flex h-full flex-col gap-4 rounded-3xl border border-off bg-white px-[26px] pb-[30px] pt-7 transition duration-400 hover:-translate-y-1.5 hover:border-lav hover:shadow-[0_24px_50px_rgba(31,38,80,.10)]">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-lav-light font-display text-lg font-bold text-navy">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="m-0 mt-2 text-balance font-display text-[23px] font-semibold leading-[1.15] tracking-[-0.02em] text-ink">
                    {s.title}
                  </h3>
                  <p className="m-0 text-pretty text-[14.5px] font-light leading-[1.7] text-ink">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative aspect-[21/9] min-h-[320px] overflow-hidden rounded-[32px] bg-nude-light">
          <div className="clip absolute inset-0">
            <div className="absolute inset-0">
              <Image
                src="/images/fotos/cicatriz-abdome-cuidados-limpa.jpg"
                alt="Mãos sobre o abdome, cuidados no pós-operatório"
                fill
                sizes="(min-width: 1240px) 1240px, 100vw"
                className="object-cover"
              />
            </div>
          </div>
          <div
            className="parallax pointer-events-none absolute bottom-[clamp(16px,3vw,40px)] right-[clamp(16px,3vw,40px)] max-w-[440px]"
            style={{ "--px": "16px" } as CSSProperties}
          >
            <div className="glass rounded-3xl p-[clamp(22px,2.4vw,32px)] text-white">
              <p className="m-0 font-display text-[clamp(24px,2.6vw,34px)] font-light leading-[1.1] tracking-[-0.02em]">
                Cada recuperação tem o seu ritmo. <strong className="font-bold">O seu também.</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
