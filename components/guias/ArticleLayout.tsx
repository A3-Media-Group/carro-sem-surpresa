import Link from "next/link";
import type { ReactNode } from "react";
import { AdSlot } from "@/components/ads/AdSlot";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { RelatedLinks } from "@/components/seo/RelatedLinks";
import {
  relatedGuidesForGuide,
  relatedToolsForGuide,
} from "@/lib/related";

/**
 * Layout compartilhado dos artigos de /guias: título, subtítulo e um
 * wrapper de conteúdo com classes de tipografia consistentes (sem
 * depender do plugin @tailwindcss/typography, que não está instalado).
 * Use os elementos <ArticleH2>, <ArticleP> etc. abaixo dentro do
 * conteúdo para manter o espaçamento/estilo padronizado.
 *
 * Também é onde ficam os AdSlots "in-between" (entre o título e o
 * corpo do artigo) e "sidebar" (coluna lateral, só em telas grandes).
 */
export function ArticleLayout({
  title,
  dek,
  children,
  path,
  date,
}: {
  title: string;
  dek?: string;
  children: ReactNode;
  path?: string;
  date?: string;
}) {
  return (
    <main className="mx-auto w-full max-w-6xl px-6 py-12">
      {path && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              headline: title,
              description: dek,
              inLanguage: "pt-BR",
              mainEntityOfPage: `https://carrosemsurpresa.com.br${path}`,
              author: {
                "@type": "Organization",
                name: "Carro Sem Surpresa",
                url: "https://carrosemsurpresa.com.br/sobre",
              },
              ...(date ? { datePublished: date, dateModified: date } : {}),
            }).replace(/</g, "\\u003c"),
          }}
        />
      )}
      <div className="lg:grid lg:grid-cols-[1fr_300px] lg:items-start lg:gap-10">
        <div className="mx-auto w-full max-w-3xl lg:mx-0">
          <Breadcrumbs
            items={[
              { href: "/guias", label: "Guias" },
              ...(path ? [{ href: path, label: title }] : []),
            ]}
          />
          <h1 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
            {title}
          </h1>
          {dek && <p className="mt-3 text-lg text-neutral-600">{dek}</p>}
          <p className="mt-5 text-xs text-neutral-600">
            Por{" "}
            <Link href="/sobre" className="underline">
              Carro Sem Surpresa
            </Link>
            {date && (
              <>
                {" "}
                · Publicado em{" "}
                <time dateTime={date}>
                  {date.split("-").reverse().join("/")}
                </time>
              </>
            )}
          </p>

          <AdSlot position="in-between" className="my-8" />

          <div className="article-content space-y-4">{children}</div>

          {path && (
            <>
              <RelatedLinks
                kicker="FAÇA A CONTA"
                title="Ferramentas para este assunto"
                items={relatedToolsForGuide(path)}
              />
              <RelatedLinks
                kicker="CONTINUE LENDO"
                title="Guias relacionados"
                items={relatedGuidesForGuide(path).map((g) => ({
                  href: g.href,
                  title: g.titulo,
                  description: g.resumo,
                }))}
              />
            </>
          )}
        </div>

        <aside className="hidden lg:sticky lg:top-24 lg:block">
          <div className="mb-6 rounded-xl border border-neutral-200 bg-white p-6">
            <p className="section-kicker">DA LEITURA À PRÁTICA</p>
            <h2 className="my-3 text-lg font-bold">
              Use os números a seu favor.
            </h2>
            <p className="mb-5 text-sm text-neutral-600">
              Simule custos, confira referências e organize sua próxima decisão.
            </p>
            <Link href="/ferramentas" className="quiet-link">
              Explorar ferramentas →
            </Link>
          </div>
          <AdSlot position="sidebar" />
        </aside>
      </div>
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
