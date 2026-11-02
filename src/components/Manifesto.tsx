import Image from "next/image";
import SplitText from "./SplitText";
import { SLine, delay, gridAuto } from "./ui";

export default function Manifesto() {
  return (
    <section
      id="manifesto"
      className="relative overflow-hidden bg-night px-[clamp(20px,4vw,40px)] py-[clamp(80px,11vw,150px)] text-white"
    >
      <SLine className="-right-[60px] -top-20 h-[130%] opacity-50" width={1} n={1} />
      <div className="relative mx-auto flex max-w-[1240px] flex-col gap-[clamp(48px,6vw,80px)]">
        <div className="relative max-w-[980px]">
          <span
            aria-hidden
            className="reveal pointer-events-none absolute -left-[0.04em] -top-[0.42em] font-serif text-[clamp(180px,22vw,320px)] font-light italic leading-none text-lav"
          >
            “
          </span>
          <SplitText
            as="h2"
            className="relative m-0 text-balance pt-[clamp(70px,8vw,120px)] font-display text-[clamp(38px,5.4vw,80px)] font-light leading-[1.02] tracking-[-0.025em]"
          >
            Mais do que aumentar, o objetivo é <strong className="font-bold text-lav">harmonizar</strong>.
          </SplitText>
        </div>

        <div className="grid items-end gap-[clamp(32px,5vw,72px)]" style={gridAuto(420)}>
          <div className="clip relative aspect-[15/9] overflow-hidden rounded-[28px] bg-navy">
            <Image
              src="/images/fotos/mulher-maio-preto-fundo-nude-limpa.jpg"
              alt="Mulher de maiô preto sobre fundo nude"
              fill
              sizes="(min-width: 1080px) 600px, 100vw"
              className="object-cover object-top"
            />
          </div>
          <div className="flex max-w-[520px] flex-col gap-[22px]">
            <SplitText variant="fade" className="m-0 text-pretty text-[17px] font-light leading-[1.75] text-stone">
              O objetivo não é transformar quem você é, mas valorizar a sua anatomia. O mais importante é respeitar sua
              identidade, compreender seus objetivos e buscar um resultado que esteja em harmonia com você.
            </SplitText>
            <SplitText
              variant="fade"
              delay={120}
              className="m-0 text-pretty text-[17px] font-light leading-[1.75] text-stone"
            >
              Por isso, cada caso começa com escuta e um planejamento individualizado. Um bom resultado começa muito
              antes da cirurgia: começa no planejamento.
            </SplitText>
            <p
              className="reveal mt-3 font-serif text-[clamp(24px,2.4vw,32px)] font-light italic leading-[1.2] text-lav-light"
              style={delay(220)}
            >
              Beleza com naturalidade, segurança e planejamento.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
