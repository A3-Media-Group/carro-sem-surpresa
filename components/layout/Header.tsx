import Image from "next/image";
import Link from "next/link";
import { ToolsDropdown } from "./ToolsDropdown";
import { MobileNav } from "./MobileNav";

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-graphite text-white">
      <div className="relative mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link
          href="/"
          prefetch={false}
          className="flex items-center gap-2 text-lg font-bold tracking-tight"
        >
          <Image
            src="/logo-icon.png"
            alt=""
            width={562}
            height={241}
            priority
            className="h-9 w-auto"
          />
          <span>
            Carro <span className="text-brand-orange">Sem Surpresa</span>
          </span>
        </Link>

        {/* prefetch={false} nos links: o header aparece em toda página,
            então o prefetch automático baixaria em segundo plano o JS de
            todas as ferramentas em toda navegação — inclusive o jsPDF do
            recibo (~450KB), sem necessidade. */}
        <nav aria-label="Menu principal" className="hidden items-center gap-1 sm:flex">
          <ToolsDropdown />
          <Link
            href="/guias"
            prefetch={false}
            className="flex h-11 items-center rounded-md px-3 text-sm font-medium text-white/90 hover:bg-white/10 hover:text-brand-orange"
          >
            Guias
          </Link>
        </nav>

        <MobileNav />
      </div>
    </header>
  );
}
