import type { Metadata } from "next";
import Link from "next/link";
const pageMetadata: Metadata = {
  title: "Sobre o Carro Sem Surpresa e Critérios Editoriais",
  description:
    "Conheça o propósito do site, as fontes, os limites dos simuladores e os critérios usados para apresentar informação sobre custos de veículos.",
};
export const metadata: Metadata = {
  ...pageMetadata,
  alternates: { canonical: "/sobre" },
  openGraph: {
    title: String(pageMetadata.title),
    description: pageMetadata.description ?? undefined,
    url: "/sobre",
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
    <main className="mx-auto max-w-3xl px-6 py-12">
      <span className="section-kicker">SOBRE O PROJETO</span>
      <h1 className="mt-4 text-4xl font-bold">
        Decisões melhores começam com informação clara.
      </h1>
      <div className="article-content mt-8 space-y-6">
        <p>
          O Carro Sem Surpresa reúne guias e ferramentas gratuitos para ajudar
          quem compra, usa ou vende um veículo no Brasil. Nosso foco é explicar
          custos, mostrar as premissas das contas e facilitar a comparação de
          cenários.
        </p>
        <h2 className="text-2xl font-bold">Como usar o conteúdo</h2>
        <p>
          Os simuladores trabalham com os valores informados por você e com
          referências identificadas na interface. Não representam orçamento de
          oficina, proposta de seguro ou aprovação de financiamento. Custos e
          regras podem variar por veículo, perfil, local e data.
        </p>
        <h2 className="text-2xl font-bold">Fontes e atualizações</h2>
        <p>
          Nos novos guias, apresentamos links para fontes como Senatran,
          Inmetro, ANP e Banco Central. Exemplos são separados de cotações
          reais. Confira a data de referência de tabelas e a regra aplicável no
          órgão responsável antes de tomar uma decisão.
        </p>
        <h2 className="text-2xl font-bold">Privacidade das ferramentas</h2>
        <p>
          As contas e o checklist são executados no navegador, sem cadastro. A
          consulta FIPE utiliza um provedor externo, que recebe as solicitações
          de marca, modelo e ano. As marcações do checklist não são armazenadas
          para visitas futuras. Saiba mais na{" "}
          <Link href="/politica-de-privacidade">política de privacidade</Link>.
        </p>
        <h2 className="text-2xl font-bold">Limites e transparência</h2>
        <p>
          Conteúdo informativo não substitui inspeção mecânica, laudo ou
          orientação profissional sobre um caso concreto. Uma lista concluída
          não certifica um carro e uma simulação não assegura economia futura. A
          autoria institucional identifica o projeto, sem sugerir certificações
          profissionais não apresentadas.
        </p>
        <p>
          Encontrou uma divergência? Compare com a fonte indicada e use o valor
          confirmado pelo órgão ou prestador responsável. Os canais
          institucionais estão listados nos guias quando se aplicam à consulta.
        </p>
        <Link className="motor-button !no-underline" href="/ferramentas">
          Encontrar uma ferramenta →
        </Link>
      </div>
    </main>
  );
}
