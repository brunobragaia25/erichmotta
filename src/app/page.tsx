import ComoFunciona from "@/components/ComoFunciona";
import CtaFinal from "@/components/CtaFinal";
import Depoimentos from "@/components/Depoimentos";
import Duvidas from "@/components/Duvidas";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Localizacao from "@/components/Localizacao";
import Manifesto from "@/components/Manifesto";
import Procedimentos from "@/components/Procedimentos";
import RevealObserver from "@/components/RevealObserver";
import Sobre from "@/components/Sobre";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Manifesto />
        <Procedimentos />
        <Duvidas />
        <ComoFunciona />
        <Sobre />
        <Depoimentos />
        <Localizacao />
        <CtaFinal />
      </main>
      <Footer />
      <WhatsAppFloat />
      <RevealObserver />
    </>
  );
}
