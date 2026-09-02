import type { Metadata } from "next";
import { FinancingSimulator } from "./FinancingSimulator";

export const metadata: Metadata = {
  title: "Simulador de Financiamento vs. à Vista",
  description:
    "Simule a parcela do financiamento do seu carro e veja o total de juros pagos — o gasto que ninguém te conta antes de assinar o contrato.",
};

export default function Page() {
  return <FinancingSimulator />;
}
