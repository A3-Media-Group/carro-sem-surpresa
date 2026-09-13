import type { Metadata } from "next";
import Link from "next/link";
import {
  ArticleLayout,
  ArticleH2,
  ArticleP,
  ArticleList,
  ArticleCallout,
} from "@/components/guias/ArticleLayout";

const pageMetadata: Metadata = {
  title: "Licenciamento Atrasado: Multa e o que Acontece",
  description:
    "Circular sem licenciamento válido é infração gravíssima. Entenda a diferença para o atraso no pagamento e confira como regularizar no Detran.",
};

export const metadata: Metadata = {
  ...pageMetadata,
  alternates: { canonical: "/guias/licenciamento-atrasado-multa" },
  openGraph: {
    title: String(pageMetadata.title),
    description: pageMetadata.description ?? undefined,
    url: "/guias/licenciamento-atrasado-multa",
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
      path="/guias/licenciamento-atrasado-multa"
      title="Licenciamento Atrasado: Multa e o que Acontece"
      dek="A infração é circular sem o licenciamento válido; o simples atraso no pagamento não é a mesma situação."
    >
      <ArticleP>
        Licenciamento e IPVA são frequentemente confundidos, mas são coisas
        diferentes: o IPVA é o imposto, o licenciamento é o documento anual que
        autoriza o carro a circular (o famoso CRLV). E o licenciamento atrasado
        pega muita gente de surpresa pela gravidade da punição.
      </ArticleP>

      <ArticleH2>A infração por circular sem licenciamento válido</ArticleH2>
      <ArticleP>
        Segundo o Código de Trânsito Brasileiro, circular com o licenciamento
        vencido — <strong>mesmo que seja um único dia</strong> — é enquadrado
        como infração <strong>gravíssima</strong>: multa de{" "}
        <strong>R$ 293,47</strong> e <strong>7 pontos</strong> na Carteira
        Nacional de Habilitação. Não existe tolerância proporcional ao tempo de
        atraso — um dia ou seis meses recebem a mesma multa por ocorrência.
      </ArticleP>

      <ArticleH2>Outros riscos</ArticleH2>
      <ArticleList>
        <li>
          <strong>Remoção do veículo:</strong> o art. 230, V, do CTB prevê
          remoção como medida administrativa.
        </li>
        <li>
          <strong>Multas repetidas:</strong> se você continuar rodando com o
          licenciamento vencido, cada nova fiscalização pode gerar uma nova
          multa.
        </li>
        <li>
          <strong>Sem licenciar sem o IPVA em dia:</strong> não dá pra licenciar
          o carro se o IPVA do ano estiver em aberto — os dois processos são
          conectados.
        </li>
      </ArticleList>

      <ArticleP>
        Referência:{" "}
        <a
          href="https://www.presidencia.gov.br/ccivil_03/leis/l9503compilado.htm"
          className="underline"
        >
          Código de Trânsito Brasileiro, arts. 230, V, 258 e 259
        </a>
        . Confira também o calendário e a situação do CRLV no Detran do seu
        estado.
      </ArticleP>
      <ArticleH2>Quando vence o licenciamento</ArticleH2>
      <ArticleP>
        O prazo costuma ser definido pelo Detran de cada estado, geralmente
        seguindo o final da placa do veículo, com datas escalonadas ao longo do
        ano — muito parecido com o calendário do IPVA. Vale sempre confirmar o
        calendário vigente no site do Detran do seu estado, já que pequenos
        ajustes de data acontecem de um ano pro outro.
      </ArticleP>

      <ArticleH2>Como regularizar</ArticleH2>
      <ArticleList>
        <li>Quite o IPVA do ano vigente, se ainda estiver em aberto.</li>
        <li>Confirme se não há multas pendentes vinculadas ao veículo.</li>
        <li>
          Acesse o site do Detran do seu estado pra emitir/pagar o licenciamento
          e gerar o novo CRLV digital.
        </li>
      </ArticleList>

      <ArticleCallout>
        Veja o valor e os pontos das infrações de trânsito mais comuns na nossa{" "}
        <Link
          href="/tabela-multas-transito"
          prefetch={false}
          className="underline"
        >
          Tabela de Multas de Trânsito
        </Link>{" "}
        e a regra de IPVA do seu estado na{" "}
        <Link
          href="/tabela-ipva-por-estado"
          prefetch={false}
          className="underline"
        >
          Tabela de IPVA por Estado
        </Link>
        .
      </ArticleCallout>
    </ArticleLayout>
  );
}
