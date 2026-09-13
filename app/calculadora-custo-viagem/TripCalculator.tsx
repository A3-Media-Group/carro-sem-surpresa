"use client";
import { useState } from "react";
import { NumberField } from "@/components/ui/NumberField";
import { CurrencyInput } from "@/components/ui/CurrencyInput";
import { computeTrip } from "@/lib/calculators/trip";
import { formatBRL } from "@/lib/format";
export function TripCalculator() {
  const [distance, setDistance] = useState(300);
  const [consumption, setConsumption] = useState(12);
  const [price, setPrice] = useState(6);
  const [roundTrip, setRoundTrip] = useState(false);
  const [tolls, setTolls] = useState(40);
  const [parking, setParking] = useState(0);
  const [other, setOther] = useState(0);
  const [people, setPeople] = useState(2);
  const result = computeTrip({
    distance,
    consumption,
    price,
    roundTrip,
    tolls,
    parking,
    other,
    people,
  });
  return (
    <div className="mt-8 grid gap-6 lg:grid-cols-[1.2fr_1fr]">
      <div className="rounded-2xl border border-neutral-200 bg-white p-6">
        <h2 className="mb-5 text-lg font-bold">Os números da sua viagem</h2>
        <div className="grid gap-5 sm:grid-cols-2">
          <NumberField
            label="Distância de ida"
            value={distance}
            onChange={setDistance}
            suffix="km"
          />
          <NumberField
            label="Consumo na estrada"
            value={consumption}
            onChange={setConsumption}
            suffix="km/L"
          />
          <CurrencyInput
            label="Preço do combustível por litro"
            value={price}
            onChange={setPrice}
          />
          <NumberField
            label="Pessoas para dividir (incluindo você)"
            value={people}
            onChange={setPeople}
            min={1}
            step={1}
          />
        </div>
        <label className="my-6 flex min-h-11 cursor-pointer items-center gap-3 text-sm">
          <input
            type="checkbox"
            checked={roundTrip}
            onChange={(e) => setRoundTrip(e.target.checked)}
            className="h-5 w-5 accent-amber-700"
          />{" "}
          Incluir volta pela mesma distância
        </label>
        <p className="mb-4 text-sm text-neutral-600">
          Informe abaixo o total de todo o percurso, incluindo a volta quando
          houver. Esses valores não são duplicados.
        </p>
        <div className="grid gap-5 sm:grid-cols-2">
          <CurrencyInput
            label="Pedágios da viagem inteira"
            value={tolls}
            onChange={setTolls}
          />
          <CurrencyInput
            label="Estacionamento total"
            value={parking}
            onChange={setParking}
          />
          <CurrencyInput
            label="Outras despesas totais"
            value={other}
            onChange={setOther}
          />
        </div>
      </div>
      <section
        aria-label="Resultado da viagem"
        aria-live="polite"
        className="rounded-2xl bg-graphite p-7 text-white lg:self-start"
      >
        {result ? (
          <>
            <p className="section-kicker !text-brand-orange">
              ESTIMATIVA DO PERCURSO
            </p>
            <p className="mt-3 text-4xl font-bold">{formatBRL(result.total)}</p>
            <p className="mt-2 text-sm text-white/70">
              {result.distance.toLocaleString("pt-BR")} km no total ·{" "}
              {result.liters.toLocaleString("pt-BR", {
                maximumFractionDigits: 1,
              })}{" "}
              litros
            </p>
            <dl className="my-6 space-y-3 border-y border-white/20 py-6 text-sm">
              {[
                ["Combustível", result.fuel],
                ["Pedágios", tolls],
                ["Estacionamento", parking],
                ["Outras despesas", other],
              ].map(([label, value]) => (
                <div className="flex justify-between gap-3" key={label}>
                  <dt>{label}</dt>
                  <dd>{formatBRL(Number(value))}</dd>
                </div>
              ))}
            </dl>
            <p className="text-sm text-white/70">
              Por pessoa ({people} {people === 1 ? "pessoa" : "pessoas"})
            </p>
            <p className="mt-1 text-2xl font-bold text-brand-orange">
              {formatBRL(result.perPerson)}
            </p>
            <p className="mt-4 text-xs text-white/70">
              Custo do percurso por km: {formatBRL(result.perKm)}. Não inclui
              depreciação, seguro nem manutenção.
            </p>
          </>
        ) : (
          <p>
            Preencha distância, consumo e preço com valores maiores que zero.
            Use uma quantidade inteira de pessoas, a partir de 1, e despesas não
            negativas.
          </p>
        )}
      </section>
    </div>
  );
}
