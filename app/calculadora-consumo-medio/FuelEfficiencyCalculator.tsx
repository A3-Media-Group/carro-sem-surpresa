"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Gauge } from "lucide-react";
import { NumberField } from "@/components/ui/NumberField";
import { PageHeading } from "@/components/ui/PageHeading";
import { Card } from "@/components/ui/Card";
import { computeFuelEfficiency } from "@/lib/calculators/fuelEfficiency";
import { fuelPrices } from "@/lib/config";
import { formatBRL, formatNumber } from "@/lib/format";

const BENCHMARKS = [
  { categoria: "Popular (gasolina)", faixa: "12 a 14 km/L" },
  { categoria: "Sedã (gasolina)", faixa: "10 a 12 km/L" },
  { categoria: "SUV (gasolina)", faixa: "8 a 10 km/L" },
  { categoria: "Qualquer categoria (etanol)", faixa: "~30% menos que na gasolina" },
];

export function FuelEfficiencyCalculator() {
  const [kmRodado, setKmRodado] = useState(400);
  const [litros, setLitros] = useState(32);
  const [precoCombustivel, setPrecoCombustivel] = useState<number>(
    fuelPrices.gasolina
  );

  const result = useMemo(
    () =>
      computeFuelEfficiency({
        kmRodado,
        litrosAbastecidos: litros,
        precoCombustivel,
      }),
    [kmRodado, litros, precoCombustivel]
  );

  return (
    <main className="mx-auto max-w-5xl px-6 py-12">
      <PageHeading icon={Gauge} title="Calculadora de Consumo Médio Real">
        Km rodado dividido pelo litros abastecidos — o consumo de verdade
        do seu carro, não o número que vem no folheto.
      </PageHeading>

      <div className="mt-10 grid gap-10 lg:grid-cols-2">
        <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
          <NumberField
            label="Km rodado no tanque"
            value={kmRodado}
            onChange={setKmRodado}
            suffix="km"
            hint="Diferença entre o odômetro de um tanque cheio e o próximo."
          />
          <NumberField
            label="Litros abastecidos"
            value={litros}
            onChange={setLitros}
            suffix="L"
            step={0.1}
          />
          <NumberField
            label="Preço do combustível (R$/L)"
            value={precoCombustivel}
            onChange={setPrecoCombustivel}
            step={0.01}
          />
        </form>

        <div className="space-y-6">
          <Card className="text-center">
            <p className="text-sm text-neutral-500">Consumo real</p>
            <p className="mt-1 text-4xl font-bold tracking-tight text-neutral-900">
              {formatNumber(result.kmPorLitro, { maximumFractionDigits: 1 })}{" "}
              km/L
            </p>
            <p className="mt-2 text-sm text-neutral-600">
              {formatBRL(result.custoPorKm)} por km rodado
            </p>
          </Card>

          <Card>
            <h2 className="text-sm font-semibold text-neutral-900">
              Pra comparar
            </h2>
            <ul className="mt-3 space-y-2 text-sm text-neutral-600">
              {BENCHMARKS.map((b) => (
                <li key={b.categoria} className="flex justify-between gap-4">
                  <span>{b.categoria}</span>
                  <span className="font-medium text-neutral-900">
                    {b.faixa}
                  </span>
                </li>
              ))}
            </ul>
          </Card>

          <p className="text-sm text-neutral-600">
            Agora que você sabe o consumo real do seu carro, use na{" "}
            <Link
              href="/calculadora-alcool-ou-gasolina"
              prefetch={false}
              className="underline"
            >
              Calculadora Álcool ou Gasolina
            </Link>{" "}
            pra descobrir com precisão o que compensa abastecer.
          </p>

          <p className="text-xs text-neutral-500">
            Consumo real varia com trânsito, condução e manutenção — meça
            em alguns tanques seguidos pra ter uma média mais confiável.
          </p>
        </div>
      </div>
    </main>
  );
}
