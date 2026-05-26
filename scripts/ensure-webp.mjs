#!/usr/bin/env node
// For every JPG/PNG under public/images/, generate a sibling .webp if one is
// missing. Browsers prefer the WebP via <picture><source type="image/webp">
// (see src/components/ProductImage.jsx), falling back to the JPG/PNG otherwise.
//
// Runs in `prebuild` so a deploy always ships a complete WebP set.

import { readdir, stat, access } from "node:fs/promises";
import { constants } from "node:fs";
import { join, resolve, extname, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");
const IMG_ROOT = join(ROOT, "public", "images");

const RASTER = new Set([".jpg", ".jpeg", ".png"]);

async function walk(dir) {
  const out = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const p = join(dir, entry.name);
    if (entry.isDirectory()) out.push(...(await walk(p)));
    else if (RASTER.has(extname(entry.name).toLowerCase())) out.push(p);
  }
  return out;
}

async function exists(p) {
  try { await access(p, constants.F_OK); return true; }
  catch { return false; }
}

const sources = await walk(IMG_ROOT);
let generated = 0;
let skipped = 0;
let failed = 0;

for (const src of sources) {
  const webp = src.replace(/\.(jpe?g|png)$/i, ".webp");
  if (await exists(webp)) { skipped++; continue; }
  try {
    await sharp(src).webp({ quality: 82, effort: 4 }).toFile(webp);
    generated++;
    console.log(`[webp] generated ${webp.replace(ROOT + "/", "")}`);
  } catch (err) {
    failed++;
    console.error(`[webp] FAILED for ${src}: ${err.message}`);
  }
}

console.log(`[webp] ${generated} generated, ${skipped} already existed${failed ? `, ${failed} failed` : ""}`);
if (failed) process.exit(1);
