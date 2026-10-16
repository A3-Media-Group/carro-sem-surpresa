import type { Metadata } from "next";
import { ToolPage } from "@/components/tools/ToolPage";
import { conteudo } from "./conteudo";
import { FipeConsulta } from "./FipeConsulta";

const pageMetadata: Metadata = {
  title: "Consulta Tabela FIPE",
  description:
    "Consulte grátis o preço médio de mercado de carros, motos e caminhões pela tabela FIPE, por marca, modelo e ano.",
};

export const metadata: Metadata = {
  ...pageMetadata,
  alternates: { canonical: "/consulta-tabela-fipe" },
  openGraph: {
    title: String(pageMetadata.title),
    description: pageMetadata.description ?? undefined,
    url: "/consulta-tabela-fipe",
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
  return (
    <ToolPage
      href="/consulta-tabela-fipe"
      content={conteudo}
      className="mx-auto max-w-3xl px-6 py-12"
    >
      <FipeConsulta />
    </ToolPage>
  );
}
