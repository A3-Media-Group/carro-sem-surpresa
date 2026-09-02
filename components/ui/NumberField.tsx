"use client";

import { useId } from "react";

interface NumberFieldProps {
  label: string;
  value: number;
  onChange: (value: number) => void;
  suffix?: string;
  hint?: string;
  min?: number;
  step?: number | string;
}

/** Input numérico simples (km, %, consumo etc.), com sufixo opcional (ex: "km/L"). */
export function NumberField({
  label,
  value,
  onChange,
  suffix,
  hint,
  min = 0,
  step = "any",
}: NumberFieldProps) {
  const id = useId();

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const raw = e.target.value;
    onChange(raw === "" ? 0 : Number(raw));
  }

  return (
    <label htmlFor={id} className="block text-sm font-medium text-neutral-700">
      {label}
      <div className="mt-1 flex items-center">
        <input
          id={id}
          type="number"
          inputMode="decimal"
          min={min}
          step={step}
          value={value === 0 ? "" : value}
          placeholder="0"
          onChange={handleChange}
          className="h-11 w-full rounded-md border border-neutral-300 px-3 text-base focus:border-brand-orange focus:outline-none focus:ring-1 focus:ring-brand-orange"
        />
        {suffix && (
          <span className="ml-2 shrink-0 text-sm text-neutral-500">
            {suffix}
          </span>
        )}
      </div>
      {hint && (
        <span className="mt-1 block text-xs font-normal text-neutral-500">
          {hint}
        </span>
      )}
    </label>
  );
}
