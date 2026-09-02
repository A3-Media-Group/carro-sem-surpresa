"use client";

import { useMemo, useState } from "react";
import { CurrencyInput } from "@/components/ui/CurrencyInput";
import { NumberField } from "@/components/ui/NumberField";
import { SelectField } from "@/components/ui/SelectField";
import { BarBreakdown } from "@/components/charts/BarBreakdown";
import { computeTco } from "@/lib/calculators/tco";
import {
  FuelType,
  fuelLabels,
  fuelPrices,
  defaultInsuranceRateOverFipe,
} from "@/lib/config";
import { formatBRL, formatNumber } from "@/lib/format";
import ipvaData from "@/lib/data/ipva-por-estado.json";

const estadoOptions = [...ipvaData.estados]
  .sort((a, b) => a.nome.localeCompare(b.nome, "pt-BR"))
  .map((estado) => ({
    value: estado.uf,
    label: `${estado.nome} (${estado.uf})`,
  }));

const fuelOptions = (Object.keys(fuelLabels) as FuelType[]).map((fuel) => ({
  value: fuel,
  label: fuelLabels[fuel],
}));

/** Consumo médio "de fábrica" pré-preenchido ao trocar o tipo de combustível. */
const defaultConsumptionByFuel: Record<FuelType, number> = {
  gasolina: 12,
  etanol: 8,
  diesel: 10,
  eletrico: 6,
};

export function TcoCalculator() {
  const [vehicleValue, setVehicleValue] = useState(60000);
  const [estadoUf, setEstadoUf] = useState("SP");
  const [kmPerMonth, setKmPerMonth] = useState(1000);
  const [fuelType, setFuelType] = useState<FuelType>("gasolina");
  const [fuelConsumption, setFuelConsumption] = useState(
    defaultConsumptionByFuel.gasolina
  );
  const [fuelPrice, setFuelPrice] = useState<number>(fuelPrices.gasolina);
  const [insuranceRate, setInsuranceRate] = useState(
    defaultInsuranceRateOverFipe * 100
  );
  const [parkingTolls, setParkingTolls] = useState(150);

  const estado = useMemo(
    () => ipvaData.estados.find((e) => e.uf === estadoUf) ?? null,
    [estadoUf]
  );
  const ipvaRate = estado?.aliquotaCarroPasseio ?? 0;

  function handleFuelTypeChange(value: string) {
    const nextFuelType = value as FuelType;
    setFuelType(nextFuelType);
    setFuelConsumption(defaultConsumptionByFuel[nextFuelType]);
    setFuelPrice(fuelPrices[nextFuelType]);
  }

  const result = useMemo(
    () =>
      computeTco({
        vehicleValue,
        ipvaRate,
        kmPerMonth,
        fuelType,
        fuelConsumption,
        fuelPrice,
        insuranceRateOverValue: insuranceRate,
        parkingTollsPerMonth: parkingTolls,
      }),
    [
      vehicleValue,
      ipvaRate,
      kmPerMonth,
      fuelType,
      fuelConsumption,
      fuelPrice,
      insuranceRate,
      parkingTolls,
    ]
  );

  const consumptionSuffix = fuelType === "eletrico" ? "km/kWh" : "km/L";
  const priceLabel =
    fuelType === "eletrico" ? "Preço da energia (R$/kWh)" : "Preço do combustível (R$/L)";

  const rideHailingIsCheaper = result.rideHailingDiffMonthly > 0;

  return (
    <main className="mx-auto max-w-5xl px-6 py-12">
      <header className="max-w-2xl">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Calculadora do Custo Real de Posse
        </h1>
        <p className="mt-3 text-neutral-600">
          Depreciação, IPVA, seguro, combustível e manutenção — o gasto que
          ninguém te conta quando você compra um carro. Preencha os campos
          abaixo e veja o custo mensal de verdade, na hora.
        </p>
      </header>

      <div className="mt-10 grid gap-10 lg:grid-cols-2">
        <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
          <CurrencyInput
            label="Valor do veículo"
            value={vehicleValue}
            onChange={setVehicleValue}
            hint="Usamos este valor também como referência de tabela FIPE."
          />

          <SelectField
            label="Estado (para calcular o IPVA)"
            value={estadoUf}
            onChange={setEstadoUf}
            options={estadoOptions}
            hint={
              estado
                ? `Alíquota aplicada: ${formatNumber(estado.aliquotaCarroPasseio, {
                    maximumFractionDigits: 2,
                  })}% ao ano${estado.confirmado ? "" : " (estimativa — confirme no Detran do seu estado)"}`
                : undefined
            }
          />

          <NumberField
            label="Km rodado por mês"
            value={kmPerMonth}
            onChange={setKmPerMonth}
            suffix="km"
          />

          <div className="grid gap-5 sm:grid-cols-2">
            <SelectField
              label="Tipo de combustível"
              value={fuelType}
              onChange={handleFuelTypeChange}
              options={fuelOptions}
            />
            <NumberField
              label="Consumo médio"
              value={fuelConsumption}
              onChange={setFuelConsumption}
              suffix={consumptionSuffix}
            />
          </div>

          <NumberField
            label={priceLabel}
            value={fuelPrice}
            onChange={setFuelPrice}
            step={0.01}
          />

          <NumberField
            label="Seguro estimado (% ao ano sobre o valor do veículo)"
            value={insuranceRate}
            onChange={setInsuranceRate}
            suffix="% ao ano"
            step={0.1}
          />

          <CurrencyInput
            label="Estacionamento e pedágio (por mês)"
            value={parkingTolls}
            onChange={setParkingTolls}
          />
        </form>

        <div className="space-y-8">
          <div className="rounded-xl border border-neutral-200 p-6">
            <p className="text-sm text-neutral-500">Custo mensal total</p>
            <p className="mt-1 text-4xl font-bold tracking-tight text-neutral-900">
              {formatBRL(result.totalMonthly)}
            </p>
            <p className="mt-2 text-sm text-neutral-500">
              {formatBRL(result.costPerKm)} por km rodado
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-neutral-900">
              Para onde vai o seu dinheiro
            </h2>
            <div className="mt-4">
              <BarBreakdown items={result.breakdown} />
            </div>
          </div>

          <div className="rounded-xl border border-neutral-200 p-6">
            <h2 className="text-lg font-semibold text-neutral-900">
              Carro próprio vs. app de transporte
            </h2>
            <p className="mt-2 text-sm text-neutral-600">
              Rodando os mesmos {formatNumber(kmPerMonth)} km/mês só de app,
              o gasto estimado seria de{" "}
              <strong>{formatBRL(result.rideHailingMonthly)}</strong> por mês.
            </p>
            <p className="mt-2 text-sm font-medium text-neutral-900">
              {rideHailingIsCheaper
                ? `Nessa conta, o app sairia ${formatBRL(result.rideHailingDiffMonthly)} mais barato por mês do que ter o carro.`
                : `Nessa conta, ter o carro sairia ${formatBRL(-result.rideHailingDiffMonthly)} mais barato por mês do que usar só apps.`}
            </p>
            <p className="mt-2 text-xs text-neutral-400">
              Comparativo simplificado: não considera tempo de espera,
              disponibilidade de carro nem viagens fora do trajeto de rotina.
            </p>
          </div>

          <p className="text-xs text-neutral-400">
            Valores estimados para fins informativos, não substituem
            aconselhamento financeiro.
          </p>
        </div>
      </div>
    </main>
  );
}
