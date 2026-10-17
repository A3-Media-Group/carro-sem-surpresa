import Link from "next/link";
import { siteUrl } from "@/lib/site";
import { JsonLd } from "./JsonLd";

export interface Crumb {
  href: string;
  label: string;
}

/**
 * Trilha "Início › Hub › Página" em HTML estático + BreadcrumbList.
 * O último item é a página atual (sem link, com aria-current).
 */
export function Breadcrumbs({ items }: { items: Crumb[] }) {
  const trail = [{ href: "/", label: "Início" }, ...items];
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: trail.map((crumb, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: crumb.label,
            item: crumb.href === "/" ? siteUrl : `${siteUrl}${crumb.href}`,
          })),
        }}
      />
      <nav aria-label="Trilha de navegação" className="mb-6 text-sm">
        <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-neutral-600">
          {trail.map((crumb, i) => (
            <li key={crumb.href} className="flex items-center gap-2">
              {i > 0 && <span aria-hidden="true">›</span>}
              {i === trail.length - 1 ? (
                <span aria-current="page" className="text-neutral-900">
                  {crumb.label}
                </span>
              ) : (
                <Link
                  href={crumb.href}
                  prefetch={false}
                  className="text-brand-orange-dark hover:underline"
                >
                  {crumb.label}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
