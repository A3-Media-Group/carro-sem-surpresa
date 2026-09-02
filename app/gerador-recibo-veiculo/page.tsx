import type { Metadata } from "next";
import { ReciboForm } from "./ReciboForm";

export const metadata: Metadata = {
  title: "Gerador de Recibo de Compra e Venda de Veículo",
  description:
    "Gere grátis um recibo de compra e venda de carro em PDF, pronto para imprimir e assinar. Tudo direto no navegador, sem cadastro.",
};

export default function Page() {
  return <ReciboForm />;
}
