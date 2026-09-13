import type { Metadata } from "next";
import Link from "next/link";
import { ArticleLayout } from "@/components/guias/ArticleLayout";

const pageMetadata: Metadata = {
  title: "FAQ: Perguntas Frequentes Sobre o Custo de um Carro",
  description:
    "Depreciação no primeiro ano, manutenção de carro elétrico e isenção de IPVA para carros antigos — respondido direto ao ponto.",
};

interface FaqItem {
  pergunta: string;
  resposta: string;
}

const faqs: FaqItem[] = [
  {
    pergunta: "Qual a depreciação média de um carro zero km no 1º ano?",
    resposta:
      'Na média do mercado brasileiro, um carro zero km perde entre 10% e 20% do valor pago logo no primeiro ano — é o chamado "imposto de sair da concessionária". O percentual exato varia por marca, modelo e demanda: carros muito procurados (com fila de espera ou pouca oferta) desvalorizam menos, enquanto modelos com saída lenta ou troca de geração recente podem desvalorizar mais. Depois do primeiro ano, a curva de depreciação costuma ficar mais suave, na faixa de 8% a 12% ao ano nos anos seguintes. Esse é exatamente o gasto que ninguém te conta na hora da venda: mesmo sem rodar um km, o carro já vale menos. É por isso que, na nossa Calculadora do Custo Real de Posse, a depreciação entra como uma fatia do custo mensal — não é "gasto que você paga" de um boleto, mas é dinheiro que sai do seu patrimônio do mesmo jeito.',
  },
  {
    pergunta: "Vale a pena comprar carro elétrico considerando a manutenção?",
    resposta:
      "Em manutenção, o carro elétrico tende a sair mais barato ao longo do tempo: não tem troca de óleo de motor, não tem correia dentada nem embreagem, e as pastilhas de freio duram mais por causa da frenagem regenerativa (o motor ajuda a frear e desgasta menos o freio convencional). Isso reduz vários dos itens mais caros da manutenção tradicional. Por outro lado, os pneus de elétricos tendem a durar menos — o peso extra da bateria e o torque instantâneo desgastam a banda de rodagem mais rápido — e, se a bateria de tração precisar de reparo ou troca fora da garantia, o custo é alto. Na prática, pra quem roda dentro da garantia da bateria (que costuma ser longa, 8 anos ou mais na maioria das marcas), a manutenção geral tende a compensar. Vale sempre simular os custos específicos do modelo que você está considerando antes de decidir.",
  },
  {
    pergunta: "Como funciona a isenção de IPVA para carros antigos?",
    resposta:
      "A Emenda Constitucional 137/2025 estabelece imunidade nacional de IPVA para os veículos abrangidos com 20 anos ou mais de fabricação. Ela não elimina isenções estaduais mais favoráveis: pode haver benefício antes dessa idade, conforme o estado e os requisitos legais. Ônibus, micro-ônibus, reboques e semirreboques não são abrangidos por essa imunidade específica; isso não exclui outras hipóteses de benefício. Confira a categoria do veículo e a legislação da Sefaz responsável. A tabela do site mostra a referência nacional, não todos os benefícios estaduais.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.pergunta,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.resposta,
    },
  })),
};

export const metadata: Metadata = {
  ...pageMetadata,
  alternates: { canonical: "/guias/faq-custo-de-carro" },
  openGraph: {
    title: String(pageMetadata.title),
    description: pageMetadata.description ?? undefined,
    url: "/guias/faq-custo-de-carro",
    type: "article",
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
    <ArticleLayout
      path="/guias/faq-custo-de-carro"
      title="FAQ: Perguntas Frequentes Sobre o Custo de um Carro"
      dek="Direto ao ponto, sem economês."
    >
      {/* JSON-LD FAQPage, seguindo a recomendação oficial do Next.js de
          renderizar structured data como <script> dentro do page.tsx. */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqJsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <div className="space-y-4">
        {faqs.map((faq) => (
          <details
            key={faq.pergunta}
            className="group rounded-lg border border-neutral-200 p-5 open:bg-neutral-50"
          >
            <summary className="cursor-pointer list-none text-lg font-semibold text-neutral-900 marker:content-none">
              <span className="flex items-center justify-between gap-4">
                {faq.pergunta}
                <span className="shrink-0 text-neutral-500 group-open:rotate-45 transition-transform">
                  +
                </span>
              </span>
            </summary>
            <p className="mt-3 leading-relaxed text-neutral-700">
              {faq.resposta}
            </p>
          </details>
        ))}
      </div>

      <p className="mt-8 text-sm text-neutral-500">
        Quer calcular esses números pro seu carro? Confira a{" "}
        <Link
          href="/calculadora-custo-de-posse"
          prefetch={false}
          className="underline"
        >
          Calculadora do Custo Real de Posse
        </Link>{" "}
        e a{" "}
        <Link
          href="/tabela-ipva-por-estado"
          prefetch={false}
          className="underline"
        >
          Tabela de IPVA por Estado
        </Link>
        .
      </p>
    </ArticleLayout>
  );
}
