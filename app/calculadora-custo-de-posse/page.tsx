import type { Metadata } from "next";
import { ToolPage } from "@/components/tools/ToolPage";
import { conteudo } from "./conteudo";
import { TcoCalculator } from "./TcoCalculator";

const pageMetadata: Metadata = {
  title: "Calculadora do Custo Real de Posse (TCO) de um Carro",
  description:
    "Descubra quanto um carro custa de verdade por mês: depreciação, IPVA, seguro, combustível e manutenção juntos — e compare com andar só de app.",
};

export const metadata: Metadata = {
  ...pageMetadata,
  alternates: { canonical: "/calculadora-custo-de-posse" },
  openGraph: {
    title: String(pageMetadata.title),
    description: pageMetadata.description ?? undefined,
    url: "/calculadora-custo-de-posse",
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
      href="/calculadora-custo-de-posse"
      content={conteudo}
      className="mx-auto max-w-5xl px-6 py-12"
    >
      <TcoCalculator />
    </ToolPage>
  );
}
