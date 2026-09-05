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
  title: "Seguro Auto: Vale a Pena, Como Funciona e Quanto Custa",
  description:
    "O que realmente influencia o preço do seguro do carro, a diferença entre franquia alta e reduzida, e quando faz sentido não ter seguro completo.",
};

export default function Page() {
  return (
    <ArticleLayout
      title="Seguro Auto: Vale a Pena, Como Funciona e Quanto Custa"
      dek="O preço da apólice parece um mistério — mas segue uma lógica bem clara assim que você entende os fatores por trás dela."
    >
      <ArticleP>
        Seguro de carro é um dos gastos fixos mais pesados de ter um veículo
        — e também um dos mais mal entendidos. Boa parte da confusão some
        assim que você entende o que está sendo cobrado e por quê.
      </ArticleP>

      <ArticleH2>Os três tipos de cobertura</ArticleH2>
      <ArticleList>
        <li>
          <strong>Compreensivo (completo):</strong> cobre colisão, roubo,
          furto e incêndio do seu próprio carro, além de danos a terceiros.
          É o mais caro e o mais completo.
        </li>
        <li>
          <strong>RCF (Responsabilidade Civil Facultativa):</strong> cobre
          só danos que <em>você</em> causar a terceiros (carro, pessoa ou
          patrimônio) — não cobre reparo do seu próprio carro.
        </li>
        <li>
          <strong>Sem seguro:</strong> qualquer prejuízo, seu ou de
          terceiros, sai do seu bolso. Ilegal em nenhum caso — no Brasil o
          seguro auto não é obrigatório por lei — mas é o cenário de maior
          risco financeiro.
        </li>
      </ArticleList>

      <ArticleH2>O que define o preço da sua apólice</ArticleH2>
      <ArticleList>
        <li>
          <strong>Perfil do condutor:</strong> idade, tempo de habilitação e
          histórico de sinistros pesam muito — condutores jovens (abaixo de
          25/26 anos) pagam mais por estatisticamente se envolverem em mais
          acidentes.
        </li>
        <li>
          <strong>CEP de pernoite do carro:</strong> regiões com mais roubo/
          furto registrado aumentam o prêmio, mesmo que você nunca tenha tido
          sinistro.
        </li>
        <li>
          <strong>Categoria tarifária do modelo:</strong> cada modelo tem uma
          &quot;nota&quot; de sinistralidade e custo de peças/reposição definida pelas
          seguradoras — carros com peças caras ou muito visados por ladrões
          custam mais pra segurar.
        </li>
        <li>
          <strong>Garagem:</strong> ter garagem em casa e no trabalho reduz o
          prêmio — o risco de furto/roubo em via pública é maior.
        </li>
        <li>
          <strong>Bônus (classe de bônus):</strong> a cada ano sem acionar o
          seguro, você sobe uma classe de desconto — algumas seguradoras
          chegam a mais de 50% de desconto acumulado.
        </li>
      </ArticleList>

      <ArticleH2>Franquia: reduzida vs. alta</ArticleH2>
      <ArticleP>
        A franquia é o valor que você paga do próprio bolso quando aciona o
        seguro pra reparo do seu carro. Quanto <strong>maior</strong> a
        franquia que você aceita pagar num sinistro, <strong>menor</strong>{" "}
        o prêmio mensal/anual da apólice — é uma troca entre pagar mais
        agora (todo mês) ou pagar mais depois (só se acontecer algo).
      </ArticleP>
      <ArticleList>
        <li>
          <strong>Franquia reduzida:</strong> prêmio mensal mais alto, mas
          desembolso menor se precisar acionar o seguro. Faz mais sentido
          pra quem prefere previsibilidade.
        </li>
        <li>
          <strong>Franquia alta:</strong> prêmio mensal mais baixo, mas
          desembolso maior num sinistro. Faz sentido pra quem dirige pouco,
          tem uma reserva de emergência e quer economizar no dia a dia.
        </li>
      </ArticleList>

      <ArticleH2>Quando pode fazer sentido não ter seguro completo</ArticleH2>
      <ArticleList>
        <li>
          Carro muito antigo, com valor de tabela FIPE baixo — o prêmio do
          compreensivo pode chegar perto do valor do próprio carro.
        </li>
        <li>Garagem segura e baixa quilometragem rodada por mês.</li>
        <li>
          Você tem reserva financeira suficiente pra bancar um reparo ou até
          a perda total do carro sem comprometer o orçamento.
        </li>
      </ArticleList>
      <ArticleP>
        Nesses casos, o RCF isolado (bem mais barato) pode ser suficiente
        pra cobrir o maior risco financeiro real: causar dano a terceiro.
      </ArticleP>

      <ArticleCallout>
        Na nossa{" "}
        <Link href="/calculadora-custo-de-posse" prefetch={false} className="underline">
          Calculadora do Custo Real de Posse
        </Link>
        , usamos como estimativa padrão <strong>4,5% ao ano sobre o valor
        FIPE</strong> do carro pra simular o seguro anual — é uma média de
        mercado, editável na hora de calcular. Seu preço real pode variar
        bastante conforme os fatores acima; a cotação com pelo menos 3
        seguradoras é o único jeito de saber o valor exato pro seu perfil.
      </ArticleCallout>

      <ArticleH2>Dicas pra reduzir o prêmio</ArticleH2>
      <ArticleList>
        <li>Cote em várias seguradoras — a diferença de preço entre elas pode passar de 30% pro mesmo perfil.</li>
        <li>Instale rastreador, se a seguradora oferecer desconto por isso.</li>
        <li>Inclua um segundo condutor mais velho e experiente no perfil, se fizer sentido pra sua realidade.</li>
        <li>Renove sempre antes do vencimento — perder a vigência zera o seu bônus acumulado em algumas seguradoras.</li>
      </ArticleList>
    </ArticleLayout>
  );
}
