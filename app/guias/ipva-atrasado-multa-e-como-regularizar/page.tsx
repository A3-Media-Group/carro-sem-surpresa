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
  title: "IPVA Atrasado: Multa, Juros e Como Regularizar",
  description:
    "Saiba como consultar encargos e regularizar o IPVA atrasado na Sefaz do seu estado. Entenda a diferença entre dívida tributária e licenciamento.",
};

export const metadata: Metadata = {
  ...pageMetadata,
  alternates: { canonical: "/guias/ipva-atrasado-multa-e-como-regularizar" },
  openGraph: {
    title: String(pageMetadata.title),
    description: pageMetadata.description ?? undefined,
    url: "/guias/ipva-atrasado-multa-e-como-regularizar",
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
      path="/guias/ipva-atrasado-multa-e-como-regularizar"
      title="IPVA Atrasado: Multa, Juros e Como Regularizar"
      dek="Quanto mais tempo passa, mais caro fica — e a conta cresce todo dia, não só no vencimento."
    >
      <ArticleP>
        O IPVA é um imposto estadual, então as regras exatas de prazo e
        parcelamento variam de estado pra estado — mas a lógica de punição pelo
        atraso segue um padrão parecido no país inteiro.
      </ArticleP>

      <ArticleH2>O que acontece quando você atrasa o pagamento</ArticleH2>
      <ArticleList>
        <li>
          <strong>Multa por atraso:</strong> a alíquota, o limite e a forma de
          cálculo dependem da legislação estadual. Consulte o demonstrativo
          atualizado da Sefaz responsável.
        </li>
        <li>
          <strong>Juros de mora:</strong> somam-se à multa, normalmente
          atrelados à taxa Selic ou a um índice estadual equivalente.
        </li>
        <li>
          <strong>Cobrança e cadastros:</strong> as consequências e os
          procedimentos dependem do estado e da situação da dívida. Não presuma
          um prazo nacional único para protesto ou inscrição em cadastros.
        </li>
        <li>
          <strong>Inscrição em dívida ativa:</strong> se o débito continuar em
          aberto, o estado pode inscrevê-lo em dívida ativa, abrindo caminho pra
          cobrança judicial.
        </li>
      </ArticleList>

      <ArticleH2>Dá pra continuar dirigindo com o IPVA atrasado?</ArticleH2>
      <ArticleP>
        Na prática, sim —{" "}
        <strong>
          até a data de vencimento do licenciamento anual do veículo
        </strong>
        , que é um documento separado do IPVA. O problema é que você não
        consegue licenciar o carro sem o IPVA quitado, e andar com o
        licenciamento vencido é, em si, uma infração gravíssima (veja nosso guia
        sobre{" "}
        <Link
          href="/guias/licenciamento-atrasado-multa"
          prefetch={false}
          className="underline"
        >
          licenciamento atrasado
        </Link>
        ). Ou seja: o IPVA atrasado sozinho não te impede de rodar
        imediatamente, mas cedo ou tarde bloqueia o licenciamento — e o carro
        pode ser removido se circular sem estar devidamente licenciado.
      </ArticleP>

      <ArticleH2>Como regularizar</ArticleH2>
      <ArticleList>
        <li>
          Acesse o site da Sefaz (Secretaria da Fazenda) do estado onde o carro
          está registrado.
        </li>
        <li>
          Emita a 2ª via do boleto com multa e juros já calculados, pra
          pagamento à vista.
        </li>
        <li>
          Verifique se o estado oferece parcelamento — a maioria permite, com
          condições e número de parcelas que variam bastante de um estado pro
          outro.
        </li>
        <li>
          Após o pagamento, confirme a baixa dos débitos e a emissão do CRLV
          válido no Detran. Não presuma liberação automática nem um prazo igual
          para todos os estados.
        </li>
      </ArticleList>

      <ArticleCallout>
        Consulte a alíquota e a regra de isenção específica do seu estado na
        nossa{" "}
        <Link
          href="/tabela-ipva-por-estado"
          prefetch={false}
          className="underline"
        >
          Tabela de IPVA por Estado
        </Link>{" "}
        antes de calcular quanto vai pagar no próximo ano — e evite cair de novo
        no atraso guardando o valor mês a mês.
      </ArticleCallout>
    </ArticleLayout>
  );
}
