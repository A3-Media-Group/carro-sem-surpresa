import { formatBRL } from "@/lib/format";

interface BarBreakdownItem {
  label: string;
  monthlyValue: number;
}

interface BarBreakdownProps {
  items: BarBreakdownItem[];
}

const BAR_COLORS = [
  "bg-slate-600",
  "bg-brand-orange",
  "bg-sky-500",
  "bg-emerald-500",
  "bg-violet-500",
];

/**
 * Gráfico de barras de proporção (sem dependência externa): uma barra
 * horizontal por categoria, com largura proporcional ao maior valor e o
 * percentual do total ao lado.
 */
export function BarBreakdown({ items }: BarBreakdownProps) {
  const total = items.reduce((sum, item) => sum + item.monthlyValue, 0);
  const max = Math.max(...items.map((item) => item.monthlyValue), 0.01);

  return (
    <div className="space-y-3">
      {items.map((item, index) => {
        const percentOfTotal = total > 0 ? (item.monthlyValue / total) * 100 : 0;
        const widthPercent = (item.monthlyValue / max) * 100;

        return (
          <div key={item.label}>
            <div className="flex items-baseline justify-between text-sm">
              <span className="font-medium text-neutral-700">{item.label}</span>
              <span className="text-neutral-500">
                {formatBRL(item.monthlyValue)} ({percentOfTotal.toFixed(0)}%)
              </span>
            </div>
            <div className="mt-1 h-2.5 w-full rounded-full bg-neutral-100">
              <div
                className={`h-2.5 rounded-full ${BAR_COLORS[index % BAR_COLORS.length]}`}
                style={{ width: `${Math.max(widthPercent, 2)}%` }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
