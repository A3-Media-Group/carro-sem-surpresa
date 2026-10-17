import type { Metadata } from "next";
import { ToolPage } from "@/components/tools/ToolPage";
import { conteudo } from "./conteudo";
import { AlcoolOuGasolinaCalculator } from "./AlcoolOuGasolinaCalculator";

const pageMetadata: Metadata = {
  title: "Álcool ou Gasolina: o que Compensa Abastecer",
  description:
    "Calcule com o consumo real do seu carro se vale mais a pena abastecer com etanol ou gasolina — sem depender da regra genérica dos 70%.",
};

export const metadata: Metadata = {
  ...pageMetadata,
  alternates: { canonical: "/calculadora-alcool-ou-gasolina" },
  openGraph: {
    title: String(pageMetadata.title),
    description: pageMetadata.description ?? undefined,
    url: "/calculadora-alcool-ou-gasolina",
    type: "website",
    images: [{ url: "/social-card.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: String(pageMetadata.title),
    description: pageMetadata.description ?? undefined,
    images: ["/social-card.png"],
  },
};

export default function Page() {
  return (
    <ToolPage
      href="/calculadora-alcool-ou-gasolina"
      content={conteudo}
      className="mx-auto max-w-5xl px-6 py-12"
    >
      <AlcoolOuGasolinaCalculator />
    </ToolPage>
  );
}
