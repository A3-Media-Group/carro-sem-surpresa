import type { Metadata } from "next";
import { ToolPage } from "@/components/tools/ToolPage";
import { conteudo } from "./conteudo";
import { TripCalculator } from "./TripCalculator";
const pageMetadata: Metadata = {
  title: "Calculadora de Custo de Viagem: Combustível e Pedágios",
  description:
    "Calcule combustível, pedágios e estacionamento de uma viagem de carro, com ida e volta e divisão por pessoa. Veja as fórmulas e ajuste os valores.",
};
export const metadata: Metadata = {
  ...pageMetadata,
  alternates: { canonical: "/calculadora-custo-viagem" },
  openGraph: {
    title: String(pageMetadata.title),
    description: pageMetadata.description ?? undefined,
    url: "/calculadora-custo-viagem",
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
      href="/calculadora-custo-viagem"
      content={conteudo}
      className="motor-container py-12"
    >
      <span className="section-kicker">PLANEJE ANTES DE PEGAR A ESTRADA</span>
      <h1 className="mt-4 max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl">
        Quanto custa a sua viagem de carro?
      </h1>
      <p className="mt-4 max-w-2xl text-neutral-600">
        Some combustível e despesas do percurso. Os valores iniciais são
        exemplos editáveis, não cotações de postos ou pedágios.
      </p>
      <TripCalculator />
    </ToolPage>
  );
}
