import type { Metadata } from "next";
import Link from "next/link";
import {
  ArticleLayout,
  ArticleH2,
  ArticleP,
  ArticleList,
  ArticleCallout,
  ArticleTable,
} from "@/components/guias/ArticleLayout";

export const metadata: Metadata = {
  title: "0km ou Seminovo: Qual Vale Mais a Pena",
  description:
    "A resposta muda de acordo com quanto tempo você pretende ficar com o carro e quanto roda por mês. Veja os prós e contras de cada opção, com números.",
};

export default function Page() {
  return (
    <ArticleLayout
      title="0km ou Seminovo: Qual Vale Mais a Pena"
      dek="Não existe resposta única — existe a resposta certa pro seu caso."
    >
      <ArticleP>
        A dúvida entre 0km e seminovo aparece pra quase todo mundo na hora de
        trocar de carro. A comparação não é só de preço de tabela — envolve
        depreciação, garantia, seguro e financiamento, cada um puxando a
        decisão pra um lado diferente.
      </ArticleP>

      <ArticleH2>O golpe de depreciação do 0km</ArticleH2>
      <ArticleP>
        Um carro zero quilômetro perde, na média do mercado brasileiro, entre{" "}
        <strong>10% e 20% do valor pago logo no primeiro ano</strong> — é o
        &quot;imposto de sair da concessionária&quot;. Isso significa que, se você
        pretende vender ou trocar de carro em pouco tempo, boa parte do seu
        dinheiro simplesmente evapora sem nenhuma culpa sua. Depois do
        primeiro ano, a curva de desvalorização fica mais suave.
      </ArticleP>

      <ArticleH2>Onde o seminovo (2 a 4 anos) leva vantagem</ArticleH2>
      <ArticleList>
        <li>
          <strong>Já absorveu o tombo do primeiro ano</strong> — quem compra
          continua depreciando, só que numa curva bem mais suave.
        </li>
        <li>
          <strong>Costuma ainda estar na garantia de fábrica</strong> — a
          maioria das marcas oferece 3 anos, algumas chegam a 5.
        </li>
        <li>
          <strong>Preço de entrada menor</strong> — libera dinheiro pra dar
          de entrada maior num financiamento, ou evita financiar de vez.
        </li>
      </ArticleList>

      <ArticleH2>Onde o 0km leva vantagem</ArticleH2>
      <ArticleList>
        <li>
          <strong>Garantia total de fábrica</strong>, sem dúvida sobre o
          histórico de uso do carro.
        </li>
        <li>
          <strong>Taxas de financiamento promocionais</strong> — montadoras
          costumam subsidiar juros em campanhas de 0km, o que às vezes
          compensa o preço mais alto.
        </li>
        <li>
          <strong>Zero km de rodagem, zero histórico de dono anterior</strong>{" "}
          — elimina totalmente o risco de comprar um problema escondido.
        </li>
        <li>
          Faz mais sentido pra quem <strong>planeja ficar muitos anos</strong>{" "}
          com o carro — o tombo do primeiro ano pesa menos diluído ao longo
          do tempo.
        </li>
      </ArticleList>

      <ArticleTable>
        <thead className="bg-neutral-50 text-neutral-500">
          <tr>
            <th className="px-4 py-3 font-medium">Critério</th>
            <th className="px-4 py-3 font-medium">0km</th>
            <th className="px-4 py-3 font-medium">Seminovo (2–4 anos)</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-neutral-100">
          <tr>
            <td className="px-4 py-3 font-medium text-neutral-900">Depreciação no 1º ano de posse</td>
            <td className="px-4 py-3 text-neutral-600">Alta (10%–20%)</td>
            <td className="px-4 py-3 text-neutral-600">Já absorvida pelo dono anterior</td>
          </tr>
          <tr>
            <td className="px-4 py-3 font-medium text-neutral-900">Garantia de fábrica</td>
            <td className="px-4 py-3 text-neutral-600">Total, do zero</td>
            <td className="px-4 py-3 text-neutral-600">Parcial ou já vencida</td>
          </tr>
          <tr>
            <td className="px-4 py-3 font-medium text-neutral-900">Seguro no 1º ano</td>
            <td className="px-4 py-3 text-neutral-600">Mais caro (valor segurado maior)</td>
            <td className="px-4 py-3 text-neutral-600">Mais barato</td>
          </tr>
          <tr>
            <td className="px-4 py-3 font-medium text-neutral-900">Preço de entrada</td>
            <td className="px-4 py-3 text-neutral-600">Maior</td>
            <td className="px-4 py-3 text-neutral-600">Menor</td>
          </tr>
        </tbody>
      </ArticleTable>

      <ArticleCallout>
        Antes de decidir, rode o carro pretendido (0km ou o seminovo que você
        achou) na nossa{" "}
        <Link href="/calculadora-custo-de-posse" prefetch={false} className="underline">
          Calculadora do Custo Real de Posse
        </Link>{" "}
        e compare as duas opções de financiamento na{" "}
        <Link href="/simulador-financiamento-veiculo" prefetch={false} className="underline">
          Simulação de Financiamento
        </Link>
        . Pra checar se o preço pedido do seminovo está de acordo com o
        mercado, use a{" "}
        <Link href="/consulta-tabela-fipe" prefetch={false} className="underline">
          Consulta Tabela FIPE
        </Link>
        .
      </ArticleCallout>

      <ArticleH2>Resumindo</ArticleH2>
      <ArticleP>
        Se você pretende ficar muitos anos com o carro, valoriza garantia
        total e encontrou uma taxa promocional de financiamento, o 0km pode
        compensar o preço mais alto. Se o seu foco é economizar e não se
        importa em abrir mão de alguns meses de garantia de fábrica, o
        seminovo de 2 a 4 anos costuma ser o ponto de equilíbrio entre preço
        e segurança — desde que passe pelo{" "}
        <Link href="/guias/checklist-comprar-carro-usado" prefetch={false} className="underline">
          checklist completo antes de comprar carro usado
        </Link>
        .
      </ArticleP>
    </ArticleLayout>
  );
}
