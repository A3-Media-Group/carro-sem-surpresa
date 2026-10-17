import type { Metadata } from "next";
import { ToolPage } from "@/components/tools/ToolPage";
import { conteudo } from "./conteudo";
import { FuelEfficiencyCalculator } from "./FuelEfficiencyCalculator";

const pageMetadata: Metadata = {
  title: "Calculadora de Consumo Médio Real",
  description:
    "Calcule o consumo real do seu carro (km/L) a partir do km rodado e dos litros abastecidos, e compare com a média de cada categoria.",
};

export const metadata: Metadata = {
  ...pageMetadata,
  alternates: { canonical: "/calculadora-consumo-medio" },
  openGraph: {
    title: String(pageMetadata.title),
    description: pageMetadata.description ?? undefined,
    url: "/calculadora-consumo-medio",
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
      href="/calculadora-consumo-medio"
      content={conteudo}
      className="mx-auto max-w-5xl px-6 py-12"
    >
      <FuelEfficiencyCalculator />
    </ToolPage>
  );
}
