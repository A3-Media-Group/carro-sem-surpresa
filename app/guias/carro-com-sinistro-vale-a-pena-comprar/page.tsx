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
  title: "Carro com Sinistro (Batido): Riscos de Comprar e Como Verificar",
  description:
    "Carro com histórico de sinistro é vendido mais barato de propósito. Entenda os riscos reais, como descobrir o histórico e quando pode valer a pena.",
};

export default function Page() {
  return (
    <ArticleLayout
      title="Carro com Sinistro (Batido): Riscos de Comprar e Como Verificar"
      dek="O desconto no preço não é generosidade do vendedor — é o preço do risco que ele está te repassando."
    >
      <ArticleP>
        &quot;Carro com sinistro&quot; é o termo técnico pra um veículo que já foi
        registrado por uma seguradora como envolvido em colisão grave,
        enchente, incêndio ou roubo/furto recuperado. Depois do sinistro, a
        seguradora indeniza o dono e o carro costuma ir a leilão — de lá, ele
        volta pro mercado, às vezes sem que o próximo comprador saiba de
        nada.
      </ArticleP>

      <ArticleH2>Por que o preço é mais baixo</ArticleH2>
      <ArticleP>
        Um carro com sinistro registrado costuma ser vendido entre{" "}
        <strong>10% e 40% abaixo</strong> do valor de tabela FIPE de um
        equivalente sem histórico — a variação depende da gravidade do
        sinistro e de como o reparo foi feito. O desconto existe porque o
        risco é real, não porque o vendedor está sendo generoso.
      </ArticleP>

      <ArticleH2>Os riscos reais</ArticleH2>
      <ArticleList>
        <li>
          <strong>Estrutura comprometida:</strong> reparo de colisão que
          atingiu o chassi/monobloco, se malfeito, compromete a segurança em
          um novo impacto — mesmo que a lataria fique com aparência perfeita.
        </li>
        <li>
          <strong>Corrosão em carro de enchente:</strong> água em contato com
          a parte elétrica e o assoalho causa oxidação que aparece meses ou
          anos depois, de forma progressiva e cara de resolver.
        </li>
        <li>
          <strong>Peças não originais ou recuperadas:</strong> oficinas que
          reparam carro de sinistro pra revenda rápida às vezes usam peças
          de procedência duvidosa pra baratear o conserto.
        </li>
        <li>
          <strong>Dificuldade pra segurar depois:</strong> muitas
          seguradoras exigem vistoria cautelar (e cobram mais caro, ou
          recusam) pra segurar um carro com sinistro no histórico.
        </li>
      </ArticleList>

      <ArticleH2>Como descobrir o histórico antes de comprar</ArticleH2>
      <ArticleList>
        <li>
          Consulte a placa no site do Detran do estado — muitos mostram
          restrições e ocorrências vinculadas ao veículo.
        </li>
        <li>
          Peça o laudo cautelar da seguradora ou de uma vistoria
          independente, que detecta reparo estrutural mesmo quando a
          aparência está impecável.
        </li>
        <li>
          Desconfie de anúncio com preço muito abaixo da média de mercado
          pro mesmo modelo/ano/km — geralmente é o primeiro sinal.
        </li>
        <li>
          Pergunte diretamente ao vendedor sobre o histórico — a
          Constituição do Consumidor (CDC) considera omitir essa informação
          um vício oculto, o que dá direito a rescisão ou abatimento do
          preço mesmo depois da venda.
        </li>
      </ArticleList>

      <ArticleCallout>
        Sempre confirme o valor de mercado do modelo sem histórico na nossa{" "}
        <Link href="/consulta-tabela-fipe" prefetch={false} className="underline">
          Consulta Tabela FIPE
        </Link>{" "}
        antes de negociar o desconto — e passe pelo{" "}
        <Link href="/guias/checklist-comprar-carro-usado" prefetch={false} className="underline">
          checklist completo de compra de usado
        </Link>{" "}
        de qualquer forma, com atenção redobrada aos vãos de lataria e ao
        cheiro de mofo.
      </ArticleCallout>

      <ArticleH2>Quando pode valer a pena</ArticleH2>
      <ArticleP>
        Só faz sentido considerar comprar um carro com sinistro registrado
        se três condições estiverem presentes ao mesmo tempo: um laudo
        cautelar recente e favorável (feito por profissional independente,
        não indicado pelo vendedor), um desconto realmente compatível com o
        risco assumido, e a intenção de manter o carro por pouco tempo ou
        usá-lo com baixa exigência (não é a escolha ideal pra quem depende
        do carro todo dia com a família). Se qualquer uma dessas três
        faltar, o risco tende a superar a economia.
      </ArticleP>
    </ArticleLayout>
  );
}
