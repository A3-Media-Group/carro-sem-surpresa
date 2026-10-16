import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import { EXTRA_GUIDE_TOOLS, TOOL_GUIDES } from "../lib/related-map.ts";

const routeExists = (href) => fs.existsSync(`app${href}/page.tsx`);
const guides = fs
  .readdirSync("app/guias", { withFileTypes: true })
  .filter((d) => d.isDirectory())
  .map((d) => `/guias/${d.name}`);

test("each tool links to 2-3 existing guides", () => {
  for (const [tool, linked] of Object.entries(TOOL_GUIDES)) {
    assert.ok(routeExists(tool), `${tool} has no page`);
    assert.ok(linked.length >= 2 && linked.length <= 3, `${tool}: ${linked.length}`);
    for (const guide of linked) assert.ok(routeExists(guide), `${guide} has no page`);
  }
});

test("each guide is linked back from at least 2 tools", () => {
  for (const guide of guides) {
    const tools = new Set([
      ...Object.keys(TOOL_GUIDES).filter((t) => TOOL_GUIDES[t].includes(guide)),
      ...(EXTRA_GUIDE_TOOLS[guide] ?? []),
    ]);
    assert.ok(tools.size >= 2, `${guide}: ${tools.size} tools`);
  }
});
