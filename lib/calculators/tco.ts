import {
  FuelType,
  defaultAnnualDepreciationRate,
  ridehailingPricePerKm,
} from "../config";

/**
 * Custo médio de manutenção preventiva por km rodado, usado como
 * estimativa simplificada aqui na Calculadora de Custo de Posse (soma
 * óleo, filtros, pastilhas etc. diluído por km, sem depender de
 * categoria de veículo). A Etapa 3 (Simulador de Manutenção) detalha
 * isso por categoria e km atual — aqui é só uma média nacional para
 * compor o gráfico de proporção de custos.
 */
export const defaultMaintenanceCostPerKm = 0.12; // R$/km

export interface TcoInputs {
  /** Valor do veículo (R$) — também usado como proxy do valor FIPE. */
  vehicleValue: number;
  /** Alíquota de IPVA do estado, em % ao ano (ex: 4 = 4%). */
  ipvaRate: number;
  kmPerMonth: number;
  fuelType: FuelType;
  /** km/L (combustíveis líquidos) ou km/kWh (elétrico). */
  fuelConsumption: number;
  /** R$/L ou R$/kWh, conforme o tipo de combustível. */
  fuelPrice: number;
  /** % ao ano sobre o valor do veículo, estimativa de seguro. */
  insuranceRateOverValue: number;
  parkingTollsPerMonth: number;
}

export interface TcoBreakdownItem {
  label: string;
  monthlyValue: number;
}

export interface TcoResult {
  depreciationMonthly: number;
  ipvaMonthly: number;
  insuranceMonthly: number;
  fuelMonthly: number;
  maintenanceMonthly: number;
  parkingTollsMonthly: number;
  totalMonthly: number;
  costPerKm: number;
  /** Proporção de custos para o gráfico de barras: Depreciação, IPVA, Seguro, Combustível, Manutenção. */
  breakdown: TcoBreakdownItem[];
  /** Custo mensal estimado de rodar a mesma km em apps de transporte. */
  rideHailingMonthly: number;
  /** totalMonthly - rideHailingMonthly. Positivo = ter o carro sai mais caro que o app. */
  rideHailingDiffMonthly: number;
}

/**
 * Calcula o custo real de posse (TCO) mensal de um carro.
 *
 * Fórmulas (todas em base mensal, convertidas de taxas anuais quando aplicável):
 * - Depreciação = valorVeículo × taxaDepreciaçãoAnual / 12
 * - IPVA = valorVeículo × aliquotaIPVA / 12
 * - Seguro = valorVeículo × %seguroAnual / 12
 * - Combustível = (kmPorMês / consumoMédio) × preçoCombustível
 * - Manutenção = kmPorMês × custoManutençãoPorKm
 * - Estacionamento/pedágio = valor informado diretamente
 *
 * Comparativo carro próprio vs. app de transporte: multiplica a mesma
 * km rodada no mês pelo preço médio por km de apps (configurável em
 * `lib/config.ts`). É uma aproximação simples — não considera custos
 * indiretos como tempo de espera ou disponibilidade de carro.
 */
export function computeTco(inputs: TcoInputs): TcoResult {
  const {
    vehicleValue,
    ipvaRate,
    kmPerMonth,
    fuelConsumption,
    fuelPrice,
    insuranceRateOverValue,
    parkingTollsPerMonth,
  } = inputs;

  const depreciationMonthly =
    (vehicleValue * defaultAnnualDepreciationRate) / 12;
  const ipvaMonthly = (vehicleValue * (ipvaRate / 100)) / 12;
  const insuranceMonthly =
    (vehicleValue * (insuranceRateOverValue / 100)) / 12;
  const fuelMonthly =
    fuelConsumption > 0 ? (kmPerMonth / fuelConsumption) * fuelPrice : 0;
  const maintenanceMonthly = kmPerMonth * defaultMaintenanceCostPerKm;
  const parkingTollsMonthly = parkingTollsPerMonth;

  const totalMonthly =
    depreciationMonthly +
    ipvaMonthly +
    insuranceMonthly +
    fuelMonthly +
    maintenanceMonthly +
    parkingTollsMonthly;

  const costPerKm = kmPerMonth > 0 ? totalMonthly / kmPerMonth : 0;

  const rideHailingMonthly = kmPerMonth * ridehailingPricePerKm;
  const rideHailingDiffMonthly = totalMonthly - rideHailingMonthly;

  return {
    depreciationMonthly,
    ipvaMonthly,
    insuranceMonthly,
    fuelMonthly,
    maintenanceMonthly,
    parkingTollsMonthly,
    totalMonthly,
    costPerKm,
    breakdown: [
      { label: "Depreciação", monthlyValue: depreciationMonthly },
      { label: "IPVA", monthlyValue: ipvaMonthly },
      { label: "Seguro", monthlyValue: insuranceMonthly },
      { label: "Combustível", monthlyValue: fuelMonthly },
      { label: "Manutenção", monthlyValue: maintenanceMonthly },
    ],
    rideHailingMonthly,
    rideHailingDiffMonthly,
  };
}
