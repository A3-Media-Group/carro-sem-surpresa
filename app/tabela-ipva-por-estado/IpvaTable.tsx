"use client";

import { useMemo, useState } from "react";
import { Badge } from "@/components/ui/Badge";
import { formatDateBR, formatNumber } from "@/lib/format";
import ipvaData from "@/lib/data/ipva-por-estado.json";

const DIACRITICS_REGEX = new RegExp("[\\u0300-\\u036f]", "g");

function normalize(text: string): string {
  return text.normalize("NFD").replace(DIACRITICS_REGEX, "").toLowerCase();
}

const estadosOrdenados = [...ipvaData.estados].sort((a, b) =>
  a.nome.localeCompare(b.nome, "pt-BR")
);

export function IpvaTable() {
  const [search, setSearch] = useState("");

  const estadosFiltrados = useMemo(() => {
    const termo = normalize(search.trim());
    if (!termo) return estadosOrdenados;
    return estadosOrdenados.filter(
      (estado) =>
        normalize(estado.nome).includes(termo) ||
        normalize(estado.uf).includes(termo)
    );
  }, [search]);

  const { isencaoNacional } = ipvaData.referencia;

  return (
    <main className="mx-auto max-w-4xl px-6 py-12">
      <header className="max-w-2xl">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Tabela de Isenção de IPVA por Estado
        </h1>
        <p className="mt-3 text-neutral-600">
          Alíquota de IPVA para carro de passeio e a regra de isenção para
          carros antigos, estado por estado.
        </p>
      </header>

      <div className="mt-6 space-y-2 rounded-lg bg-neutral-50 p-4 text-sm text-neutral-600">
        <p>
          <strong>Isenção nacional ({isencaoNacional.baseLegal}):</strong>{" "}
          {isencaoNacional.regra} {isencaoNacional.excecoes}
        </p>
        <p>
          Dados de referência: {formatDateBR(ipvaData.referencia.dataAtualizacao)}.{" "}
          {ipvaData.referencia.aviso}
        </p>
      </div>

      <label className="mt-8 block">
        <span className="sr-only">Buscar por estado ou sigla</span>
        <input
          type="search"
          placeholder="Buscar por estado ou sigla (ex: São Paulo, SP)"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="h-11 w-full rounded-md border border-neutral-300 px-3 text-base focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500"
        />
      </label>

      <div className="mt-6 overflow-x-auto rounded-lg border border-neutral-200">
        <table className="w-full text-left text-sm">
          <thead className="bg-neutral-50 text-neutral-500">
            <tr>
              <th className="px-4 py-3 font-medium">Estado</th>
              <th className="px-4 py-3 font-medium">UF</th>
              <th className="px-4 py-3 font-medium">
                Alíquota (carro de passeio)
              </th>
              <th className="px-4 py-3 font-medium">Isenção</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-neutral-100">
            {estadosFiltrados.map((estado) => (
              <tr key={estado.uf}>
                <td className="px-4 py-3 text-neutral-900">{estado.nome}</td>
                <td className="px-4 py-3 text-neutral-500">{estado.uf}</td>
                <td className="px-4 py-3">
                  <div className="flex flex-wrap items-center gap-2">
                    <span>
                      {formatNumber(estado.aliquotaCarroPasseio, {
                        maximumFractionDigits: 2,
                      })}
                      % ao ano
                    </span>
                    {!estado.confirmado && (
                      <Badge tone="warning">estimativa</Badge>
                    )}
                  </div>
                </td>
                <td className="px-4 py-3 text-neutral-500">
                  {estado.anosIsencao} anos ou mais
                </td>
              </tr>
            ))}
            {estadosFiltrados.length === 0 && (
              <tr>
                <td
                  colSpan={4}
                  className="px-4 py-6 text-center text-neutral-400"
                >
                  Nenhum estado encontrado para &quot;{search}&quot;.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <p className="mt-6 text-xs text-neutral-400">
        Valores estimados para fins informativos. A legislação de IPVA muda
        com frequência — confirme sempre a alíquota vigente no site oficial
        do Detran/Sefaz do seu estado antes de tomar decisões.
      </p>
    </main>
  );
}
