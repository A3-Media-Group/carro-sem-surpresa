import Link from "next/link";
import { NEW_GUIDES } from "@/lib/new-guides";
import { ArticleLayout } from "./ArticleLayout";
export function ExpandedGuide({ slug }: { slug: string }) {
  const guide = NEW_GUIDES.find((g) => g.slug === slug)!;
  return (
    <ArticleLayout
      title={guide.title}
      dek={guide.description}
      path={`/guias/${guide.slug}`}
      date="2026-09-13"
    >
      <nav aria-label="Neste guia" className="rounded-xl bg-neutral-100 p-5">
        <p className="font-bold">Neste guia</p>
        <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm">
          {guide.sections.map((s, i) => (
            <li key={s.title}>
              <a href={`#secao-${i + 1}`}>{s.title}</a>
            </li>
          ))}
        </ol>
      </nav>
      {guide.sections.map((s, i) => (
        <section key={s.title}>
          <h2 id={`secao-${i + 1}`} className="mb-5 mt-10 text-2xl font-bold">
            {s.title}
          </h2>
          {s.paragraphs.map((p) => (
            <p className="mb-5 text-neutral-700" key={p}>
              {p}
            </p>
          ))}
        </section>
      ))}
      <div className="my-8 rounded-xl bg-graphite p-6 text-white">
        <h2 className="text-xl font-bold">Coloque em prática</h2>
        <p className="my-3 text-sm text-white/75">
          Use seus próprios dados e veja como o cenário muda.
        </p>
        <Link className="motor-button !no-underline" href={guide.tool}>
          {guide.toolLabel} →
        </Link>
      </div>
      <section>
        <h2 className="text-xl font-bold">Fontes e referências</h2>
        <p className="text-sm text-neutral-600">
          Referências consultadas em 13/09/2026. Exemplos numéricos são
          ilustrativos.
        </p>
        <ul className="list-disc space-y-2 pl-5 text-sm">
          {guide.sources.map((s) => (
            <li key={s.url}>
              <a href={s.url}>{s.label}</a>
            </li>
          ))}
        </ul>
      </section>
    </ArticleLayout>
  );
}
