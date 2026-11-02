import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat, Source_Sans_3, Urbanist } from "next/font/google";
import "./globals.css";

const urbanist = Urbanist({ subsets: ["latin"], weight: ["300", "400", "600", "700"], variable: "--font-urbanist" });
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-montserrat",
});
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400"],
  style: ["italic"],
  variable: "--font-cormorant",
});
const sourceSans = Source_Sans_3({ subsets: ["latin"], weight: ["200", "300", "400"], variable: "--font-source-sans" });

export const metadata: Metadata = {
  title: "Dr. Erich Motta · Cirurgia Plástica · Fortaleza",
  description:
    "Cirurgião plástico há mais de 20 anos em Fortaleza. Membro Especialista da SBCP. Prótese mamária, mastopexia, lipoaspiração, abdominoplastia, rinoplastia e mais, com planejamento individualizado.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      suppressHydrationWarning
      className={`${urbanist.variable} ${montserrat.variable} ${cormorant.variable} ${sourceSans.variable}`}
    >
      <head>
        {/* Marca .js antes da pintura para as entradas .reveal/.clip não piscarem */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
