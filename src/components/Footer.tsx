import { CONTACT, WA } from "@/lib/data";
import { Logo, gridAuto, labelClass } from "./ui";

export default function Footer() {
  return (
    <footer className="bg-white px-[clamp(20px,4vw,40px)] pb-[110px] pt-[clamp(56px,6vw,88px)] dt:pb-12">
      <div className="mx-auto flex max-w-[1240px] flex-col gap-12">
        <div className="grid gap-9" style={gridAuto(200)}>
          <div className="flex flex-col items-start gap-[18px]">
            <Logo size={30} />
            <span className="max-w-[240px] text-sm font-light leading-[1.6]">
              Beleza com naturalidade, segurança e planejamento.
            </span>
          </div>
          <div className="flex flex-col gap-2.5 text-sm">
            <span className={`${labelClass} mb-1`}>Contato</span>
            <a href={WA} target="_blank" rel="noopener" className="text-ink hover:text-lav-dark">
              WhatsApp {CONTACT.whatsapp}
            </a>
            <a href={CONTACT.wa2} target="_blank" rel="noopener" className="text-ink hover:text-lav-dark">
              {CONTACT.phone2}
            </a>
            <a href={CONTACT.telFixo} className="text-ink hover:text-lav-dark">
              {CONTACT.fixo}
            </a>
            <a href={`mailto:${CONTACT.email}`} className="text-ink hover:text-lav-dark">
              {CONTACT.email}
            </a>
          </div>
          <div className="flex flex-col gap-2.5 text-sm font-light">
            <span className={`${labelClass} mb-1`}>Consultório</span>
            <span>{CONTACT.addr1}</span>
            <span>{CONTACT.addr2}</span>
            <span>{CONTACT.cep}</span>
          </div>
          <div className="flex flex-col gap-2.5 text-sm font-light">
            <span className={`${labelClass} mb-1`}>Horário</span>
            <span>Seg a sex · 08h–12h</span>
            <span>14h–18h</span>
            <a
              href={CONTACT.instagram}
              target="_blank"
              rel="noopener"
              className="mt-2 font-medium text-navy hover:text-lav-dark"
            >
              Instagram @dr.erichmotta ↗
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-3 border-t border-off pt-7 text-[12.5px] font-light leading-[1.65] text-ink">
          <span className="font-medium">
            O único perfil oficial é @dr.erichmotta. Não realizamos sorteios de procedimentos.
          </span>
          <span>
            Responsável técnico: Dr. Erich Motta de Aquino · CRM-CE (CREMEC) 8826 · Membro Especialista SBCP · RQE a
            confirmar.
          </span>
          <span>
            Resultados podem variar de pessoa para pessoa. Conteúdo informativo, que não substitui a consulta médica.
          </span>
          <span className="text-lav-dark">© 2026 Dr. Erich Motta · Cirurgia Plástica</span>
        </div>
      </div>
    </footer>
  );
}
