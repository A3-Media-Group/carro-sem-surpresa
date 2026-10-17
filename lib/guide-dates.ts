/**
 * Datas reais de cada guia, tiradas do histórico do git: `published` é
 * o commit que criou a página; `modified`, o último commit que mudou o
 * texto do artigo (ajustes só de metadados ou quebra de linha não
 * contam). Ao editar o conteúdo de um guia, atualize `modified` aqui —
 * ela alimenta o schema Article e a data exibida na página.
 */
export const GUIDE_DATES: Record<string, { published: string; modified: string }> = {
  "/guias/assinatura-de-carro-vs-financiamento-vs-a-vista": { published: "2026-09-05", modified: "2026-09-05" },
  "/guias/carro-0km-ou-seminovo": { published: "2026-09-05", modified: "2026-09-05" },
  "/guias/carro-com-sinistro-vale-a-pena-comprar": { published: "2026-09-05", modified: "2026-09-05" },
  "/guias/carro-eletrico-ou-hibrido-custo-de-manutencao": { published: "2026-09-05", modified: "2026-09-05" },
  "/guias/cet-financiamento-veiculo": { published: "2026-09-13", modified: "2026-09-13" },
  "/guias/checklist-comprar-carro-usado": { published: "2026-09-05", modified: "2026-09-05" },
  "/guias/como-calcular-gasto-viagem-carro": { published: "2026-09-13", modified: "2026-09-13" },
  "/guias/como-calcular-se-carro-cabe-no-orcamento": { published: "2026-09-02", modified: "2026-09-02" },
  "/guias/consultar-recall-e-restricoes": { published: "2026-09-13", modified: "2026-09-13" },
  "/guias/etanol-ou-gasolina-consumo-real": { published: "2026-09-13", modified: "2026-09-13" },
  "/guias/faq-custo-de-carro": { published: "2026-09-02", modified: "2026-09-13" },
  "/guias/ipva-atrasado-multa-e-como-regularizar": { published: "2026-09-05", modified: "2026-09-13" },
  "/guias/licenciamento-atrasado-multa": { published: "2026-09-05", modified: "2026-09-13" },
  "/guias/quanto-o-carro-desvaloriza-por-ano": { published: "2026-09-05", modified: "2026-09-05" },
  "/guias/reduzir-custo-por-km-rodado": { published: "2026-09-02", modified: "2026-09-02" },
  "/guias/revisao-fora-da-concessionaria-perde-garantia": { published: "2026-09-05", modified: "2026-09-05" },
  "/guias/seguro-auto-vale-a-pena": { published: "2026-09-05", modified: "2026-09-05" },
};
