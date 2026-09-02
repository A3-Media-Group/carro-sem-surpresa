/** Helpers de formatação no padrão brasileiro (pt-BR), usados em todas as ferramentas. */

export function formatBRL(value: number): string {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(Number.isFinite(value) ? value : 0);
}

export function formatNumber(
  value: number,
  options?: Intl.NumberFormatOptions
): string {
  return new Intl.NumberFormat("pt-BR", options).format(
    Number.isFinite(value) ? value : 0
  );
}
