"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { CurrencyInput } from "@/components/ui/CurrencyInput";
import { NumberField } from "@/components/ui/NumberField";
import { computeTco } from "@/lib/calculators/tco";
import { fuelPrices, defaultInsuranceRateOverFipe } from "@/lib/config";
import { formatBRL } from "@/lib/format";
import ipvaData from "@/lib/data/ipva-por-estado.json";

// Alíquota média nacional, calculada a partir da nossa própria Tabela de
// IPVA por Estado — usada só como estimativa rápida aqui na prévia.
// O cálculo completo deixa você escolher o estado exato.
const aliquotaMediaNacional =
  ipvaData.estados.reduce((soma, estado) => soma + estado.aliquotaCarroPasseio, 0) /
  ipvaData.estados.length;

// Consumo médio nacional aproximado (km/L), usado só nesta prévia — a
// calculadora completa usa o consumo real do seu carro.
const CONSUMO_MEDIO_ESTIMADO = 12;

/**
 * Prévia interativa do Custo Real de Posse, embutida no hero da home.
 * A ideia: em vez de mandar o visitante clicar em algum lugar pra só
 * então ver o valor, ele já vê o resultado mudando em tempo real com
 * dois campos — e só depois decide se quer o cálculo completo (estado
 * exato, tipo de combustível, seguro editável etc.).
 */
export function HeroCalculator() {
  const [vehicleValue, setVehicleValue] = useState(60000);
  const [kmPerMonth, setKmPerMonth] = useState(1000);

  const result = useMemo(
    () =>
      computeTco({
        vehicleValue,
        ipvaRate: aliquotaMediaNacional,
        kmPerMonth,
        fuelType: "gasolina",
        fuelConsumption: CONSUMO_MEDIO_ESTIMADO,
        fuelPrice: fuelPrices.gasolina,
        insuranceRateOverValue: defaultInsuranceRateOverFipe * 100,
        parkingTollsPerMonth: 0,
      }),
    [vehicleValue, kmPerMonth]
  );

  return (
    <div className="w-full rounded-2xl bg-white p-6 text-left shadow-2xl shadow-black/20 sm:p-7">
      <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-brand-orange-dark">
        <Sparkles size={14} />
        Prévia rápida
      </div>
      <p className="mt-1 text-sm text-neutral-500">
        Custo real de posse estimado — mude os números e veja na hora.
      </p>

      <div className="mt-4 grid grid-cols-2 gap-3">
        <CurrencyInput
          label="Valor do carro"
          value={vehicleValue}
          onChange={setVehicleValue}
        />
        <NumberField
          label="Km rodado/mês"
          value={kmPerMonth}
          onChange={setKmPerMonth}
          suffix="km"
        />
      </div>

      <div className="mt-5 rounded-xl bg-neutral-50 p-4">
        <p className="text-xs text-neutral-500">Custo mensal estimado</p>
        <p className="mt-0.5 text-3xl font-bold tracking-tight text-neutral-900">
          {formatBRL(result.totalMonthly)}
        </p>
        <p className="mt-1 text-xs text-neutral-500">
          Depreciação, IPVA, seguro, combustível e manutenção somados.
        </p>
      </div>

      <Link
        href="/calculadora-custo-de-posse"
        prefetch={false}
        className="mt-4 flex h-11 items-center justify-center gap-1.5 rounded-md bg-graphite text-sm font-semibold text-white hover:bg-neutral-800"
      >
        Ver o cálculo completo com o seu estado
        <ArrowRight size={16} />
      </Link>
    </div>
  );
}
