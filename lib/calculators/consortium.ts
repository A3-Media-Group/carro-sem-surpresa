export interface ConsortiumInputs {
  vehiclePrice: number;
  /** % total sobre o valor do bem, diluído no prazo (não é juros composto). */
  administrationFeePercent: number;
  /** % total sobre o valor do bem, diluído no prazo. */
  reserveFundPercent: number;
  installments: number;
}

export interface ConsortiumResult {
  installmentValue: number;
  totalPaid: number;
  /** totalPaid - vehiclePrice: quanto o consórcio custa além do valor do bem. */
  extraCost: number;
}

/**
 * Simula um consórcio de veículo: sem juros compostos, só taxa de
 * administração + fundo de reserva diluídos igualmente nas parcelas.
 *
 * parcela = valorDoBem × (1 + %admin/100 + %reserva/100) / prazo
 *
 * Não modela o tempo de contemplação (sorteio ou lance) — assume que
 * você já foi contemplado e está pagando as parcelas normais.
 */
export function computeConsortium(inputs: ConsortiumInputs): ConsortiumResult {
  const {
    vehiclePrice,
    administrationFeePercent,
    reserveFundPercent,
    installments,
  } = inputs;

  const totalFactor = 1 + (administrationFeePercent + reserveFundPercent) / 100;
  const totalPaid = vehiclePrice * totalFactor;
  const installmentValue = installments > 0 ? totalPaid / installments : 0;
  const extraCost = totalPaid - vehiclePrice;

  return { installmentValue, totalPaid, extraCost };
}
