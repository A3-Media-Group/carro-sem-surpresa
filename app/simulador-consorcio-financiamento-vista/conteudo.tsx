import type { ToolContent } from "@/components/tools/ToolPage";

export const conteudo: ToolContent = {
  howItWorks: [
    "O simulador coloca lado a lado três formas de pagar o mesmo carro: à vista, financiado e por consórcio. A comparação é pelo custo total — quanto sai do seu bolso no fim — e não só pelo valor da parcela.",
    "No financiamento, a parcela segue a Tabela Price, com juros compostos sobre o saldo devedor. No consórcio não há juros: o custo vem da taxa de administração e do fundo de reserva, percentuais sobre o valor do bem diluídos nas parcelas.",
    "A diferença que os números não mostram é o tempo: no financiamento você sai com o carro na hora; no consórcio, só depois de ser contemplado por sorteio ou lance. O simulador assume a contemplação e não modela essa espera nem o reajuste da carta de crédito.",
  ],
  formula: [
    "à vista = preço do carro",
    "financiamento: parcela = PV × i ÷ (1 − (1 + i)^−n); total = parcela × n + entrada",
    "consórcio: total = preço × (1 + taxa de administração + fundo de reserva)",
    "consórcio: parcela = total ÷ prazo",
  ],
  example: [
    "Com os valores iniciais: carro de R$ 60.000 em 48 meses. À vista, R$ 60.000.",
    "Financiado com R$ 12.000 de entrada a 1,8% ao mês, a parcela fica em cerca de R$ 1.501,89 e o total chega a R$ 84.090,60.",
    "No consórcio, com 18% de taxa de administração e 2% de fundo de reserva, o total é R$ 60.000 × 1,20 = R$ 72.000, ou R$ 1.500 por mês — R$ 12.000 acima do preço à vista, mas sem garantia de quando o carro chega.",
  ],
  faq: [
    {
      question: "Consórcio não tem juros mesmo?",
      answer:
        "Não tem juros, mas tem custo: a taxa de administração e o fundo de reserva. Além disso, a carta de crédito costuma ser reajustada ao longo do plano, o que muda o valor das parcelas.",
    },
    {
      question: "Quando o consórcio faz sentido?",
      answer:
        "Para quem não precisa do carro agora e tem disciplina para pagar todo mês. Se o carro é necessário de imediato, a comparação justa é entre financiar e juntar o dinheiro para comprar à vista.",
    },
    {
      question: "O fundo de reserva é devolvido?",
      answer:
        "Em geral, o saldo não utilizado do fundo de reserva é devolvido aos participantes no encerramento do grupo, conforme o contrato. Confira as regras da administradora antes de assinar.",
    },
  ],
};
