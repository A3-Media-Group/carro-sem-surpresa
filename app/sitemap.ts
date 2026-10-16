import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";
import { GUIDES } from "@/lib/guides";
import { GUIDE_DATES } from "@/lib/guide-dates";
import { lastCommitDate } from "@/lib/lastmod";
import { TOOLS } from "@/lib/tools";

// Necessário com output: "export" (ver next.config.ts) — sem isso o
// build falha, porque essas rotas especiais são tratadas como Route
// Handlers dinâmicos por padrão.
export const dynamic = "force-static";

/**
 * Gera o sitemap.xml dinamicamente a partir das rotas reais do site —
 * a lista de ferramentas vem de lib/tools.ts (a mesma usada na home e
 * no menu), então uma ferramenta nova entra aqui automaticamente.
 *
 * <lastmod> é real: para guias, a data do último ajuste de texto
 * (lib/guide-dates.ts, a mesma do schema Article); para as demais
 * páginas, o último commit que mexeu nos arquivos de conteúdo delas.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${siteUrl}/sobre`,
      lastModified: lastCommitDate(["app/sobre"]),
      changeFrequency: "yearly",
      priority: 0.4,
    },
    {
      url: siteUrl,
      lastModified: lastCommitDate(["app/page.tsx", "components/home"]),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteUrl}/guias`,
      lastModified: lastCommitDate([
        "app/guias/page.tsx",
        "lib/guides.ts",
        "lib/new-guides.ts",
      ]),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/calculadoras`,
      lastModified: lastCommitDate(["app/calculadoras", "lib/tools.ts"]),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/ferramentas`,
      lastModified: lastCommitDate(["app/ferramentas", "lib/tools.ts"]),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/politica-de-privacidade`,
      lastModified: lastCommitDate(["app/politica-de-privacidade"]),
      changeFrequency: "yearly",
      priority: 0.2,
    },
    {
      url: `${siteUrl}/aviso-de-cookies`,
      lastModified: lastCommitDate(["app/aviso-de-cookies"]),
      changeFrequency: "yearly",
      priority: 0.2,
    },
  ];

  const toolRoutes: MetadataRoute.Sitemap = TOOLS.map((tool) => ({
    url: `${siteUrl}${tool.href}`,
    lastModified: lastCommitDate([`app${tool.href}`]),
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  const guiaRoutes: MetadataRoute.Sitemap = GUIDES.map((guide) => ({
    url: `${siteUrl}${guide.href}`,
    lastModified: GUIDE_DATES[guide.href]?.modified,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...toolRoutes, ...guiaRoutes];
}
