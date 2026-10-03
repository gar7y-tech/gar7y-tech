import { CatalogContent } from "@/components/pages";
import { getLocale } from "@/lib/locale";
export async function generateMetadata() {
  return {
    title: (await getLocale()) === "ar" ? "المنتجات" : "Products",
    alternates: { canonical: "/products" },
  };
}
export default async function Products({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const { category } = await searchParams;
  return <CatalogContent category={category} />;
}
