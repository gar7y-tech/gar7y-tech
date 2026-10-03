import type { MetadataRoute } from "next";
import { SITE } from "@/lib/store";
import { products } from "@/data/products";
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    "",
    "/products",
    "/offers",
    "/contact",
    ...products.map((p) => `/products/${p.slug}`),
  ].map((path) => ({
    url: SITE + path,
    changeFrequency: "weekly",
    priority: path === "" ? 1 : 0.7,
  }));
}
