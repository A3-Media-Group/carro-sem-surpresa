"use client";

import { useEffect, useState } from "react";
import { Tag } from "lucide-react";
import { SelectField } from "@/components/ui/SelectField";
import { PageHeading } from "@/components/ui/PageHeading";
import { Card } from "@/components/ui/Card";
import {
  fetchBrands,
  fetchModels,
  fetchValue,
  fetchYears,
  type FipeOption,
  type FipeValueResult,
  type FipeVehicleType,
} from "@/lib/api/fipe";

const VEHICLE_TYPE_OPTIONS: { value: FipeVehicleType; label: string }[] = [
  { value: "carros", label: "Carro" },
  { value: "motos", label: "Moto" },
  { value: "caminhoes", label: "Caminhão" },
];

function toSelectOptions(
  items: FipeOption[],
  loading: boolean,
  placeholder: string
) {
  return [
    { value: "", label: loading ? "Carregando..." : placeholder },
    ...items.map((item) => ({ value: item.codigo, label: item.nome })),
  ];
}

const GENERIC_ERROR =
  "Não foi possível carregar os dados da FIPE agora. Tente de novo em alguns minutos.";

export function FipeConsulta() {
  const [vehicleType, setVehicleType] = useState<FipeVehicleType>("carros");
  const [brandCode, setBrandCode] = useState("");
  const [modelCode, setModelCode] = useState("");
  const [yearCode, setYearCode] = useState("");

  // Reseta as seleções seguintes durante o render, quando um nível
  // anterior muda — padrão recomendado pelo React pra "ajustar estado
  // quando algo muda" sem precisar de um Effect só pra isso (evita o
  // reset acontecer um frame depois, dentro de um useEffect).
  const [prevVehicleType, setPrevVehicleType] = useState(vehicleType);
  if (vehicleType !== prevVehicleType) {
    setPrevVehicleType(vehicleType);
    setBrandCode("");
    setModelCode("");
    setYearCode("");
  }
  const [prevBrandCode, setPrevBrandCode] = useState(brandCode);
  if (brandCode !== prevBrandCode) {
    setPrevBrandCode(brandCode);
    setModelCode("");
    setYearCode("");
  }
  const [prevModelCode, setPrevModelCode] = useState(modelCode);
  if (modelCode !== prevModelCode) {
    setPrevModelCode(modelCode);
    setYearCode("");
  }

  const [brands, setBrands] = useState<FipeOption[]>([]);
  const [loadingBrands, setLoadingBrands] = useState(false);
  const [models, setModels] = useState<FipeOption[]>([]);
  const [loadingModels, setLoadingModels] = useState(false);
  const [years, setYears] = useState<FipeOption[]>([]);
  const [loadingYears, setLoadingYears] = useState(false);
  const [result, setResult] = useState<FipeValueResult | null>(null);
  const [loadingValue, setLoadingValue] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let active = true;
    // Padrão de busca de dados do próprio React (setLoading antes do
    // fetch) — não há prop/estado pra derivar isso durante o render.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setLoadingBrands(true);
    setError(null);
    fetchBrands(vehicleType)
      .then((data) => {
        if (active) setBrands(data);
      })
      .catch(() => {
        if (active) setError(GENERIC_ERROR);
      })
      .finally(() => {
        if (active) setLoadingBrands(false);
      });
    return () => {
      active = false;
    };
  }, [vehicleType]);

  useEffect(() => {
    if (!brandCode) return;
    let active = true;
    // eslint-disable-next-line react-hooks/set-state-in-effect -- ver nota acima
    setLoadingModels(true);
    setError(null);
    fetchModels(vehicleType, brandCode)
      .then((data) => {
        if (active) setModels(data);
      })
      .catch(() => {
        if (active) setError(GENERIC_ERROR);
      })
      .finally(() => {
        if (active) setLoadingModels(false);
      });
    return () => {
      active = false;
    };
  }, [vehicleType, brandCode]);

  useEffect(() => {
    if (!brandCode || !modelCode) return;
    let active = true;
    // eslint-disable-next-line react-hooks/set-state-in-effect -- ver nota acima
    setLoadingYears(true);
    setError(null);
    fetchYears(vehicleType, brandCode, modelCode)
      .then((data) => {
        if (active) setYears(data);
      })
      .catch(() => {
        if (active) setError(GENERIC_ERROR);
      })
      .finally(() => {
        if (active) setLoadingYears(false);
      });
    return () => {
      active = false;
    };
  }, [vehicleType, brandCode, modelCode]);

  useEffect(() => {
    if (!brandCode || !modelCode || !yearCode) return;
    let active = true;
    // eslint-disable-next-line react-hooks/set-state-in-effect -- ver nota acima
    setLoadingValue(true);
    setError(null);
    fetchValue(vehicleType, brandCode, modelCode, yearCode)
      .then((data) => {
        if (active) setResult(data);
      })
      .catch(() => {
        if (active) setError(GENERIC_ERROR);
      })
      .finally(() => {
        if (active) setLoadingValue(false);
      });
    return () => {
      active = false;
    };
  }, [vehicleType, brandCode, modelCode, yearCode]);

  // Listas visíveis: some a lista do nível anterior assim que a seleção
  // muda, mesmo que o fetch novo ainda não tenha chegado — evita mostrar
  // opções de modelo/ano que já não correspondem à marca/modelo atual.
  const visibleModels = brandCode ? models : [];
  const visibleYears = brandCode && modelCode ? years : [];
  const visibleResult = brandCode && modelCode && yearCode ? result : null;

  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <PageHeading icon={Tag} title="Consulta Tabela FIPE">
        Preço médio de mercado de carros, motos e caminhões, direto da
        tabela oficial da FIPE.
      </PageHeading>

      <div className="mt-10 space-y-5">
        <SelectField
          label="Tipo de veículo"
          value={vehicleType}
          onChange={(v) => setVehicleType(v as FipeVehicleType)}
          options={VEHICLE_TYPE_OPTIONS}
        />

        <SelectField
          label="Marca"
          value={brandCode}
          onChange={setBrandCode}
          options={toSelectOptions(brands, loadingBrands, "Selecione a marca")}
          disabled={loadingBrands || brands.length === 0}
        />

        <SelectField
          label="Modelo"
          value={modelCode}
          onChange={setModelCode}
          options={toSelectOptions(
            visibleModels,
            loadingModels,
            "Selecione o modelo"
          )}
          disabled={!brandCode || loadingModels || visibleModels.length === 0}
        />

        <SelectField
          label="Ano"
          value={yearCode}
          onChange={setYearCode}
          options={toSelectOptions(visibleYears, loadingYears, "Selecione o ano")}
          disabled={!modelCode || loadingYears || visibleYears.length === 0}
        />
      </div>

      {error && (
        <p className="mt-6 rounded-lg bg-red-50 p-4 text-sm text-red-700">
          {error}
        </p>
      )}

      {loadingValue && (
        <p className="mt-6 text-sm text-neutral-500">Consultando valor...</p>
      )}

      {visibleResult && !loadingValue && (
        <Card className="mt-6 text-center">
          <p className="text-sm text-neutral-500">
            {visibleResult.Marca} {visibleResult.Modelo} ·{" "}
            {visibleResult.AnoModelo}
          </p>
          <p className="mt-1 text-4xl font-bold tracking-tight text-neutral-900">
            {visibleResult.Valor}
          </p>
          <p className="mt-2 text-sm text-neutral-500">
            {visibleResult.Combustivel} · Código FIPE{" "}
            {visibleResult.CodigoFipe} · Referência:{" "}
            {visibleResult.MesReferencia}
          </p>
        </Card>
      )}

      <p className="mt-10 text-xs text-neutral-500">
        Valor de referência FIPE — não é obrigatoriamente o valor de compra
        e venda de um veículo específico, que varia com estado de
        conservação, km rodado e região. Dados fornecidos por uma API
        pública de terceiros a partir da tabela oficial da FIPE.
      </p>
    </main>
  );
}
