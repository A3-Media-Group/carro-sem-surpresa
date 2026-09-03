import type { Metadata } from "next";
import { TransferCostCalculator } from "./TransferCostCalculator";

export const metadata: Metadata = {
  title: "Custo de Transferência de Veículo",
  description:
    "Calcule quanto custa transferir a propriedade de um carro: taxa do Detran, vistoria, reconhecimento de firma e placas novas.",
};

export default function Page() {
  return <TransferCostCalculator />;
}
