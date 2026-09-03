"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { TOOLS } from "@/lib/tools";

export function ToolsDropdown() {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    function handlePointerDown(e: MouseEvent) {
      if (!containerRef.current?.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="menu"
        aria-expanded={open}
        className="flex h-11 items-center gap-1 rounded-md px-3 text-sm font-medium text-white/90 hover:bg-white/10 hover:text-brand-orange"
      >
        Ferramentas
        <ChevronDown
          size={16}
          className={`transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div
          role="menu"
          aria-label="Ferramentas"
          className="absolute right-0 top-full z-50 mt-2 max-h-[80vh] w-[560px] max-w-[90vw] overflow-y-auto rounded-xl border border-neutral-200 bg-white p-3 text-left shadow-lg"
        >
          <div className="grid grid-cols-2 gap-1">
            {TOOLS.map((tool) => (
              <Link
                key={tool.href}
                href={tool.href}
                prefetch={false}
                role="menuitem"
                onClick={() => setOpen(false)}
                className="flex items-start gap-3 rounded-lg p-3 hover:bg-neutral-50"
              >
                <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-orange-50 text-brand-orange-dark">
                  <tool.icon size={18} />
                </span>
                <span>
                  <span className="block text-sm font-semibold text-neutral-900">
                    {tool.title}
                  </span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
