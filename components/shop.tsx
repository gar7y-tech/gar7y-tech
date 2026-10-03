"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import {
  createContext,
  useContext,
  useState,
  useEffect,
  useRef,
  useId,
  useSyncExternalStore,
  useTransition,
  ReactNode,
} from "react";
import {
  Search,
  ShoppingBag,
  Menu,
  X,
  ArrowUpLeft,
  MessageCircle,
  Plus,
  Minus,
  Trash2,
  Smartphone,
  Watch,
  Headphones,
  BatteryCharging,
  Cable,
  Package,
  Truck,
  Banknote,
  MapPin,
  Handshake,
  ChevronLeft,
  Send,
  Check,
  Gamepad2,
  Gift,
  Globe,
} from "lucide-react";
import { Mascot } from "./mascot";
import { resolveAssistantQuery, matchesAssistant } from "@/lib/assistant";
import { Product, products, categories, categoriesEn } from "@/data/products";
import {
  price,
  amount,
  localized,
  whatsapp,
  productMessage,
  salesMessage,
  wholesaleMessage,
  normalize,
  Language,
  PriceMode,
} from "@/lib/store";
import {
  Item,
  subscribeCart,
  getCart,
  serverCart,
  updateCart,
} from "@/lib/cart";
type Panel = "cart" | "search" | "assistant" | "menu" | null;
const Context = createContext<{
  items: Item[];
  add: (id: string) => void;
  setPanel: (p: Panel) => void;
  lang: Language;
  t: (ar: string, en: string) => string;
  mode: PriceMode;
  setMode: (m: PriceMode) => void;
}>({
  items: [],
  add: () => {},
  setPanel: () => {},
  lang: "ar",
  t: (a) => a,
  mode: "retail",
  setMode: () => {},
});
export const useShop = () => useContext(Context);
export function Photo({
  src,
  alt,
  priority = false,
  sizes = "(max-width:600px) 50vw, 25vw",
  className = "",
}: {
  src: string;
  alt: string;
  priority?: boolean;
  sizes?: string;
  className?: string;
}) {
  const [failed, setFailed] = useState(false);
  const { t } = useShop();
  return (
    <Image
      src={failed ? "/icon.svg" : src}
      alt={failed ? t("الصورة غير متاحة", "Image unavailable") : alt}
      fill
      sizes={sizes}
      priority={priority}
      className={className}
      onError={() => setFailed(true)}
    />
  );
}
export function External({
  href,
  children,
  className = "",
  label,
}: {
  href: string;
  children: ReactNode;
  className?: string;
  label?: string;
}) {
  return (
    <a
      href={href}
      className={className}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
    >
      {children}
    </a>
  );
}
function Dialog({
  title,
  children,
  onClose,
  kind = "",
}: {
  title: string;
  children: ReactNode;
  onClose: () => void;
  kind?: string;
}) {
  const id = useId(),
    ref = useRef<HTMLDialogElement>(null),
    { t } = useShop();
  useEffect(() => {
    const d = ref.current,
      previous = document.activeElement as HTMLElement | null;
    d?.showModal();
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      d?.close();
      document.body.style.overflow = overflow;
      previous?.focus();
    };
  }, []);
  return (
    <dialog
      ref={ref}
      aria-labelledby={id}
      className={`sheet ${kind}`}
      onCancel={(e) => {
        e.preventDefault();
        onClose();
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="sheet-head">
        <h2 id={id}>{title}</h2>
        <button
          className="icon-button"
          onClick={onClose}
          aria-label={t("إغلاق", "Close")}
        >
          <X />
        </button>
      </div>
      <div className="sheet-body">{children}</div>
    </dialog>
  );
}
export function StoreProvider({
  children,
  initialLanguage = "ar",
  initialPriceMode = "retail",
}: {
  children: ReactNode;
  initialLanguage?: Language;
  initialPriceMode?: PriceMode;
}) {
  const items = useSyncExternalStore(subscribeCart, getCart, serverCart);
  const [panel, setPanel] = useState<Panel>(null),
    [announcement, setAnnouncement] = useState(""),
    [lang, setLang] = useState<Language>(initialLanguage),
    [mode, setModeState] = useState<PriceMode>(initialPriceMode);
  const router = useRouter();
  const switchLanguage = () => {
    const next = lang === "ar" ? "en" : "ar";
    document.cookie = `mrrobot-language=${next};path=/;max-age=31536000;SameSite=Lax`;
    setLang(next);
    setAnnouncement("");
    router.refresh();
  };
  const t = (ar: string, en: string) => (lang === "ar" ? ar : en),
    path = usePathname();
  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    document.cookie = `mrrobot-language=${lang};path=/;max-age=31536000;SameSite=Lax`;
  }, [lang]);
  const setMode = (m: PriceMode) => {
    setModeState(m);
    document.cookie = `mrrobot-order-mode=${m};path=/;max-age=31536000;SameSite=Lax`;
    try {
      localStorage.setItem("mrrobot-order-mode", m);
    } catch {}
  };
  const add = (id: string) => {
    if (!products.some((p) => p.id === id)) return;
    updateCart((old) => {
      const found = old.find((x) => x.id === id);
      return found
        ? old.map((x) =>
            x.id === id ? { ...x, quantity: Math.min(99, x.quantity + 1) } : x,
          )
        : [...old, { id, quantity: 1 }];
    });
    setAnnouncement(t("تمت إضافة المنتج للسلة", "Added to your bag"));
  };
  const change = (id: string, q: number) =>
    updateCart((old) =>
      q < 1
        ? old.filter((x) => x.id !== id)
        : old.map((x) =>
            x.id === id ? { ...x, quantity: Math.min(99, q) } : x,
          ),
    );
  const total = items.reduce(
      (s, x) =>
        s +
        amount(
          products.find((p) => p.id === x.id)!,
          mode,
        ) *
          x.quantity,
      0,
    ),
    count = items.reduce((s, x) => s + x.quantity, 0);
  const order = whatsapp(
    t(
      `مرحبًا MR ROBOT 👋\n\nأرغب بطلب المنتجات التالية:\n\n${items.map((x, i) => `${i + 1}. ${products.find((p) => p.id === x.id)!.name} × ${x.quantity}`).join("\n")}\n\nنوع الطلب:\n${mode === "wholesale" ? "جملة — أنا تاجر / صاحب محل — خصم 17%" : "تجزئة — خصم 10%"}\n\nالإجمالي التقريبي:\n${price(total, "ar")}\n\nيرجى تأكيد التوفر والسعر النهائي والتوصيل.`,
      `Hello MR ROBOT 👋\n\nI would like to order:\n\n${items.map((x, i) => `${i + 1}. ${products.find((p) => p.id === x.id)!.en.name} × ${x.quantity}`).join("\n")}\n\nOrder type:\n${mode === "wholesale" ? "Wholesale — I am a trader / shop owner — 17% discount" : "Retail — 10% discount"}\n\nEstimated total:\n${price(total, "en")}\n\nPlease confirm availability, final price and delivery.`,
    ) +
      (items.some((x) => products.find((p) => p.id === x.id)?.digital)
        ? t(
            "\nللمنتجات الرقمية: يرجى تأكيد منطقة الحساب والتوافق وطريقة تسليم الكود.",
            "\nFor digital products: please confirm account region, compatibility and code delivery.",
          )
        : ""),
  );
  const nav = [
    ["/", t("الرئيسية", "Home")],
    ["/products", t("المنتجات", "Products")],
    ["/offers", t("العروض", "Offers")],
    ["/contact", t("تواصل معنا", "Contact")],
  ];
  return (
    <Context.Provider value={{ items, add, setPanel, lang, t, mode, setMode }}>
      <a className="skip" href="#main">
        {t("انتقل إلى المحتوى", "Skip to content")}
      </a>
      <div className="topline">
        {t("من البريمي، لكل عُمان", "From Al Buraimi, across Oman")}
        <span>{t("تجزئة 10% · جملة 17%", "Retail 10% · Trade 17%")}</span>
      </div>
      <header className="header">
        <div className="container header-inner">
          <Link
            href="/"
            className="logo"
            aria-label={t("MR ROBOT الرئيسية", "MR ROBOT home")}
          >
            <span className="logo-mark">
              M<span>R</span>
            </span>
            <span dir="ltr">
              MR ROBOT
              <small dir={lang === "ar" ? "rtl" : "ltr"}>
                {t("إلكترونيات · عُمان", "ELECTRONICS · OMAN")}
              </small>
            </span>
          </Link>
          <nav aria-label={t("التنقل الرئيسي", "Main navigation")}>
            {nav.map(([href, text]) => (
              <Link
                key={href}
                href={href}
                aria-current={path === href ? "page" : undefined}
              >
                {text}
              </Link>
            ))}
          </nav>
          <div className="header-actions">
            <button
              className="language-toggle"
              aria-label={t(
                "تغيير اللغة إلى الإنجليزية",
                "Change language to Arabic",
              )}
              onClick={switchLanguage}
            >
              <Globe size={16} />
              <span>{lang === "ar" ? "EN" : "عربي"}</span>
            </button>
            <button
              className="icon-button"
              aria-label={t("بحث", "Search")}
              onClick={() => setPanel("search")}
            >
              <Search />
            </button>
            <button
              className="icon-button cart-button"
              aria-label={`${t("السلة", "Bag")} (${count})`}
              onClick={() => setPanel("cart")}
            >
              <ShoppingBag />
              {count > 0 && <span className="cart-count">{count}</span>}
            </button>
            <External className="header-wa" href={whatsapp(salesMessage(lang))}>
              <MessageCircle size={18} />
              WhatsApp
            </External>
            <button
              className="icon-button mobile-menu"
              aria-label={t("القائمة", "Menu")}
              onClick={() => setPanel("menu")}
            >
              <Menu />
            </button>
          </div>
        </div>
      </header>
      {children}
      <footer>
        <div className="container footer-grid">
          <div>
            <Link className="footer-logo" href="/">
              MR ROBOT
              <span className="blue-dot" />
            </Link>
            <p>
              {t(
                "هواتف • إلكترونيات • إكسسوارات",
                "Phones • Electronics • Accessories",
              )}
              <br />
              {t("تجزئة • جملة", "Retail • Wholesale")}
            </p>
          </div>
          <nav aria-label={t("روابط التذييل", "Footer links")}>
            {nav.map(([href, text]) => (
              <Link key={href} href={href}>
                {text}
              </Link>
            ))}
            <External href={whatsapp(salesMessage(lang))}>WhatsApp</External>
          </nav>
          <div>
            <p>
              {t("سوق أرض الجو", "Souq Ard Al Jaw")}
              <br />
              {t(
                "البريمي 512، سلطنة عُمان",
                "Al Buraimi 512, Sultanate of Oman",
              )}
            </p>
            <a dir="ltr" href="tel:+96876642688">
              +968 7664 2688
            </a>
            <br />
            <a dir="ltr" href="tel:+96872805156">
              +968 7280 5156
            </a>
          </div>
        </div>
        <div className="container footer-bottom">
          <span>MR ROBOT © {new Date().getFullYear()}</span>
          <span>
            {t("تقنية أفضل. اختيار أذكى.", "Better tech. Smarter choice.")}
          </span>
        </div>
      </footer>
      <FloatingAssistant
        open={() => setPanel("assistant")}
        hidden={panel !== null}
      />
      <div className="sr-only" role="status">
        {announcement}
      </div>
      {panel === "cart" && (
        <Dialog
          title={t("سلة مشترياتك", "Your shopping bag")}
          onClose={() => setPanel(null)}
        >
          {items.length === 0 ? (
            <div className="empty">
              <ShoppingBag size={48} />
              <h3>{t("السلة فارغة الآن", "Your bag is empty")}</h3>
              <p>
                {t(
                  "اختر ما يناسب يومك، ثم أرسل طلبك بسهولة.",
                  "Find your next favourite and send your order with ease.",
                )}
              </p>
              <Link
                className="button primary"
                href="/products"
                onClick={() => setPanel(null)}
              >
                {t("اكتشف المنتجات", "Explore products")}
                <ArrowUpLeft size={18} />
              </Link>
            </div>
          ) : (
            <>
              <PriceSelector />
              <p className="notice">
                {t(
                  "طلبك يصل مباشرة إلى فريق MR ROBOT لتأكيد التوفر والتوصيل.",
                  "Your order goes directly to MR ROBOT to confirm availability and delivery.",
                )}
              </p>
              <div className="cart-items">
                {items.map((x) => {
                  const original = products.find((p) => p.id === x.id)!,
                    p = localized(original, lang);
                  return (
                    <div className="cart-row" key={x.id}>
                      <div className="cart-photo">
                        <Photo src={p.images[0]} alt={p.name} sizes="80px" />
                      </div>
                      <div className="cart-info">
                        <Link
                          href={`/products/${p.slug}`}
                          onClick={() => setPanel(null)}
                        >
                          {p.name}
                        </Link>
                        <p>{price(amount(p, mode), lang)}</p>
                        <div className="quantity">
                          <button
                            aria-label={`${t("تقليل كمية", "Decrease quantity of")} ${p.name}`}
                            onClick={() => change(x.id, x.quantity - 1)}
                          >
                            <Minus size={16} />
                          </button>
                          <span>{x.quantity}</span>
                          <button
                            aria-label={`${t("زيادة كمية", "Increase quantity of")} ${p.name}`}
                            disabled={x.quantity >= 99}
                            onClick={() => change(x.id, x.quantity + 1)}
                          >
                            <Plus size={16} />
                          </button>
                        </div>
                        <small>
                          {t("المجموع:", "Subtotal:")}{" "}
                          {price(amount(p, mode) * x.quantity, lang)}
                        </small>
                      </div>
                      <button
                        className="icon-button"
                        aria-label={`${t("إزالة", "Remove")} ${p.name}`}
                        onClick={() => change(x.id, 0)}
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  );
                })}
              </div>
              <div className="cart-total">
                <span>{t("الإجمالي التقريبي", "Estimated total")}</span>
                <strong>{price(total, lang)}</strong>
              </div>
              <External className="button primary full" href={order}>
                <MessageCircle size={20} />
                {t("إرسال الطلب عبر WhatsApp", "Send order via WhatsApp")}
              </External>
              <p className="muted tiny">
                {t(
                  "سيؤكد الفريق التوفر والسعر النهائي والتوصيل.",
                  "Our team confirms availability, the final price and delivery.",
                )}
              </p>
            </>
          )}
        </Dialog>
      )}
      {panel === "search" && (
        <Dialog
          title={t("ابحث عن اختيارك", "Find your next favourite")}
          onClose={() => setPanel(null)}
          kind="search-sheet"
        >
          <Catalog compact onNavigate={() => setPanel(null)} />
        </Dialog>
      )}
      {panel === "menu" && (
        <Dialog title="MR ROBOT" onClose={() => setPanel(null)}>
          <nav className="mobile-links">
            {nav.map(([href, text]) => (
              <Link key={href} href={href} onClick={() => setPanel(null)}>
                {text}
                <ChevronLeft size={18} />
              </Link>
            ))}
          </nav>
        </Dialog>
      )}
      {panel === "assistant" && (
        <Dialog
          title={t("مساعد MR ROBOT", "MR ROBOT assistant")}
          onClose={() => setPanel(null)}
        >
          <Assistant close={() => setPanel(null)} />
        </Dialog>
      )}
    </Context.Provider>
  );
}
export function PriceSelector() {
  const { t, mode, setMode } = useShop();
  return (
    <div className="pricing-selector">
      <div
        className="pricing-tabs"
        role="group"
        aria-label={t("نوع الطلب", "Order type")}
      >
        <button
          aria-pressed={mode === "retail"}
          onClick={() => setMode("retail")}
        >
          {t("تجزئة", "Retail")}
          <b>−10%</b>
        </button>
        <button
          aria-pressed={mode === "wholesale"}
          onClick={() => setMode("wholesale")}
        >
          {t("جملة للتجار والمحلات", "Wholesale for traders")}
          <b>−17%</b>
        </button>
      </div>
      <p>
        {mode === "wholesale"
          ? t(
              "أسعار الجملة لطلبات التجار والمحلات. الخصم من السعر المرجعي ولا يجمع مع خصم التجزئة.",
              "Wholesale prices apply to trade and shop orders. Discounts are based on the reference price and are not combined.",
            )
          : t(
              "سعر التجزئة بعد خصم 10% من السعر المرجعي.",
              "Retail price includes 10% off the reference price.",
            )}
      </p>
    </div>
  );
}
export function ProductCard({
  product: original,
  onNavigate,
}: {
  product: Product;
  onNavigate?: () => void;
}) {
  const { lang, t, mode } = useShop(),
    p = localized(original, lang);
  return (
    <article className="product-card">
      <Link
        href={`/products/${p.slug}`}
        className="product-image"
        onClick={onNavigate}
      >
        <Photo src={p.images[0]} alt={p.name} />
        <span className="badge">
          {mode === "wholesale"
            ? t("جملة −17%", "Trade −17%")
            : t("−10%", "−10%")}
        </span>
      </Link>
      <div className="product-info">
        <p className="brand">{p.brand}</p>
        <Link href={`/products/${p.slug}`} onClick={onNavigate}>
          <h3>{p.name}</h3>
        </Link>
        <div className="price">
          <strong>{price(amount(p, mode), lang)}</strong>
          <del
            title={t("السعر المرجعي لدى المصدر", "Retailer reference price")}
          >
            {price(p.source.price, lang)}
          </del>
        </div>
        <div className="card-actions">
          <Link href={`/products/${p.slug}`} onClick={onNavigate}>
            {t("عرض التفاصيل", "View details")}
            <ArrowUpLeft size={15} />
          </Link>
          <External
            href={whatsapp(productMessage(original, 1, lang, mode))}
            label={`${t("استفسر عن", "Enquire about")} ${p.name} ${t("عبر", "via")} WhatsApp`}
            className="icon-button"
          >
            <MessageCircle size={18} />
          </External>
        </div>
      </div>
    </article>
  );
}
export function Catalog({
  compact = false,
  offers = false,
  onNavigate,
  initialCategory = "الكل",
}: {
  compact?: boolean;
  offers?: boolean;
  onNavigate?: () => void;
  initialCategory?: string;
}) {
  const { t, lang } = useShop(),
    [query, setQuery] = useState(""),
    [category, setCategory] = useState(initialCategory);
  const filtered = products.filter(
    (p) =>
      (!offers || p.oldPrice) &&
      (category === "الكل" || p.category === category) &&
      normalize(
        `${p.name} ${p.en.name} ${p.brand} ${p.category} ${categoriesEn[p.category]} ${p.slug}`,
      ).includes(normalize(query)),
  );
  return (
    <>
      {!compact && <PriceSelector />}
      <div className="catalog-search">
        <Search size={21} />
        <input
          autoFocus={compact}
          type="search"
          aria-label={t(
            "ابحث بالاسم أو العلامة أو الفئة",
            "Search by name, brand or category",
          )}
          placeholder={t(
            "ابحث عن هاتف، سماعة، لعبة...",
            "Search phones, audio, games...",
          )}
          value={query}
          onChange={(e) => setQuery(e.target.value.slice(0, 100))}
        />
        {query && (
          <button
            className="icon-button"
            aria-label={t("مسح البحث", "Clear search")}
            onClick={() => setQuery("")}
          >
            <X size={18} />
          </button>
        )}
      </div>
      {!compact && (
        <div
          className="filters"
          aria-label={t("فئات المنتجات", "Product categories")}
        >
          {["الكل", ...categories.filter((c) => c !== "عروض الجملة")].map(
            (c) => (
              <button
                key={c}
                aria-pressed={category === c}
                className={category === c ? "active" : ""}
                onClick={() => setCategory(c)}
              >
                {c === "الكل"
                  ? t("الكل", "All")
                  : lang === "ar"
                    ? c
                    : categoriesEn[c]}
              </button>
            ),
          )}
        </div>
      )}
      <p className="result-count" role="status">
        {filtered.length} {t("منتجات", "products")}{" "}
        {query ? t("مطابقة", "matching") : ""}
      </p>
      {filtered.length ? (
        <div className={`product-grid ${compact ? "compact-grid" : ""}`}>
          {filtered.map((p) => (
            <ProductCard key={p.id} product={p} onNavigate={onNavigate} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <Search size={40} />
          <h3>
            {t(
              "لم نجد منتجًا مطابقًا لبحثك.",
              "No products match your search.",
            )}
          </h3>
          <button
            className="button secondary"
            onClick={() => {
              setQuery("");
              setCategory("الكل");
            }}
          >
            {t("إعادة ضبط البحث", "Reset search")}
          </button>
        </div>
      )}
    </>
  );
}
export function Categories() {
  const { lang } = useShop(),
    icons = [
      Smartphone,
      Watch,
      Headphones,
      BatteryCharging,
      Cable,
      Gamepad2,
      Gift,
      Globe,
      Package,
    ];
  return (
    <div className="categories">
      {categories.map((c, i) => {
        const Icon = icons[i];
        return (
          <Link
            href={
              c === "عروض الجملة"
                ? "/contact#wholesale"
                : `/products?category=${encodeURIComponent(c)}`
            }
            key={c}
          >
            <Icon size={28} strokeWidth={1.4} />
            <span>{lang === "ar" ? c : categoriesEn[c]}</span>
            <ChevronLeft size={14} />
          </Link>
        );
      })}
    </div>
  );
}
export function ProductActions({ product: p }: { product: Product }) {
  const { add, setPanel, lang, t, mode } = useShop(),
    [added, setAdded] = useState(false);
  return (
    <div className="product-actions">
      <button
        className="button primary"
        onClick={() => {
          add(p.id);
          setAdded(true);
        }}
      >
        {added ? <Check size={20} /> : <ShoppingBag size={20} />}{" "}
        {added
          ? t("أُضيف للسلة", "Added to bag")
          : t("أضف للسلة", "Add to bag")}
      </button>
      <External
        href={whatsapp(productMessage(p, 1, lang, mode))}
        className="button secondary"
      >
        <MessageCircle size={20} />
        {t("اطلب عبر WhatsApp", "Order via WhatsApp")}
      </External>
      {added && (
        <button className="text-button" onClick={() => setPanel("cart")}>
          {t("عرض السلة", "View bag")}
        </button>
      )}
    </div>
  );
}
export function Gallery({ product: original }: { product: Product }) {
  const [selected, setSelected] = useState(0),
    { lang, t } = useShop(),
    p = localized(original, lang);
  return (
    <div>
      <div className="detail-image">
        <Photo
          src={p.images[selected]}
          alt={p.name}
          sizes="(max-width:768px) 90vw, 48vw"
          priority
        />
      </div>
      {p.imageCaption && (
        <p className="image-caption">{p.imageCaption[lang]}</p>
      )}
      {p.images.length > 1 && (
        <div className="thumbnails">
          {p.images.map((image, i) => (
            <button
              key={image}
              aria-label={`${t("عرض الصورة", "View image")} ${i + 1}`}
              aria-pressed={selected === i}
              onClick={() => setSelected(i)}
            >
              <Image src={image} width={60} height={60} alt="" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
export function TrustBar() {
  const { t } = useShop();
  return (
    <div className="trust-bar container">
      {[
        [Truck, t("توصيل داخل سلطنة عُمان", "Delivery across Oman")],
        [Banknote, t("دفع عند الاستلام", "Cash on delivery")],
        [Handshake, t("تجزئة وجملة", "Retail & wholesale")],
        [MapPin, t("متجر فعلي في البريمي", "Visit us in Al Buraimi")],
      ].map(([Icon, label]) => {
        const I = Icon as typeof Truck;
        return (
          <div key={String(label)}>
            <I size={21} strokeWidth={1.6} />
            <span>{String(label)}</span>
          </div>
        );
      })}
    </div>
  );
}
export function Wholesale() {
  const { t, lang, setMode } = useShop();
  return (
    <section className="wholesale container" id="wholesale">
      <div>
        <span className="eyebrow">
          {t("للأعمال. ببساطة.", "BUSINESS, SIMPLIFIED")}
        </span>
        <h2>
          {t("اختيارات أفضل.", "Better choices.")}
          <br />
          {t("لأعمالك أيضًا.", "For your business, too.")}
        </h2>
      </div>
      <div>
        <h3>
          {t("طلبات الجملة والتجار — خصم 17%", "Trade & shop orders — 17% off")}
        </h3>
        <p>
          {t(
            "خصم الجملة على جميع المنتجات للتجار والمحلات. أسعار محسوبة من السعر المرجعي، مع تأكيد التوفر والتوريد من الفريق.",
            "Wholesale discount on every product for traders and shops. Prices are calculated from the reference price; our team confirms availability and supply.",
          )}
        </p>
        <div className="hero-actions">
          <Link
            href="/products"
            className="button secondary"
            onClick={() => setMode("wholesale")}
          >
            {t("تصفّح أسعار الجملة", "Browse trade prices")}
            <ArrowUpLeft size={18} />
          </Link>
          <External
            href={whatsapp(wholesaleMessage(lang))}
            className="text-link"
          >
            {t("استفسر عن أسعار الجملة", "Ask about wholesale")}
          </External>
        </div>
      </div>
    </section>
  );
}
function FloatingAssistant({
  open,
  hidden,
}: {
  open: () => void;
  hidden: boolean;
}) {
  const { t, lang } = useShop();
  const [docked, setDocked] = useState(false);
  const [walking, setWalking] = useState(false);
  useEffect(() => {
    let distance = 0,
      lastY = window.scrollY;
    let timer: ReturnType<typeof setTimeout> | undefined;
    const scroll = () => {
      const y = window.scrollY;
      distance += Math.abs(y - lastY);
      lastY = y;
      if (y < 32) {
        setDocked(false);
        setWalking(false);
        distance = 0;
        return;
      }
      if (distance < 32) return;
      distance = 0;
      setDocked(true);
      setWalking(true);
      clearTimeout(timer);
      timer = setTimeout(() => setWalking(false), 650);
    };
    window.addEventListener("scroll", scroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", scroll);
      clearTimeout(timer);
    };
  }, []);
  const reveal = () => {
    setDocked(false);
    setWalking(false);
  };
  return (
    <div className="floating" data-docked={docked} hidden={hidden}>
      <button
        className="assistant-launch"
        aria-label={t("اسأل المساعد", "Ask the assistant")}
        onPointerEnter={(e) => {
          if (e.pointerType === "mouse") reveal();
        }}
        onFocus={reveal}
        onClick={() => {
          reveal();
          open();
        }}
      >
        <Mascot walking={walking} />
        <span className="assistant-label">
          <strong>MR ROBOT</strong>
          <span>{t("اسأل المساعد", "Ask me")}</span>
        </span>
      </button>
      <External
        className="floating-wa"
        href={whatsapp(salesMessage(lang))}
        label={t("تواصل عبر WhatsApp", "Contact via WhatsApp")}
      >
        <MessageCircle size={23} />
      </External>
    </div>
  );
}
function Assistant({ close }: { close: () => void }) {
  const [pending, startTransition] = useTransition();
  const { add, lang, t, mode } = useShop();
  const [input, setInput] = useState(""),
    [responseId, setResponseId] = useState(0),
    [lastMessage, setLastMessage] = useState(""),
    [type, setType] = useState(""),
    [budget, setBudget] = useState(""),
    [model, setModel] = useState(""),
    [reply, setReply] = useState<
      "intro" | "confirm" | "results" | "category" | "wholesale"
    >("intro"),
    [exclusive, setExclusive] = useState(false),
    [show, setShow] = useState(false),
    [compare, setCompare] = useState<string[]>([]);
  const replies = {
    intro: t(
      "أهلًا 👋 أنا مساعد MR ROBOT. أساعدك تختار الجهاز المناسب أو أوصلك مباشرة لفريق MR ROBOT.",
      "Hello 👋 I’m your MR ROBOT assistant. I can help you choose or connect you directly to our team.",
    ),
    confirm: t(
      "هذه المعلومة تحتاج تأكيدًا من فريق MR ROBOT.",
      "Our MR ROBOT team needs to confirm this information.",
    ),
    results: t(
      "وجدت لك هذه الخيارات. اختر منتجين للمقارنة، أو أضف اختيارك للسلة.",
      "Here are matching choices. Compare two products or add your choice to the bag.",
    ),
    category: t(
      "ما نوع الجهاز الذي تبحث عنه؟ اختر فئة، وحدد ميزانيتك بالريال العُماني.",
      "What are you looking for? Choose a category and set your budget in Omani rials.",
    ),
    wholesale: t(
      "خصم الجملة 17% للتجار والمحلات. الفريق يؤكد التوفر والتوريد.",
      "Trade orders receive 17% off the reference price. Our team confirms availability and supply.",
    ),
  };
  const recommendNow = (raw: string) => {
    if (!raw.trim()) return;
    setInput("");
    setCompare([]);
    setResponseId((value) => value + 1);
    setLastMessage(raw.trim());
    const parsed = resolveAssistantQuery(raw, {
      category: type,
      model,
      budget,
      exclusive,
    });
    const text = parsed.text;
    setModel(parsed.model);
    if (/جمله|توريد|wholesale|trade/.test(text)) {
      setReply("wholesale");
      setShow(false);
      return;
    }
    if (
      /ضمان|توفر|مخزون|توصيل|لون|الوان|حقيقي|warranty|stock|delivery|availability|colou?r/.test(
        text,
      )
    ) {
      setReply("confirm");
      setShow(false);
      return;
    }
    const c = parsed.category;
    setBudget(parsed.budget);
    setExclusive(parsed.exclusive);
    if (c) {
      setType(c);
      setShow(true);
      setReply("results");
    } else {
      setShow(false);
      setReply("category");
    }
    setInput("");
  };
  const recommend = (raw: string) => startTransition(() => recommendNow(raw));
  const matches = products
    .filter((p) => matchesAssistant(p, type, budget, exclusive, model, mode))
    .sort((a, b) => amount(a, mode) - amount(b, mode));
  const reset = () => {
    setInput("");
    setLastMessage("");
    setType("");
    setBudget("");
    setModel("");
    setExclusive(false);
    setCompare([]);
    setShow(false);
    setReply("intro");
    setResponseId((value) => value + 1);
  };
  const compared = compare.map((id) =>
    localized(
      products.find((p) => p.id === id)!,
      lang,
    ),
  );
  return (
    <div className="assistant-content">
      <div className="assistant-intro">
        <Mascot
          large
          reaction={reply}
          listening={!!input}
          thinking={pending}
          responseId={responseId}
        />
        <p aria-live="polite">{replies[reply]}</p>
      </div>
      <div className="assistant-toolbar">
        <span>
          {t("مساعد اختيار من الكتالوج", "Catalog shopping assistant")}
        </span>
        <button type="button" onClick={reset}>
          {t("ابدأ من جديد", "Start over")}
        </button>
      </div>
      {lastMessage && (
        <p className="assistant-message" dir="auto">
          {lastMessage}
        </p>
      )}
      <div className="quick-actions">
        {[
          [t("📱 أريد هاتفًا", "📱 Find a phone"), "phone"],
          [t("🎧 أريد سماعة", "🎧 Find earbuds"), "earbud"],
          [t("⌚ أريد ساعة ذكية", "⌚ Find a watch"), "watch"],
          [t("🎮 أريد لعبة", "🎮 Find a game"), "game"],
          [t("💰 اختر لي حسب الميزانية", "💰 Shop by budget"), "budget"],
        ].map(([label, prompt]) => (
          <button key={prompt} onClick={() => recommend(prompt)}>
            {label}
          </button>
        ))}
        <External href={whatsapp(wholesaleMessage(lang))}>
          {t("🤝 طلب جملة", "🤝 Wholesale order")}
        </External>
        <External href={whatsapp(salesMessage(lang))}>
          {t("💬 تحدث مع المبيعات", "💬 Talk to sales")}
        </External>
      </div>
      <div className="assistant-filters">
        <label>
          {t("نوع الجهاز", "Category")}
          <select
            value={type}
            onChange={(e) => {
              setType(e.target.value);
              setModel("");
              setCompare([]);
              setReply("results");
              setResponseId((value) => value + 1);
              setShow(true);
            }}
          >
            <option value="">{t("اختر الفئة", "Choose a category")}</option>
            {categories
              .filter((c) => c !== "عروض الجملة")
              .map((c) => (
                <option key={c} value={c}>
                  {lang === "ar" ? c : categoriesEn[c]}
                </option>
              ))}
          </select>
        </label>
        <label>
          {t("حتى (ر.ع.)", "Budget (OMR)")}
          <input
            type="number"
            min="0"
            max="100000"
            inputMode="decimal"
            step="0.001"
            placeholder="150"
            value={budget}
            onChange={(e) => {
              setBudget(e.target.value);
              setExclusive(false);
              setCompare([]);
              setReply("results");
              setShow(true);
            }}
          />
        </label>
      </div>
      <form
        className="assistant-input"
        onSubmit={(e) => {
          e.preventDefault();
          recommend(input);
        }}
      >
        <input
          value={input}
          maxLength={200}
          aria-label={t("رسالتك إلى المساعد", "Your message to the assistant")}
          placeholder={t(
            "أريد هاتف أقل من 150 ريال",
            "Find a phone under 150 OMR",
          )}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          type="submit"
          className="icon-button"
          aria-label={t("إرسال للمساعد", "Send to assistant")}
          disabled={!input.trim()}
        >
          <Send size={20} />
        </button>
      </form>
      {show && (
        <div aria-live="polite">
          <p className="result-count">
            {matches.length}{" "}
            {t(
              "خيارات مطابقة • الأقل سعرًا أولًا",
              "matching choices • lowest price first",
            )}
          </p>
          {matches.length ? (
            matches.map((original) => {
              const p = localized(original, lang);
              return (
                <div className="recommendation" key={p.id}>
                  <Link
                    onClick={close}
                    href={`/products/${p.slug}`}
                    className="recommendation-photo"
                  >
                    <Photo src={p.images[0]} alt={p.name} sizes="60px" />
                  </Link>
                  <div>
                    <Link onClick={close} href={`/products/${p.slug}`}>
                      {p.name}
                    </Link>
                    <p>{price(amount(p, mode), lang)}</p>
                    <div className="recommendation-actions">
                      <button onClick={() => add(p.id)}>
                        {t("أضف للسلة", "Add to bag")}
                      </button>
                      <button
                        aria-pressed={compare.includes(p.id)}
                        disabled={
                          compare.length >= 2 && !compare.includes(p.id)
                        }
                        onClick={() =>
                          setCompare((old) =>
                            old.includes(p.id)
                              ? old.filter((id) => id !== p.id)
                              : [...old, p.id],
                          )
                        }
                      >
                        {compare.includes(p.id)
                          ? t("إلغاء المقارنة", "Remove comparison")
                          : t("قارن", "Compare")}
                      </button>
                      <External
                        href={whatsapp(productMessage(original, 1, lang, mode))}
                        label={`WhatsApp ${p.name}`}
                      >
                        <MessageCircle size={18} />
                      </External>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <p>
              {t(
                "لا توجد خيارات بهذه الفلاتر. جرّب رفع الميزانية أو تغيير الفئة، أو تواصل مع الفريق للبدائل.",
                "No matches for these filters. Increase your budget, change the category, or ask our team for alternatives.",
              )}
            </p>
          )}
        </div>
      )}
      {compared.length === 2 && (
        <div className="comparison">
          <h3>{t("مقارنة من الكتالوج", "Catalog comparison")}</h3>
          <table>
            <thead>
              <tr>
                <th>{t("البيان", "Detail")}</th>
                {compared.map((p) => (
                  <th key={p.id}>{p.name}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>{t("السعر", "Price")}</th>
                {compared.map((p) => (
                  <td key={p.id}>{price(amount(p, mode), lang)}</td>
                ))}
              </tr>
              <tr>
                <th>{t("الميزة الأساسية", "Key feature")}</th>
                {compared.map((p) => (
                  <td key={p.id}>{p.features[0]}</td>
                ))}
              </tr>
              <tr>
                <th>{t("التوفر والضمان", "Availability & warranty")}</th>
                <td colSpan={2}>
                  {t("تحتاج تأكيدًا من المتجر", "Needs store confirmation")}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
      <External
        className="button secondary full"
        href={whatsapp(salesMessage(lang))}
      >
        {t("تواصل عبر WhatsApp", "Contact via WhatsApp")}
        <ArrowUpLeft size={18} />
      </External>
    </div>
  );
}
