import { CONTACT, WA } from "@/lib/data";
import SplitText from "./SplitText";
import { Eyebrow, gridAuto, h2Class, labelClass, sectionPad } from "./ui";

export default function Localizacao() {
  return (
    <section id="localizacao" className={`bg-white ${sectionPad}`}>
      <div className="mx-auto flex max-w-[1240px] flex-col gap-[clamp(36px,4vw,56px)]">
        <div className="flex max-w-[720px] flex-col gap-5">
          <div className="reveal">
            <Eyebrow>Localização</Eyebrow>
          </div>
          <SplitText as="h2" className={h2Class}>
            No coração do <strong className="font-bold text-navy">Dionísio Torres.</strong>
          </SplitText>
        </div>

        <div className="reveal grid overflow-hidden rounded-[32px] bg-off" style={gridAuto(400)}>
          <div className="relative min-h-[380px] bg-stone">
            <iframe
              title="Mapa do consultório"
              src={CONTACT.mapEmbed}
              loading="lazy"
              className="absolute inset-0 h-full w-full border-0 [filter:grayscale(.7)_contrast(.95)]"
            />
          </div>
          <div className="flex flex-col gap-[26px] p-[clamp(28px,4vw,52px)]">
            <div className="flex flex-col gap-1.5">
              <span className={labelClass}>Endereço</span>
              <span className="font-display text-2xl font-semibold leading-[1.25] tracking-[-0.015em]">
                {CONTACT.addr1}
              </span>
              <span className="text-[15px] font-light">
                {CONTACT.addr2} · {CONTACT.cep}
              </span>
            </div>
            <div className="flex flex-col gap-1.5">
              <span className={labelClass}>Horário</span>
              <span className="text-[15px]">Segunda a sexta · 08h–12h e 14h–18h</span>
              <span className="text-[15px] font-light">Sábado e domingo · fechado</span>
            </div>
            <div className="flex flex-col gap-1.5">
              <span className={labelClass}>Contato</span>
              <a href={WA} target="_blank" rel="noopener" className="text-[15px] text-ink hover:text-lav-dark">
                WhatsApp {CONTACT.whatsapp}
              </a>
              <a href={CONTACT.telFixo} className="text-[15px] font-light text-ink hover:text-lav-dark">
                Telefone {CONTACT.fixo}
              </a>
            </div>
            <div className="mt-auto flex flex-wrap gap-2.5">
              <a
                href={CONTACT.route}
                target="_blank"
                rel="noopener"
                className="rounded-full bg-navy px-[26px] py-4 text-sm font-medium text-white transition-colors hover:bg-night"
              >
                Como chegar
              </a>
              <a
                href={WA}
                target="_blank"
                rel="noopener"
                className="rounded-full border border-ink/[0.22] px-[26px] py-4 text-sm text-ink transition-colors hover:border-lav hover:bg-lav-light"
              >
                Agendar consulta
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
