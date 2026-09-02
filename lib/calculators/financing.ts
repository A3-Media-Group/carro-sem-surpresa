export interface FinancingInputs {
  vehiclePrice: number;
  downPayment: number;
  /** Taxa de juros, % ao mês. */
  monthlyRatePercent: number;
  installments: number;
}

export interface FinancingResult {
  financedAmount: number;
  installmentValue: number;
  totalPaid: number;
  totalInterest: number;
  /** Quanto os juros representam sobre o valor do carro, em %. */
  interestAsPercentOfPrice: number;
}

/**
 * Simula o financiamento pela Tabela Price (sistema de amortização mais
 * usado no financiamento de veículos no Brasil): parcelas fixas, juros
 * compostos sobre o saldo devedor.
 *
 * PMT = PV × i / (1 - (1 + i)^-n)
 * onde PV = valor financiado, i = taxa mensal (decimal), n = parcelas.
 */
export function computeFinancing(inputs: FinancingInputs): FinancingResult {
  const { vehiclePrice, downPayment, monthlyRatePercent, installments } =
    inputs;

  const financedAmount = Math.max(vehiclePrice - downPayment, 0);
  const i = monthlyRatePercent / 100;

  let installmentValue = 0;
  if (installments > 0) {
    installmentValue =
      i === 0
        ? financedAmount / installments
        : (financedAmount * i) / (1 - Math.pow(1 + i, -installments));
  }

  const totalPaid = installmentValue * installments + downPayment;
  const totalInterest = totalPaid - vehiclePrice;
  const interestAsPercentOfPrice =
    vehiclePrice > 0 ? (totalInterest / vehiclePrice) * 100 : 0;

  return {
    financedAmount,
    installmentValue,
    totalPaid,
    totalInterest,
    interestAsPercentOfPrice,
  };
}
