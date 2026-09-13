import type { Metadata } from "next";
import Link from "next/link";
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
    <main className="motor-container py-12">
      <span className="section-kicker">PLANEJE ANTES DE PEGAR A ESTRADA</span>
      <h1 className="mt-4 max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl">
        Quanto custa a sua viagem de carro?
      </h1>
      <p className="mt-4 max-w-2xl text-neutral-600">
        Some combustível e despesas do percurso. Os valores iniciais são
        exemplos editáveis, não cotações de postos ou pedágios.
      </p>
      <TripCalculator />
      <section className="article-content mt-12 max-w-3xl space-y-5">
        <h2 className="text-2xl font-bold">Como a conta funciona</h2>
        <p>
          Litros necessários = distância total ÷ consumo em km/L. Combustível =
          litros × preço do litro. Some os pedágios, estacionamento e outras
          despesas; depois divida pelo número de pessoas.
        </p>
        <p>
          Exemplo: 300 km, consumo de 12 km/L e gasolina a R$ 6/L exigem 25
          litros, ou R$ 150. Com R$ 40 de pedágios, o total é R$ 190; dividido
          entre duas pessoas, R$ 95 para cada uma.
        </p>
        <h2 className="text-2xl font-bold">Quais dados usar?</h2>
        <p>
          Informe o consumo medido em estrada. Se ainda não o conhece, use a{" "}
          <Link href="/calculadora-consumo-medio">
            calculadora de consumo médio
          </Link>
          . A distância pode vir do seu aplicativo de rotas. Confira os pedágios
          nas concessionárias responsáveis e considere deslocamentos no destino.
        </p>
        <details className="rounded-xl border p-5">
          <summary className="cursor-pointer font-semibold">
            A calculadora busca preços ou pedágios automaticamente?
          </summary>
          <p className="mt-3">
            Não. Você informa os preços e despesas para simular seu percurso. A
            ANP oferece referências de preços médios, mas o valor no posto pode
            ser diferente.
          </p>
        </details>
        <details className="rounded-xl border p-5">
          <summary className="cursor-pointer font-semibold">
            Ida e volta dobra todos os valores?
          </summary>
          <p className="mt-3">
            Somente a distância e, portanto, o combustível. Pedágios e demais
            despesas devem ser informados como totais da viagem.
          </p>
        </details>
        <p>
          Para conhecer também os custos de propriedade, use a{" "}
          <Link href="/calculadora-custo-de-posse">
            calculadora de custo real de posse
          </Link>
          .
        </p>
        <p className="text-sm">
          Referência:{" "}
          <a href="https://www.gov.br/anp/pt-br/assuntos/precos-e-defesa-da-concorrencia/precos/precos-revenda-e-de-distribuicao-combustiveis">
            levantamento de preços da ANP
          </a>
          .
        </p>
      </section>
    </main>
  );
}
