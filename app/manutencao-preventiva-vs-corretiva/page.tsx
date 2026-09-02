import type { Metadata } from "next";
import { ManutencaoSimulator } from "./ManutencaoSimulator";

export const metadata: Metadata = {
  title: "Manutenção Preventiva vs. Corretiva: Quanto Você Economiza",
  description:
    "Veja as próximas revisões do seu carro (óleo, correia dentada, amortecedores, pneus) e quanto custa fazer preventivo em vez de deixar quebrar.",
};

export default function Page() {
  return <ManutencaoSimulator />;
}
