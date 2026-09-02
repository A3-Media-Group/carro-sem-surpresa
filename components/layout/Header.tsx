import Link from "next/link";
import { NAV_LINKS } from "./nav-links";
import { MobileNav } from "./MobileNav";

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-graphite text-white">
      <div className="relative mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/" prefetch={false} className="text-lg font-bold tracking-tight">
          Carro <span className="text-brand-orange">Sem Surpresa</span>
        </Link>

        {/* prefetch={false}: o header aparece em toda página, então o
            prefetch automático baixaria em segundo plano o JS de todas
            as ferramentas em toda navegação — inclusive o jsPDF do
            recibo (~450KB), sem necessidade. */}
        <nav aria-label="Menu principal" className="hidden sm:block">
          <ul className="flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  prefetch={false}
                  className="flex h-11 items-center rounded-md px-3 text-sm font-medium text-white/90 hover:bg-white/10 hover:text-brand-orange"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <MobileNav />
      </div>
    </header>
  );
}
