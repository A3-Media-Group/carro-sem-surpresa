import type { Metadata } from "next";
import Link from "next/link";
import {
  ArticleLayout,
  ArticleH2,
  ArticleP,
  ArticleList,
  ArticleCallout,
} from "@/components/guias/ArticleLayout";

export const metadata: Metadata = {
  title: "Licenciamento Atrasado: Multa e o que Acontece",
  description:
    "Atrasar o licenciamento anual, mesmo por um dia, é infração gravíssima: R$293,47 de multa e 7 pontos na CNH. Veja como funciona e como regularizar.",
};

export default function Page() {
  return (
    <ArticleLayout
      title="Licenciamento Atrasado: Multa e o que Acontece"
      dek="Atraso de um dia só já é enquadrado como infração gravíssima — muita gente não sabe disso até ser multado."
    >
      <ArticleP>
        Licenciamento e IPVA são frequentemente confundidos, mas são coisas
        diferentes: o IPVA é o imposto, o licenciamento é o documento anual
        que autoriza o carro a circular (o famoso CRLV). E o licenciamento
        atrasado pega muita gente de surpresa pela gravidade da punição.
      </ArticleP>

      <ArticleH2>A multa por atraso</ArticleH2>
      <ArticleP>
        Segundo o Código de Trânsito Brasileiro, circular com o
        licenciamento vencido — <strong>mesmo que seja um único dia</strong> —
        é enquadrado como infração <strong>gravíssima</strong>: multa de{" "}
        <strong>R$ 293,47</strong> e <strong>7 pontos</strong> na Carteira
        Nacional de Habilitação. Não existe tolerância proporcional ao tempo
        de atraso — um dia ou seis meses recebem a mesma multa por
        ocorrência.
      </ArticleP>

      <ArticleH2>Outros riscos</ArticleH2>
      <ArticleList>
        <li>
          <strong>Retenção do veículo:</strong> em uma blitz, o agente pode
          reter o carro até a regularização, dependendo da situação.
        </li>
        <li>
          <strong>Multas repetidas:</strong> se você continuar rodando com o
          licenciamento vencido, cada nova fiscalização pode gerar uma nova
          multa.
        </li>
        <li>
          <strong>Sem licenciar sem o IPVA em dia:</strong> não dá pra
          licenciar o carro se o IPVA do ano estiver em aberto — os dois
          processos são conectados.
        </li>
      </ArticleList>

      <ArticleH2>Quando vence o licenciamento</ArticleH2>
      <ArticleP>
        O prazo costuma ser definido pelo Detran de cada estado, geralmente
        seguindo o final da placa do veículo, com datas escalonadas ao longo
        do ano — muito parecido com o calendário do IPVA. Vale sempre
        confirmar o calendário vigente no site do Detran do seu estado, já
        que pequenos ajustes de data acontecem de um ano pro outro.
      </ArticleP>

      <ArticleH2>Como regularizar</ArticleH2>
      <ArticleList>
        <li>Quite o IPVA do ano vigente, se ainda estiver em aberto.</li>
        <li>Confirme se não há multas pendentes vinculadas ao veículo.</li>
        <li>
          Acesse o site do Detran do seu estado pra emitir/pagar o
          licenciamento e gerar o novo CRLV digital.
        </li>
      </ArticleList>

      <ArticleCallout>
        Veja o valor e os pontos das infrações de trânsito mais comuns na
        nossa{" "}
        <Link href="/tabela-multas-transito" prefetch={false} className="underline">
          Tabela de Multas de Trânsito
        </Link>{" "}
        e a regra de IPVA do seu estado na{" "}
        <Link href="/tabela-ipva-por-estado" prefetch={false} className="underline">
          Tabela de IPVA por Estado
        </Link>
        .
      </ArticleCallout>
    </ArticleLayout>
  );
}
