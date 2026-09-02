"use client";

import { useMemo, useState } from "react";
import { HandCoins } from "lucide-react";
import { CurrencyInput } from "@/components/ui/CurrencyInput";
import { NumberField } from "@/components/ui/NumberField";
import { PageHeading } from "@/components/ui/PageHeading";
import { Card } from "@/components/ui/Card";
import { computeFinancing } from "@/lib/calculators/financing";
import { defaultFinancingMonthlyRatePercent } from "@/lib/config";
import { formatBRL, formatNumber } from "@/lib/format";

export function FinancingSimulator() {
  const [vehiclePrice, setVehiclePrice] = useState(60000);
  const [downPayment, setDownPayment] = useState(12000);
  const [monthlyRate, setMonthlyRate] = useState(
    defaultFinancingMonthlyRatePercent
  );
  const [installments, setInstallments] = useState(48);

  const result = useMemo(
    () =>
      computeFinancing({
        vehiclePrice,
        downPayment,
        monthlyRatePercent: monthlyRate,
        installments,
      }),
    [vehiclePrice, downPayment, monthlyRate, installments]
  );

  return (
    <main className="mx-auto max-w-5xl px-6 py-12">
      <PageHeading icon={HandCoins} title="Simulador de Financiamento vs. à Vista">
        A parcela parece pequena, mas o total de juros pagos é o gasto que
        ninguém te conta. Veja o custo real do financiamento antes de
        assinar.
      </PageHeading>

      <div className="mt-10 grid gap-10 lg:grid-cols-2">
        <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
          <CurrencyInput
            label="Valor do veículo"
            value={vehiclePrice}
            onChange={setVehiclePrice}
          />
          <CurrencyInput
            label="Valor de entrada"
            value={downPayment}
            onChange={setDownPayment}
          />
          <div className="grid gap-5 sm:grid-cols-2">
            <NumberField
              label="Taxa de juros (% ao mês)"
              value={monthlyRate}
              onChange={setMonthlyRate}
              step={0.1}
              hint="Estimativa de mercado — confirme a taxa real com seu banco."
            />
            <NumberField
              label="Número de parcelas"
              value={installments}
              onChange={setInstallments}
              suffix="meses"
            />
          </div>
        </form>

        <div className="space-y-6">
          <Card className="text-center">
            <p className="text-sm text-neutral-500">Parcela mensal</p>
            <p className="mt-1 text-4xl font-bold tracking-tight text-neutral-900">
              {formatBRL(result.installmentValue)}
            </p>
            <p className="mt-2 text-sm text-neutral-600">
              {formatNumber(installments)}x, valor financiado de{" "}
              {formatBRL(result.financedAmount)}
            </p>
          </Card>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-lg bg-neutral-50 p-4">
              <p className="text-xs font-medium uppercase tracking-wide text-neutral-500">
                Total pago no fim
              </p>
              <p className="mt-1 text-xl font-bold text-neutral-900">
                {formatBRL(result.totalPaid)}
              </p>
            </div>
            <div className="rounded-lg bg-red-50 p-4">
              <p className="text-xs font-medium uppercase tracking-wide text-red-600">
                Só de juros
              </p>
              <p className="mt-1 text-xl font-bold text-red-700">
                {formatBRL(result.totalInterest)}
              </p>
            </div>
          </div>

          <Card>
            <p className="text-sm text-neutral-600">
              Financiando nessas condições, você paga{" "}
              <strong>
                {formatNumber(result.interestAsPercentOfPrice, {
                  maximumFractionDigits: 0,
                })}
                %
              </strong>{" "}
              a mais do que o valor do carro — só em juros. Se comprasse à
              vista pelo preço cheio de {formatBRL(vehiclePrice)}, você
              economizaria exatamente esse valor.
            </p>
          </Card>

          <p className="text-xs text-neutral-500">
            Valores estimados para fins informativos, não substituem
            aconselhamento financeiro. Simulação pela Tabela Price (juros
            compostos sobre o saldo devedor), o sistema mais comum em
            financiamento de veículo no Brasil — condições reais variam por
            banco e perfil de crédito.
          </p>
        </div>
      </div>
    </main>
  );
}
