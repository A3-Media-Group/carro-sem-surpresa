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
  title: "Assinatura de Carro vs. Financiamento vs. à Vista: Qual Compensa",
  description:
    "Assinatura de carro embute seguro, manutenção e IPVA numa mensalidade fixa, sem ser dono. Veja quando isso compensa mais que financiar ou comprar à vista.",
};

export default function Page() {
  return (
    <ArticleLayout
      title="Assinatura de Carro vs. Financiamento vs. à Vista: Qual Compensa"
      dek="Um jeito de 'ter carro' sem ser dono de nada — bom pra algumas situações, ruim pra outras."
    >
      <ArticleP>
        Assinatura de carro ganhou força no Brasil como uma quarta opção
        além de comprar à vista, financiar ou usar consórcio. A proposta é
        simples: uma mensalidade fixa que já inclui o carro, seguro,
        manutenção preventiva e IPVA — sem entrada, sem burocracia de
        transferência, com prazos curtos (12 a 36 meses).
      </ArticleP>

      <ArticleH2>Como funciona a assinatura de carro</ArticleH2>
      <ArticleList>
        <li>Sem entrada e sem análise de crédito tão rígida quanto um financiamento.</li>
        <li>Mensalidade fixa cobre: uso do carro, seguro, manutenção preventiva, IPVA e, em muitos planos, assistência 24h.</li>
        <li>Prazo curto e flexível — normalmente de 12 a 36 meses, podendo trocar de carro ou encerrar o contrato ao fim do período.</li>
        <li>Ao final, você devolve o carro — nunca vira dono dele.</li>
      </ArticleList>

      <ArticleH2>O que pesa contra a assinatura</ArticleH2>
      <ArticleList>
        <li>
          A mensalidade tende a ser <strong>mais alta</strong> mês a mês do
          que uma parcela equivalente de financiamento — porque embute todos
          os serviços (seguro, manutenção, IPVA) já com a margem da empresa.
        </li>
        <li>
          Você nunca constrói patrimônio: ao final do contrato, devolve o
          carro e não sobra nada convertido em bem.
        </li>
        <li>
          Costuma ter limite de km rodado por mês — passar do limite gera
          cobrança extra.
        </li>
      </ArticleList>

      <ArticleH2>Quando a assinatura compensa</ArticleH2>
      <ArticleList>
        <li>
          Você não sabe se vai continuar na mesma cidade por muito tempo (
          transferência de trabalho, por exemplo) e não quer o compromisso
          de longo prazo de um financiamento.
        </li>
        <li>Você prefere previsibilidade total de gasto mensal, sem surpresa de manutenção ou seguro.</li>
        <li>Você gosta de trocar de carro com frequência, sem lidar com a burocracia e a perda de valor de revenda.</li>
        <li>Você quer evitar imobilizar dinheiro numa entrada ou na compra à vista.</li>
      </ArticleList>

      <ArticleH2>Quando financiamento ou à vista compensam mais</ArticleH2>
      <ArticleList>
        <li>Você planeja usar o carro por muitos anos — o custo mensal do financiamento tende a ficar mais baixo que a assinatura equivalente no longo prazo.</li>
        <li>Você quer construir patrimônio: ao quitar o financiamento, o carro é seu e pode ser vendido, diferente da assinatura.</li>
        <li>Você já tem o dinheiro disponível e não perde rendimento relevante tirando ele de uma aplicação — nesse caso, comprar à vista elimina os juros do financiamento por completo.</li>
      </ArticleList>

      <ArticleCallout>
        Trate a assinatura como uma quarta coluna mental ao lado de
        financiamento, consórcio e à vista. Nossa{" "}
        <Link href="/simulador-consorcio-financiamento-vista" prefetch={false} className="underline">
          Simulação de Consórcio vs. Financiamento vs. à Vista
        </Link>{" "}
        já compara essas três formas lado a lado pelo custo total — pegue o
        valor mensal total da assinatura que você recebeu de orçamento e
        compare na mão com o resultado da simulação.
      </ArticleCallout>
    </ArticleLayout>
  );
}
