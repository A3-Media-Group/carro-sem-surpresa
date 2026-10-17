import { GUIDES } from "./guides";
import { TOOLS } from "./tools";
import { EXTRA_GUIDE_TOOLS, TOOL_GUIDES } from "./related-map";

const MAX_RELATED = 3;

export function relatedGuidesForTool(toolHref: string) {
  return (TOOL_GUIDES[toolHref] ?? []).map(
    (href) => GUIDES.find((g) => g.href === href)!,
  );
}

export function relatedToolsForGuide(guideHref: string) {
  const hrefs = [
    ...Object.keys(TOOL_GUIDES).filter((tool) =>
      TOOL_GUIDES[tool].includes(guideHref),
    ),
    ...(EXTRA_GUIDE_TOOLS[guideHref] ?? []),
  ];
  return [...new Set(hrefs)]
    .slice(0, MAX_RELATED)
    .map((href) => TOOLS.find((t) => t.href === href)!);
}

/** Outros guias que compartilham ferramentas com este — leitura seguinte. */
export function relatedGuidesForGuide(guideHref: string) {
  const tools = relatedToolsForGuide(guideHref).map((t) => t.href);
  const hrefs = tools.flatMap((tool) => TOOL_GUIDES[tool] ?? []);
  return [...new Set(hrefs)]
    .filter((href) => href !== guideHref)
    .slice(0, MAX_RELATED)
    .map((href) => GUIDES.find((g) => g.href === href)!);
}
