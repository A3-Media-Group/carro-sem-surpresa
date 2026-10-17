import type { ToolContent } from "@/components/tools/ToolPage";

export const conteudo: ToolContent = {
  howItWorks: [
    "Escolha a categoria do carro (popular, sedã, SUV, premium ou elétrico) e informe a quilometragem atual. Para cada item — troca de óleo e filtro, correia dentada, amortecedores e pneus — o simulador calcula em que quilometragem cai a próxima troca preventiva e quanto falta até lá.",
    "Ao lado, ele compara o custo médio de fazer o preventivo com o custo estimado do reparo quando o item falha (o corretivo). A diferença é o que você arrisca ao adiar a manutenção.",
    "Os intervalos e valores são médias de mercado por categoria. O manual do seu carro manda: se ele indicar outro intervalo, siga o manual.",
  ],
  formula: [
    "próxima troca (km) = (piso(km atual ÷ intervalo) + 1) × intervalo",
    "km restantes = próxima troca − km atual",
    "vencendo = km restantes ≤ 5% do intervalo",
    "economia = custo corretivo − custo preventivo",
  ],
  example: [
    "Com os valores iniciais — carro popular com 30.000 km — a troca de óleo tem intervalo de 10.000 km. A próxima cai em 40.000 km, ou seja, faltam 10.000 km.",
    "O preventivo custa em média R$ 250; um motor danificado por falta de óleo pode custar R$ 3.500. Fazer a troca em dia evita um risco de R$ 3.250. Na correia dentada (intervalo de 60.000 km), faltam 30.000 km, e a diferença entre R$ 800 de troca e R$ 6.000 de reparo é ainda maior.",
  ],
  faq: [
    {
      question: "Por que alguns itens não aparecem para carro elétrico?",
      answer:
        "Porque não existem nele: carros elétricos não têm motor a combustão, então não há troca de óleo do motor nem correia dentada. Pneus e amortecedores continuam valendo.",
    },
    {
      question: "Os custos são orçamentos?",
      answer:
        "Não. São médias nacionais aproximadas de peça e mão de obra. O valor varia por região, modelo e oficina; use como referência para saber se um orçamento está muito fora do razoável.",
    },
    {
      question: "Fazer a revisão fora da concessionária tira a garantia?",
      answer:
        "Não automaticamente. O que a garantia pode exigir é que a manutenção siga o plano do fabricante, com peças adequadas e comprovação. Veja o guia sobre revisão fora da concessionária para os detalhes.",
    },
  ],
};
