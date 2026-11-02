import Image from "next/image";
import { CONTACT, WA } from "@/lib/data";
import SplitText from "./SplitText";
import { SLine, gridAuto } from "./ui";

export default function CtaFinal() {
  return (
    <section className="bg-white px-[clamp(12px,2vw,24px)] pb-[clamp(12px,2vw,24px)]">
      <div
        className="relative grid items-stretch overflow-hidden rounded-[36px] bg-night text-white"
        style={gridAuto(440)}
      >
        <SLine className="-top-[120px] left-[30%] h-[150%] opacity-45" width={1} n={2} />
        <div className="relative flex flex-col justify-center gap-[30px] px-[clamp(28px,5vw,80px)] py-[clamp(48px,7vw,110px)]">
          <SplitText
            as="h2"
            className="m-0 text-balance font-display text-[clamp(40px,5.4vw,78px)] font-light leading-none tracking-[-0.03em]"
          >
            Vamos planejar o <strong className="font-bold text-lav">seu resultado?</strong>
          </SplitText>
          <SplitText variant="fade" className="m-0 max-w-[440px] text-base font-light leading-[1.7] text-stone">
            Conte o que você deseja. A equipe responde pelo WhatsApp e agenda a sua consulta de avaliação.
          </SplitText>
          <div className="reveal self-start">
            <a
              href={WA}
              target="_blank"
              rel="noopener"
              className="flex items-center gap-4 rounded-full bg-lav px-[34px] py-[22px] text-[17px] font-semibold text-night transition-colors duration-300 hover:bg-lav-light"
            >
              Agendar pelo WhatsApp
            </a>
          </div>
          <span className="text-[13px] font-light text-stone">{CONTACT.whatsapp} · Seg a sex, 08h–12h e 14h–18h</span>
        </div>
        <div className="relative min-h-[360px]">
          <div className="clip absolute inset-[clamp(12px,2vw,24px)] overflow-hidden rounded-[26px] bg-navy">
            <div className="absolute inset-0">
              <Image
                src="/images/fotos/dr-erich-terno-azul-sentado-limpa.jpg"
                alt="Dr. Erich Motta sorrindo"
                fill
                sizes="(min-width: 1080px) 600px, 100vw"
                className="object-cover object-[center_20%]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
