import { ContactContent } from "@/components/pages";
import { getLocale } from "@/lib/locale";
import { SITE } from "@/lib/store";
export async function generateMetadata() {
  return {
    title: (await getLocale()) === "ar" ? "تواصل معنا" : "Contact",
    alternates: { canonical: "/contact" },
  };
}
export default function Contact() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ElectronicsStore",
    name: "MR ROBOT",
    url: SITE,
    telephone: "+96876642688",
    address: {
      "@type": "PostalAddress",
      streetAddress: "سوق أرض الجو",
      addressLocality: "البريمي",
      postalCode: "512",
      addressCountry: "OM",
    },
  };
  return (
    <>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
      <ContactContent />
    </>
  );
}
