export interface FuelEfficiencyInputs {
  kmRodado: number;
  litrosAbastecidos: number;
  precoCombustivel: number;
}

export interface FuelEfficiencyResult {
  kmPorLitro: number;
  custoPorKm: number;
}

/** Consumo real = km rodado ÷ litros abastecidos no mesmo período/tanque. */
export function computeFuelEfficiency(
  inputs: FuelEfficiencyInputs
): FuelEfficiencyResult {
  const { kmRodado, litrosAbastecidos, precoCombustivel } = inputs;

  const kmPorLitro = litrosAbastecidos > 0 ? kmRodado / litrosAbastecidos : 0;
  const custoPorKm = kmRodado > 0 ? (litrosAbastecidos * precoCombustivel) / kmRodado : 0;

  return { kmPorLitro, custoPorKm };
}
