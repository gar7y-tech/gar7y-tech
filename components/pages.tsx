"use client";
import Link from "next/link";
import {
  ArrowUpLeft,
  ArrowLeft,
  MessageCircle,
  MapPin,
  Phone,
  Gamepad2,
} from "lucide-react";
import {
  Photo,
  ProductCard,
  Categories,
  TrustBar,
  Wholesale,
  External,
  Catalog,
  Gallery,
  ProductActions,
  PriceSelector,
  useShop,
} from "./shop";
import { products, Product } from "@/data/products";
import {
  SITE,
  whatsapp,
  salesMessage,
  price,
  amount,
  localized,
  isMarketplaceReference,
  hasVerifiedReference,
} from "@/lib/store";
export function OffersBanner() {
  const { t } = useShop();
  return (
    <section className="offers-banner container">
      <div>
        <span className="eyebrow">
          {t("اختيار أذكى. سعر أفضل.", "SMARTER CHOICES. BETTER PRICES.")}
        </span>
        <h2>
          {t("تقنية تستحقها. بقيمة أقوى.", "The tech you want. More value.")}
        </h2>
        <p>
          {t(
            "خصم التجزئة والجملة يطبّق فقط عندما يكون المرجع العُماني الحالي مؤهلًا؛ الأسعار غير المؤكدة تُراجع قبل الدفع.",
            "Retail and trade discounts apply only when a current Omani reference is qualified; unverified prices are reviewed before payment.",
          )}
        </p>
        <Link href="/offers" className="button banner-button">
          {t("اكتشف العروض", "Explore offers")}
          <ArrowUpLeft size={18} />
        </Link>
      </div>
      <div className="offer-rates">
        <div>
          <strong dir="ltr">10%</strong>
          <span>{t("للتجزئة", "RETAIL")}</span>
        </div>
        <div>
          <strong dir="ltr">17%</strong>
          <span>
            {t("للجملة · التجار والمحلات", "TRADE · SHOPS & RETAILERS")}
          </span>
        </div>
      </div>
    </section>
  );
}
export function HomeContent() {
  const { t, lang } = useShop();
  return (
    <main id="main">
      <section className="hero container">
        <div className="hero-copy">
          <span className="eyebrow">
            <span className="blue-dot" />
            MR ROBOT · {t("البريمي، عُمان", "AL BURAIMI, OMAN")}
          </span>
          <h1>
            {t("تقنية أفضل.", "Better tech.")}
            <br />
            <span>{t("اختيار أذكى.", "Smarter choice.")}</span>
          </h1>
          <p>
            {t(
              "هواتف وإلكترونيات مختارة للأفراد والتجار، مع طلب سريع وتوصيل داخل سلطنة عُمان.",
              "Selected phones and electronics for you and your business. Easy ordering and delivery across Oman.",
            )}
          </p>
          <div className="hero-actions">
            <Link className="button primary" href="/products">
              {t("تسوّق الآن", "Shop now")}
              <ArrowUpLeft size={20} />
            </Link>
            <External
              href={whatsapp(salesMessage(lang))}
              className="button secondary"
            >
              <MessageCircle size={19} />
              {t("اطلب عبر WhatsApp", "Order via WhatsApp")}
            </External>
          </div>
          <div className="hero-note">
            <span />
            {t(
              "اختيارات بسيطة. تجربة تستحقها.",
              "Thoughtful choices. An effortless experience.",
            )}
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-photo">
            <Photo
              src="https://mrrobot-oman-store-gduiwv7e0-cyber-0opsom.vercel.app/products/iphone18-hero.webp"
              alt={t(
                "iPhone 18 Pro وPro Max باللون العنّابي",
                "iPhone 18 Pro and Pro Max in burgundy",
              )}
              priority
              sizes="(max-width:768px) 90vw, 48vw"
            />
          </div>
          <div className="hero-mini watch">
            <Photo
              src="https://mrrobot-oman-store-gduiwv7e0-cyber-0opsom.vercel.app/products/watch-fit-3-black.webp"
              alt={t("ساعة Huawei WATCH FIT 3", "Huawei WATCH FIT 3")}
              sizes="160px"
            />
          </div>
          <div className="hero-mini buds">
            <Photo
              src="https://mrrobot-oman-store-gduiwv7e0-cyber-0opsom.vercel.app/products/airpods-4.webp"
              alt="Apple AirPods 4"
              sizes="140px"
            />
          </div>
          <div className="visual-label">
            <span>IPHONE 18 PRO / PRO MAX</span>
            <p>
              {t(
                "جيل جديد. اختيارك القادم.",
                "A new generation. Your next choice.",
              )}
            </p>
          </div>
        </div>
      </section>
      <TrustBar />
      <OffersBanner />
      <section className="section container">
        <div className="section-heading">
          <div>
            <span className="eyebrow">
              {t("اكتشف اختيارك اليومي", "FIND YOUR EVERYDAY")}
            </span>
            <h2>
              {t("كل ما تحتاجه. ببساطة.", "Everything you need. Simply.")}
            </h2>
          </div>
          <Link className="text-link" href="/products">
            {t("اكتشف الكل", "Explore all")}
            <ArrowLeft size={18} />
          </Link>
        </div>
        <Categories />
      </section>
      <section className="section container">
        <div className="section-heading">
          <div>
            <span className="eyebrow">
              {t("جيل iPhone 18 Pro", "THE IPHONE 18 PRO COLLECTION")}
            </span>
            <h2>
              {t(
                "أداء جديد. اختيارات أوسع.",
                "Next-level performance. More choice.",
              )}
            </h2>
          </div>
          <Link className="text-link" href="/products?category=الهواتف">
            {t("كل الهواتف", "All phones")}
            <ArrowLeft size={18} />
          </Link>
        </div>
        <div className="product-grid">
          {[products[0], products[4], products[1], products[5]].map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
      <section className="gaming-feature container">
        <div className="gaming-copy">
          <span className="eyebrow">
            {t("عالمك. قواعدك.", "YOUR WORLD. YOUR RULES.")}
          </span>
          <Gamepad2 size={32} />
          <h2>{t("اللعبة تبدأ هنا.", "Your game starts here.")}</h2>
          <p>
            {t(
              "أجهزة ألعاب، إصدارات جديدة، بطاقات هدايا وشحن لألعابك أونلاين.",
              "Consoles, new releases, gift cards and credit for your online games.",
            )}
          </p>
          <Link
            href="/products?category=ألعاب الفيديو"
            className="button primary"
          >
            {t("اكتشف عالم الألعاب", "Explore gaming")}
            <ArrowUpLeft size={18} />
          </Link>
          <div className="gaming-links">
            <Link href="/products?category=بطاقات الهدايا">
              {t("بطاقات الهدايا", "Gift cards")}
            </Link>
            <Link href="/products?category=الألعاب أونلاين">
              {t("شحن الألعاب أونلاين", "Online game credit")}
            </Link>
          </div>
        </div>
        <div className="gaming-photo">
          <Photo
            src="https://mrrobot-oman-store-gduiwv7e0-cyber-0opsom.vercel.app/products/switch-2-mario-kart.webp"
            alt="Nintendo Switch 2"
            sizes="(max-width:768px) 90vw, 48vw"
          />
        </div>
      </section>
      <section className="section container">
        <div className="section-heading">
          <div>
            <span className="eyebrow">
              {t("اختيارات ليومك", "CURATED FOR YOUR DAY")}
            </span>
            <h2>
              {t("تفاصيل صغيرة. فرق كبير.", "Small details. A big difference.")}
            </h2>
          </div>
          <Link className="text-link" href="/products">
            {t("كل المنتجات", "All products")}
            <ArrowLeft size={18} />
          </Link>
        </div>
        <div className="product-grid">
          {products
            .filter((p) =>
              [
                "airpods-4",
                "watch-fit-3-black",
                "anker-nano-power-10k",
                "jbl-wave-buds-2-white",
              ].includes(p.id),
            )
            .map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
        </div>
      </section>
      <Wholesale />
      <section className="visit container">
        <span className="visit-mark">
          OM<span>512</span>
        </span>
        <div>
          <h2>
            {t("قريبون منك. في البريمي.", "Close to you. In Al Buraimi.")}
          </h2>
          <p>
            {t(
              "سوق أرض الجو · البريمي 512 · سلطنة عُمان",
              "Souq Ard Al Jaw · Al Buraimi 512 · Sultanate of Oman",
            )}
          </p>
        </div>
        <Link className="text-link" href="/contact">
          {t("تعرف على المتجر", "Visit our store")}
          <ArrowUpLeft size={20} />
        </Link>
      </section>
    </main>
  );
}
export function CatalogContent({
  category,
  offers = false,
}: {
  category?: string;
  offers?: boolean;
}) {
  const { t } = useShop();
  return (
    <main id="main" className="container page-main">
      <div className="page-heading">
        <span className="eyebrow">
          {offers
            ? t("اختيارات بقيمة أفضل", "A SMARTER PICK")
            : t("مجموعة MR ROBOT", "THE COLLECTION")}
        </span>
        <h1>
          {offers
            ? t("قيمة أقوى. لكل اختيار.", "More value. Every choice.")
            : t("اختر ما يناسبك.", "Find what fits you.")}
        </h1>
        <p>
          {offers
            ? t(
                "تظهر هنا فقط المنتجات ذات المرجع العُماني المؤهل: 10% للتجزئة و17% للجملة أثناء صلاحية التحقق.",
                "Only products with a qualified Omani reference appear here: 10% retail and 17% trade while verification remains valid.",
              )
            : t(
                "هواتف وإلكترونيات وألعاب وبطاقات هدايا، في مكان واحد.",
                "Phones, electronics, games and gift cards. All in one place.",
              )}
        </p>
      </div>
      {offers && <OffersBanner />}
      <Catalog initialCategory={category} offers={offers} />
    </main>
  );
}
export function DetailContent({ product: original }: { product: Product }) {
  const { t, lang, mode } = useShop(),
    p = localized(original, lang);
  return (
    <main id="main" className="container page-main">
      <nav className="breadcrumb" aria-label={t("مسار الصفحة", "Breadcrumb")}>
        <Link href="/">{t("الرئيسية", "Home")}</Link>
        <span>/</span>
        <Link href="/products">{t("المنتجات", "Products")}</Link>
        <span>/</span>
        <span>{p.name}</span>
      </nav>
      <div className="product-detail">
        <Gallery product={p} />
        <div className="detail-copy">
          <span className="eyebrow">{p.brand}</span>
          <h1>{p.name}</h1>
          <PriceSelector product={original} />
          <div className="detail-price">
            <strong>{price(amount(p, mode), lang)}</strong>
            {isMarketplaceReference(original) ? (
              <span className="price-reference">
                {p.source.currency === "USD"
                  ? t(
                      `سعر المصدر وقت المراجعة: $${p.source.price.toFixed(2)} USD`,
                      `Source price at review: $${p.source.price.toFixed(2)} USD`,
                    )
                  : t("سعر مرجعي خارجي", "External reference price")}
              </span>
            ) : hasVerifiedReference(original) ? (
              <del
                title={t("السعر المرجعي لدى المصدر", "Retailer reference price")}
              >
                {price(p.source.price, lang)}
              </del>
            ) : (
              <span className="price-reference">
                {t("المرجع يحتاج إعادة تحقق", "Reference needs re-verification")}
              </span>
            )}
          </div>
          <p className="notice">
            {t(
              "التوفر يُؤكّد عند الطلب",
              "Availability confirmed when ordering",
            )}
          </p>
          <p>{p.shortDescription}</p>
          {p.digital && (
            <p className="notice digital-notice">{p.digital[lang]}</p>
          )}
          <ProductActions product={original} />
          <dl className="specifications">
            {Object.entries(p.specifications).map(([k, v]) => (
              <div key={k}>
                <dt>{k}</dt>
                <dd>{v}</dd>
              </div>
            ))}
          </dl>
          <h2 className="detail-subtitle">
            {t("عن هذا الاختيار", "About this choice")}
          </h2>
          <p className="detail-description">{p.description}</p>
          <p className="price-reference">
            {isMarketplaceReference(original)
              ? t(
                  "السعر المعروض مرجع تقريبي محوّل من سعر العرض الخارجي وقت المراجعة. التوفر والسعر النهائي وبيانات نقل الحساب تؤكد قبل الدفع لدى MR ROBOT. المصدر: ",
                  "The displayed amount is an approximate OMR reference converted from the external listing at review time. Availability, final price and account transfer details are confirmed by MR ROBOT before payment. Source: ",
                )
              : hasVerifiedReference(original)
                ? t(
                    `خصم ${mode === "retail" ? "10" : "17"}% من المرجع العُماني المؤهل لدى `,
                    `${mode === "retail" ? "10" : "17"}% below the qualified Omani reference at `,
                  )
                : t(
                    "لا نعرض سعرًا قديمًا كأنه حالي. المرجع السابق محفوظ للتدقيق ويحتاج إعادة تحقق قبل تقديم سعر نهائي. المصدر السابق: ",
                    "We do not present a legacy price as current. The previous reference is retained for audit and must be re-verified before a final price is offered. Previous source: ",
                  )}
            <a href={p.source.url} target="_blank" rel="noopener noreferrer">
              {p.source.name}
            </a>
            {hasVerifiedReference(original) &&
              t(
                `، تمت مراجعته في ${p.source.retrievedAt}. السعر المشطوب سعر المصدر وليس سعرًا سابقًا لدى MR ROBOT.`,
                `. Checked ${p.source.retrievedAt}. The struck-through amount is the source reference, not a previous MR ROBOT price.`,
              )}
          </p>
        </div>
      </div>
      <section className="section">
        <div className="section-heading">
          <h2>{t("خيارات أخرى لك.", "More choices for you.")}</h2>
        </div>
        <div className="product-grid">
          {products
            .filter((x) => x.id !== p.id && x.category === p.category)
            .slice(0, 4)
            .map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
        </div>
      </section>
    </main>
  );
}
export function ContactContent() {
  const { t, lang } = useShop();
  return (
    <main id="main" className="page-main">
      <div className="container">
        <div className="page-heading">
          <span className="eyebrow">
            {t("لنتحدث عن التقنية", "LET’S TALK TECH")}
          </span>
          <h1>{t("نحن هنا لمساعدتك.", "We’re here to help.")}</h1>
          <p>
            {t(
              "استفسار بسيط، اختيار جديد، أو طلب جملة. تواصل معنا مباشرة.",
              "A quick question, a new choice or a trade order. Reach us directly.",
            )}
          </p>
        </div>
        <div className="contact-grid">
          <section>
            <h2>MR ROBOT</h2>
            <p>
              {t(
                "هواتف • إلكترونيات • إكسسوارات",
                "Phones • Electronics • Accessories",
              )}
              <br />
              {t("تجزئة • جملة", "Retail • Wholesale")}
            </p>
            <div className="contact-line">
              <MapPin />
              <div>
                {t("سوق أرض الجو", "Souq Ard Al Jaw")}
                <br />
                {t("البريمي 512", "Al Buraimi 512")}
                <br />
                {t("سلطنة عُمان", "Sultanate of Oman")}
              </div>
            </div>
            <div className="contact-line">
              <Phone />
              <div>
                <a href="tel:+96876642688" dir="ltr">
                  +968 7664 2688
                </a>
                <br />
                <a href="tel:+96872805156" dir="ltr">
                  +968 7280 5156
                </a>
              </div>
            </div>
            <External href={SITE} className="site-address">
              mrrobot-oman-store.vercel.app
            </External>
            <div className="hero-actions">
              <External
                href={whatsapp(salesMessage(lang))}
                className="button primary"
              >
                <MessageCircle size={19} />
                WhatsApp
              </External>
              <External
                href="https://www.google.com/maps/search/?api=1&query=سوق%20أرض%20الجو%20البريمي%20سلطنة%20عمان"
                className="button secondary"
              >
                {t("خرائط Google", "Google Maps")}
                <ArrowUpLeft size={18} />
              </External>
            </div>
          </section>
          <div className="location-art">
            <span className="eyebrow">
              {t("البريمي · سلطنة عُمان", "AL BURAIMI · SULTANATE OF OMAN")}
            </span>
            <MapPin size={65} strokeWidth={1} />
            <h2>{t("البريمي", "Al Buraimi")}</h2>
            <span>512</span>
            <p>{t("سوق أرض الجو", "Souq Ard Al Jaw")}</p>
            <small>
              {t(
                "رابط الخرائط يبحث بالعنوان المقدم؛ الموقع الدقيق يؤكده المتجر.",
                "Maps searches the supplied address; the store confirms the exact location.",
              )}
            </small>
          </div>
        </div>
      </div>
      <Wholesale />
    </main>
  );
}
export function NotFoundContent() {
  const { t } = useShop();
  return (
    <main id="main" className="container not-found">
      <span className="eyebrow">
        404 · {t("صفحة غير موجودة", "PAGE NOT FOUND")}
      </span>
      <h1>{t("هذا الاختيار غير متاح هنا.", "This choice isn’t here.")}</h1>
      <p>
        {t(
          "ربما تغير الرابط، أو أن المنتج غير موجود. اكتشف بقية اختياراتنا.",
          "The link may have changed or the product is no longer listed. Explore our collection.",
        )}
      </p>
      <Link href="/products" className="button primary">
        {t("عودة إلى المنتجات", "Back to products")}
        <ArrowUpLeft size={19} />
      </Link>
    </main>
  );
}
