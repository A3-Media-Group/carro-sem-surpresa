import type { Metadata } from "next";
import { Directory } from "@/components/Directory";
import { TOOLS, TOOL_CATEGORY_LABELS } from "@/lib/tools";
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
  return (
    <main className="motor-container py-12">
      <span className="section-kicker">MENOS DÚVIDAS. MAIS RESPOSTAS.</span>
      <h1 className="mt-4 text-4xl font-bold">Encontre a ferramenta certa.</h1>
      <p className="mt-4 max-w-2xl text-neutral-600">
        São {TOOLS.length} ferramentas gratuitas para planejar, comparar e
        cuidar do carro. As calculadoras rodam no navegador; consultas podem
        usar serviços externos.
      </p>
      <Directory
        items={TOOLS.map((t) => ({
          href: t.href,
          title: t.title,
          description: t.description,
          category: TOOL_CATEGORY_LABELS[t.category],
        }))}
      />
    </main>
  );
}
