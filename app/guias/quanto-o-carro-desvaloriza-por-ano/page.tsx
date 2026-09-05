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
  title: "Quanto o Carro Desvaloriza por Ano: Tabela de Depreciação",
  description:
    "A curva de depreciação de um carro, ano a ano, e os fatores que aceleram ou desaceleram essa perda de valor — o gasto que ninguém vê saindo da conta.",
};

const curva = [
  { ano: "Saída da concessionária (0km)", restante: "100%" },
  { ano: "1º ano", restante: "~85%" },
  { ano: "2º ano", restante: "~76%" },
  { ano: "3º ano", restante: "~69%" },
  { ano: "4º ano", restante: "~62%" },
  { ano: "5º ano", restante: "~56%" },
];

export default function Page() {
  return (
    <ArticleLayout
      title="Quanto o Carro Desvaloriza por Ano: Tabela de Depreciação"
      dek="O gasto que ninguém vê saindo da conta todo mês, mas que corrói o patrimônio do mesmo jeito."
    >
      <ArticleP>
        Depreciação é o único custo de ter um carro que não vem num boleto —
        e por isso é o mais fácil de esquecer na hora de planejar o
        orçamento. Mesmo que você nunca acione o seguro e nunca precise de
        um reparo, o carro perde valor de mercado todo santo mês, só de
        existir.
      </ArticleP>

      <ArticleH2>A curva de depreciação</ArticleH2>
      <ArticleP>
        A perda de valor não é linear: o tombo é bem maior logo no primeiro
        ano (entre 10% e 20%, dependendo do modelo) e depois se estabiliza
        numa faixa mais suave, geralmente entre 8% e 12% ao ano. A tabela
        abaixo é ilustrativa, usando 15% no primeiro ano e 10% ao ano
        depois — o percentual real do seu modelo específico pode ser maior
        ou menor.
      </ArticleP>

      <ArticleTable>
        <thead className="bg-neutral-50 text-neutral-500">
          <tr>
            <th className="px-4 py-3 font-medium">Momento</th>
            <th className="px-4 py-3 font-medium">Valor restante (ilustrativo)</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-neutral-100">
          {curva.map((linha) => (
            <tr key={linha.ano}>
              <td className="px-4 py-3 text-neutral-900">{linha.ano}</td>
              <td className="px-4 py-3 font-medium text-neutral-700">{linha.restante}</td>
            </tr>
          ))}
        </tbody>
      </ArticleTable>
      <p className="text-xs text-neutral-500">
        Ilustrativo, com fins didáticos — não é a curva exata de nenhum
        modelo específico. Na nossa Calculadora do Custo Real de Posse,
        usamos 12% ao ano como taxa padrão editável de depreciação.
      </p>

      <ArticleH2>Fatores que aceleram a desvalorização</ArticleH2>
      <ArticleList>
        <li><strong>Quilometragem acima da média</strong> — carro rodado demais desvaloriza mais rápido que a média do mercado pro mesmo ano/modelo.</li>
        <li><strong>Histórico de manutenção incompleto</strong> — sem revisões registradas, o comprador desconfia e paga menos.</li>
        <li><strong>Sinistro no histórico</strong> — carro com passagem por colisão grave ou enchente perde valor de forma acentuada e permanente.</li>
        <li><strong>Cor incomum ou pouco procurada</strong> — cores fora do padrão (branco, prata, preto) costumam desvalorizar mais rápido por terem menos demanda na revenda.</li>
        <li><strong>Modelo saindo de linha ou trocando de geração</strong> — o lançamento de uma versão nova reduz o valor de mercado da anterior.</li>
      </ArticleList>

      <ArticleH2>Fatores que desaceleram a desvalorização</ArticleH2>
      <ArticleList>
        <li>Modelos com alta demanda e pouca oferta no mercado de usados (fila de espera no 0km, por exemplo) seguram melhor o valor.</li>
        <li>Histórico completo de revisões na concessionária ou com nota fiscal documentada.</li>
        <li>Baixa quilometragem pra idade do carro.</li>
        <li>Marca/modelo com reputação consolidada de confiabilidade e baixo custo de manutenção.</li>
      </ArticleList>

      <ArticleCallout>
        Antes de comprar ou vender, confira o valor de mercado atual do
        modelo na nossa{" "}
        <Link href="/consulta-tabela-fipe" prefetch={false} className="underline">
          Consulta Tabela FIPE
        </Link>{" "}
        e simule o custo mensal completo — incluindo a depreciação — na{" "}
        <Link href="/calculadora-custo-de-posse" prefetch={false} className="underline">
          Calculadora do Custo Real de Posse
        </Link>
        .
      </ArticleCallout>
    </ArticleLayout>
  );
}
