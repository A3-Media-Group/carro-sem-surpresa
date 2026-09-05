import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Calculator } from "lucide-react";
import { PageHeading } from "@/components/ui/PageHeading";
import { CALCULADORAS } from "@/lib/tools";

export const metadata: Metadata = {
  title: "Calculadoras do Custo de um Carro",
  description:
    "Todas as calculadoras do Carro Sem Surpresa num só lugar: custo de posse, financiamento, consórcio, manutenção, transferência, consumo e álcool ou gasolina.",
};

export default function CalculadorasPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <PageHeading icon={Calculator} title="Calculadoras">
        As {CALCULADORAS.length} calculadoras do site — as que recebem os
        números do seu carro e fazem a conta pra você. Pra tabelas de
        referência (IPVA, multas, FIPE), recibo em PDF e o diagnóstico por
        sintoma, veja a lista completa em{" "}
        <Link href="/#ferramentas" prefetch={false} className="underline">
          Ferramentas
        </Link>
        .
      </PageHeading>

      <div className="mt-10 space-y-4">
        {CALCULADORAS.map((calc) => (
          <Link
            key={calc.href}
            href={calc.href}
            prefetch={false}
            className="group flex items-center gap-4 rounded-xl border border-neutral-200 p-6 transition hover:border-brand-orange/50 hover:shadow-md"
          >
            <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-brand-orange-dark">
              <calc.icon size={22} />
            </span>
            <span className="flex-1">
              <span className="block text-lg font-semibold text-neutral-900">
                {calc.title}
              </span>
              <span className="mt-1 block text-sm text-neutral-600">
                {calc.description}
              </span>
            </span>
            <ArrowRight
              size={18}
              className="shrink-0 text-brand-orange-dark transition-transform group-hover:translate-x-0.5"
            />
          </Link>
        ))}
      </div>
    </main>
  );
}
