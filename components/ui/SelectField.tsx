"use client";

import { useId } from "react";

interface SelectOption {
  value: string;
  label: string;
}

interface SelectFieldProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: SelectOption[];
  hint?: string;
}

export function SelectField({
  label,
  value,
  onChange,
  options,
  hint,
}: SelectFieldProps) {
  const id = useId();

  return (
    <label htmlFor={id} className="block text-sm font-medium text-neutral-700">
      {label}
      <select
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-1 block h-11 w-full rounded-md border border-neutral-300 bg-white px-3 text-base focus:border-brand-orange focus:outline-none focus:ring-1 focus:ring-brand-orange"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {hint && (
        <span className="mt-1 block text-xs font-normal text-neutral-500">
          {hint}
        </span>
      )}
    </label>
  );
}
