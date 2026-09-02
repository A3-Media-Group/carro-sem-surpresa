import type { Metadata } from "next";
import Link from "next/link";
import {
  ArticleLayout,
  ArticleH2,
  ArticleP,
  ArticleCallout,
} from "@/components/guias/ArticleLayout";

export const metadata: Metadata = {
  title: "5 Formas de Reduzir o Custo por Quilômetro Rodado",
  description:
    "O gasto escondido do dia a dia: 5 formas práticas de baixar quanto cada km rodado custa no seu carro, sem trocar de veículo.",
};

export default function Page() {
  return (
    <ArticleLayout
      title="5 Formas de Reduzir o Custo por Quilômetro Rodado"
      dek="O gasto escondido do dia a dia: pequenos hábitos que fazem cada km rodado custar bem menos."
    >
      <ArticleP>
        Quando o assunto é economizar com carro, a maioria das pessoas
        pensa só no preço da gasolina no posto. Mas o custo por quilômetro
        rodado — quanto você realmente gasta pra rodar cada km, somando
        combustível, manutenção e desgaste — é um número bem mais completo,
        e é ali que mora o gasto que ninguém te conta.
      </ArticleP>
      <ArticleP>
        A boa notícia: dá pra reduzir esse número sem trocar de carro, sem
        gastar dinheiro extra e sem abrir mão de rodar quando precisa.
        Aqui vão 5 formas práticas — a maioria delas você aplica ainda
        hoje, no seu próprio carro, sem precisar de ferramenta nem oficina.
      </ArticleP>

      <ArticleH2>Por que o custo por km importa mais que o preço do litro</ArticleH2>
      <ArticleP>
        Dois carros podem rodar com o mesmo tipo de combustível e custar
        bem diferente por km — porque o custo por km inclui também
        depreciação, manutenção, pneus e seguro diluídos pela quilometragem
        rodada. Um carro que roda pouco mas é caro de manter pode sair mais
        caro por km do que um carro popular rodando bastante. É por isso
        que a nossa{" "}
        <Link href="/calculadora-custo-de-posse" className="underline">
          Calculadora do Custo Real de Posse
        </Link>{" "}
        sempre mostra o valor por km, não só o total mensal.
      </ArticleP>

      <ArticleH2>1. Mantenha a pressão dos pneus certa</ArticleH2>
      <ArticleP>
        Pneu murcho aumenta o atrito com o asfalto e faz o motor trabalhar
        mais pra manter a mesma velocidade — isso significa mais
        combustível gasto pra rodar o mesmo trajeto. Calibrar os pneus a
        cada 15 dias (a frio, seguindo o valor indicado na coluna da porta
        do motorista) é de graça na maioria dos postos e pode render uma
        economia perceptível de combustível ao longo do mês, além de fazer
        o pneu durar mais. Alinhamento e balanceamento em dia entram na
        mesma lógica: pneu desalinhado desgasta de forma irregular e faz
        o carro &quot;puxar&quot; pra um lado, exigindo mais correção ao
        volante — e mais combustível — pra manter a trajetória reta.
      </ArticleP>

      <ArticleH2>2. Não deixe a manutenção preventiva atrasar</ArticleH2>
      <ArticleP>
        Filtro de ar sujo, vela desgastada, óleo vencido: tudo isso faz o
        motor perder eficiência e consumir mais combustível pra entregar a
        mesma performance. Manutenção preventiva em dia não é só sobre
        evitar quebra — é sobre manter o carro rodando no consumo pra qual
        ele foi projetado.
      </ArticleP>
      <ArticleCallout>
        Quer saber o que está vencendo no seu carro agora? Nosso{" "}
        <Link href="/manutencao-preventiva-vs-corretiva" className="underline">
          Simulador de Manutenção Preventiva vs. Corretiva
        </Link>{" "}
        mostra a próxima troca de cada item e quanto você economiza fazendo
        na hora certa.
      </ArticleCallout>

      <ArticleH2>3. Ajuste o jeito de dirigir</ArticleH2>
      <ArticleP>
        Acelerações bruscas seguidas de freadas fortes consomem muito mais
        combustível do que uma condução suave e antecipada — olhando mais
        à frente no trânsito pra reduzir a velocidade gradualmente em vez
        de frear em cima da hora. Deixar o carro ligado parado por muito
        tempo (esperando alguém, no drive-thru) também soma combustível
        gasto sem rodar nenhum km. Trocar de marcha na faixa de rotação
        recomendada (em carros manuais) também faz diferença real no
        consumo ao longo do mês. Carregar peso desnecessário no porta-malas
        e usar o ar-condicionado sem necessidade em trajetos curtos também
        pesam no consumo, mesmo que pouca gente pare pra notar.
      </ArticleP>

      <ArticleH2>4. Escolha o combustível certo pro seu carro</ArticleH2>
      <ArticleP>
        Em carros flex, a regra prática mais conhecida é: se o etanol
        custar até 70% do preço da gasolina no posto, ele compensa (porque
        o carro roda menos km por litro de etanol, mas ele é mais barato).
        Acima disso, a gasolina costuma sair mais em conta por km rodado.
        Vale fazer essa conta sempre que for abastecer — o preço relativo
        muda de posto pra posto e de mês pra mês. Outro ponto: combustível
        aditivado ou de octanagem maior só faz diferença se o manual do
        seu carro recomendar — em carros populares que não pedem isso,
        pagar mais caro por um combustível &quot;premium&quot; costuma ser
        gasto sem retorno real em economia ou desempenho.
      </ArticleP>

      <ArticleH2>5. Repense trajetos curtos e ociosidade do carro</ArticleH2>
      <ArticleP>
        Carro parado na garagem continua custando: IPVA, seguro e
        depreciação correm independente de quantos km você roda. Se boa
        parte do seu uso é em trajetos curtos e esporádicos, vale comparar
        o custo mensal de manter o carro com o custo de resolver esses
        trajetos específicos com apps de transporte — às vezes o carro
        compensa muito pra uma rotina, mas nem tanto pra outra.
      </ArticleP>

      <ArticleCallout>
        A nossa{" "}
        <Link href="/calculadora-custo-de-posse" className="underline">
          Calculadora do Custo Real de Posse
        </Link>{" "}
        já traz esse comparativo pronto: carro próprio vs. app de
        transporte, na sua quilometragem real.
      </ArticleCallout>

      <ArticleH2>Quanto isso soma no fim do ano</ArticleH2>
      <ArticleP>
        Nenhum desses ajustes sozinho parece muito — alguns centavos por
        litro aqui, alguns km a mais de vida útil do pneu ali. Mas quando
        você roda alguns milhares de km por mês, mesmo uma economia de 5%
        a 10% no consumo de combustível já representa dezenas de reais por
        mês, e pneus e amortecedores durando mais adiam trocas que custam
        na casa dos milhares de reais. É o mesmo princípio de qualquer
        economia recorrente: pequena por mês, relevante no ano.
      </ArticleP>

      <ArticleH2>O que fica de lição</ArticleH2>
      <ArticleP>
        Nenhuma dessas 5 formas exige trocar de carro ou gastar dinheiro
        extra — são ajustes de hábito e de atenção. Juntas, elas reduzem o
        custo por km rodado de um jeito que se acumula mês após mês, sem
        você sentir um &quot;corte&quot; forçado no orçamento. É o tipo de
        economia que só aparece quando você olha pro número certo — e
        continua valendo independente do preço do combustível no posto.
      </ArticleP>
      <ArticleP>
        Comece pelo mais fácil: calibre os pneus essa semana e veja o
        consumo do próximo tanque. Depois, vá incorporando os outros
        hábitos aos poucos. Nenhum deles precisa virar uma obsessão — o
        objetivo é rodar do jeito que você já roda, só que gastando menos
        pra fazer isso.
      </ArticleP>
    </ArticleLayout>
  );
}
