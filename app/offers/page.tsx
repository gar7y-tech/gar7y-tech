import { CatalogContent } from "@/components/pages";
import { getLocale } from "@/lib/locale";
export async function generateMetadata() {
  return {
    title: (await getLocale()) === "ar" ? "العروض" : "Offers",
    alternates: { canonical: "/offers" },
  };
}
export default function Offers() {
  return <CatalogContent offers />;
}
