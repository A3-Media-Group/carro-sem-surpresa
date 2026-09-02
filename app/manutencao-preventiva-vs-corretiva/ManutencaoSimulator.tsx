"use client";

import { useMemo, useState } from "react";
import { SelectField } from "@/components/ui/SelectField";
import { NumberField } from "@/components/ui/NumberField";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import {
  computeManutencao,
  type CategoriaVeiculo,
} from "@/lib/calculators/manutencao";
import { formatBRL, formatNumber } from "@/lib/format";
import manutencaoData from "@/lib/data/manutencao.json";

const categoriaOptions = manutencaoData.categorias.map((c) => ({
  value: c.id,
  label: c.nome,
}));

export function ManutencaoSimulator() {
  const [categoria, setCategoria] = useState<CategoriaVeiculo>("popular");
  const [kmAtual, setKmAtual] = useState(30000);

  const itens = useMemo(
    () => computeManutencao(categoria, kmAtual),
    [categoria, kmAtual]
  );

  return (
    <main className="mx-auto max-w-4xl px-6 py-12">
      <header className="max-w-2xl">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Manutenção Preventiva vs. Corretiva
        </h1>
        <p className="mt-3 text-neutral-600">
          O item que você não troca na hora certa quase sempre sai mais caro
          depois. Veja o que está vencendo no seu carro e quanto você
          economiza fazendo o preventivo.
        </p>
      </header>

      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        <SelectField
          label="Categoria do veículo"
          value={categoria}
          onChange={(value) => setCategoria(value as CategoriaVeiculo)}
          options={categoriaOptions}
        />
        <NumberField
          label="Km atual do veículo"
          value={kmAtual}
          onChange={setKmAtual}
          suffix="km"
        />
      </div>

      <div className="mt-10 space-y-4">
        {itens.map((item) => (
          <Card key={item.id}>
            <div className="flex flex-wrap items-start justify-between gap-3">
              <h2 className="text-lg font-semibold text-neutral-900">
                {item.nome}
              </h2>
              {!item.aplicavel && <Badge>Não se aplica</Badge>}
              {item.aplicavel && item.vencido && (
                <Badge tone="danger">Revisão vencida ou próxima</Badge>
              )}
              {item.aplicavel && !item.vencido && (
                <Badge tone="success">Em dia</Badge>
              )}
            </div>

            {!item.aplicavel && (
              <p className="mt-2 text-sm text-neutral-500">{item.motivo}</p>
            )}

            {item.aplicavel && (
              <div className="mt-4 space-y-4">
                <p className="text-sm text-neutral-600">
                  Próxima troca prevista aos{" "}
                  <strong>{formatNumber(item.proximaTrocaKm ?? 0)} km</strong>{" "}
                  ({formatNumber(item.kmRestantes ?? 0)} km a partir de agora).
                </p>

                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="rounded-lg bg-neutral-50 p-4">
                    <p className="text-xs font-medium uppercase tracking-wide text-neutral-500">
                      Fazendo preventivo
                    </p>
                    <p className="mt-1 text-xl font-bold text-neutral-900">
                      {formatBRL(item.custoPreventivo ?? 0)}
                    </p>
                  </div>
                  <div className="rounded-lg bg-red-50 p-4">
                    <p className="text-xs font-medium uppercase tracking-wide text-red-600">
                      Se virar corretivo
                    </p>
                    <p className="mt-1 text-xl font-bold text-red-700">
                      {formatBRL(item.custoCorretivo ?? 0)}
                    </p>
                  </div>
                </div>

                <p className="text-sm text-neutral-600">
                  {item.descricaoCorretivo}
                </p>

                <p className="text-sm font-medium text-emerald-700">
                  Você economiza até{" "}
                  {formatBRL(item.economiaFazendoPreventivo ?? 0)} fazendo o
                  preventivo em vez de esperar quebrar.
                </p>
              </div>
            )}
          </Card>
        ))}
      </div>

      <p className="mt-10 text-xs text-neutral-500">
        Valores estimados para fins informativos, não substituem
        aconselhamento financeiro nem a avaliação de um mecânico de
        confiança sobre o estado real do seu carro.
      </p>
    </main>
  );
}
