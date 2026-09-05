import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AdSlot } from "@/components/ads/AdSlot";
import { siteUrl } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const siteTitle = "Carro Sem Surpresa — Custo Real de Ter um Carro no Brasil";
const siteDescription =
  "Calculadoras gratuitas pra você nunca mais ser pego de surpresa pelos custos escondidos de comprar, manter ou vender um carro: custo real de posse, manutenção, recibo de veículo e IPVA por estado.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: "%s — Carro Sem Surpresa",
  },
  description: siteDescription,
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: siteUrl,
    siteName: "Carro Sem Surpresa",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
  },
  verification: {
    google: "FHC_KudjQZbga3CdN602YY1G18m61ybzosUxqS3Sr_U",
  },
};

// Organization + WebSite JSON-LD, no <head> de toda página — ajuda o
// Google a entender a identidade do site (nome, logo, descrição) fora
// do texto visível, sem depender de nenhuma página específica.
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Carro Sem Surpresa",
  url: siteUrl,
  logo: `${siteUrl}/icon.png`,
  description: siteDescription,
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Carro Sem Surpresa",
  url: siteUrl,
  inLanguage: "pt-BR",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body className="flex min-h-screen flex-col font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <Header />
        <AdSlot position="header" className="mx-auto my-3 max-w-6xl px-6" />
        <div className="flex flex-1 flex-col">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
