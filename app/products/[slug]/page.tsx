import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { products } from "@/data/products";
import { localized } from "@/lib/store";
import { getLocale } from "@/lib/locale";
import { DetailContent } from "@/components/pages";
export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params,
    raw = products.find((p) => p.slug === slug),
    lang = await getLocale();
  if (!raw)
    return {
      title: lang === "ar" ? "المنتج غير موجود" : "Product not found",
      robots: { index: false },
    };
  const p = localized(raw, lang);
  return {
    title: p.name,
    description: p.shortDescription,
    alternates: { canonical: `/products/${p.slug}` },
    openGraph: { title: p.name, images: p.images, url: `/products/${p.slug}` },
  };
}
export default async function Detail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params,
    p = products.find((p) => p.slug === slug);
  if (!p) notFound();
  return <DetailContent product={p} />;
}
