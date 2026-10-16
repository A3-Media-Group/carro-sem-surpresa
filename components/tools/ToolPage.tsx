import type { ReactNode } from "react";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { RelatedLinks } from "@/components/seo/RelatedLinks";
import { relatedGuidesForTool } from "@/lib/related";
import { siteUrl } from "@/lib/site";
import { TOOLS, type ToolCategory } from "@/lib/tools";

/**
 * Texto de apoio de cada ferramenta, renderizado em HTML estático abaixo
 * do formulário (que depende de JavaScript). Fica em `conteudo.tsx` na
 * pasta da rota, para o lastmod do sitemap acompanhar a página certa.
 */
export interface ToolContent {
  /** Como a ferramenta funciona e quais dados usar. */
  howItWorks: ReactNode[];
  /** Fórmulas exatamente como implementadas em lib/calculators. */
  formula?: string[];
  formulaNote?: ReactNode;
  /** Exemplo resolvido, com os valores pré-preenchidos do formulário. */
  example?: ReactNode[];
  /** Perguntas frequentes visíveis — só elas viram FAQPage. */
  faq: { question: string; answer: string }[];
  sources?: { label: string; url: string }[];
}

const APPLICATION_CATEGORY: Record<ToolCategory, string> = {
  calculadora: "FinanceApplication",
  consulta: "ReferenceApplication",
  gerador: "BusinessApplication",
  diagnostico: "UtilitiesApplication",
  checklist: "UtilitiesApplication",
};

export function ToolPage({
  href,
  content,
  className,
  children,
}: {
  href: string;
  content: ToolContent;
  className: string;
  children: ReactNode;
}) {
  const tool = TOOLS.find((t) => t.href === href)!;
  const url = `${siteUrl}${href}`;
  const guides = relatedGuidesForTool(href);

  return (
    <main className={className}>
      {/* Sem aggregateRating/review: o site não coleta avaliações. */}
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebApplication",
          name: tool.title,
          description: tool.description,
          url,
          applicationCategory: APPLICATION_CATEGORY[tool.category],
          operatingSystem: "Web",
          browserRequirements: "Requer JavaScript",
          inLanguage: "pt-BR",
          isAccessibleForFree: true,
          offers: { "@type": "Offer", price: "0", priceCurrency: "BRL" },
          provider: {
            "@type": "Organization",
            name: "Carro Sem Surpresa",
            url: siteUrl,
          },
        }}
      />
      {content.faq.length > 0 && (
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: content.faq.map((item) => ({
              "@type": "Question",
              name: item.question,
              acceptedAnswer: { "@type": "Answer", text: item.answer },
            })),
          }}
        />
      )}
      <Breadcrumbs
        items={[
          { href: "/ferramentas", label: "Ferramentas" },
          { href, label: tool.title },
        ]}
      />

      {children}

      <section className="article-content mt-12 max-w-3xl space-y-5">
        <h2 className="text-2xl font-bold">Como funciona</h2>
        {content.howItWorks.map((p, i) => (
          <p key={i}>{p}</p>
        ))}

        {content.formula && (
          <>
            <h2 className="!mt-10 text-2xl font-bold">Fórmula usada</h2>
            <ul className="space-y-2 rounded-xl bg-neutral-100 p-5 font-mono text-sm">
              {content.formula.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
            {content.formulaNote && <p>{content.formulaNote}</p>}
          </>
        )}

        {content.example && (
          <>
            <h2 className="!mt-10 text-2xl font-bold">Exemplo resolvido</h2>
            {content.example.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </>
        )}

        {content.faq.length > 0 && (
          <>
            <h2 className="!mt-10 text-2xl font-bold">Perguntas frequentes</h2>
            {content.faq.map((item) => (
              <details key={item.question} className="rounded-xl border p-5">
                <summary className="cursor-pointer font-semibold">
                  {item.question}
                </summary>
                <p className="mt-3">{item.answer}</p>
              </details>
            ))}
          </>
        )}

        {content.sources && (
          <p className="text-sm">
            Referências:{" "}
            {content.sources.map((s, i) => (
              <span key={s.url}>
                {i > 0 && "; "}
                <a href={s.url}>{s.label}</a>
              </span>
            ))}
            .
          </p>
        )}
      </section>

      <RelatedLinks
        kicker="ENTENDA ANTES DE DECIDIR"
        title="Guias relacionados"
        items={guides.map((g) => ({
          href: g.href,
          title: g.titulo,
          description: g.resumo,
        }))}
      />
    </main>
  );
}
