import type { Metadata } from "next";
import { ToolPage } from "@/components/tools/ToolPage";
import { conteudo } from "./conteudo";
import { Checklist } from "./Checklist";
const pageMetadata: Metadata = {
  title: "Checklist Interativo para Comprar Carro Usado",
  description:
    "Marque 16 verificações de documentação, inspeção e orçamento antes de comprar um usado. Imprima a lista sem cadastro e consulte as fontes oficiais.",
};
export const metadata: Metadata = {
  ...pageMetadata,
  alternates: { canonical: "/checklist-carro-usado" },
  openGraph: {
    title: String(pageMetadata.title),
    description: pageMetadata.description ?? undefined,
    url: "/checklist-carro-usado",
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
      href="/checklist-carro-usado"
      content={conteudo}
      className="motor-container py-12"
    >
      <span className="section-kicker">ANTES DE FECHAR NEGÓCIO</span>
      <h1 className="mt-4 text-3xl font-bold sm:text-4xl">
        Checklist para comprar um carro usado
      </h1>
      <p className="mt-4 max-w-2xl text-neutral-600">
        Leve uma lista para a visita e anote o que precisa esclarecer. Não
        pedimos placa, CPF nem dados do vendedor.
      </p>
      <Checklist />
    </ToolPage>
  );
}
