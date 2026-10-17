import Link from "next/link";
import type { ToolContent } from "@/components/tools/ToolPage";

export const conteudo: ToolContent = {
  howItWorks: [
    "O simulador calcula a parcela pela Tabela Price, o sistema de parcelas fixas mais usado no financiamento de veículos no Brasil. Você informa o preço do carro, a entrada, a taxa de juros mensal e o número de parcelas.",
    "Além da parcela, ele mostra o total pago (entrada + todas as parcelas) e quanto desse total é só juros, em reais e em percentual do preço do carro. É a forma mais direta de ver o custo de financiar em vez de pagar à vista.",
    <>
      A taxa usada aqui é a de juros. O contrato real tem também tarifas,
      seguros e impostos, reunidos no Custo Efetivo Total. Entenda a
      diferença no guia sobre{" "}
      <Link href="/guias/cet-financiamento-veiculo">CET do financiamento</Link>
      .
    </>,
  ],
  formula: [
    "valor financiado (PV) = preço − entrada",
    "parcela = PV × i ÷ (1 − (1 + i)^−n)",
    "total pago = parcela × n + entrada",
    "juros = total pago − preço",
  ],
  formulaNote:
    "Na fórmula, i é a taxa mensal em decimal (1,8% = 0,018) e n é o número de parcelas. Com taxa zero, a parcela é simplesmente PV ÷ n.",
  example: [
    "Com os valores iniciais: carro de R$ 60.000, entrada de R$ 12.000, taxa de 1,8% ao mês e 48 parcelas. O valor financiado é R$ 48.000 e a parcela fica em cerca de R$ 1.501,89.",
    "As 48 parcelas somam R$ 72.090,60; com a entrada, o total pago é R$ 84.090,60. Os juros chegam a R$ 24.090,60 — cerca de 40% do preço do carro.",
  ],
  faq: [
    {
      question: "A taxa pré-preenchida é a taxa do meu banco?",
      answer:
        "Não. É uma estimativa de mercado editável. A taxa real depende do banco, do seu perfil de crédito, da entrada e do prazo. Peça a proposta por escrito e use a taxa dela no simulador.",
    },
    {
      question: "Vale mais a pena aumentar a entrada ou reduzir o prazo?",
      answer:
        "As duas coisas reduzem os juros totais. Simule os dois cenários: a entrada maior reduz o valor sobre o qual os juros incidem, e o prazo menor reduz o número de meses em que eles se acumulam, com parcela mais alta.",
    },
    {
      question: "O simulador calcula o CET?",
      answer:
        "Não. Ele usa só a taxa de juros. O CET inclui tarifas, seguros e impostos da operação e precisa ser informado pela instituição antes da contratação.",
    },
  ],
  sources: [
    {
      label: "Banco Central — comparação de juros e CET",
      url: "https://bcb.gov.br/detalhenoticia/232/noticia",
    },
  ],
};
