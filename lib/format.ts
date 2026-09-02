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

/** Formata uma data no formato "yyyy-mm-dd" por extenso em pt-BR (ex: "2 de setembro de 2026"). */
export function formatDateBR(iso: string): string {
  const date = new Date(`${iso}T00:00:00`);
  if (Number.isNaN(date.getTime())) return iso;
  return new Intl.DateTimeFormat("pt-BR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(date);
}
