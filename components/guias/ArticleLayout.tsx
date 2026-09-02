import Link from "next/link";
import type { ReactNode } from "react";

/**
 * Layout compartilhado dos artigos de /guias: título, subtítulo e um
 * wrapper de conteúdo com classes de tipografia consistentes (sem
 * depender do plugin @tailwindcss/typography, que não está instalado).
 * Use os elementos <ArticleH2>, <ArticleP> etc. abaixo dentro do
 * conteúdo para manter o espaçamento/estilo padronizado.
 */
export function ArticleLayout({
  title,
  dek,
  children,
}: {
  title: string;
  dek?: string;
  children: ReactNode;
}) {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <Link
        href="/guias"
        className="text-sm font-medium text-orange-600 hover:underline"
      >
        ← Voltar para os guias
      </Link>
      <h1 className="mt-4 text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
        {title}
      </h1>
      {dek && <p className="mt-3 text-lg text-neutral-600">{dek}</p>}
      <div className="mt-8 space-y-4">{children}</div>
    </main>
  );
}

export function ArticleH2({ children }: { children: ReactNode }) {
  return (
    <h2 className="!mt-10 text-2xl font-bold text-neutral-900">{children}</h2>
  );
}

export function ArticleP({ children }: { children: ReactNode }) {
  return <p className="leading-relaxed text-neutral-700">{children}</p>;
}

export function ArticleList({ children }: { children: ReactNode }) {
  return (
    <ul className="list-disc space-y-2 pl-6 leading-relaxed text-neutral-700">
      {children}
    </ul>
  );
}

export function ArticleOrderedList({ children }: { children: ReactNode }) {
  return (
    <ol className="list-decimal space-y-2 pl-6 leading-relaxed text-neutral-700">
      {children}
    </ol>
  );
}

export function ArticleCallout({ children }: { children: ReactNode }) {
  return (
    <div className="rounded-lg border border-orange-200 bg-orange-50 p-5 text-neutral-800">
      {children}
    </div>
  );
}

export function ArticleTable({ children }: { children: ReactNode }) {
  return (
    <div className="overflow-x-auto rounded-lg border border-neutral-200">
      <table className="w-full text-left text-sm">{children}</table>
    </div>
  );
}
