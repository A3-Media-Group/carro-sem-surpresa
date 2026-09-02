"use client";

import { useMemo, useState } from "react";
import { Siren } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { PageHeading } from "@/components/ui/PageHeading";
import { formatBRL, formatDateBR } from "@/lib/format";
import multasData from "@/lib/data/multas-transito.json";

const DIACRITICS_REGEX = new RegExp("[\\u0300-\\u036f]", "g");

function normalize(text: string): string {
  return text.normalize("NFD").replace(DIACRITICS_REGEX, "").toLowerCase();
}

const BADGE_TONE_BY_NATUREZA = {
  leve: "neutral",
  media: "warning",
  grave: "orange",
  gravissima: "danger",
} as const;

const naturezaNomeById = Object.fromEntries(
  multasData.naturezas.map((n) => [n.id, n.nome])
);

const infracoesOrdenadas = [...multasData.infracoes].sort(
  (a, b) => b.pontos - a.pontos
);

export function MultasTable() {
  const [search, setSearch] = useState("");

  const infracoesFiltradas = useMemo(() => {
    const termo = normalize(search.trim());
    if (!termo) return infracoesOrdenadas;
    return infracoesOrdenadas.filter(
      (infracao) =>
        normalize(infracao.descricao).includes(termo) ||
        normalize(naturezaNomeById[infracao.natureza] ?? "").includes(termo)
    );
  }, [search]);

  return (
    <main className="mx-auto max-w-4xl px-6 py-12">
      <PageHeading icon={Siren} title="Tabela de Multas de Trânsito">
        Valor e pontos na CNH das infrações mais comuns — os mesmos em
        qualquer estado, porque são fixados pelo CTB, não por lei estadual.
      </PageHeading>

      <div className="mt-6 space-y-2 rounded-lg bg-neutral-50 p-4 text-sm text-neutral-600">
        <p>
          <strong>Desconto por pagamento antecipado:</strong>{" "}
          {multasData.referencia.descontoPagamentoAntecipado}
        </p>
        <p>
          Dados de referência: {formatDateBR(multasData.referencia.dataAtualizacao)}.{" "}
          {multasData.referencia.aviso}
        </p>
      </div>

      <label className="mt-8 block">
        <span className="sr-only">Buscar infração</span>
        <input
          type="search"
          placeholder="Buscar por infração (ex: celular, velocidade, cinto)"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="h-11 w-full rounded-md border border-neutral-300 px-3 text-base focus:border-brand-orange focus:outline-none focus:ring-1 focus:ring-brand-orange"
        />
      </label>

      <div className="mt-6 overflow-x-auto rounded-lg border border-neutral-200">
        <table className="w-full text-left text-sm">
          <thead className="bg-neutral-50 text-neutral-500">
            <tr>
              <th className="px-4 py-3 font-medium">Infração</th>
              <th className="px-4 py-3 font-medium">Natureza</th>
              <th className="px-4 py-3 font-medium">Valor</th>
              <th className="px-4 py-3 font-medium">Pontos</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-neutral-100">
            {infracoesFiltradas.map((infracao) => (
              <tr key={infracao.id}>
                <td className="px-4 py-3 text-neutral-900">
                  {infracao.descricao}
                  {infracao.observacao && (
                    <p className="mt-1 text-xs text-neutral-500">
                      {infracao.observacao}
                    </p>
                  )}
                </td>
                <td className="px-4 py-3">
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge
                      tone={
                        BADGE_TONE_BY_NATUREZA[
                          infracao.natureza as keyof typeof BADGE_TONE_BY_NATUREZA
                        ]
                      }
                    >
                      {naturezaNomeById[infracao.natureza]}
                    </Badge>
                    {!infracao.confirmado && (
                      <Badge tone="warning">confirmar</Badge>
                    )}
                  </div>
                </td>
                <td className="px-4 py-3 font-medium text-neutral-900">
                  {formatBRL(infracao.valor)}
                </td>
                <td className="px-4 py-3 text-neutral-500">
                  {infracao.pontos}
                </td>
              </tr>
            ))}
            {infracoesFiltradas.length === 0 && (
              <tr>
                <td
                  colSpan={4}
                  className="px-4 py-6 text-center text-neutral-500"
                >
                  Nenhuma infração encontrada para &quot;{search}&quot;.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <p className="mt-6 text-xs text-neutral-500">
        Valores nacionais estimados para fins informativos — confira sempre
        a notificação oficial e o órgão de trânsito do seu estado antes de
        pagar ou recorrer. Itens marcados &quot;confirmar&quot; têm a
        classificação típica, mas podem variar por interpretação do agente
        autuador.
      </p>
    </main>
  );
}
