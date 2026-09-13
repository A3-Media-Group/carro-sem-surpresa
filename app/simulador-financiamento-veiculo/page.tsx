import type { Metadata } from "next";
import { FinancingSimulator } from "./FinancingSimulator";

const pageMetadata: Metadata = {
  title: "Simulador de Financiamento vs. à Vista",
  description:
    "Simule a parcela do financiamento do seu carro e veja o total de juros pagos — o gasto que ninguém te conta antes de assinar o contrato.",
};

export const metadata: Metadata = {
  ...pageMetadata,
  alternates: { canonical: "/simulador-financiamento-veiculo" },
  openGraph: {
    title: String(pageMetadata.title),
    description: pageMetadata.description ?? undefined,
    url: "/simulador-financiamento-veiculo",
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
  return <FinancingSimulator />;
}
