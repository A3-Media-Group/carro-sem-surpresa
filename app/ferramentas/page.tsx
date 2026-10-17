import type { Metadata } from "next";
import { Suspense } from "react";
import { ToolDirectory } from "@/components/ToolDirectory";
import { Directory } from "@/components/Directory";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { RelatedLinks } from "@/components/seo/RelatedLinks";
import { TOOLS, TOOL_CATEGORY_LABELS } from "@/lib/tools";
import { GUIDES } from "@/lib/guides";
const pageMetadata: Metadata = {
  title: "Ferramentas Gratuitas para o Seu Carro",
  description:
    "Encontre calculadoras, checklist de compra, consultas FIPE e IPVA, recibo e diagnóstico. Busque pelo que precisa, sem cadastro.",
};
export const metadata: Metadata = {
  ...pageMetadata,
  alternates: { canonical: "/ferramentas" },
  openGraph: {
    title: String(pageMetadata.title),
    description: pageMetadata.description ?? undefined,
    url: "/ferramentas",
    type: "website",
    images: [{ url: "/social-card.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: String(pageMetadata.title),
    description: pageMetadata.description ?? undefined,
    images: ["/social-card.png"],
  },
};

export default function Page() {
  const items = TOOLS.map((t) => ({
    href: t.href,
    title: t.title,
    description: t.description,
    category: TOOL_CATEGORY_LABELS[t.category],
  }));
  return (
    <main className="motor-container py-12">
      <Breadcrumbs items={[{ href: "/ferramentas", label: "Ferramentas" }]} />
      <span className="section-kicker">MENOS DÚVIDAS. MAIS RESPOSTAS.</span>
      <h1 className="mt-4 text-4xl font-bold">Encontre a ferramenta certa.</h1>
      <p className="mt-4 max-w-2xl text-neutral-600">
        São {TOOLS.length} ferramentas gratuitas para planejar, comparar e
        cuidar do carro. As calculadoras rodam no navegador; consultas podem
        usar serviços externos.
      </p>
      <Suspense fallback={<Directory items={items} />}>
        <ToolDirectory items={items} />
      </Suspense>
      <RelatedLinks
        kicker="ANTES DE CALCULAR"
        title="Guias para entender cada conta"
        items={GUIDES.map((g) => ({
          href: g.href,
          title: g.titulo,
          description: g.resumo,
        }))}
      />
    </main>
  );
}
