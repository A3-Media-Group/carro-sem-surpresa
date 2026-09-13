import type { Metadata } from "next";
import { TransferCostCalculator } from "./TransferCostCalculator";

const pageMetadata: Metadata = {
  title: "Custo de Transferência de Veículo",
  description:
    "Calcule quanto custa transferir a propriedade de um carro: taxa do Detran, vistoria, reconhecimento de firma e placas novas.",
};

export const metadata: Metadata = {
  ...pageMetadata,
  alternates: { canonical: "/calculadora-custo-transferencia-veiculo" },
  openGraph: {
    title: String(pageMetadata.title),
    description: pageMetadata.description ?? undefined,
    url: "/calculadora-custo-transferencia-veiculo",
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
  return <TransferCostCalculator />;
}
