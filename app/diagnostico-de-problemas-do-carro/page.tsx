import type { Metadata } from "next";
import { ToolPage } from "@/components/tools/ToolPage";
import { conteudo } from "./conteudo";
import { DiagnosticoTool } from "./DiagnosticoTool";

const pageMetadata: Metadata = {
  title: "Diagnóstico de Problemas do Carro: Causas Prováveis e Custo Estimado",
  description:
    "Digite o sintoma do seu carro (barulho, luz no painel, cheiro, vibração) e veja as causas mais prováveis, o nível de urgência, a faixa de custo estimado e o que perguntar ao mecânico antes de autorizar o reparo.",
};

export const metadata: Metadata = {
  ...pageMetadata,
  alternates: { canonical: "/diagnostico-de-problemas-do-carro" },
  openGraph: {
    title: String(pageMetadata.title),
    description: pageMetadata.description ?? undefined,
    url: "/diagnostico-de-problemas-do-carro",
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
      href="/diagnostico-de-problemas-do-carro"
      content={conteudo}
      className="mx-auto max-w-4xl px-6 py-12"
    >
      <DiagnosticoTool />
    </ToolPage>
  );
}
