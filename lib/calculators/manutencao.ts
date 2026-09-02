import manutencaoData from "../data/manutencao.json";

export type CategoriaVeiculo = (typeof manutencaoData.categorias)[number]["id"];

export interface ManutencaoItemResult {
  id: string;
  nome: string;
  aplicavel: boolean;
  motivo?: string;
  descricaoCorretivo?: string;
  /** Próximo km em que a revisão preventiva deveria acontecer. */
  proximaTrocaKm?: number;
  /** Quantos km faltam a partir do km atual informado (pode ser 0 se já venceu). */
  kmRestantes?: number;
  /** Se o km atual já passou do km ideal da próxima troca preventiva. */
  vencido?: boolean;
  custoPreventivo?: number;
  custoCorretivo?: number;
  /** custoCorretivo - custoPreventivo: quanto custa "arriscar" em vez de fazer preventivo. */
  economiaFazendoPreventivo?: number;
}

/**
 * Para cada item de manutenção do dataset, calcula a próxima troca
 * preventiva a partir do km atual informado (o próximo múltiplo do
 * intervalo de troca daquele item/categoria) e compara o custo de fazer
 * preventivo com o custo estimado se o problema virar corretivo.
 */
export function computeManutencao(
  categoria: CategoriaVeiculo,
  kmAtual: number
): ManutencaoItemResult[] {
  return manutencaoData.itens.map((item) => {
    const porCategoria = item.porCategoria as Record<
      string,
      {
        aplicavel: boolean;
        motivo?: string;
        intervaloKm?: number;
        custoPreventivo?: number;
        custoCorretivo?: number;
      }
    >;
    const config = porCategoria[categoria];

    if (!config || !config.aplicavel) {
      return {
        id: item.id,
        nome: item.nome,
        aplicavel: false,
        motivo: config?.motivo,
      };
    }

    const { intervaloKm, custoPreventivo, custoCorretivo } = config;
    const safeKmAtual = Math.max(kmAtual, 0);
    const proximaTrocaKm =
      intervaloKm && intervaloKm > 0
        ? (Math.floor(safeKmAtual / intervaloKm) + 1) * intervaloKm
        : undefined;
    const kmRestantes =
      proximaTrocaKm !== undefined
        ? Math.max(proximaTrocaKm - safeKmAtual, 0)
        : undefined;
    // Considera "vencido" quando faltam poucos km (dentro de 5% do
    // intervalo) — na prática, hora de agendar a revisão.
    const vencido =
      intervaloKm !== undefined && kmRestantes !== undefined
        ? kmRestantes <= intervaloKm * 0.05
        : undefined;

    return {
      id: item.id,
      nome: item.nome,
      aplicavel: true,
      descricaoCorretivo: item.descricaoCorretivo,
      proximaTrocaKm,
      kmRestantes,
      vencido,
      custoPreventivo,
      custoCorretivo,
      economiaFazendoPreventivo:
        custoCorretivo !== undefined && custoPreventivo !== undefined
          ? custoCorretivo - custoPreventivo
          : undefined,
    };
  });
}
