"use client";

import { useSearchParams } from "next/navigation";
import { Directory, type DirectoryItem } from "./Directory";

export function ToolDirectory({ items }: { items: DirectoryItem[] }) {
  const params = useSearchParams();
  const query = (params.get("q") ?? "").slice(0, 120);
  return <Directory key={query} items={items} initialQuery={query} />;
}
