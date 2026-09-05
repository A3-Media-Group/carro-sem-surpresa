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
  title: "Revisão Fora da Concessionária Perde a Garantia?",
  description:
    "O que diz o Código de Defesa do Consumidor sobre fazer revisão em oficina independente — e o que a concessionária pode (e não pode) negar por causa disso.",
};

export default function Page() {
  return (
    <ArticleLayout
      title="Revisão Fora da Concessionária Perde a Garantia?"
      dek="O que a concessionária insinua e o que a lei realmente diz são duas coisas diferentes."
    >
      <ArticleP>
        É comum ouvir (às vezes até de um vendedor de concessionária) que
        fazer a revisão fora da rede autorizada &quot;cancela a garantia&quot; do
        carro. Isso não é bem verdade — mas também não é totalmente falso.
        O detalhe está em <em>como</em> a revisão é feita fora, não em{" "}
        <em>onde</em> ela é feita.
      </ArticleP>

      <ArticleH2>O que diz a lei</ArticleH2>
      <ArticleP>
        O Código de Defesa do Consumidor (CDC) e o entendimento consolidado
        do Conselho Administrativo de Defesa Econômica (Cade) são claros: o
        fabricante <strong>não pode obrigar</strong> o consumidor a fazer
        manutenção só na rede credenciada como condição pra manter a
        garantia — isso é considerado venda casada, prática vedada pelo
        CDC. Vincular a garantia exclusivamente à concessionária, sem
        justificativa técnica, já foi alvo de processos administrativos
        contra montadoras no Brasil.
      </ArticleP>

      <ArticleH2>A condição que realmente importa</ArticleH2>
      <ArticleP>
        A garantia continua válida fazendo revisão em oficina independente,{" "}
        <strong>desde que</strong>:
      </ArticleP>
      <ArticleList>
        <li>A oficina siga exatamente o plano de revisão do manual do fabricante (intervalos de km/tempo, itens verificados).</li>
        <li>Sejam usadas peças originais ou equivalentes reconhecidas — não peças piratas ou de procedência duvidosa.</li>
        <li>Você guarde a nota fiscal detalhada de cada serviço, com data, km rodado e itens trocados.</li>
      </ArticleList>

      <ArticleH2>Quando a concessionária tem razão pra negar garantia</ArticleH2>
      <ArticleList>
        <li>
          O defeito reclamado tem relação direta e comprovada com um serviço
          mal feito ou peça não original usada na oficina independente.
        </li>
        <li>
          A revisão obrigatória do manual simplesmente não foi feita (nem
          na concessionária, nem fora) — a garantia condiciona a manutenção
          preventiva estar em dia, não a ela ter sido feita num lugar
          específico.
        </li>
      </ArticleList>
      <ArticleP>
        Ou seja: a garantia protege peças e defeitos de fabricação, não
        cobre negligência do dono em fazer a manutenção recomendada — seja
        lá onde ela for feita.
      </ArticleP>

      <ArticleH2>Como se proteger fazendo revisão fora</ArticleH2>
      <ArticleList>
        <li>Guarde nota fiscal detalhada de cada serviço — não só um recibo genérico de &quot;revisão&quot;.</li>
        <li>Siga rigorosamente os intervalos e itens do manual do fabricante.</li>
        <li>Prefira peças originais ou de marca reconhecida no mercado, evitando peças sem procedência.</li>
        <li>Se possível, monte uma pasta (física ou digital) organizada com todas as notas, em ordem cronológica.</li>
      </ArticleList>

      <ArticleCallout>
        Use nosso{" "}
        <Link href="/gerador-recibo-veiculo" prefetch={false} className="underline">
          Gerador de Recibo
        </Link>{" "}
        pra manter documentação organizada de compra e venda, e compare o
        que está vencendo no seu carro com a nossa ferramenta de{" "}
        <Link href="/manutencao-preventiva-vs-corretiva" prefetch={false} className="underline">
          Manutenção Preventiva vs. Corretiva
        </Link>
        . Se notar algum sintoma estranho após uma revisão, confira as
        causas prováveis no{" "}
        <Link href="/diagnostico-de-problemas-do-carro" prefetch={false} className="underline">
          Diagnóstico de Problemas do Carro
        </Link>{" "}
        antes de aceitar qualquer diagnóstico de cabeça.
      </ArticleCallout>
    </ArticleLayout>
  );
}
