"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { TOOLS } from "@/lib/tools";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="sm:hidden">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-label={open ? "Fechar menu" : "Abrir menu"}
        className="flex h-11 w-11 items-center justify-center rounded-md text-white hover:bg-white/10"
      >
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>

      {open && (
        <nav
          aria-label="Menu principal"
          className="absolute inset-x-0 top-16 z-40 max-h-[calc(100vh-4rem)] overflow-y-auto border-t border-white/10 bg-graphite px-6 py-4 shadow-lg"
        >
          <ul className="space-y-1">
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
