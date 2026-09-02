import type { Metadata } from "next";
import { AlcoolOuGasolinaCalculator } from "./AlcoolOuGasolinaCalculator";

export const metadata: Metadata = {
  title: "Álcool ou Gasolina: o que Compensa Abastecer",
  description:
    "Calcule com o consumo real do seu carro se vale mais a pena abastecer com etanol ou gasolina — sem depender da regra genérica dos 70%.",
};

export default function Page() {
  return <AlcoolOuGasolinaCalculator />;
}
