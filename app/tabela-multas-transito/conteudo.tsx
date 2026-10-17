import type { ToolContent } from "@/components/tools/ToolPage";

export const conteudo: ToolContent = {
  howItWorks: [
    "A tabela lista as infrações de trânsito mais comuns com valor da multa, natureza e pontos na CNH. Busque pela descrição da infração ou pela natureza (leve, média, grave ou gravíssima).",
    "Os valores são nacionais, definidos pelo Código de Trânsito Brasileiro — diferentemente do IPVA, não mudam de estado para estado. Algumas infrações gravíssimas têm um multiplicador sobre o valor-base, que aparece na própria tabela.",
    "Itens marcados como “confirmar” têm a classificação mais comum, mas o enquadramento pode variar conforme a autuação. Confira sempre a notificação oficial antes de pagar ou recorrer.",
  ],
  formula: [
    "leve: R$ 88,38 · 3 pontos",
    "média: R$ 130,16 · 4 pontos",
    "grave: R$ 195,23 · 5 pontos",
    "gravíssima: R$ 293,47 · 7 pontos",
    "multa com multiplicador = valor-base da natureza × fator",
  ],
  formulaNote:
    "Valores-base do art. 258 do CTB. Dirigir sob efeito de álcool, por exemplo, aplica fator 10 sobre a gravíssima.",
  example: [
    "Uma infração gravíssima sem multiplicador custa R$ 293,47 e soma 7 pontos. Dirigir sob efeito de álcool aplica o fator 10: R$ 293,47 × 10 = R$ 2.934,70, além da suspensão do direito de dirigir por 12 meses.",
    "Com o desconto de 40% — para quem adere ao Sistema de Notificação Eletrônica e não recorre — a gravíssima simples sai por cerca de R$ 176,08.",
  ],
  faq: [
    {
      question: "O valor da multa muda de estado para estado?",
      answer:
        "Não. Os valores são fixados pelo Código de Trânsito Brasileiro e valem em todo o país. O que varia é o órgão autuador e os canais de pagamento e recurso.",
    },
    {
      question: "Posso pagar a multa com desconto?",
      answer:
        "Sim. O CTB prevê desconto para pagamento antecipado de quem não apresenta defesa ou recurso; o percentual depende de como você recebe e trata a notificação. Confira o valor com desconto indicado na própria notificação.",
    },
    {
      question: "Com quantos pontos a CNH é suspensa?",
      answer:
        "O limite em 12 meses é de 20 pontos se houver duas ou mais infrações gravíssimas no período, 30 pontos se houver uma, e 40 pontos se não houver nenhuma. Motoristas profissionais têm regra própria.",
    },
  ],
  sources: [
    {
      label: "Código de Trânsito Brasileiro (Lei 9.503/1997)",
      url: "https://www.planalto.gov.br/ccivil_03/leis/l9503compilado.htm",
    },
  ],
};
