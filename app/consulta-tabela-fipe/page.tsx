import type { Metadata } from "next";
import { FipeConsulta } from "./FipeConsulta";

export const metadata: Metadata = {
  title: "Consulta Tabela FIPE",
  description:
    "Consulte grátis o preço médio de mercado de carros, motos e caminhões pela tabela FIPE, por marca, modelo e ano.",
};

export default function Page() {
  return <FipeConsulta />;
}
