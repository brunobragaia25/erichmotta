"use client";

import { useEffect, useState } from "react";
import { CONTACT, NAV, WA } from "@/lib/data";
import { Logo } from "./ui";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={`flex items-center justify-between gap-6 border-b border-ink/[0.08] backdrop-blur-[16px] backdrop-saturate-[1.4] transition-[background-color,padding] duration-400 ${
          scrolled ? "bg-off/90 py-2.5" : "bg-off/0 py-4"
        }`}
        style={{ paddingInline: "max(clamp(20px,4vw,40px), calc((100% - 1240px) / 2))" }}
      >
        <a href="#topo" aria-label="Dr. Erich Motta, início" className="hover:text-navy">
          <Logo />
        </a>

        <nav className="hidden gap-[clamp(18px,2.2vw,30px)] whitespace-nowrap text-[13.5px] dt:flex">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} className="text-ink transition-colors hover:text-lav-dark">
              {n.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={CONTACT.tel}
            className="mr-1.5 hidden flex-col items-end gap-0.5 whitespace-nowrap border-r border-ink/[0.12] pr-3.5 text-ink hover:text-ink dt:flex"
          >
            <span className="text-[10px] font-medium uppercase tracking-[0.16em] text-lav-dark">Agendamento</span>
            <span className="text-[13.5px] font-medium">{CONTACT.whatsapp}</span>
          </a>
          <a
            href={WA}
            target="_blank"
            rel="noopener"
            className="flex items-center whitespace-nowrap rounded-xl bg-navy px-[22px] py-3.5 text-[13.5px] font-medium text-white transition-colors duration-300 hover:bg-night"
          >
            Agendar <span className="hidden min-[420px]:inline">&nbsp;consulta</span>
          </a>
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label="Menu"
            aria-expanded={open}
            className="flex h-[46px] w-[46px] cursor-pointer flex-col items-center justify-center gap-[5px] rounded-xl border border-ink/[0.14] bg-white/60 dt:hidden"
          >
            <span
              className={`h-[1.5px] w-4 bg-ink transition-transform ${open ? "translate-y-[3.25px] rotate-45" : ""}`}
            />
            <span
              className={`h-[1.5px] w-4 bg-ink transition-transform ${open ? "-translate-y-[3.25px] -rotate-45" : ""}`}
            />
          </button>
        </div>
      </div>

      {open && (
        <nav className="swap-in mx-3 mt-2 flex flex-col rounded-[18px] border border-white/80 bg-white/[0.92] p-3 shadow-[0_20px_50px_rgba(9,12,19,.12)] backdrop-blur-[18px] dt:hidden">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              onClick={() => setOpen(false)}
              className="border-b border-off px-4 py-[15px] font-display text-[22px] font-light text-ink last:border-0"
            >
              {n.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
