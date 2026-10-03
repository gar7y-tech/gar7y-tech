import fs from "node:fs/promises";
import path from "node:path";
import { gzipSync, gunzipSync } from "node:zlib";
import sharp from "sharp";
const results = [];
async function walk(dir) {
  for (const entry of await fs.readdir(dir, { withFileTypes: true })) {
    const file = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      await walk(file);
      continue;
    }
    if (!/\.(webp|png|jpe?g)$/i.test(file)) continue;
    const input = await fs.readFile(file);
    // Preserve resolution, transparency and every decoded channel value.
    const candidate = await sharp(input)
      .webp({ lossless: true, effort: 6 })
      .toBuffer();
    let applied = false;
    if (file.endsWith(".webp") && candidate.length < input.length) {
      const originalPixels = await sharp(input).ensureAlpha().raw().toBuffer();
      const newPixels = await sharp(candidate).ensureAlpha().raw().toBuffer();
      if (originalPixels.equals(newPixels)) {
        await fs.writeFile(file, candidate);
        applied = true;
      }
    }
    results.push({
      file,
      before: input.length,
      after: applied ? candidate.length : input.length,
      pixelIdentical: true,
      applied,
    });
  }
}
await walk("public");
const glb = await fs.readFile("public/fire-character.glb");
const compressed = gzipSync(glb, { level: 9 });
if (!gunzipSync(compressed).equals(glb))
  throw new Error("Character integrity failed");
await fs.writeFile("public/fire-character.glb.gz", compressed);
await fs.mkdir("evidence", { recursive: true });
await fs.writeFile(
  "evidence/asset-optimization.json",
  JSON.stringify(
    {
      method: "lossless only; retain existing when larger",
      images: results,
      character: {
        raw: glb.length,
        transfer: compressed.length,
        identicalAfterDecompression: true,
      },
    },
    null,
    2,
  ),
);
console.log(
  JSON.stringify({
    images: results.length,
    imageBytesSaved: results.reduce((sum, r) => sum + r.before - r.after, 0),
    characterBefore: glb.length,
    characterTransfer: compressed.length,
  }),
);
