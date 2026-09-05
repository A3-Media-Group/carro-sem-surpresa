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
  title: "IPVA Atrasado: Multa, Juros e Como Regularizar",
  description:
    "O que acontece quando o IPVA vence e você não paga: multa diária, juros, negativação e risco de apreensão. Veja como regularizar em qualquer estado.",
};

export default function Page() {
  return (
    <ArticleLayout
      title="IPVA Atrasado: Multa, Juros e Como Regularizar"
      dek="Quanto mais tempo passa, mais caro fica — e a conta cresce todo dia, não só no vencimento."
    >
      <ArticleP>
        O IPVA é um imposto estadual, então as regras exatas de prazo e
        parcelamento variam de estado pra estado — mas a lógica de punição
        pelo atraso segue um padrão parecido no país inteiro.
      </ArticleP>

      <ArticleH2>O que acontece quando você atrasa o pagamento</ArticleH2>
      <ArticleList>
        <li>
          <strong>Multa por atraso:</strong> na maioria dos estados, algo em
          torno de <strong>0,33% ao dia</strong>, limitada a um teto (em
          geral 20% do valor do imposto).
        </li>
        <li>
          <strong>Juros de mora:</strong> somam-se à multa, normalmente
          atrelados à taxa Selic ou a um índice estadual equivalente.
        </li>
        <li>
          <strong>Negativação:</strong> depois de um período de
          inadimplência (60 dias é comum), o CPF do dono pode ser inscrito
          em cadastros de proteção ao crédito, como SPC e Serasa.
        </li>
        <li>
          <strong>Inscrição em dívida ativa:</strong> se o débito continuar
          em aberto, o estado pode inscrevê-lo em dívida ativa, abrindo
          caminho pra cobrança judicial.
        </li>
      </ArticleList>

      <ArticleH2>Dá pra continuar dirigindo com o IPVA atrasado?</ArticleH2>
      <ArticleP>
        Na prática, sim — <strong>até a data de vencimento do licenciamento
        anual do veículo</strong>, que é um documento separado do IPVA. O
        problema é que você não consegue licenciar o carro sem o IPVA
        quitado, e andar com o licenciamento vencido é, em si, uma infração
        gravíssima (veja nosso guia sobre{" "}
        <Link href="/guias/licenciamento-atrasado-multa" prefetch={false} className="underline">
          licenciamento atrasado
        </Link>
        ). Ou seja: o IPVA atrasado sozinho não te impede de rodar
        imediatamente, mas cedo ou tarde bloqueia o licenciamento — e o carro
        pode ser apreendido em blitz por essa combinação.
      </ArticleP>

      <ArticleH2>Como regularizar</ArticleH2>
      <ArticleList>
        <li>
          Acesse o site da Sefaz (Secretaria da Fazenda) do estado onde o
          carro está registrado.
        </li>
        <li>
          Emita a 2ª via do boleto com multa e juros já calculados, pra
          pagamento à vista.
        </li>
        <li>
          Verifique se o estado oferece parcelamento — a maioria permite,
          com condições e número de parcelas que variam bastante de um
          estado pro outro.
        </li>
        <li>
          Depois de pago, o licenciamento costuma liberar em poucos dias
          úteis — confirme no mesmo site antes de rodar.
        </li>
      </ArticleList>

      <ArticleCallout>
        Consulte a alíquota e a regra de isenção específica do seu estado na
        nossa{" "}
        <Link href="/tabela-ipva-por-estado" prefetch={false} className="underline">
          Tabela de IPVA por Estado
        </Link>{" "}
        antes de calcular quanto vai pagar no próximo ano — e evite cair de
        novo no atraso guardando o valor mês a mês.
      </ArticleCallout>
    </ArticleLayout>
  );
}
