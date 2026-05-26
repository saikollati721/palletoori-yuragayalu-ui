#!/usr/bin/env node
// Crawl every route in the sitemap with headless Chromium, then write a
// fully-rendered <route>/index.html into dist/ so Googlebot, Bing, and social
// preview crawlers see real content without executing JS.
//
// Runs in `postbuild`. Requires the Vite build to have already produced dist/.

import http from "node:http";
import { mkdir, writeFile, readFile } from "node:fs/promises";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import sirv from "sirv";
import puppeteer from "puppeteer";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");
const DIST = join(ROOT, "dist");

const { products, categories } = await import(join(ROOT, "src/data/products.js"));

// Render "/" LAST. Sirv serves dist/index.html as the SPA fallback for every
// route, so if we overwrote it early with the prerendered home page, subsequent
// routes would try to hydrate against home markup and blow up with error #299.
const routes = [
  "/shop/",
  "/about/",
  "/contact/",
  ...categories.map((c) => `/product-category/${c.id}/`),
  ...products.map((p) => `/product/${p.id}/`),
  "/",
];

const serve = sirv(DIST, { single: true, dev: false, etag: false });
const server = http.createServer((req, res) => serve(req, res, () => res.end()));
await new Promise((r) => server.listen(0, "127.0.0.1", r));
const { port } = server.address();
const origin = `http://127.0.0.1:${port}`;

const browser = await puppeteer.launch({
  headless: "new",
  args: ["--no-sandbox", "--disable-setuid-sandbox"],
});

let ok = 0;
let failed = 0;

// Snapshot the NotFound page FIRST — sirv serves dist/index.html as the SPA
// fallback for unmatched paths, so as long as the home page hasn't been
// pre-rendered yet, the original shell (no data-prerendered marker) is served,
// React Router resolves "*" to NotFound, and we capture clean 404 HTML.
{
  const page = await browser.newPage();
  try {
    await page.goto(`${origin}/__cf_pages_404__`, { waitUntil: "networkidle0", timeout: 45000 });
    await new Promise((r) => setTimeout(r, 100));
    let html = await page.content();
    html = html.replace("<html ", '<html data-prerendered="true" ');
    await writeFile(join(DIST, "404.html"), html, "utf8");
    console.log(`[prerender] /404 (NotFound)`);
  } catch (err) {
    failed++;
    console.error(`[prerender] FAILED 404 snapshot: ${err.message}`);
  } finally {
    await page.close();
  }
}

for (const route of routes) {
  const page = await browser.newPage();
  page.on("pageerror", (err) => console.warn(`[prerender] page error on ${route}:`, err.message));
  try {
    await page.goto(`${origin}${route}`, {
      waitUntil: "networkidle0",
      timeout: 45000,
    });
    // Give react-helmet-async one more tick to flush head tags.
    await new Promise((r) => setTimeout(r, 100));
    let html = await page.content();
    // Mark the snapshot so main.jsx knows to hydrate instead of fresh-render.
    html = html.replace("<html ", '<html data-prerendered="true" ');

    const outDir =
      route === "/" ? DIST : join(DIST, route.replace(/^\/+|\/+$/g, ""));
    await mkdir(outDir, { recursive: true });
    await writeFile(join(outDir, "index.html"), html, "utf8");
    ok++;
    console.log(`[prerender] ${route}`);
  } catch (err) {
    failed++;
    console.error(`[prerender] FAILED ${route}: ${err.message}`);
  } finally {
    await page.close();
  }
}

await browser.close();
server.close();

console.log(`[prerender] wrote ${ok} routes${failed ? ` (${failed} failed)` : ""}`);
if (failed) process.exit(1);
