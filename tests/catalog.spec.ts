import { test, expect } from "@playwright/test";
import fs from "node:fs";
import { gunzipSync } from "node:zlib";
import { products } from "../data/products";
import {
  amount,
  localized,
  normalize,
  price,
  productMessage,
  whatsapp,
} from "../lib/store";
import {
  parseAssistantQuery,
  resolveAssistantQuery,
  matchesAssistant,
} from "../lib/assistant";

test("All catalog reference prices yield the exact baisa-rounded independent discounts", () => {
  for (const p of products) {
    expect(p.price, p.slug).toBe(
      Math.floor((Math.round(p.source.price * 1000) * 90 + 50) / 100) / 1000,
    );
    expect(p.wholesalePrice, p.slug).toBe(
      Math.floor((Math.round(p.source.price * 1000) * 83 + 50) / 100) / 1000,
    );
    expect(p.source.currency).toBe("OMR");
    expect(p.availability).toBe("unconfirmed");
    expect(p.source.url).toMatch(/^https:\/\//);
    expect(p.source.retrievedAt).toMatch(/^2026-/);
  }
});
test("Every product has bilingual factual copy and existing local images", () => {
  expect(new Set(products.map((p) => p.slug)).size).toBe(products.length);
  for (const p of products) {
    expect(p.en.name.length).toBeGreaterThan(3);
    expect(p.en.description.length).toBeGreaterThan(15);
    expect(JSON.stringify(p.en)).not.toMatch(/[\u0600-\u06ff]/);
    expect(Object.keys(p.en.specifications).length).toBeGreaterThanOrEqual(3);
    for (const image of p.images)
      expect(fs.existsSync("public" + image), image).toBe(true);
    expect(localized(p, "en").name).toBe(p.en.name);
  }
});
test("All WhatsApp product messages agree with the order mode and translated prices", () => {
  for (const p of products)
    for (const lang of ["ar", "en"] as const)
      for (const mode of ["retail", "wholesale"] as const) {
        const message = productMessage(p, 3, lang, mode),
          url = new URL(whatsapp(message));
        expect(url.hostname).toBe("wa.me");
        expect(url.pathname).toBe("/96876642688");
        expect(url.searchParams.get("text")).toBe(message);
        expect(message).toContain(price(amount(p, mode), lang));
        expect(message).toContain("/products/" + p.slug);
        expect(message).toContain(mode === "wholesale" ? "17%" : "10%");
        if (lang === "en") expect(message).not.toMatch(/[\u0600-\u06ff]/);
      }
});
for (const query of [
  "iPhone 18 أقل من 600 ريال",
  "iPhone 18 under 600 OMR",
  "iPhone 18 أقل من ٦٠٠ ريال",
]) {
  test("Model number is not a budget: " + query, () => {
    const q = parseAssistantQuery(query);
    expect(q.budget).toBe(600);
    expect(q.model).toBe("iphone 18");
    expect(q.exclusive).toBe(true);
    const results = products.filter((p) =>
      matchesAssistant(
        p,
        "الهواتف",
        String(q.budget),
        q.exclusive,
        q.model,
        "retail",
      ),
    );
    expect(results.length).toBeGreaterThan(0);
    for (const p of results) {
      expect(normalize(p.en.name)).toContain("iphone 18");
      expect(p.price).toBeLessThan(600);
    }
  });
}
test("Model-only and storage-only queries do not manufacture a budget", () => {
  expect(parseAssistantQuery("iPhone 18 Pro 256GB").budget).toBeUndefined();
  expect(parseAssistantQuery("Galaxy A16").budget).toBeUndefined();
  expect(parseAssistantQuery("150 ريال").budget).toBe(150);
  expect(parseAssistantQuery("budget 150.500").budget).toBe(150.5);
});
test("Real GLB has skinned meshes, sixteen weighted bones and six playable state clips", () => {
  const b = fs.readFileSync("public/fire-character.glb");
  expect(b.readUInt32LE(0)).toBe(0x46546c67);
  expect(b.readUInt32LE(8)).toBe(b.length);
  const doc = JSON.parse(b.subarray(20, 20 + b.readUInt32LE(12)).toString());
  expect(doc.skins[0].joints).toHaveLength(16);
  expect(doc.meshes.length).toBeGreaterThan(35);
  expect(doc.animations.map((a: { name: string }) => a.name)).toEqual([
    "idle",
    "greeting",
    "listening",
    "thinking",
    "reply",
    "walking",
  ]);
  const jointIds = new Set(doc.skins[0].joints);
  for (const clip of doc.animations)
    for (const c of clip.channels)
      expect(jointIds.has(c.target.node)).toBe(true);
  for (const mesh of doc.meshes)
    for (const p of mesh.primitives) {
      expect(p.attributes.JOINTS_0).toBeDefined();
      expect(p.attributes.WEIGHTS_0).toBeDefined();
    }
});

test("Arabic models, inclusive budgets and contextual follow-ups preserve the intended selection", () => {
  const first = resolveAssistantQuery("ايفون ١٨ برو حتى ٦٠٠ ريال", {
    category: "",
    model: "",
    budget: "",
    exclusive: false,
  });
  expect(first.model).toBe("iphone 18 pro");
  expect(first.category).toBe("الهواتف");
  expect(first.budget).toBe("600");
  expect(first.exclusive).toBe(false);
  const next = resolveAssistantQuery("under 550", first);
  expect(next.model).toBe(first.model);
  expect(next.budget).toBe("550");
  expect(next.exclusive).toBe(true);
  const watch = resolveAssistantQuery("watch", next);
  expect(watch.model).toBe("");
  expect(watch.category).toBe("الساعات الذكية");
  expect(watch.budget).toBe("550");
  expect(parseAssistantQuery("Galaxy A16 128GB").budget).toBeUndefined();
});

test("Compressed character restores the exact rig and CSS font assets exist", () => {
  expect(
    gunzipSync(fs.readFileSync("public/fire-character.glb.gz")).equals(
      fs.readFileSync("public/fire-character.glb"),
    ),
  ).toBe(true);
  const css = fs.readFileSync("app/globals.css", "utf8");
  for (const font of css.matchAll(/url\("(\/fonts\/[^"]+)"\)/g))
    expect(fs.existsSync("public" + font[1])).toBe(true);
});


test("Half-baisa discounts round upward and remain consistent in WhatsApp", () => {
  const p = products.find((item) => item.slug === "airpods-4")!;
  expect(p.source.price).toBe(54.250);
  expect(p.price).toBe(48.825);
  expect(p.wholesalePrice).toBe(45.028);
  expect(productMessage(p, 2, "en", "wholesale")).toContain("45.028 OMR");
});
