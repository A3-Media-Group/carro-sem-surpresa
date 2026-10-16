import type { Metadata } from "next";
import { Directory } from "@/components/Directory";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { RelatedLinks } from "@/components/seo/RelatedLinks";
import { GUIDES } from "@/lib/guides";
import { TOOLS } from "@/lib/tools";
const pageMetadata: Metadata = {
  title: "Guias para Comprar, Manter e Economizar com o Carro",
  description:
    "Busque guias sobre carro usado, combustível, viagem, financiamento e manutenção. Entenda os custos e confira fontes antes de decidir.",
};
export const metadata: Metadata = {
  ...pageMetadata,
  alternates: { canonical: "/guias" },
  openGraph: {
    title: String(pageMetadata.title),
    description: pageMetadata.description ?? undefined,
    url: "/guias",
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
  return (
    <main className="motor-container py-12">
      <Breadcrumbs items={[{ href: "/guias", label: "Guias" }]} />
      <span className="section-kicker">LEIA. ENTENDA. DECIDA.</span>
      <h1 className="mt-4 text-4xl font-bold">
        Conhecimento para cada quilômetro.
      </h1>
      <p className="mt-4 max-w-2xl text-neutral-600">
        Encontre respostas para suas dúvidas sobre comprar, manter e usar um
        carro.
      </p>
      <Directory
        items={GUIDES.map((g) => ({
          href: g.href,
          title: g.titulo,
          description: g.resumo,
          category: "Guias",
        }))}
      />
      <RelatedLinks
        kicker="DA LEITURA À PRÁTICA"
        title="Ferramentas para fazer as contas"
        items={TOOLS}
      />
    </main>
  );
}
