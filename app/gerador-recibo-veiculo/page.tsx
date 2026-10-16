import type { Metadata } from "next";
import { ToolPage } from "@/components/tools/ToolPage";
import { conteudo } from "./conteudo";
import { ReciboForm } from "./ReciboForm";

const pageMetadata: Metadata = {
  title: "Gerador de Recibo de Compra e Venda de Veículo",
  description:
    "Gere grátis um recibo de compra e venda de carro em PDF, pronto para imprimir e assinar. Tudo direto no navegador, sem cadastro.",
};

export const metadata: Metadata = {
  ...pageMetadata,
  alternates: { canonical: "/gerador-recibo-veiculo" },
  openGraph: {
    title: String(pageMetadata.title),
    description: pageMetadata.description ?? undefined,
    url: "/gerador-recibo-veiculo",
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
      href="/gerador-recibo-veiculo"
      content={conteudo}
      className="mx-auto max-w-3xl px-6 py-12"
    >
      <ReciboForm />
    </ToolPage>
  );
}
