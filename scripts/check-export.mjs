import fs from "node:fs";
import path from "node:path";
const root = path.resolve("out");
const errors = [];
let pages = 0,
  links = 0;
function exists(url) {
  const pathname = decodeURIComponent(url.split(/[?#]/)[0]);
  if (!pathname) return true;
  const p = path.join(root, pathname);
  return (
    (fs.existsSync(p) && fs.statSync(p).isFile()) ||
    fs.existsSync(p + ".html") ||
    fs.existsSync(path.join(p, "index.html"))
  );
}
function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(p);
    else if (
      entry.name.endsWith(".html") &&
      !p.includes("_next") &&
      !p.includes("_not-found") &&
      entry.name !== "404.html"
    ) {
      pages++;
      const html = fs.readFileSync(p, "utf8");
      if ((html.match(/<h1\b/g) || []).length !== 1)
        errors.push(p + ": expected one H1");
      const canonical = html.match(/<link rel="canonical" href="([^"]+)"/);
      if (!canonical) errors.push(p + ": no canonical");
      else {
        const relative = path
          .relative(root, p)
          .replaceAll("\\", "/")
          .replace(/index\.html$/, "")
          .replace(/\.html$/, "");
        const expected =
          "https://carrosemsurpresa.com.br" + (relative ? "/" + relative : "/");
        if (
          canonical[1] !== expected &&
          canonical[1] !== expected.replace(/\/$/, "")
        )
          errors.push(p + ": incorrect canonical " + canonical[1]);
      }
      for (const match of html.matchAll(
        /<script type="application\/ld\+json">([\s\S]*?)<\/script>/g,
      )) {
        try {
          JSON.parse(match[1]);
        } catch {
          errors.push(p + ": invalid JSON-LD");
        }
      }
      for (const match of html.matchAll(/(?:href|src)="(\/[^"<>]*)"/g)) {
        links++;
        if (!exists(match[1])) errors.push(p + ": missing " + match[1]);
      }
    }
  }
}
walk(root);
const sitemap = fs.readFileSync(path.join(root, "sitemap.xml"), "utf8");
const urls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => m[1]);
for (const url of urls)
  if (!exists(new URL(url).pathname))
    errors.push("Sitemap missing route " + url);
console.log(
  JSON.stringify({ pages, links, sitemap: urls.length, errors }, null, 2),
);
if (errors.length) process.exitCode = 1;
