export interface FuelComparisonInputs {
  gasolinaPrice: number; // R$/L
  etanolPrice: number; // R$/L
  gasolinaConsumption: number; // km/L
  etanolConsumption: number; // km/L
  kmPerMonth: number;
}

export interface FuelComparisonResult {
  costPerKmGasolina: number;
  costPerKmEtanol: number;
  cheaper: "gasolina" | "etanol" | "empate";
  /** Diferença de custo por km entre os dois (sempre positiva). */
  costPerKmDifference: number;
  /** Economia mensal estimada escolhendo o combustível mais barato. */
  monthlySavings: number;
  /**
   * Razão de equivalência real do carro: etanol compensa quando o preço
   * dele for até essa fração do preço da gasolina. A "regra dos 70%" que
   * todo mundo usa é só uma média de mercado — essa conta usa o consumo
   * real informado pelo usuário, carro por carro.
   */
  breakEvenRatio: number;
  /** (preçoEtanol / preçoGasolina) atual, pra comparar com o breakEvenRatio. */
  actualPriceRatio: number;
}

/**
 * Compara o custo por km de rodar com etanol vs. gasolina, usando o
 * consumo real de cada combustível informado pelo usuário (em vez da
 * "regra dos 70%" genérica, que é só uma média nacional).
 *
 * Custo por km = preço do litro / consumo (km/L).
 * O ponto de equilíbrio (breakEvenRatio) é a razão consumoEtanol/consumoGasolina:
 * abaixo dela, o etanol compensa; acima, a gasolina compensa.
 */
export function computeFuelComparison(
  inputs: FuelComparisonInputs
): FuelComparisonResult {
  const {
    gasolinaPrice,
    etanolPrice,
    gasolinaConsumption,
    etanolConsumption,
    kmPerMonth,
  } = inputs;

  const costPerKmGasolina =
    gasolinaConsumption > 0 ? gasolinaPrice / gasolinaConsumption : 0;
  const costPerKmEtanol =
    etanolConsumption > 0 ? etanolPrice / etanolConsumption : 0;

  const costPerKmDifference = Math.abs(costPerKmGasolina - costPerKmEtanol);
  const monthlySavings = costPerKmDifference * kmPerMonth;

  let cheaper: FuelComparisonResult["cheaper"] = "empate";
  if (costPerKmGasolina < costPerKmEtanol) cheaper = "gasolina";
  else if (costPerKmEtanol < costPerKmGasolina) cheaper = "etanol";

  const breakEvenRatio =
    gasolinaConsumption > 0 ? etanolConsumption / gasolinaConsumption : 0;
  const actualPriceRatio = gasolinaPrice > 0 ? etanolPrice / gasolinaPrice : 0;

  return {
    costPerKmGasolina,
    costPerKmEtanol,
    cheaper,
    costPerKmDifference,
    monthlySavings,
    breakEvenRatio,
    actualPriceRatio,
  };
}
