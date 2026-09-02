import type { Metadata } from "next";
import { IpvaTable } from "./IpvaTable";

export const metadata: Metadata = {
  title: "Tabela de IPVA e Isenção por Estado",
  description:
    "Alíquota de IPVA para carro de passeio e a regra de isenção para carros antigos, estado por estado, com busca rápida.",
};

export default function Page() {
  return <IpvaTable />;
}
