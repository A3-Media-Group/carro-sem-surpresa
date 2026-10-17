import { Brand } from "./Brand";
import Link from "next/link";
import { AdSlot } from "@/components/ads/AdSlot";
import { TOOLS } from "@/lib/tools";
import { GUIDES } from "@/lib/guides";

const FOOTER_LINKS = [
  { href: "/ferramentas", label: "Todas as ferramentas" },
  { href: "/calculadoras", label: "Calculadoras" },
  { href: "/guias", label: "Todos os guias" },
  { href: "/sobre", label: "Sobre e critérios editoriais" },
  { href: "/politica-de-privacidade", label: "Política de Privacidade" },
  { href: "/aviso-de-cookies", label: "Aviso de Cookies" },
];

const linkClass = "text-sm text-white/70 hover:text-brand-orange";

/**
 * O rodapé lista os hubs e todas as ferramentas e guias em HTML
 * estático: assim toda página do site leva o rastreador a todas as
 * outras em um clique, sem depender do menu (que só abre com JS).
 */
export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-graphite text-white">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <AdSlot position="footer" />

        <div className="mt-8 grid gap-8 md:grid-cols-[1fr_1.4fr_1fr]">
          <nav aria-labelledby="footer-ferramentas">
            <h2 id="footer-ferramentas" className="text-sm font-semibold">
              <Link href="/ferramentas" prefetch={false} className="hover:text-brand-orange">
                Ferramentas
              </Link>
            </h2>
            <ul className="mt-3 space-y-2">
              {TOOLS.map((tool) => (
                <li key={tool.href}>
                  <Link href={tool.href} prefetch={false} className={linkClass}>
                    {tool.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <nav aria-labelledby="footer-guias">
            <h2 id="footer-guias" className="text-sm font-semibold">
              <Link href="/guias" prefetch={false} className="hover:text-brand-orange">
                Guias
              </Link>
            </h2>
            <ul className="mt-3 space-y-2">
              {GUIDES.map((guide) => (
                <li key={guide.href}>
                  <Link href={guide.href} prefetch={false} className={linkClass}>
                    {guide.titulo}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <nav aria-labelledby="footer-site">
            <h2 id="footer-site" className="text-sm font-semibold">
              O site
            </h2>
            <ul className="mt-3 space-y-2">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} prefetch={false} className={linkClass}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-10 flex flex-col items-start gap-5 border-t border-white/10 pt-8">
          <Link href="/" prefetch={false}><Brand /></Link>
          <p className="max-w-md text-sm text-white/60">
            © {year} Carro Sem Surpresa. Conteúdo informativo, não substitui
            aconselhamento financeiro, contábil ou jurídico.
          </p>
        </div>
      </div>
    </footer>
  );
}
