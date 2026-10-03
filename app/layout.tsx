import type { Metadata } from "next";
import { StoreProvider } from "@/components/shop";
import { SITE } from "@/lib/store";
import "./globals.css";
import { getLocale, getPriceMode } from "@/lib/locale";
const baseMetadata: Metadata = {
  metadataBase: new URL(SITE),
  title: {
    default: "MR ROBOT | متجر هواتف وإلكترونيات في البريمي",
    template: "%s | MR ROBOT",
  },
  description:
    "MR ROBOT متجر هواتف وإلكترونيات وإكسسوارات في البريمي، سلطنة عُمان. بيع بالتجزئة والجملة وطلب سريع عبر WhatsApp.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "ar_OM",
    siteName: "MR ROBOT",
    title: "MR ROBOT | تقنية أفضل. اختيار أذكى.",
    description: "هواتف وإلكترونيات وإكسسوارات في البريمي، سلطنة عُمان.",
    url: SITE,
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
  icons: { icon: "/icon.svg" },
};
export async function generateMetadata(): Promise<Metadata> {
  const lang = await getLocale();
  return lang === "ar"
    ? baseMetadata
    : {
        ...baseMetadata,
        title: {
          default: "MR ROBOT | Phones & Electronics in Al Buraimi",
          template: "%s | MR ROBOT",
        },
        description:
          "MR ROBOT phones, electronics, accessories and gaming in Al Buraimi, Oman. Retail, wholesale and easy WhatsApp ordering.",
        openGraph: {
          ...baseMetadata.openGraph,
          locale: "en_OM",
          title: "MR ROBOT | Better tech. Smarter choice.",
          description: "Phones, electronics and gaming in Al Buraimi, Oman.",
        },
      };
}
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const lang = await getLocale();
  const mode = await getPriceMode();
  return (
    <html lang={lang} dir={lang === "ar" ? "rtl" : "ltr"}>
      <body>
        <StoreProvider initialLanguage={lang} initialPriceMode={mode}>
          {children}
        </StoreProvider>
      </body>
    </html>
  );
}
