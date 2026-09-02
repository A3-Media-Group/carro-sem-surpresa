import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

/**
 * Cabeçalho padrão das páginas de ferramenta: badge com ícone (mesmo
 * sistema visual dos cards da home) + título + descrição.
 */
export function PageHeading({
  icon: Icon,
  title,
  children,
  className = "max-w-2xl",
}: {
  icon: LucideIcon;
  title: string;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <header className={className}>
      <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-orange-50 text-brand-orange-dark">
        <Icon size={22} />
      </span>
      <h1 className="mt-4 text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
        {title}
      </h1>
      {children && <p className="mt-3 text-neutral-600">{children}</p>}
    </header>
  );
}
