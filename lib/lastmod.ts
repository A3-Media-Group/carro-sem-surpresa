import { execFileSync } from "node:child_process";

let historyAvailable: boolean | undefined;

/** Só confia no git com histórico completo: num clone raso, todo arquivo "mudou" no último commit. */
function hasFullHistory() {
  if (historyAvailable === undefined) {
    try {
      historyAvailable =
        execFileSync("git", ["rev-parse", "--is-shallow-repository"], {
          encoding: "utf8",
        }).trim() === "false";
    } catch {
      historyAvailable = false;
    }
  }
  return historyAvailable;
}

/**
 * Data do último commit que alterou algum dos caminhos — usada como
 * <lastmod> no sitemap, recalculada a cada build/deploy. Sem histórico
 * do git disponível, devolve undefined e o sitemap omite o lastmod em
 * vez de inventar uma data.
 */
export function lastCommitDate(paths: string[]): Date | undefined {
  if (!hasFullHistory()) return undefined;
  try {
    const iso = execFileSync(
      "git",
      ["log", "-1", "--format=%cI", "--", ...paths],
      { encoding: "utf8" },
    ).trim();
    return iso ? new Date(iso) : undefined;
  } catch {
    return undefined;
  }
}
