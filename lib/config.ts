/**
 * Config central do "Carro Sem Surpresa".
 *
 * Valores padrão usados como pré-preenchimento nas calculadoras — o
 * usuário sempre pode editar na hora de calcular. Manter tudo aqui
 * separado da lógica das calculadoras (lib/calculators/*) permite
 * atualizar preços/percentuais sem mexer em nenhuma fórmula.
 *
 * Referência de atualização: 2026-09. Preços de combustível variam por
 * região e ao longo do ano — revisar periodicamente.
 */

export const fuelPrices = {
  gasolina: 6.15, // R$/L, média nacional aproximada
  etanol: 4.35, // R$/L
  diesel: 6.35, // R$/L
  eletrico: 0.75, // R$/kWh, tarifa residencial média
} as const;

export type FuelType = keyof typeof fuelPrices;

export const fuelLabels: Record<FuelType, string> = {
  gasolina: "Gasolina",
  etanol: "Etanol",
  diesel: "Diesel",
  eletrico: "Elétrico (kWh)",
};

/** % ao ano do valor FIPE do veículo, usado como estimativa padrão de seguro anual. */
export const defaultInsuranceRateOverFipe = 0.045; // 4,5% ao ano

/**
 * Preço médio por km cobrado por apps de transporte (ex: Uber/99), usado
 * no comparativo "carro próprio vs. app de transporte" da Etapa 2.
 * Fórmula do comparativo: custoAppMensal = kmRodadosPorMes * ridehailingPricePerKm.
 */
export const ridehailingPricePerKm = 2.3; // R$/km, estimativa média em capitais

/** % de depreciação anual padrão sobre o valor do veículo (curva simplificada). */
export const defaultAnnualDepreciationRate = 0.12; // 12% ao ano

/**
 * Taxa de juros mensal padrão pré-preenchida no simulador de
 * financiamento — estimativa de mercado para financiamento de veículo
 * no Brasil, editável na hora de simular. A taxa real varia bastante
 * por banco, score de crédito e prazo; sempre confirme com o seu banco.
 */
export const defaultFinancingMonthlyRatePercent = 1.8; // % ao mês
