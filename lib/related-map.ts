/**
 * Ligações "hub e spoke" entre ferramentas e guias: cada ferramenta
 * aponta para 2–3 guias que explicam o tema, e cada guia aponta de
 * volta para 2–3 ferramentas. A lista guia → ferramentas é derivada
 * desta, então basta manter este mapa (tests/related.test.mjs garante
 * os limites). Sem imports, para o teste ler direto pelo Node.
 */
export const TOOL_GUIDES: Record<string, string[]> = {
  "/calculadora-custo-viagem": [
    "/guias/como-calcular-gasto-viagem-carro",
    "/guias/etanol-ou-gasolina-consumo-real",
    "/guias/reduzir-custo-por-km-rodado",
  ],
  "/checklist-carro-usado": [
    "/guias/checklist-comprar-carro-usado",
    "/guias/consultar-recall-e-restricoes",
    "/guias/carro-com-sinistro-vale-a-pena-comprar",
  ],
  "/calculadora-custo-de-posse": [
    "/guias/como-calcular-se-carro-cabe-no-orcamento",
    "/guias/quanto-o-carro-desvaloriza-por-ano",
    "/guias/faq-custo-de-carro",
  ],
  "/manutencao-preventiva-vs-corretiva": [
    "/guias/revisao-fora-da-concessionaria-perde-garantia",
    "/guias/carro-eletrico-ou-hibrido-custo-de-manutencao",
    "/guias/reduzir-custo-por-km-rodado",
  ],
  "/gerador-recibo-veiculo": [
    "/guias/checklist-comprar-carro-usado",
    "/guias/consultar-recall-e-restricoes",
    "/guias/carro-0km-ou-seminovo",
  ],
  "/tabela-ipva-por-estado": [
    "/guias/ipva-atrasado-multa-e-como-regularizar",
    "/guias/licenciamento-atrasado-multa",
    "/guias/faq-custo-de-carro",
  ],
  "/calculadora-alcool-ou-gasolina": [
    "/guias/etanol-ou-gasolina-consumo-real",
    "/guias/reduzir-custo-por-km-rodado",
    "/guias/como-calcular-gasto-viagem-carro",
  ],
  "/simulador-financiamento-veiculo": [
    "/guias/cet-financiamento-veiculo",
    "/guias/como-calcular-se-carro-cabe-no-orcamento",
    "/guias/assinatura-de-carro-vs-financiamento-vs-a-vista",
  ],
  "/tabela-multas-transito": [
    "/guias/licenciamento-atrasado-multa",
    "/guias/ipva-atrasado-multa-e-como-regularizar",
  ],
  "/consulta-tabela-fipe": [
    "/guias/quanto-o-carro-desvaloriza-por-ano",
    "/guias/carro-0km-ou-seminovo",
    "/guias/seguro-auto-vale-a-pena",
  ],
  "/simulador-consorcio-financiamento-vista": [
    "/guias/assinatura-de-carro-vs-financiamento-vs-a-vista",
    "/guias/cet-financiamento-veiculo",
    "/guias/como-calcular-se-carro-cabe-no-orcamento",
  ],
  "/calculadora-custo-transferencia-veiculo": [
    "/guias/checklist-comprar-carro-usado",
    "/guias/consultar-recall-e-restricoes",
    "/guias/carro-com-sinistro-vale-a-pena-comprar",
  ],
  "/calculadora-consumo-medio": [
    "/guias/etanol-ou-gasolina-consumo-real",
    "/guias/reduzir-custo-por-km-rodado",
    "/guias/como-calcular-gasto-viagem-carro",
  ],
  "/diagnostico-de-problemas-do-carro": [
    "/guias/revisao-fora-da-concessionaria-perde-garantia",
    "/guias/carro-eletrico-ou-hibrido-custo-de-manutencao",
    "/guias/carro-com-sinistro-vale-a-pena-comprar",
  ],
};

/** Guias que nenhuma ferramenta cita o bastante recebem um reforço aqui. */
export const EXTRA_GUIDE_TOOLS: Record<string, string[]> = {
  "/guias/seguro-auto-vale-a-pena": ["/calculadora-custo-de-posse"],
};

