import type { Metadata } from "next";
import Link from "next/link";
import {
  ArticleLayout,
  ArticleH2,
  ArticleP,
  ArticleList,
  ArticleOrderedList,
  ArticleCallout,
  ArticleTable,
} from "@/components/guias/ArticleLayout";
import { formatBRL } from "@/lib/format";

export const metadata: Metadata = {
  title: "Como Calcular se um Carro Cabe no Seu Orçamento",
  description:
    "A regra dos 20% da renda, passo a passo, pra você descobrir sem susto se o carro que você quer comprar cabe no seu bolso — incluindo os gastos que ninguém te conta.",
};

const exemplos = [
  { renda: 3000, limite: 600 },
  { renda: 5000, limite: 1000 },
  { renda: 8000, limite: 1600 },
];

export default function Page() {
  return (
    <ArticleLayout
      title="Como Calcular se um Carro Cabe no Seu Orçamento"
      dek="A conta que a loja não faz pra você — e que evita meses de aperto depois de assinar o contrato."
    >
      <ArticleP>
        Todo mundo já ouviu de alguém: &quot;comprei o carro achando que
        cabia, mas o mês virou um aperto só&quot;. Isso quase sempre
        acontece pelo mesmo motivo — a conta foi feita só com o valor da
        parcela do financiamento, esquecendo tudo o que vem junto: seguro,
        IPVA, combustível, manutenção, estacionamento. O gasto que ninguém
        te conta na hora da venda.
      </ArticleP>
      <ArticleP>
        Existe uma regra simples, usada por consultores financeiros, que
        ajuda a evitar essa armadilha: a <strong>regra dos 20%</strong>.
        Ela leva menos de cinco minutos pra calcular e evita meses inteiros
        de aperto lá na frente — vale muito mais a pena fazer essa conta
        antes de assinar qualquer contrato do que descobrir depois que o
        carro não cabia.
      </ArticleP>

      <ArticleH2>O que é a regra dos 20%</ArticleH2>
      <ArticleP>
        A ideia é direta: o gasto <em>total</em> mensal com o carro — não só
        a parcela do financiamento, mas a soma de todos os custos de ter o
        carro — não deveria ultrapassar <strong>20% da sua renda líquida
        mensal</strong> (o que sobra depois dos impostos, já na sua conta).
      </ArticleP>
      <ArticleP>
        Isso deixa espaço no orçamento pra moradia, alimentação, outras
        contas fixas e, o mais importante, pra imprevistos — porque carro
        tem imprevisto quase todo ano.
      </ArticleP>
      <ArticleP>
        O número 20% não é uma lei da física, mas é um teto testado por
        planejadores financeiros ao longo de anos observando famílias em
        aperto. Quem gasta acima disso costuma sentir o carro &quot;comendo&quot;
        o orçamento de outras áreas — viagem, reserva de emergência,
        investimento — mesmo sem perceber exatamente onde o dinheiro foi
        parar. É um número conservador de propósito: sobra uma margem pra
        quando o carro pedir um reparo fora do previsto.
      </ArticleP>

      <ArticleTable>
        <thead className="bg-neutral-50 text-neutral-500">
          <tr>
            <th className="px-4 py-3 font-medium">Renda líquida mensal</th>
            <th className="px-4 py-3 font-medium">
              Limite de gasto total com o carro (20%)
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-neutral-100">
          {exemplos.map((linha) => (
            <tr key={linha.renda}>
              <td className="px-4 py-3 text-neutral-900">
                {formatBRL(linha.renda)}
              </td>
              <td className="px-4 py-3 text-neutral-500">
                {formatBRL(linha.limite)} por mês
              </td>
            </tr>
          ))}
        </tbody>
      </ArticleTable>

      <ArticleH2>Como aplicar na prática</ArticleH2>
      <ArticleOrderedList>
        <li>
          Calcule sua renda líquida mensal (o que entra na conta, já
          descontado imposto de renda e INSS, se for CLT).
        </li>
        <li>Multiplique por 0,20 pra achar o teto de 20%.</li>
        <li>
          Some <strong>todos</strong> os custos mensais estimados do carro:
          parcela (ou depreciação, se for à vista), IPVA, seguro,
          combustível, manutenção, estacionamento e pedágio.
        </li>
        <li>
          Compare essa soma com o teto. Se passar de 20%, o carro (ou a
          forma de pagamento) provavelmente não cabe confortavelmente no seu
          orçamento agora.
        </li>
      </ArticleOrderedList>

      <ArticleCallout>
        Não sabe estimar a soma de todos esses custos de um carro
        específico? A nossa{" "}
        <Link href="/calculadora-custo-de-posse" className="underline">
          Calculadora do Custo Real de Posse
        </Link>{" "}
        faz essa conta pra você em tempo real — valor do carro, estado,
        km rodado e combustível já viram um número mensal completo.
      </ArticleCallout>

      <ArticleH2>O que entra na conta dos 20%</ArticleH2>
      <ArticleP>
        Esse é o ponto onde a maioria das pessoas erra: só considera a
        parcela do financiamento. Pra fazer a conta valer, inclua:
      </ArticleP>
      <ArticleList>
        <li>
          <strong>Parcela do financiamento ou depreciação</strong> — se
          você comprar à vista, o carro perde valor com o tempo mesmo assim;
          trate essa perda como um &quot;custo mensal invisível&quot;.
        </li>
        <li>
          <strong>IPVA</strong> — varia de estado pra estado, mas é sempre
          um boleto anual que pesa se você não guardar mês a mês.
        </li>
        <li>
          <strong>Seguro</strong> — obrigatório na prática se você financiou,
          e recomendado mesmo se não financiou.
        </li>
        <li>
          <strong>Combustível</strong> — some ao km que você realmente roda
          por mês, não ao que você imagina rodar.
        </li>
        <li>
          <strong>Manutenção preventiva</strong> — óleo, filtros, pastilhas,
          pneus. Ignorar isso é o caminho mais rápido pra um gasto corretivo
          bem maior lá na frente.
        </li>
        <li>
          <strong>Estacionamento e pedágio</strong> — principalmente se você
          mora ou trabalha em grande cidade.
        </li>
      </ArticleList>

      <ArticleH2>Armadilhas comuns na hora de calcular</ArticleH2>
      <ArticleList>
        <li>
          <strong>Esticar o prazo do financiamento</strong> pra fazer a
          parcela &quot;caber&quot; — isso reduz o valor mensal, mas aumenta
          o total pago em juros e o tempo que você fica exposto ao risco.
        </li>
        <li>
          <strong>Usar a renda bruta em vez da líquida</strong> — infla o
          teto de 20% e engana o cálculo.
        </li>
        <li>
          <strong>Esquecer o seguro no primeiro ano</strong> — carro novo ou
          financiado costuma ter seguro mais caro logo de cara.
        </li>
        <li>
          <strong>Não considerar quanto você realmente roda</strong> —
          quem mora perto do trabalho gasta muito menos combustível do que
          quem faz trajetos longos todo dia.
        </li>
      </ArticleList>

      <ArticleH2>E quem tem renda variável?</ArticleH2>
      <ArticleP>
        Autônomos, freelancers e quem vive de comissão sentem esse cálculo
        de um jeito diferente: a renda muda de mês pra mês, mas os custos
        do carro (parcela, IPVA, seguro) continuam fixos independente de
        quanto entrou no bolso naquele mês. Nesses casos, o mais seguro é
        aplicar os 20% sobre a <strong>média dos últimos 12 meses</strong>,
        e não sobre o melhor mês do ano — assim o carro continua cabendo
        no orçamento até nos meses mais fracos. Vale também guardar uma
        reserva extra, pensando nos meses abaixo da média.
      </ArticleP>

      <ArticleH2>E se passar dos 20%?</ArticleH2>
      <ArticleP>
        Não é o fim do mundo, mas é um sinal de alerta. As opções mais
        comuns são: procurar um carro de valor menor, dar uma entrada maior
        pra reduzir a parcela, adiar a compra até a renda crescer, ou
        revisar outros gastos fixos pra abrir espaço. O importante é que a
        decisão seja consciente — não descoberta no primeiro mês de boletos.
      </ArticleP>
      <ArticleP>
        Também vale lembrar que passar um pouco dos 20% por um período
        curto e planejado — por exemplo, sabendo que uma dívida vai
        terminar de ser paga em três meses e vai liberar espaço no
        orçamento — é bem diferente de comprar um carro que estoura o
        limite indefinidamente. O problema nunca é passar do número uma
        vez; é normalizar viver no vermelho por causa dele.
      </ArticleP>

      <ArticleCallout>
        Antes de fechar negócio, rode o valor do carro que você tem em
        mente na{" "}
        <Link href="/calculadora-custo-de-posse" className="underline">
          calculadora de custo de posse
        </Link>
        . Dois minutos hoje evitam meses de aperto depois.
      </ArticleCallout>
    </ArticleLayout>
  );
}
