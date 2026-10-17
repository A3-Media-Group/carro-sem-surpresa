"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { TOOLS } from "@/lib/tools";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  const button = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    function escape(event: KeyboardEvent) {
      if (event.key === "Escape" && open) {
        setOpen(false);
        button.current?.focus();
      }
    }
    document.addEventListener("keydown", escape);
    return () => document.removeEventListener("keydown", escape);
  }, [open]);

  return (
    <div className="md:hidden">
      <button
        type="button"
        ref={button}
        aria-controls="mobile-navigation"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-label={open ? "Fechar menu" : "Abrir menu"}
        className="flex h-11 w-11 items-center justify-center rounded-md text-white hover:bg-white/10"
      >
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>

      {open && (
        <nav
          id="mobile-navigation"
          aria-label="Menu principal"
          className="absolute inset-x-0 top-20 z-40 max-h-[calc(100dvh-5rem)] overflow-y-auto border-t border-white/10 bg-graphite px-6 py-4 shadow-lg"
        >
          <ul className="space-y-1">
            <li>
              <Link
                href="/ferramentas"
                prefetch={false}
                onClick={() => setOpen(false)}
                className="flex min-h-11 items-center rounded-md px-3 text-base font-semibold text-white hover:bg-white/10 hover:text-brand-orange"
              >
                Todas as ferramentas
              </Link>
            </li>
            {TOOLS.map((tool) => (
              <li key={tool.href}>
                <Link
                  href={tool.href}
                  prefetch={false}
                  onClick={() => setOpen(false)}
                  className="flex min-h-11 items-center gap-2 rounded-md px-3 text-base font-medium text-white hover:bg-white/10 hover:text-brand-orange"
                >
                  <tool.icon size={18} className="shrink-0 text-white/60" />
                  {tool.title}
                </Link>
              </li>
            ))}
            <li className="mt-1 border-t border-white/10 pt-1">
              <Link
                href="/calculadoras"
                prefetch={false}
                onClick={() => setOpen(false)}
                className="flex min-h-11 items-center rounded-md px-3 text-base font-medium text-white hover:bg-white/10 hover:text-brand-orange"
              >
                Calculadoras
              </Link>
            </li>
            <li>
              <Link
                href="/guias"
                prefetch={false}
                onClick={() => setOpen(false)}
                className="flex min-h-11 items-center rounded-md px-3 text-base font-medium text-white hover:bg-white/10 hover:text-brand-orange"
              >
                Guias
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
}
