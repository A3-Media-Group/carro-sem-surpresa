"use client";

import { useMemo, useState } from "react";
import { AlertTriangle, Stethoscope } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { PageHeading } from "@/components/ui/PageHeading";
import { CarBodyIcon } from "@/components/icons/CarBodyIcon";
import { CAR_BODY_TYPES } from "@/lib/carBodyTypes";
import { formatBRL } from "@/lib/format";
import diagnosticoData from "@/lib/data/diagnostico-sintomas.json";

const DIACRITICS_REGEX = new RegExp("[\\u0300-\\u036f]", "g");

function normalize(text: string): string {
  return text.normalize("NFD").replace(DIACRITICS_REGEX, "").toLowerCase();
}

const PROBABILIDADE_ORDER: Record<string, number> = { alta: 0, media: 1, baixa: 2 };

const PROBABILIDADE_LABEL: Record<string, string> = {
  alta: "Causa mais provável",
  media: "Causa possível",
  baixa: "Causa menos comum",
};

const PROBABILIDADE_TONE: Record<string, "orange" | "neutral"> = {
  alta: "orange",
  media: "neutral",
  baixa: "neutral",
};

const URGENCIA_LABEL: Record<string, string> = {
  seguro: "Dá pra continuar dirigindo com atenção",
  atencao: "Agende o quanto antes",
  "pare-agora": "Pare com segurança e não continue dirigindo",
};

const URGENCIA_TONE: Record<string, "success" | "warning" | "danger"> = {
  seguro: "success",
  atencao: "warning",
  "pare-agora": "danger",
};

const sistemaNomeById = Object.fromEntries(
  diagnosticoData.sistemas.map((s) => [s.id, s.nome])
);

function formatCusto(min: number, max: number): string {
  if (min === 0 && max === 0) return "Sem custo (ou resolve sozinho)";
  if (min === 0) return `Até ${formatBRL(max)}`;
  return `${formatBRL(min)} – ${formatBRL(max)}`;
}

export function DiagnosticoTool() {
  const [search, setSearch] = useState("");
  const [bodyType, setBodyType] = useState<string>("hatch");

  const sintomasFiltrados = useMemo(() => {
    const termo = normalize(search.trim());
    const palavras = termo.split(/\s+/).filter(Boolean);
    if (palavras.length === 0) return null;

    return diagnosticoData.sintomas.filter((sintoma) => {
      const alvo = normalize([sintoma.titulo, ...sintoma.palavrasChave].join(" "));
      return palavras.every((p) => alvo.includes(p));
    });
  }, [search]);

  const bodyTypeNome =
    CAR_BODY_TYPES.find((t) => t.id === bodyType)?.nome ?? "carro";

  return (
    <main className="mx-auto max-w-4xl px-6 py-12">
      <PageHeading icon={Stethoscope} title="Diagnóstico de Problemas do Carro">
        Digite o sintoma que o seu carro está apresentando e veja as causas
        mais prováveis, o nível de urgência e as perguntas certas pra fazer
        antes de aprovar qualquer reparo.
      </PageHeading>

      <div className="mt-6 space-y-2 rounded-lg bg-neutral-50 p-4 text-sm text-neutral-600">
        <p>{diagnosticoData.referencia.aviso}</p>
        <p className="text-neutral-500">{diagnosticoData.referencia.comoUsar}</p>
      </div>

      <div className="mt-8">
        <p className="text-sm font-medium text-neutral-700">
          Pra personalizar, qual é o tipo do seu carro?
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          {CAR_BODY_TYPES.map((tipo) => (
            <button
              key={tipo.id}
              type="button"
              onClick={() => setBodyType(tipo.id)}
              aria-pressed={bodyType === tipo.id}
              className={`flex min-w-20 flex-col items-center gap-1.5 rounded-lg border px-4 py-3 text-xs font-medium transition ${
                bodyType === tipo.id
                  ? "border-brand-orange bg-orange-50 text-brand-orange-dark"
                  : "border-neutral-200 text-neutral-600 hover:border-neutral-300"
              }`}
            >
              <CarBodyIcon tipo={tipo.id} size={40} />
              {tipo.nome}
            </button>
          ))}
        </div>

        <div className="mt-4 flex items-center gap-3 rounded-lg bg-graphite px-4 py-3 text-white">
          <CarBodyIcon
            tipo={bodyType}
            size={44}
            className="shrink-0 text-brand-orange"
          />
          <p className="text-sm text-white/80">
            Diagnóstico pro seu <strong className="text-white">{bodyTypeNome}</strong>.
            A ilustração é só pra personalizar — as causas abaixo valem pra
            qualquer carro a combustão, de qualquer marca ou modelo.
          </p>
        </div>
      </div>

      <label className="mt-8 block">
        <span className="sr-only">Descreva o problema</span>
        <input
          type="search"
          placeholder="Descreva o problema (ex: barulho ao frear, carro não liga, luz no painel, cheiro de gasolina)"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="h-12 w-full rounded-md border border-neutral-300 px-4 text-base focus:border-brand-orange focus:outline-none focus:ring-1 focus:ring-brand-orange"
        />
      </label>

      {sintomasFiltrados === null && (
        <div className="mt-8 space-y-6">
          <p className="text-sm text-neutral-500">
            Ou navegue pelos sintomas mais comuns por sistema:
          </p>
          {diagnosticoData.sistemas.map((sistema) => {
            const doSistema = diagnosticoData.sintomas.filter(
              (s) => s.sistema === sistema.id
            );
            if (doSistema.length === 0) return null;
            return (
              <div key={sistema.id}>
                <h2 className="text-xs font-semibold uppercase tracking-wide text-neutral-500">
                  {sistema.nome}
                </h2>
                <div className="mt-2 flex flex-wrap gap-2">
                  {doSistema.map((s) => (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => setSearch(s.titulo)}
                      className="rounded-full border border-neutral-200 px-3 py-1.5 text-left text-sm text-neutral-700 hover:border-brand-orange hover:text-brand-orange-dark"
                    >
                      {s.titulo}
                    </button>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      )}

      {sintomasFiltrados !== null && sintomasFiltrados.length === 0 && (
        <p className="mt-8 text-neutral-500">
          Nenhum sintoma encontrado pra &quot;{search}&quot;. Tente descrever
          de outro jeito (ex: &quot;barulho no freio&quot; em vez de
          &quot;chiado&quot;), ou apague a busca pra navegar por sistema.
        </p>
      )}

      {sintomasFiltrados !== null && sintomasFiltrados.length > 0 && (
        <div className="mt-8 space-y-5">
          {sintomasFiltrados.map((sintoma) => {
            const causasOrdenadas = [...sintoma.causas].sort(
              (a, b) =>
                PROBABILIDADE_ORDER[a.probabilidade] -
                PROBABILIDADE_ORDER[b.probabilidade]
            );

            return (
              <Card key={sintoma.id}>
                <Badge tone="neutral">{sistemaNomeById[sintoma.sistema]}</Badge>
                <h3 className="mt-3 text-lg font-semibold text-neutral-900">
                  {sintoma.titulo}
                </h3>

                <ul className="mt-4 space-y-3">
                  {causasOrdenadas.map((causa, i) => (
                    <li
                      key={i}
                      className="rounded-lg border border-neutral-200 p-4"
                    >
                      <p className="font-medium text-neutral-900">
                        {causa.descricao}
                      </p>
                      <div className="mt-2 flex flex-wrap gap-2">
                        <Badge tone={PROBABILIDADE_TONE[causa.probabilidade]}>
                          {PROBABILIDADE_LABEL[causa.probabilidade]}
                        </Badge>
                        <Badge tone={URGENCIA_TONE[causa.urgencia]}>
                          {URGENCIA_LABEL[causa.urgencia]}
                        </Badge>
                      </div>
                      <p className="mt-2 text-sm text-neutral-600">
                        Custo estimado:{" "}
                        <strong className="text-neutral-900">
                          {formatCusto(causa.custoMin, causa.custoMax)}
                        </strong>
                      </p>
                    </li>
                  ))}
                </ul>

                {sintoma.perguntasParaMecanico.length > 0 && (
                  <div className="mt-4 rounded-lg bg-neutral-50 p-4">
                    <p className="text-sm font-semibold text-neutral-900">
                      Perguntas pra fazer ao mecânico antes de autorizar
                    </p>
                    <ul className="mt-2 space-y-1.5 text-sm text-neutral-700">
                      {sintoma.perguntasParaMecanico.map((pergunta, i) => (
                        <li key={i} className="flex gap-2">
                          <span aria-hidden className="text-brand-orange-dark">
                            ✓
                          </span>
                          {pergunta}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {sintoma.alertaGolpe && (
                  <div className="mt-4 flex gap-3 rounded-lg border border-amber-200 bg-amber-50 p-4">
                    <AlertTriangle
                      size={18}
                      className="mt-0.5 shrink-0 text-amber-600"
                    />
                    <p className="text-sm text-amber-800">
                      {sintoma.alertaGolpe}
                    </p>
                  </div>
                )}
              </Card>
            );
          })}
        </div>
      )}

      <p className="mt-10 text-xs text-neutral-500">
        Ferramenta educativa — não substitui uma inspeção física feita por um
        profissional de confiança. Sempre que possível, peça pra ver a peça
        desgastada, o código de erro do scanner ou a medição feita antes de
        aprovar um reparo caro.
      </p>
    </main>
  );
}
