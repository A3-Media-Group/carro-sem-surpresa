import type { Metadata } from "next";
import { ComparisonSimulator } from "./ComparisonSimulator";

const pageMetadata: Metadata = {
  title: "Consórcio vs. Financiamento vs. à Vista",
  description:
    "Compare o custo total de comprar um carro à vista, no consórcio ou financiado — parcela, total pago e o que sobra além do valor do veículo.",
};

export const metadata: Metadata = {
  ...pageMetadata,
  alternates: { canonical: "/simulador-consorcio-financiamento-vista" },
  openGraph: {
    title: String(pageMetadata.title),
    description: pageMetadata.description ?? undefined,
    url: "/simulador-consorcio-financiamento-vista",
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
  return <ComparisonSimulator />;
}
