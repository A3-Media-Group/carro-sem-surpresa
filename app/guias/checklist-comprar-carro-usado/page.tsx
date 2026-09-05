import type { Metadata } from "next";
import Link from "next/link";
import {
  ArticleLayout,
  ArticleH2,
  ArticleP,
  ArticleList,
  ArticleOrderedList,
  ArticleCallout,
} from "@/components/guias/ArticleLayout";

export const metadata: Metadata = {
  title: "Comprar Carro Usado: Checklist Completo Antes de Fechar Negócio",
  description:
    "16 pontos pra checar antes de assinar qualquer coisa na compra de um carro usado — documentação, lataria, test-drive e vistoria mecânica.",
};

export default function Page() {
  return (
    <ArticleLayout
      title="Comprar Carro Usado: Checklist Completo Antes de Fechar Negócio"
      dek="A maioria dos arrependimentos na compra de usado não vem do preço — vem de um problema que já estava lá e ninguém checou antes de assinar."
    >
      <ArticleP>
        Carro usado bom existe aos montes, mas o vendedor (concessionária ou
        particular) não tem obrigação de te contar tudo o que está errado.
        Quem sai perdendo é sempre quem não checou antes. Este checklist
        cobre, na ordem certa, tudo que vale a pena verificar antes de virar
        dono.
      </ArticleP>

      <ArticleH2>Antes de ver o carro pessoalmente</ArticleH2>
      <ArticleList>
        <li>
          <strong>Documentação em nome do vendedor:</strong> confira se o
          CRLV (documento do carro) está no nome de quem está vendendo. Se
          não estiver, pergunte por quê — pode ser uma cadeia de venda
          informal que vai virar dor de cabeça na hora de transferir.
        </li>
        <li>
          <strong>Restrição financeira (alienação):</strong> carro financiado
          e ainda não quitado aparece com restrição no documento — sem
          quitar, você não consegue transferir pra seu nome.
        </li>
        <li>
          <strong>Multas e IPVA em aberto:</strong> consulte pela placa no
          site do Detran do estado. Dívidas em aberto passam pro novo dono
          depois da transferência se não forem resolvidas antes.
        </li>
        <li>
          <strong>Histórico de sinistro/leilão:</strong> uma consulta rápida
          pela placa mostra se o carro já foi registrado como recuperado de
          sinistro (colisão grave, enchente, roubo/furto recuperado) — isso
          muda completamente a análise de risco.
        </li>
      </ArticleList>

      <ArticleH2>Checklist visual (com o carro parado, à luz do dia)</ArticleH2>
      <ArticleList>
        <li>
          <strong>Diferença de cor ou textura entre painéis da lataria</strong>{" "}
          — indício de repintura, ou seja, o carro já bateu em algum ponto.
        </li>
        <li>
          <strong>Vãos irregulares entre porta, capô e para-lamas</strong> —
          sinal de que a peça já foi removida e recolocada (normalmente após
          reparo de batida).
        </li>
        <li>
          <strong>Desgaste irregular dos pneus</strong> — pode indicar
          suspensão ou alinhamento desregulado há tempos (veja nosso guia de{" "}
          <Link href="/diagnostico-de-problemas-do-carro" prefetch={false} className="underline">
            diagnóstico de problemas
          </Link>{" "}
          pra entender as causas mais prováveis).
        </li>
        <li>
          <strong>Vazamento embaixo do carro</strong> — peça pra dar partida
          e deixar ligado uns minutos parado, depois olhe o chão embaixo.
        </li>
        <li>
          <strong>Nível e aspecto do óleo e do líquido de arrefecimento</strong>{" "}
          — óleo com aspecto de &quot;leite&quot; pode indicar problema sério no motor.
        </li>
        <li>
          <strong>Borrachas de porta e para-brisa ressecadas ou remendadas</strong>{" "}
          — carro que ficou muito tempo exposto ao sol/tempo, ou já teve
          infiltração.
        </li>
        <li>
          <strong>Cheiro de mofo dentro do carro</strong> — pode indicar
          infiltração de água (às vezes sinal de carro de enchente).
        </li>
      </ArticleList>

      <ArticleH2>No test-drive</ArticleH2>
      <ArticleP>
        Reserve pelo menos 15 minutos, em ruas com lombada, buraco e alguma
        via mais rápida. Preste atenção em:
      </ArticleP>
      <ArticleList>
        <li>Barulhos ao frear, ao virar o volante ou em buracos</li>
        <li>Se o carro puxa pra um lado ao acelerar ou ao frear</li>
        <li>Trocas de marcha do câmbio automático (solavanco é sinal de alerta)</li>
        <li>Ar-condicionado gelando de verdade em poucos minutos</li>
        <li>Vidros, travas e trava elétrica funcionando em todas as portas</li>
      </ArticleList>
      <ArticleCallout>
        Sentiu algum barulho ou comportamento estranho no test-drive? Digite
        o sintoma no nosso{" "}
        <Link href="/diagnostico-de-problemas-do-carro" prefetch={false} className="underline">
          Diagnóstico de Problemas do Carro
        </Link>{" "}
        antes de continuar a negociação — saber a causa provável e a faixa
        de custo do reparo muda completamente o seu poder de negociação.
      </ArticleCallout>

      <ArticleH2>Vistoria com mecânico de confiança</ArticleH2>
      <ArticleP>
        Esse é o passo que mais gente pula pra &quot;economizar tempo&quot; — e é
        justamente o que mais evita prejuízo. Uma vistoria cautelar completa
        custa na faixa de R$150 a R$300 e detecta coisas invisíveis a olho
        nu: estrutura do chassi, compressão do motor, folgas de suspensão.
      </ArticleP>
      <ArticleList>
        <li>
          Leve a um mecânico da <strong>sua</strong> confiança, nunca o
          indicado pelo vendedor.
        </li>
        <li>
          Se o vendedor recusar deixar o carro sair pra vistoria, isso já é
          um sinal de alerta em si.
        </li>
        <li>
          Peça o laudo por escrito, com os itens verificados — isso também
          vira sua base de negociação se algo for encontrado.
        </li>
      </ArticleList>

      <ArticleH2>Depois de fechar negócio</ArticleH2>
      <ArticleOrderedList>
        <li>
          Gere o recibo de compra e venda — nosso{" "}
          <Link href="/gerador-recibo-veiculo" prefetch={false} className="underline">
            Gerador de Recibo
          </Link>{" "}
          cria o documento em PDF, pronto pra imprimir e assinar, sem
          cadastro.
        </li>
        <li>
          Calcule o custo real da transferência (taxa do Detran, vistoria,
          reconhecimento de firma) na nossa{" "}
          <Link href="/calculadora-custo-transferencia-veiculo" prefetch={false} className="underline">
            Calculadora de Custo de Transferência
          </Link>
          .
        </li>
        <li>Faça a transferência dentro do prazo legal do seu estado (normalmente 30 dias) pra evitar multa.</li>
      </ArticleOrderedList>
    </ArticleLayout>
  );
}
