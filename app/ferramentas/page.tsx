import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, LayoutGrid } from "lucide-react";
import { PageHeading } from "@/components/ui/PageHeading";
import { TOOLS, TOOL_CATEGORY_LABELS, type ToolCategory } from "@/lib/tools";

export const metadata: Metadata = {
  title: "Todas as Ferramentas: Calculadoras, Consultas, Recibo e Diagnóstico",
  description:
    "As 12 ferramentas gratuitas do Carro Sem Surpresa, organizadas por tipo: calculadoras, consultas e tabelas, gerador de recibo e diagnóstico de problemas.",
};

const CATEGORY_ORDER: ToolCategory[] = ["calculadora", "consulta", "gerador", "diagnostico"];

export default function FerramentasPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-12">
      <PageHeading icon={LayoutGrid} title="Todas as Ferramentas">
        As {TOOLS.length} ferramentas gratuitas do site, organizadas por
        tipo — sem cadastro, rodando no seu navegador. Se você já sabe que
        quer uma calculadora, a versão enxuta está em{" "}
        <Link href="/calculadoras" prefetch={false} className="underline">
          Calculadoras
        </Link>
        .
      </PageHeading>

      <div className="mt-10 space-y-10">
        {CATEGORY_ORDER.map((category) => {
          const items = TOOLS.filter((tool) => tool.category === category);
          if (items.length === 0) return null;

          return (
            <div key={category}>
              <h2 className="text-xs font-semibold uppercase tracking-wide text-neutral-500">
                {TOOL_CATEGORY_LABELS[category]}
              </h2>
              <div className="mt-3 space-y-4">
                {items.map((tool) => (
                  <Link
                    key={tool.href}
                    href={tool.href}
                    prefetch={false}
                    className="group flex items-center gap-4 rounded-xl border border-neutral-200 p-6 transition hover:border-brand-orange/50 hover:shadow-md"
                  >
                    <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-brand-orange-dark">
                      <tool.icon size={22} />
                    </span>
                    <span className="flex-1">
                      <span className="block text-lg font-semibold text-neutral-900">
                        {tool.title}
                      </span>
                      <span className="mt-1 block text-sm text-neutral-600">
                        {tool.description}
                      </span>
                    </span>
                    <ArrowRight
                      size={18}
                      className="shrink-0 text-brand-orange-dark transition-transform group-hover:translate-x-0.5"
                    />
                  </Link>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}
