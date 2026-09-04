import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";
import { TOOLS } from "@/lib/tools";

// Necessário com output: "export" (ver next.config.ts) — sem isso o
// build falha, porque essas rotas especiais são tratadas como Route
// Handlers dinâmicos por padrão.
export const dynamic = "force-static";

const GUIAS_SLUGS = [
  "como-calcular-se-carro-cabe-no-orcamento",
  "reduzir-custo-por-km-rodado",
  "faq-custo-de-carro",
];

/**
 * Gera o sitemap.xml dinamicamente a partir das rotas reais do site —
 * a lista de ferramentas vem de lib/tools.ts (a mesma usada na home e
 * no menu), então uma ferramenta nova entra aqui automaticamente.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: siteUrl,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteUrl}/guias`,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/politica-de-privacidade`,
      changeFrequency: "yearly",
      priority: 0.2,
    },
    {
      url: `${siteUrl}/aviso-de-cookies`,
      changeFrequency: "yearly",
      priority: 0.2,
    },
  ];

  const toolRoutes: MetadataRoute.Sitemap = TOOLS.map((tool) => ({
    url: `${siteUrl}${tool.href}`,
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  const guiaRoutes: MetadataRoute.Sitemap = GUIAS_SLUGS.map((slug) => ({
    url: `${siteUrl}/guias/${slug}`,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...toolRoutes, ...guiaRoutes];
}
