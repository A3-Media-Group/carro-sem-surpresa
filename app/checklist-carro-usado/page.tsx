import type { Metadata } from "next";
import Link from "next/link";
import { Checklist } from "./Checklist";
const pageMetadata: Metadata = {
  title: "Checklist Interativo para Comprar Carro Usado",
  description:
    "Marque 16 verificações de documentação, inspeção e orçamento antes de comprar um usado. Imprima a lista sem cadastro e consulte as fontes oficiais.",
};
export const metadata: Metadata = {
  ...pageMetadata,
  alternates: { canonical: "/checklist-carro-usado" },
  openGraph: {
    title: String(pageMetadata.title),
    description: pageMetadata.description ?? undefined,
    url: "/checklist-carro-usado",
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
      <span className="section-kicker">ANTES DE FECHAR NEGÓCIO</span>
      <h1 className="mt-4 text-3xl font-bold sm:text-4xl">
        Checklist para comprar um carro usado
      </h1>
      <p className="mt-4 max-w-2xl text-neutral-600">
        Leve uma lista para a visita e anote o que precisa esclarecer. Não
        pedimos placa, CPF nem dados do vendedor.
      </p>
      <Checklist />
      <section className="article-content mt-10 max-w-3xl space-y-5">
        <h2 className="text-2xl font-bold">
          Use a lista como roteiro, não como laudo
        </h2>
        <p>
          Um anúncio e um test-drive não revelam todo o histórico do veículo. A
          inspeção mecânica e a avaliação documental se complementam; uma não
          substitui a outra. Se houver divergências, esclareça-as antes de
          pagar.
        </p>
        <p>
          Veja o{" "}
          <Link href="/guias/checklist-comprar-carro-usado">
            guia completo de compra de usados
          </Link>
          , aprenda a{" "}
          <Link href="/guias/consultar-recall-e-restricoes">
            consultar recall e restrições
          </Link>{" "}
          e estime o{" "}
          <Link href="/calculadora-custo-transferencia-veiculo">
            custo da transferência
          </Link>
          .
        </p>
        <p className="text-sm">
          Canais oficiais:{" "}
          <a href="https://www.gov.br/pt-br/servicos/realizar-consulta-sobre-recall-de-veiculos">
            consulta de recall da Senatran
          </a>{" "}
          e{" "}
          <a href="https://www.gov.br/pt-br/servicos/consultar-informacoes-sobre-restricoes-e-indicadores-de-veiculos">
            restrições e indicadores de veículos
          </a>
          .
        </p>
      </section>
    </main>
  );
}
