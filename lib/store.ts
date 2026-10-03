import { Product } from "@/data/products";
export type Language = "ar" | "en";
export type PriceMode = "retail" | "wholesale";
export const SITE = "https://mrrobot-oman-store.vercel.app";
export const price = (n: number, lang: Language = "ar") =>
  `${new Intl.NumberFormat(lang === "ar" ? "ar-OM" : "en-OM", { minimumFractionDigits: 3, maximumFractionDigits: 3 }).format(n)} ${lang === "ar" ? "ر.ع." : "OMR"}`;
export const amount = (p: Product, mode: PriceMode = "retail") =>
  mode === "wholesale" ? p.wholesalePrice : p.price;
export const localized = (p: Product, lang: Language) =>
  lang === "en" ? { ...p, ...p.en } : p;
export const whatsapp = (message: string) =>
  `https://wa.me/96876642688?text=${encodeURIComponent(message)}`;
export const productMessage = (
  p: Product,
  q = 1,
  lang: Language = "ar",
  mode: PriceMode = "retail",
) =>
  lang === "ar"
    ? `مرحبًا MR ROBOT،\nأرغب بالاستفسار عن المنتج:\n${p.name}\n\nالكمية:\n${q}\n\nنوع الطلب:\n${mode === "retail" ? "تجزئة — خصم 10%" : "جملة للتجار والمحلات — خصم 17%"}\n\nالسعر المعروض:\n${price(amount(p, mode), lang)}\n\nرابط المنتج:\n${SITE}/products/${p.slug}\nيرجى تأكيد التوفر والسعر النهائي.${p.digital ? "\nيرجى تأكيد منطقة الحساب والتوافق وطريقة تسليم الكود." : ""}`
    : `Hello MR ROBOT,\nI would like to enquire about:\n${p.en.name}\n\nQuantity:\n${q}\n\nOrder type:\n${mode === "retail" ? "Retail — 10% discount" : "Wholesale for traders and shops — 17% discount"}\n\nDisplayed price:\n${price(amount(p, mode), lang)}\n\nProduct link:\n${SITE}/products/${p.slug}\nPlease confirm availability and the final price.${p.digital ? "\nPlease confirm account region, compatibility and code delivery." : ""}`;
export const salesMessage = (lang: Language = "ar") =>
  lang === "ar"
    ? "مرحبًا MR ROBOT، أرغب بالتحدث مع المبيعات."
    : "Hello MR ROBOT, I would like to speak with your sales team.";
export const wholesaleMessage = (lang: Language = "ar") =>
  lang === "ar"
    ? "مرحبًا MR ROBOT،\nأنا تاجر / صاحب محل وأرغب بطلب جملة بخصم 17% من السعر المرجعي. يرجى تأكيد التوفر والتوريد."
    : "Hello MR ROBOT,\nI am a trader / shop owner interested in a wholesale order at 17% below the reference price. Please confirm availability and supply.";
export const wholesale = whatsapp(wholesaleMessage());
export const normalize = (s: string) =>
  s
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u064b-\u065f\u0670]/g, "")
    .replace(/[أإآ]/g, "ا")
    .replace(/ى/g, "ي")
    .replace(/[٠-٩]/g, (c) => String("٠١٢٣٤٥٦٧٨٩".indexOf(c)))
    .replace(/[۰-۹]/g, (c) => String("۰۱۲۳۴۵۶۷۸۹".indexOf(c)))
    .replace(/٫/g, ".")
    .replace(/٬/g, "")
    .trim();
