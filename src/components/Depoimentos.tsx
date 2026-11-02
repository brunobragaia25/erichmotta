import Image from "next/image";
import { CONTACT, REVIEWS, REVIEW_TAGS } from "@/lib/data";
import SplitText from "./SplitText";
import { Eyebrow, h2Class, sectionPad } from "./ui";

export default function Depoimentos() {
  return (
    <section id="depoimentos" className={`bg-off ${sectionPad}`}>
      <div className="mx-auto flex max-w-[1240px] flex-col gap-[clamp(40px,5vw,64px)]">
        <div className="flex flex-wrap items-end justify-between gap-7">
          <div className="flex max-w-[720px] flex-col gap-5">
            <div className="reveal">
              <Eyebrow>Depoimentos</Eyebrow>
            </div>
            <SplitText as="h2" className={h2Class}>
              Quem já viveu <strong className="font-bold text-navy">essa jornada.</strong>
            </SplitText>
          </div>
          <div className="reveal">
            <a
              href={CONTACT.reviews}
              target="_blank"
              rel="noopener"
              className="flex items-center gap-2 rounded-full border border-navy/25 px-[22px] py-3.5 text-sm font-medium text-navy transition-colors hover:bg-white"
            >
              Ver avaliações no Google <span>→</span>
            </a>
          </div>
        </div>

        <div className="gap-4 [columns:300px_3]">
          <div className="reveal mb-4 break-inside-avoid">
            <div className="flex flex-col gap-[18px] rounded-3xl bg-navy px-7 py-8 text-white">
              <div className="flex items-baseline gap-3">
                <span className="font-display text-[88px] font-bold leading-[0.9] tracking-[-0.04em]">4,7</span>
                <div className="flex flex-col gap-1">
                  <span className="text-base tracking-[0.12em] text-nude">★★★★★</span>
                  <span className="text-[13px] text-lav-light">72 avaliações no Google</span>
                </div>
              </div>
              <div className="flex flex-col gap-2.5 border-t border-lav-light/20 pt-4">
                <p className="m-0 font-serif text-[22px] italic leading-[1.25] text-lav-light">
                  “O resultado do meu procedimento superou todas as expectativas.”
                </p>
                <p className="m-0 font-serif text-[22px] italic leading-[1.25] text-lav-light">
                  “Melhor médico e equipe médica.”
                </p>
              </div>
              <div className="flex flex-col gap-2.5">
                <span className="text-[11px] font-medium uppercase tracking-[0.16em] text-lav">
                  Mais citadas nas avaliações
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {REVIEW_TAGS.map((t) => (
                    <span key={t} className="rounded-full bg-lav-light/[0.12] px-[13px] py-[7px] text-[12.5px]">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {REVIEWS.map((r) => (
            <div key={r.name} className="reveal mb-4 break-inside-avoid">
              <div className="flex flex-col gap-[18px] rounded-3xl border border-transparent bg-white px-7 pb-[26px] pt-[30px] transition duration-400 hover:border-lav hover:shadow-[0_24px_50px_rgba(31,38,80,.10)]">
                <span aria-hidden className="h-[30px] font-serif text-[72px] italic leading-[0.5] text-lav">
                  “
                </span>
                <p className="m-0 text-pretty text-[15px] font-light leading-[1.7] text-ink">{r.text}</p>
                <div className="flex items-center justify-between gap-3 border-t border-off pt-3.5">
                  <span className="font-display text-base font-semibold">{r.name}</span>
                  <span className="text-xs tracking-[0.1em] text-nude">★★★★★</span>
                </div>
              </div>
            </div>
          ))}

          <div className="clip relative mb-4 aspect-[4/5] break-inside-avoid overflow-hidden rounded-3xl bg-night">
            <Image
              src="/images/artes/depoimentos-comentarios-instagram.jpg"
              alt="Comentários de pacientes no Instagram do Dr. Erich Motta"
              fill
              sizes="(min-width: 1080px) 400px, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
