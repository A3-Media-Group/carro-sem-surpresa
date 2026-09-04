import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";

// Necessário com output: "export" (ver next.config.ts) — sem isso o
// build falha, porque essas rotas especiais são tratadas como Route
// Handlers dinâmicos por padrão.
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
