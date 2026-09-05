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
  title: "Carro Elétrico ou Híbrido: o Custo Real de Manutenção Compensa?",
  description:
    "Elétrico tem menos peça pra trocar, mas os pneus desgastam mais rápido e a bateria de tração é o item mais caro fora da garantia. Veja a conta completa.",
};

export default function Page() {
  return (
    <ArticleLayout
      title="Carro Elétrico ou Híbrido: o Custo Real de Manutenção Compensa?"
      dek="Menos peça de motor pra trocar, mas a conta muda se a bateria de tração sair da garantia."
    >
      <ArticleP>
        Carro elétrico promete manutenção mais barata — e em boa parte é
        verdade. Mas &quot;mais barato&quot; não significa &quot;sem custo nenhum&quot;, e
        existem itens específicos do elétrico que pesam de um jeito
        diferente do carro a combustão.
      </ArticleP>

      <ArticleH2>O que o elétrico não tem (e o carro a combustão tem)</ArticleH2>
      <ArticleList>
        <li>Troca de óleo do motor e filtro de óleo</li>
        <li>Correia dentada ou corrente de comando</li>
        <li>Embreagem (a maioria dos elétricos não tem câmbio com embreagem tradicional)</li>
        <li>Velas de ignição e bobinas</li>
        <li>Sistema de escapamento e catalisador</li>
      </ArticleList>
      <ArticleP>
        Isso elimina vários dos itens de manutenção corretiva mais caros de
        um carro a combustão ao longo da vida útil.
      </ArticleP>

      <ArticleH2>Pastilha de freio dura mais (frenagem regenerativa)</ArticleH2>
      <ArticleP>
        No elétrico, o motor ajuda a frear reaproveitando a energia
        (frenagem regenerativa), o que reduz bastante o uso do freio a
        disco convencional. Na prática, pastilhas e discos de freio duram
        significativamente mais tempo entre trocas.
      </ArticleP>

      <ArticleH2>O que pesa contra: pneus e bateria</ArticleH2>
      <ArticleList>
        <li>
          <strong>Pneus desgastam mais rápido:</strong> o peso extra da
          bateria e o torque instantâneo do motor elétrico aceleram o
          desgaste da banda de rodagem — é comum trocar pneu com mais
          frequência do que num carro a combustão equivalente.
        </li>
        <li>
          <strong>Bateria de tração:</strong> o item mais caro do carro.
          A maioria das marcas oferece garantia longa (8 anos ou
          160.000 km, em geral, o que vier primeiro), mas uma troca fora da
          garantia custa caro — geralmente uma fração significativa do
          valor do próprio carro.
        </li>
      </ArticleList>

      <ArticleH2>E o híbrido?</ArticleH2>
      <ArticleP>
        O híbrido convencional mantém o motor a combustão (com toda a
        manutenção tradicional que isso implica: óleo, velas, correia) e
        soma uma bateria e motor elétrico menores que os de um elétrico
        puro. Na prática, o custo de manutenção do híbrido fica numa posição
        intermediária: menos economia que o elétrico puro, mas ainda reduz o
        desgaste de freio e some com parte da manutenção do motor em
        trajetos urbanos.
      </ArticleP>

      <ArticleH2>Custo de recarga vs. abastecimento</ArticleH2>
      <ArticleP>
        A energia elétrica residencial no Brasil custa, em média,
        aproximadamente <strong>R$ 0,75 por kWh</strong> (o valor exato
        depende da bandeira tarifária e da distribuidora local) — bem mais
        barato por km rodado do que gasolina ou etanol na maioria dos casos.
        Recarga em posto público rápido costuma custar mais que a recarga em
        casa.
      </ArticleP>

      <ArticleCallout>
        Nossa{" "}
        <Link href="/calculadora-custo-de-posse" prefetch={false} className="underline">
          Calculadora do Custo Real de Posse
        </Link>{" "}
        já inclui o elétrico como opção de combustível — simule o seu
        modelo e compare o custo mensal total com um equivalente a
        combustão antes de decidir.
      </ArticleCallout>

      <ArticleH2>Resumindo</ArticleH2>
      <ArticleP>
        Pra quem roda dentro do período de garantia da bateria (a maioria
        dos donos, na prática), a manutenção do elétrico tende a compensar
        pelo menor número de peças de desgaste tradicionais. O ponto de
        atenção real é o pneu (troca mais frequente) e o planejamento pro
        dia em que a garantia da bateria acabar — principalmente se você
        pretende manter o carro por muitos anos.
      </ArticleP>
    </ArticleLayout>
  );
}
