import { Product } from "@/data/products";

export type Language = "ar" | "en";
export type PriceMode = "retail" | "wholesale";
export const SITE = "https://mrrobot-oman-store.vercel.app";

export const price = (n: number | null, lang: Language = "ar") =>
  n === null
    ? lang === "ar"
      ? "السعر يحتاج تأكيدًا"
      : "Price requires confirmation"
    : `${new Intl.NumberFormat(lang === "ar" ? "ar-OM" : "en-OM", {
        minimumFractionDigits: 3,
        maximumFractionDigits: 3,
      }).format(n)} ${lang === "ar" ? "ر.ع." : "OMR"}`;

export const isMarketplaceReference = (p: Product) =>
  p.pricingPolicy === "marketplace-reference";

export const hasVerifiedReference = (p: Product, at = Date.now()) => {
  if (p.pricingPolicy !== "verified-reference") return false;
  const validUntil = Date.parse(p.source.validUntil ?? "");
  return Number.isFinite(validUntil) && at < validUntil;
};

/**
 * Public price policy:
 * - Fortnite marketplace accounts show the converted marketplace reference only.
 * - Dated Omani references get the 10%/17% price only while their verification is valid.
 * - Legacy/unverified prices are intentionally hidden until the team reconfirms them.
 */
export const amount = (
  p: Product,
  mode: PriceMode = "retail",
  at = Date.now(),
): number | null => {
  if (isMarketplaceReference(p)) return p.price;
  if (!hasVerifiedReference(p, at)) return null;
  return mode === "wholesale" ? p.wholesalePrice : p.price;
};

export const lineTotal = (
  p: Product,
  quantity: number,
  mode: PriceMode = "retail",
): number | null => {
  const unit = amount(p, mode);
  return unit === null ? null : Math.round(unit * quantity * 1000) / 1000;
};

export const localized = (p: Product, lang: Language) =>
  lang === "en" ? { ...p, ...p.en } : p;

export const whatsapp = (message: string) =>
  `https://wa.me/96876642688?text=${encodeURIComponent(message)}`;

export const productMessage = (
  p: Product,
  q = 1,
  lang: Language = "ar",
  mode: PriceMode = "retail",
) => {
  const marketplace = isMarketplaceReference(p);
  const verified = hasVerifiedReference(p);
  const unit = amount(p, mode);
  const orderType = marketplace
    ? lang === "ar"
      ? "حساب رقمي — سعر مرجعي خارجي"
      : "Digital account — external marketplace reference"
    : verified
      ? lang === "ar"
        ? mode === "retail"
          ? "تجزئة — 10% من المرجع المؤهل"
          : "جملة للتجار والمحلات — 17% من المرجع المؤهل"
        : mode === "retail"
          ? "Retail — 10% from qualified reference"
          : "Wholesale — 17% from qualified reference"
      : lang === "ar"
        ? "السعر يحتاج مراجعة"
        : "Price review required";
  const sourcePrice =
    p.source.currency === "USD"
      ? `$${p.source.price.toFixed(2)} USD`
      : price(p.source.price, lang);

  return lang === "ar"
    ? `مرحبًا MR ROBOT،\nأرغب بالاستفسار عن المنتج:\n${p.name}\n\nالكمية: ${q}\nنوع الطلب: ${orderType}\nسعر الوحدة: ${price(unit, lang)}\nإجمالي البند: ${price(lineTotal(p, q, mode), lang)}${marketplace ? `\nسعر المصدر وقت المراجعة: ${sourcePrice}` : ""}\nرابط المنتج:\n${SITE}/products/${p.slug}\nيرجى تأكيد التوفر والسعر النهائي والتوصيل. لا يُعد هذا تأكيد طلب أو توريد.${p.digital ? "\nللمنتجات الرقمية: يرجى تأكيد منطقة الحساب والتوافق وطريقة التسليم/النقل الآمن؛ لا ترسل كلمة المرور أو رمز التحقق." : ""}`
    : `Hello MR ROBOT,\nI would like to enquire about:\n${p.en.name}\n\nQuantity: ${q}\nOrder type: ${orderType}\nUnit price: ${price(unit, lang)}\nLine total: ${price(lineTotal(p, q, mode), lang)}${marketplace ? `\nSource price at review: ${sourcePrice}` : ""}\nProduct link:\n${SITE}/products/${p.slug}\nPlease confirm availability, final price and delivery. This is not an order or supply confirmation.${p.digital ? "\nFor digital products: please confirm account region, compatibility and the secure delivery/transfer method; never send your password or verification code." : ""}`;
};

export const salesMessage = (lang: Language = "ar") =>
  lang === "ar"
    ? "مرحبًا MR ROBOT، أرغب بالتحدث مع المبيعات."
    : "Hello MR ROBOT, I would like to speak with your sales team.";

export const wholesaleMessage = (lang: Language = "ar") =>
  lang === "ar"
    ? "مرحبًا MR ROBOT،\nأنا تاجر / صاحب محل وأرغب بطلب جملة. يطبق خصم 17% فقط عندما يكون المرجع العُماني الحالي مؤهلًا؛ يرجى تأكيد التوفر والسعر والتوريد."
    : "Hello MR ROBOT,\nI am a trader / shop owner interested in a wholesale order. The 17% trade price applies only when a current qualified Omani reference is available; please confirm availability, final price and supply.";

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
