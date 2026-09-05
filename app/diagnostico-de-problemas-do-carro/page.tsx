import type { Metadata } from "next";
import { DiagnosticoTool } from "./DiagnosticoTool";

export const metadata: Metadata = {
  title: "Diagnóstico de Problemas do Carro: Causas Prováveis e Custo Estimado",
  description:
    "Digite o sintoma do seu carro (barulho, luz no painel, cheiro, vibração) e veja as causas mais prováveis, o nível de urgência, a faixa de custo estimado e o que perguntar ao mecânico antes de autorizar o reparo.",
};

export default function Page() {
  return <DiagnosticoTool />;
}
