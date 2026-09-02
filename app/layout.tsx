import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const siteUrl = "https://carrosemsurpresa.com.br";
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body className="min-h-screen flex flex-col font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
