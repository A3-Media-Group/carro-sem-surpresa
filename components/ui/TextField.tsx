"use client";

import { useId } from "react";

interface TextFieldProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  onBlur?: () => void;
  placeholder?: string;
  required?: boolean;
  error?: string;
  type?: "text" | "date";
}

export function TextField({
  label,
  value,
  onChange,
  onBlur,
  placeholder,
  required,
  error,
  type = "text",
}: TextFieldProps) {
  const id = useId();

  return (
    <label htmlFor={id} className="block text-sm font-medium text-neutral-700">
      {label}
      {required && <span className="text-red-500"> *</span>}
      <input
        id={id}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        onBlur={onBlur}
        className={`mt-1 block h-11 w-full rounded-md border px-3 text-base focus:outline-none focus:ring-1 ${
          error
            ? "border-red-400 focus:border-red-500 focus:ring-red-500"
            : "border-neutral-300 focus:border-brand-orange focus:ring-brand-orange"
        }`}
      />
      {error && <span className="mt-1 block text-xs text-red-600">{error}</span>}
    </label>
  );
}
