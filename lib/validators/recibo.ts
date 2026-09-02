import type { ReciboData } from "../pdf/recibo";

export type ReciboErrors = Partial<Record<keyof ReciboData, string>>;

/** Validação básica dos campos obrigatórios do recibo, antes de liberar o "Gerar PDF". */
export function validateRecibo(data: ReciboData): {
  isValid: boolean;
  errors: ReciboErrors;
} {
  const errors: ReciboErrors = {};

  if (!data.vendedorNome.trim())
    errors.vendedorNome = "Informe o nome do vendedor.";
  if (!data.vendedorDocumento.trim())
    errors.vendedorDocumento = "Informe o CPF/CNPJ do vendedor.";
  if (!data.compradorNome.trim())
    errors.compradorNome = "Informe o nome do comprador.";
  if (!data.compradorDocumento.trim())
    errors.compradorDocumento = "Informe o CPF/CNPJ do comprador.";
  if (!data.veiculoMarcaModelo.trim())
    errors.veiculoMarcaModelo = "Informe a marca/modelo do veículo.";
  if (!data.veiculoPlaca.trim())
    errors.veiculoPlaca = "Informe a placa do veículo.";
  if (!data.veiculoRenavam.trim())
    errors.veiculoRenavam = "Informe o Renavam.";
  if (!data.valor || data.valor <= 0)
    errors.valor = "Informe o valor da venda.";
  if (!data.dataTransacao) errors.dataTransacao = "Informe a data da venda.";

  return { isValid: Object.keys(errors).length === 0, errors };
}
