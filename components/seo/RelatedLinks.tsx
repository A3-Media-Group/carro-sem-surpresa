import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export interface RelatedItem {
  href: string;
  title: string;
  description: string;
}

/** Bloco de links contextuais (ferramenta ↔ guia), sempre em HTML estático. */
export function RelatedLinks({
  title,
  kicker,
  items,
}: {
  title: string;
  kicker: string;
  items: RelatedItem[];
}) {
  if (items.length === 0) return null;
  return (
    <section className="mt-12" aria-labelledby={`rel-${kicker}`}>
      <p className="section-kicker">{kicker}</p>
      <h2 id={`rel-${kicker}`} className="mt-2 text-2xl font-bold">
        {title}
      </h2>
      <ul className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              prefetch={false}
              className="block h-full rounded-xl border border-neutral-200 bg-white p-5 !no-underline transition hover:border-brand-orange/50 hover:shadow-md"
            >
              <span className="block font-semibold text-neutral-900">
                {item.title}
              </span>
              <span className="mt-2 block text-sm text-neutral-600">
                {item.description}
              </span>
              <span className="quiet-link mt-4">
                Abrir <ArrowUpRight size={15} />
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
