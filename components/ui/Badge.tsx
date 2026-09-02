import type { ReactNode } from "react";

const TONE_CLASSES = {
  neutral: "bg-neutral-100 text-neutral-600",
  warning: "bg-amber-100 text-amber-800",
  danger: "bg-red-100 text-red-700",
  success: "bg-emerald-100 text-emerald-700",
} as const;

export function Badge({
  children,
  tone = "neutral",
}: {
  children: ReactNode;
  tone?: keyof typeof TONE_CLASSES;
}) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${TONE_CLASSES[tone]}`}
    >
      {children}
    </span>
  );
}
