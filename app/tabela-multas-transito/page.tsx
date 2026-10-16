import type { Metadata } from "next";
import { ToolPage } from "@/components/tools/ToolPage";
import { conteudo } from "./conteudo";
import { MultasTable } from "./MultasTable";

const pageMetadata: Metadata = {
  title: "Tabela de Multas de Trânsito: Valores e Pontos na CNH",
  description:
    "Valor e pontos na CNH das infrações de trânsito mais comuns no Brasil, com busca rápida — celular, velocidade, cinto de segurança e mais.",
};

export const metadata: Metadata = {
  ...pageMetadata,
  alternates: { canonical: "/tabela-multas-transito" },
  openGraph: {
    title: String(pageMetadata.title),
    description: pageMetadata.description ?? undefined,
    url: "/tabela-multas-transito",
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
      href="/tabela-multas-transito"
      content={conteudo}
      className="mx-auto max-w-4xl px-6 py-12"
    >
      <MultasTable />
    </ToolPage>
  );
}
