import { NEW_GUIDES } from "./new-guides";
export const GUIDES = [
  {
    href: "/guias/como-calcular-se-carro-cabe-no-orcamento",
    titulo: "Como Calcular se um Carro Cabe no Seu Orçamento",
    resumo:
      "A regra dos 20% da renda, passo a passo, pra evitar o aperto no orçamento depois da compra.",
  },
  {
    href: "/guias/reduzir-custo-por-km-rodado",
    titulo: "5 Formas de Reduzir o Custo por Quilômetro Rodado",
    resumo:
      "O gasto escondido do dia a dia: hábitos simples que baixam o custo por km sem trocar de carro.",
  },
  {
    href: "/guias/faq-custo-de-carro",
    titulo: "FAQ: Perguntas Frequentes Sobre o Custo de um Carro",
    resumo:
      "Depreciação no primeiro ano, manutenção de elétrico e isenção de IPVA — direto ao ponto.",
  },
  {
    href: "/guias/checklist-comprar-carro-usado",
    titulo: "Comprar Carro Usado: Checklist Completo Antes de Fechar Negócio",
    resumo:
      "16 pontos pra checar antes de assinar qualquer coisa — documentação, lataria, test-drive e vistoria.",
  },
  {
    href: "/guias/carro-0km-ou-seminovo",
    titulo: "0km ou Seminovo: Qual Vale Mais a Pena",
    resumo:
      "A resposta muda de acordo com quanto tempo você fica com o carro e quanto roda por mês.",
  },
  {
    href: "/guias/seguro-auto-vale-a-pena",
    titulo: "Seguro Auto: Vale a Pena, Como Funciona e Quanto Custa",
    resumo:
      "O que define o preço da apólice, franquia alta vs. reduzida, e quando faz sentido não ter completo.",
  },
  {
    href: "/guias/carro-com-sinistro-vale-a-pena-comprar",
    titulo: "Carro com Sinistro (Batido): Riscos de Comprar e Como Verificar",
    resumo:
      "O desconto no preço não é generosidade — é o preço do risco que está sendo repassado a você.",
  },
  {
    href: "/guias/ipva-atrasado-multa-e-como-regularizar",
    titulo: "IPVA Atrasado: Multa, Juros e Como Regularizar",
    resumo:
      "Entenda encargos estaduais, cobrança e a relação entre IPVA e licenciamento.",
  },
  {
    href: "/guias/licenciamento-atrasado-multa",
    titulo: "Licenciamento Atrasado: Multa e o que Acontece",
    resumo:
      "Entenda a diferença entre atrasar o pagamento e circular sem licenciamento válido.",
  },
  {
    href: "/guias/assinatura-de-carro-vs-financiamento-vs-a-vista",
    titulo: "Assinatura de Carro vs. Financiamento vs. à Vista",
    resumo:
      "Um jeito de ter carro sem ser dono de nada — veja quando isso compensa e quando não compensa.",
  },
  {
    href: "/guias/carro-eletrico-ou-hibrido-custo-de-manutencao",
    titulo: "Carro Elétrico ou Híbrido: o Custo Real de Manutenção Compensa?",
    resumo:
      "Menos peça pra trocar, mas a conta muda se a bateria sair da garantia.",
  },
  {
    href: "/guias/revisao-fora-da-concessionaria-perde-garantia",
    titulo: "Revisão Fora da Concessionária Perde a Garantia?",
    resumo:
      "O que diz o Código de Defesa do Consumidor — e o que a concessionária não te conta.",
  },
  {
    href: "/guias/quanto-o-carro-desvaloriza-por-ano",
    titulo: "Quanto o Carro Desvaloriza por Ano: Tabela de Depreciação",
    resumo:
      "O gasto que ninguém vê saindo da conta, mas que corrói o patrimônio todo mês.",
  },
  ...NEW_GUIDES.map((g) => ({
    href: `/guias/${g.slug}`,
    titulo: g.title,
    resumo: g.description,
  })),
];
