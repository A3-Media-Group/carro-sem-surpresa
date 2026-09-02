"use client";

import { useMemo, useState } from "react";
import { Fuel } from "lucide-react";
import { NumberField } from "@/components/ui/NumberField";
import { PageHeading } from "@/components/ui/PageHeading";
import { Card } from "@/components/ui/Card";
import { computeFuelComparison } from "@/lib/calculators/fuelComparison";
import { fuelPrices } from "@/lib/config";
import { formatBRL, formatNumber } from "@/lib/format";

export function AlcoolOuGasolinaCalculator() {
  const [gasolinaPrice, setGasolinaPrice] = useState<number>(
    fuelPrices.gasolina
  );
  const [etanolPrice, setEtanolPrice] = useState<number>(fuelPrices.etanol);
  const [gasolinaConsumption, setGasolinaConsumption] = useState(12);
  const [etanolConsumption, setEtanolConsumption] = useState(8);
  const [kmPerMonth, setKmPerMonth] = useState(1000);

  const result = useMemo(
    () =>
      computeFuelComparison({
        gasolinaPrice,
        etanolPrice,
        gasolinaConsumption,
        etanolConsumption,
        kmPerMonth,
      }),
    [gasolinaPrice, etanolPrice, gasolinaConsumption, etanolConsumption, kmPerMonth]
  );

  const cheaperLabel =
    result.cheaper === "gasolina"
      ? "Gasolina"
      : result.cheaper === "etanol"
        ? "Etanol"
        : "Empate";

  return (
    <main className="mx-auto max-w-5xl px-6 py-12">
      <PageHeading icon={Fuel} title="Álcool ou Gasolina: o que Compensa Abastecer">
        Esqueça a regra genérica dos 70%. Com o consumo real do seu carro,
        a conta é exata — não uma média nacional.
      </PageHeading>

      <div className="mt-10 grid gap-10 lg:grid-cols-2">
        <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
          <div className="grid gap-5 sm:grid-cols-2">
            <NumberField
              label="Preço da gasolina (R$/L)"
              value={gasolinaPrice}
              onChange={setGasolinaPrice}
              step={0.01}
            />
            <NumberField
              label="Preço do etanol (R$/L)"
              value={etanolPrice}
              onChange={setEtanolPrice}
              step={0.01}
            />
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <NumberField
              label="Consumo com gasolina"
              value={gasolinaConsumption}
              onChange={setGasolinaConsumption}
              suffix="km/L"
              hint="Veja no manual do carro ou no seu histórico de abastecimento."
            />
            <NumberField
              label="Consumo com etanol"
              value={etanolConsumption}
              onChange={setEtanolConsumption}
              suffix="km/L"
            />
          </div>

          <NumberField
            label="Km rodado por mês"
            value={kmPerMonth}
            onChange={setKmPerMonth}
            suffix="km"
          />
        </form>

        <div className="space-y-6">
          <Card className="text-center">
            <p className="text-sm text-neutral-500">Vale mais a pena abastecer com</p>
            <p className="mt-1 text-4xl font-bold tracking-tight text-neutral-900">
              {cheaperLabel}
            </p>
            {result.cheaper !== "empate" && (
              <p className="mt-2 text-sm text-neutral-600">
                Economia de {formatBRL(result.costPerKmDifference)} por km
              </p>
            )}
          </Card>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-lg bg-neutral-50 p-4">
              <p className="text-xs font-medium uppercase tracking-wide text-neutral-500">
                Custo por km — Gasolina
              </p>
              <p className="mt-1 text-xl font-bold text-neutral-900">
                {formatBRL(result.costPerKmGasolina)}
              </p>
            </div>
            <div className="rounded-lg bg-neutral-50 p-4">
              <p className="text-xs font-medium uppercase tracking-wide text-neutral-500">
                Custo por km — Etanol
              </p>
              <p className="mt-1 text-xl font-bold text-neutral-900">
                {formatBRL(result.costPerKmEtanol)}
              </p>
            </div>
          </div>

          <Card>
            <p className="text-sm text-neutral-600">
              No seu carro, o etanol compensa quando custar até{" "}
              <strong>
                {formatNumber(result.breakEvenRatio * 100, {
                  maximumFractionDigits: 0,
                })}
                %
              </strong>{" "}
              do preço da gasolina — não os 70% da regra genérica. Hoje, com
              os preços que você digitou, o etanol está custando{" "}
              <strong>
                {formatNumber(result.actualPriceRatio * 100, {
                  maximumFractionDigits: 0,
                })}
                %
              </strong>{" "}
              do preço da gasolina.
            </p>
          </Card>

          <p className="text-sm font-medium text-neutral-900">
            Rodando {formatNumber(kmPerMonth)} km/mês, escolher sempre o
            combustível mais barato economiza até{" "}
            {formatBRL(result.monthlySavings)} por mês.
          </p>

          <p className="text-xs text-neutral-500">
            Valores estimados para fins informativos, não substituem
            aconselhamento financeiro. O consumo real varia com o trânsito,
            a condução e a manutenção do carro.
          </p>
        </div>
      </div>
    </main>
  );
}
