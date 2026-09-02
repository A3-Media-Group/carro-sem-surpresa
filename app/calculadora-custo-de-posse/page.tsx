import type { Metadata } from "next";
import { TcoCalculator } from "./TcoCalculator";

export const metadata: Metadata = {
  title: "Calculadora do Custo Real de Posse (TCO) de um Carro",
  description:
    "Descubra quanto um carro custa de verdade por mês: depreciação, IPVA, seguro, combustível e manutenção juntos — e compare com andar só de app.",
};

export default function Page() {
  return <TcoCalculator />;
}
