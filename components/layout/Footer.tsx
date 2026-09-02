import Link from "next/link";
import { AdSlot } from "@/components/ads/AdSlot";

const FOOTER_LINKS = [
  { href: "/politica-de-privacidade", label: "Política de Privacidade" },
  { href: "/aviso-de-cookies", label: "Aviso de Cookies" },
  { href: "/guias", label: "Guias" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-graphite text-white">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <AdSlot position="footer" />

        <div className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-md text-sm text-white/60">
            © {year} Carro Sem Surpresa. Conteúdo informativo, não substitui
            aconselhamento financeiro, contábil ou jurídico.
          </p>
          <ul className="flex flex-wrap gap-x-6 gap-y-3">
            {FOOTER_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  prefetch={false}
                  className="flex min-h-11 items-center text-sm text-white/70 hover:text-brand-orange"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
