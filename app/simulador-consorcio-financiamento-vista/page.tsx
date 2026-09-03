import type { Metadata } from "next";
import { ComparisonSimulator } from "./ComparisonSimulator";

export const metadata: Metadata = {
  title: "Consórcio vs. Financiamento vs. à Vista",
  description:
    "Compare o custo total de comprar um carro à vista, no consórcio ou financiado — parcela, total pago e o que sobra além do valor do veículo.",
};

export default function Page() {
  return <ComparisonSimulator />;
}
