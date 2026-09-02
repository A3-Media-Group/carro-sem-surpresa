import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Guias sobre o Custo Real de um Carro",
  description:
    "Guias completos e gratuitos pra você entender — e controlar — os custos escondidos de comprar, manter e vender um carro no Brasil.",
};

const guias = [
  {
    href: "/guias/como-calcular-se-carro-cabe-no-orcamento",
    titulo: "Como Calcular se um Carro Cabe no Seu Orçamento",
    resumo:
      "A regra dos 20% da renda, passo a passo, pra evitar o aperto no orçamento depois da compra.",
  },
  {
    href: "/guias/reduzir-custo-por-km-rodado",
    titulo: "5 Formas de Reduzir o Custo por Quilômetro Rodado",
    resumo:
      "O gasto escondido do dia a dia: hábitos simples que baixam o custo por km sem trocar de carro.",
  },
  {
    href: "/guias/faq-custo-de-carro",
    titulo: "FAQ: Perguntas Frequentes Sobre o Custo de um Carro",
    resumo:
      "Depreciação no primeiro ano, manutenção de elétrico e isenção de IPVA — direto ao ponto.",
  },
];

export default function GuiasPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <header className="max-w-2xl">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Guias sobre o Custo Real de um Carro
        </h1>
        <p className="mt-3 text-neutral-600">
          Conteúdo gratuito pra você entender o gasto que ninguém te conta —
          antes, durante e depois de ter um carro.
        </p>
      </header>

      <div className="mt-10 space-y-4">
        {guias.map((guia) => (
          <Link
            key={guia.href}
            href={guia.href}
            prefetch={false}
            className="block rounded-xl border border-neutral-200 p-6 transition hover:border-orange-300 hover:bg-orange-50"
          >
            <h2 className="text-lg font-semibold text-neutral-900">
              {guia.titulo}
            </h2>
            <p className="mt-2 text-sm text-neutral-600">{guia.resumo}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}
