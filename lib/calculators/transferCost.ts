export interface TransferCostInputs {
  taxaTransferencia: number;
  vistoria: number;
  reconhecimentoFirma: number;
  novasPlacas: number;
  despachante: number;
}

export interface TransferCostResult {
  total: number;
  breakdown: { label: string; value: number }[];
}

/** Soma simples dos custos de transferência de veículo (todos editáveis pelo usuário). */
export function computeTransferCost(
  inputs: TransferCostInputs
): TransferCostResult {
  const items: { label: string; value: number }[] = [
    { label: "Taxa de transferência (Detran)", value: inputs.taxaTransferencia },
    { label: "Vistoria", value: inputs.vistoria },
    { label: "Reconhecimento de firma", value: inputs.reconhecimentoFirma },
    { label: "Novas placas", value: inputs.novasPlacas },
    { label: "Despachante (opcional)", value: inputs.despachante },
  ];

  const total = items.reduce((sum, item) => sum + item.value, 0);

  return { total, breakdown: items };
}
