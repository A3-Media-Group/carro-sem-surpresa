"use client";

import { useMemo, useState } from "react";
import { Scale } from "lucide-react";
import { CurrencyInput } from "@/components/ui/CurrencyInput";
import { NumberField } from "@/components/ui/NumberField";
import { PageHeading } from "@/components/ui/PageHeading";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { computeConsortium } from "@/lib/calculators/consortium";
import { computeFinancing } from "@/lib/calculators/financing";
import {
  defaultConsortiumAdminFeePercent,
  defaultConsortiumReserveFundPercent,
  defaultFinancingMonthlyRatePercent,
} from "@/lib/config";
import { formatBRL } from "@/lib/format";

export function ComparisonSimulator() {
  const [vehiclePrice, setVehiclePrice] = useState(60000);
  const [installments, setInstallments] = useState(48);

  const [adminFee, setAdminFee] = useState(defaultConsortiumAdminFeePercent);
  const [reserveFund, setReserveFund] = useState(
    defaultConsortiumReserveFundPercent
  );

  const [downPayment, setDownPayment] = useState(12000);
  const [monthlyRate, setMonthlyRate] = useState(
    defaultFinancingMonthlyRatePercent
  );

  const consortium = useMemo(
    () =>
      computeConsortium({
        vehiclePrice,
        administrationFeePercent: adminFee,
        reserveFundPercent: reserveFund,
        installments,
      }),
    [vehiclePrice, adminFee, reserveFund, installments]
  );

  const financing = useMemo(
    () =>
      computeFinancing({
        vehiclePrice,
        downPayment,
        monthlyRatePercent: monthlyRate,
        installments,
      }),
    [vehiclePrice, downPayment, monthlyRate, installments]
  );

  const options = [
    { label: "À vista", total: vehiclePrice },
    { label: "Consórcio", total: consortium.totalPaid },
    { label: "Financiamento", total: financing.totalPaid },
  ];
  const cheapest = options.reduce((a, b) => (b.total < a.total ? b : a));
  const priciest = options.reduce((a, b) => (b.total > a.total ? b : a));

  return (
    <main className="mx-auto max-w-5xl px-6 py-12">
      <PageHeading
        icon={Scale}
        title="Consórcio vs. Financiamento vs. à Vista"
      >
        Três jeitos de pagar o mesmo carro, lado a lado — pra você ver o
        custo total real de cada um, não só o valor da parcela.
      </PageHeading>

      <div className="mt-10 grid gap-10 lg:grid-cols-2">
        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div className="space-y-5">
            <CurrencyInput
              label="Valor do veículo"
              value={vehiclePrice}
              onChange={setVehiclePrice}
            />
            <NumberField
              label="Prazo (consórcio e financiamento)"
              value={installments}
              onChange={setInstallments}
              suffix="meses"
            />
          </div>

          <div className="space-y-5 rounded-lg border border-neutral-200 p-4">
            <h2 className="text-sm font-semibold text-neutral-900">
              Consórcio
            </h2>
            <div className="grid gap-5 sm:grid-cols-2">
              <NumberField
                label="Taxa de administração"
                value={adminFee}
                onChange={setAdminFee}
                suffix="% total"
                step={0.5}
                hint="Diluída no prazo, sem juros compostos."
              />
              <NumberField
                label="Fundo de reserva"
                value={reserveFund}
                onChange={setReserveFund}
                suffix="% total"
                step={0.5}
              />
            </div>
          </div>

          <div className="space-y-5 rounded-lg border border-neutral-200 p-4">
            <h2 className="text-sm font-semibold text-neutral-900">
              Financiamento
            </h2>
            <CurrencyInput
              label="Valor de entrada"
              value={downPayment}
              onChange={setDownPayment}
            />
            <NumberField
              label="Taxa de juros (% ao mês)"
              value={monthlyRate}
              onChange={setMonthlyRate}
              step={0.1}
            />
          </div>
        </form>

        <div className="space-y-4">
          <Card>
            <p className="text-sm text-neutral-500">À vista</p>
            <p className="mt-1 text-2xl font-bold text-neutral-900">
              {formatBRL(vehiclePrice)}
            </p>
            <p className="mt-1 text-sm text-neutral-600">
              Sem parcelas, sem custo extra.
            </p>
          </Card>

          <Card>
            <div className="flex items-center justify-between">
              <p className="text-sm text-neutral-500">Consórcio</p>
              {cheapest.label === "Consórcio" && (
                <Badge tone="success">mais barato</Badge>
              )}
            </div>
            <p className="mt-1 text-2xl font-bold text-neutral-900">
              {formatBRL(consortium.installmentValue)}
              <span className="text-sm font-normal text-neutral-500">/mês</span>
            </p>
            <p className="mt-1 text-sm text-neutral-600">
              Total pago: {formatBRL(consortium.totalPaid)} (
              {formatBRL(consortium.extraCost)} além do valor do carro)
            </p>
          </Card>

          <Card>
            <div className="flex items-center justify-between">
              <p className="text-sm text-neutral-500">Financiamento</p>
              {cheapest.label === "Financiamento" && (
                <Badge tone="success">mais barato</Badge>
              )}
            </div>
            <p className="mt-1 text-2xl font-bold text-neutral-900">
              {formatBRL(financing.installmentValue)}
              <span className="text-sm font-normal text-neutral-500">/mês</span>
            </p>
            <p className="mt-1 text-sm text-neutral-600">
              Total pago: {formatBRL(financing.totalPaid)} (
              {formatBRL(financing.totalInterest)} só de juros)
            </p>
          </Card>

          {cheapest.label !== priciest.label && (
            <p className="text-sm font-medium text-neutral-900">
              Nessas condições, {cheapest.label.toLowerCase()} sai{" "}
              {formatBRL(priciest.total - cheapest.total)} mais barato do que{" "}
              {priciest.label.toLowerCase()}.
            </p>
          )}

          <p className="text-xs text-neutral-500">
            Valores estimados para fins informativos, não substituem
            aconselhamento financeiro. O consórcio não tem juros compostos,
            mas a contemplação (sorteio ou lance) pode não ser imediata —
            essa simulação assume que você já foi contemplado e está
            pagando as parcelas normais.
          </p>
        </div>
      </div>
    </main>
  );
}
