"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Search } from "lucide-react";
export interface DirectoryItem {
  href: string;
  title: string;
  description: string;
  category: string;
}
function normalize(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}
export function Directory({ items }: { items: DirectoryItem[] }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("Todos");
  const categories = ["Todos", ...new Set(items.map((i) => i.category))];
  const filtered = items.filter(
    (i) =>
      (category === "Todos" || i.category === category) &&
      normalize(i.title + " " + i.description).includes(
        normalize(query.trim()),
      ),
  );
  return (
    <div className="mt-8">
      <label className="flex items-center gap-3 rounded-xl border border-neutral-300 bg-white px-4">
        <Search aria-hidden size={18} />
        <span className="sr-only">Buscar no diretório</span>
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="O que você quer entender? Ex.: viagem, gasolina, usado"
          className="h-14 w-full bg-transparent text-sm outline-none"
        />
      </label>
      <div
        className="my-5 flex flex-wrap gap-2"
        role="group"
        aria-label="Filtrar por tipo"
      >
        {categories.map((c) => (
          <button
            key={c}
            type="button"
            aria-pressed={category === c}
            onClick={() => setCategory(c)}
            className={`min-h-10 rounded-full border px-4 text-xs font-semibold ${category === c ? "border-graphite bg-graphite text-white" : "border-neutral-200 bg-white text-neutral-700"}`}
          >
            {c}
          </button>
        ))}
      </div>
      <p className="mb-4 text-xs text-neutral-600" aria-live="polite">
        {filtered.length} {filtered.length === 1 ? "resultado" : "resultados"}
      </p>
      <div className="grid gap-4 sm:grid-cols-2">
        {filtered.map((i) => (
          <Link
            key={i.href}
            href={i.href}
            prefetch={false}
            className="directory-card"
          >
            <span className="section-kicker">{i.category}</span>
            <h2>{i.title}</h2>
            <p>{i.description}</p>
            <span className="quiet-link mt-5">
              Explorar <ArrowUpRight size={15} />
            </span>
          </Link>
        ))}
      </div>
      {!filtered.length && (
        <div className="rounded-xl border border-neutral-200 p-6">
          <p>
            Nenhum resultado. Tente um termo mais curto ou remova os filtros.
          </p>
          <button
            className="motor-button mt-4"
            onClick={() => {
              setQuery("");
              setCategory("Todos");
            }}
          >
            Ver tudo
          </button>
        </div>
      )}
    </div>
  );
}
