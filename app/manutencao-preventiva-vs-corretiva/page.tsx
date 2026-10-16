import type { Metadata } from "next";
import { ToolPage } from "@/components/tools/ToolPage";
import { conteudo } from "./conteudo";
import { ManutencaoSimulator } from "./ManutencaoSimulator";

const pageMetadata: Metadata = {
  title: "Manutenção Preventiva vs. Corretiva: Quanto Você Economiza",
  description:
    "Veja as próximas revisões do seu carro (óleo, correia dentada, amortecedores, pneus) e quanto custa fazer preventivo em vez de deixar quebrar.",
};

export const metadata: Metadata = {
  ...pageMetadata,
  alternates: { canonical: "/manutencao-preventiva-vs-corretiva" },
  openGraph: {
    title: String(pageMetadata.title),
    description: pageMetadata.description ?? undefined,
    url: "/manutencao-preventiva-vs-corretiva",
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
    <ToolPage
      href="/manutencao-preventiva-vs-corretiva"
      content={conteudo}
      className="mx-auto max-w-4xl px-6 py-12"
    >
      <ManutencaoSimulator />
    </ToolPage>
  );
}
