"use client";

import { useId } from "react";
import { formatBRL } from "@/lib/format";

interface CurrencyInputProps {
  label: string;
  value: number;
  onChange: (value: number) => void;
  hint?: string;
}

/**
 * Input de valor em reais com máscara de moeda: o usuário digita apenas
 * números (tratados como centavos) e o campo sempre mostra o valor
 * formatado com Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).
 */
export function CurrencyInput({
  label,
  value,
  onChange,
  hint,
}: CurrencyInputProps) {
  const id = useId();
  const displayValue = formatBRL(value);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const digitsOnly = e.target.value.replace(/\D/g, "");
    const cents = digitsOnly ? parseInt(digitsOnly, 10) : 0;
    onChange(cents / 100);
  }

  return (
    <label htmlFor={id} className="block text-sm font-medium text-neutral-700">
      {label}
      <input
        id={id}
        type="text"
        inputMode="numeric"
        value={displayValue}
        onChange={handleChange}
        className="mt-1 block h-11 w-full rounded-md border border-neutral-300 px-3 text-base focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500"
      />
      {hint && (
        <span className="mt-1 block text-xs font-normal text-neutral-500">
          {hint}
        </span>
      )}
    </label>
  );
}
