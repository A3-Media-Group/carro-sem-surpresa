import type { Metadata } from "next";
import { MultasTable } from "./MultasTable";

export const metadata: Metadata = {
  title: "Tabela de Multas de Trânsito: Valores e Pontos na CNH",
  description:
    "Valor e pontos na CNH das infrações de trânsito mais comuns no Brasil, com busca rápida — celular, velocidade, cinto de segurança e mais.",
};

export default function Page() {
  return <MultasTable />;
}
