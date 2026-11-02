import Image from "next/image";
import { CONTACT, WA } from "@/lib/data";

/** Desktop: cartão flutuante com avatar. Mobile: barra fixa no rodapé. */
export default function WhatsAppFloat() {
  return (
    <>
      <a
        href={WA}
        target="_blank"
        rel="noopener"
        className="fixed bottom-6 right-6 z-40 hidden items-center gap-3.5 rounded-[18px] border border-white/90 bg-white/[0.82] p-2 text-ink shadow-[0_18px_44px_rgba(9,12,19,.16)] backdrop-blur-[18px] backdrop-saturate-[1.4] transition duration-300 hover:-translate-y-[3px] hover:border-lav dt:flex"
      >
        <span className="relative h-11 w-11 flex-none">
          <Image
            src="/images/fotos/dr-erich-avatar.jpg"
            alt=""
            width={44}
            height={44}
            className="h-11 w-11 rounded-full object-cover"
          />
          <span className="absolute bottom-0 right-0 h-[11px] w-[11px] rounded-full border-2 border-white bg-lav" />
        </span>
        <span className="flex flex-col gap-0.5 whitespace-nowrap">
          <span className="font-display text-[15px] font-bold tracking-[-0.01em]">Agendar consulta</span>
          <span className="text-xs font-light">pelo WhatsApp</span>
        </span>
        <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy text-base text-white">→</span>
      </a>

      <div className="fixed inset-x-0 bottom-0 z-40 flex gap-2 border-t border-ink/[0.08] bg-white/[0.82] px-3 pb-[calc(10px+env(safe-area-inset-bottom))] pt-2.5 backdrop-blur-[18px] dt:hidden">
        <a
          href={WA}
          target="_blank"
          rel="noopener"
          className="flex min-h-[52px] flex-1 items-center justify-center gap-2.5 rounded-full bg-navy text-[15px] font-medium text-white"
        >
          <span className="h-2 w-2 rounded-full bg-lav" />
          Agendar consulta
        </a>
        <a
          href={CONTACT.tel}
          aria-label="Ligar"
          className="flex h-[52px] w-[52px] flex-none items-center justify-center rounded-full border border-ink/[0.18] text-xs font-semibold text-navy"
        >
          Ligar
        </a>
      </div>
    </>
  );
}
