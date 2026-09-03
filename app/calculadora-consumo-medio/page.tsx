import type { Metadata } from "next";
import { FuelEfficiencyCalculator } from "./FuelEfficiencyCalculator";

export const metadata: Metadata = {
  title: "Calculadora de Consumo Médio Real",
  description:
    "Calcule o consumo real do seu carro (km/L) a partir do km rodado e dos litros abastecidos, e compare com a média de cada categoria.",
};

export default function Page() {
  return <FuelEfficiencyCalculator />;
}
