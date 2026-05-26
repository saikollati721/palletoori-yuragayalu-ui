#!/usr/bin/env node
// Generates public/sitemap.xml from src/data/products.js so every product
// and category page is discoverable by Google. Runs in `prebuild`.

import { mkdir, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");

const BASE_URL = process.env.SITE_URL ?? "https://palletoorivuragayalu.in";
const TODAY = new Date().toISOString().split("T")[0];

const { products, categories } = await import(resolve(ROOT, "src/data/products.js"));

const staticUrls = [
  { loc: "/",              changefreq: "daily",   priority: "1.0" },
  { loc: "/shop/",         changefreq: "daily",   priority: "0.9", image: { url: "/images/logo.jpg", title: "Palletoori Vuragayalu" } },
  { loc: "/about/",        changefreq: "monthly", priority: "0.5" },
  { loc: "/contact/",      changefreq: "monthly", priority: "0.5" },
];

// Pick a representative image for each category — the first product in that category.
const categoryImage = (categoryId) => {
  const p = products.find((x) => x.category === categoryId);
  return p ? { url: p.image, title: p.name } : null;
};

const categoryUrls = categories.map((c) => ({
  loc: `/product-category/${c.id}/`,
  changefreq: "weekly",
  priority: "0.8",
  image: categoryImage(c.id),
}));

const productUrls = products.map((p) => ({
  loc: `/product/${p.id}/`,
  changefreq: "weekly",
  priority: p.bestSeller ? "0.9" : "0.7",
  image: { url: p.image, title: p.name, caption: p.short },
}));

const all = [...staticUrls, ...categoryUrls, ...productUrls];

const xmlEscape = (s) =>
  String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

const imageBlock = (img) => {
  if (!img) return "";
  const parts = [`    <image:image>
      <image:loc>${BASE_URL}${img.url}</image:loc>`];
  if (img.title)   parts.push(`      <image:title>${xmlEscape(img.title)}</image:title>`);
  if (img.caption) parts.push(`      <image:caption>${xmlEscape(img.caption)}</image:caption>`);
  parts.push(`    </image:image>`);
  return "\n" + parts.join("\n");
};

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${all
  .map(
    (u) => `  <url>
    <loc>${BASE_URL}${u.loc}</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>${imageBlock(u.image)}
  </url>`
  )
  .join("\n")}
</urlset>
`;

const outDir = resolve(ROOT, "public");
await mkdir(outDir, { recursive: true });
await writeFile(resolve(outDir, "sitemap.xml"), xml, "utf8");

console.log(
  `[sitemap] wrote ${all.length} URLs (${staticUrls.length} static + ${categoryUrls.length} categories + ${productUrls.length} products) to public/sitemap.xml`
);
