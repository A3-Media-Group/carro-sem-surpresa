import type { Metadata } from "next";
import { IpvaTable } from "./IpvaTable";

const pageMetadata: Metadata = {
  title: "Tabela de IPVA e Isenção por Estado",
  description:
    "Alíquota de IPVA para carro de passeio e a regra de isenção para carros antigos, estado por estado, com busca rápida.",
};

export const metadata: Metadata = {
  ...pageMetadata,
  alternates: { canonical: "/tabela-ipva-por-estado" },
  openGraph: {
    title: String(pageMetadata.title),
    description: pageMetadata.description ?? undefined,
    url: "/tabela-ipva-por-estado",
    type: "website",
    images: [{ url: "/social-card.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: String(pageMetadata.title),
    description: pageMetadata.description ?? undefined,
    images: ["/social-card.png"],
  },
};

export default function Page() {
  return <IpvaTable />;
}
