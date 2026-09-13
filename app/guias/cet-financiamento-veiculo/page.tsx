import type { Metadata } from "next";
import { NEW_GUIDES } from "@/lib/new-guides";
import { ExpandedGuide } from "@/components/guias/ExpandedGuide";
const guide = NEW_GUIDES.find((g) => g.slug === "cet-financiamento-veiculo")!;
const pageMetadata: Metadata = {
  title: guide.title,
  description: guide.description,
};
export const metadata: Metadata = {
  ...pageMetadata,
  alternates: { canonical: "/guias/cet-financiamento-veiculo" },
  openGraph: {
    title: String(pageMetadata.title),
    description: pageMetadata.description ?? undefined,
    url: "/guias/cet-financiamento-veiculo",
    type: "article",
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
  return <ExpandedGuide slug="cet-financiamento-veiculo" />;
}
