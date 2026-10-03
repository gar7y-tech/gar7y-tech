import { normalize, amount, PriceMode } from "./store";
import { Product } from "@/data/products";

/** Explicit budget syntax prevents model numbers and storage from becoming budgets. */
export function parseAssistantQuery(raw: string) {
  const text = normalize(raw);
  const marked = text.match(
    /(?:اقل\s*(?:من)?|حتي|بحد\s*اقصي|ميزاني[ةه]\s*(?:هي|تكون)?|up\s*to|at\s*most|under|less\s*(?:than)?|budget)\s*(\d+(?:[.,]\d+)?)/,
  );
  const plain = /^\d+(?:[.,]\d+)?\s*(?:ريال|ر\.ع\.|omr)?$/.test(text);
  const value =
    marked?.[1] ?? (plain ? text.match(/\d+(?:[.,]\d+)?/)?.[0] : undefined);
  const modelText = text
    .replace(/ايفون|آيفون/g, "iphone")
    .replace(/جالاكسي|جالكسي/g, "galaxy")
    .replace(/برو/g, "pro")
    .replace(/ماكس/g, "max");
  const model =
    modelText.match(
      /\b(?:iphone|galaxy)\s+[a-z]?\d+(?:\s+pro(?:\s+max)?)?/i,
    )?.[0] ?? "";
  return {
    text,
    budget: value === undefined ? undefined : Number(value.replace(",", ".")),
    exclusive: /اقل|under|less/.test(text),
    model,
  };
}
export function matchesAssistant(
  p: Product,
  category: string,
  budget: string,
  exclusive: boolean,
  model: string,
  mode: PriceMode,
) {
  return (
    (!category || p.category === category) &&
    (!model || normalize(p.en.name).includes(model)) &&
    (!budget || (() => {
      const value = amount(p, mode);
      return value !== null && (exclusive ? value < Number(budget) : value <= Number(budget));
    })())
  );
}

/** Follow-up budgets retain the chosen model; choosing another category clears it. */
export function resolveAssistantQuery(
  raw: string,
  previous: {
    category: string;
    model: string;
    budget: string;
    exclusive: boolean;
  },
) {
  const parsed = parseAssistantQuery(raw);
  const rules: [RegExp, string][] = [
    [/لوحي|تابلت|tablet|ipad/, "الأجهزة اللوحية"],
    [/لابتوب|محمول|laptop|notebook|surface/, "الحواسيب المحمولة"],
    [/شاشه|شاشة|monitor/, "الشاشات"],
    [/طابع|printer|epson|pixma/, "الطابعات"],
    [/تخزين|هارد|ssd|storage/, "التخزين"],
    [/راوتر|شبك|router|network|archer/, "الشبكات"],
    [/منزل|مكنسه|مكنسة|smart home|vacuum|tapo/, "المنزل الذكي"],
    [/ويب|ماوس|كيبورد|webcam|mouse|keyboard/, "ملحقات الكمبيوتر"],
    [/كاميرا|camera|polaroid/, "الكاميرات"],
    [/هاتف|جوال|phone|iphone|ايفون|آيفون|galaxy|جالاكسي|جالكسي/, "الهواتف"],
    [/ساعه|ساعة|watch/, "الساعات الذكية"],
    [/سماع|صوت|earbud|speaker|headphone/, "الصوتيات"],
    [/شاحن|بطاري|charger|power/, "الشواحن والطاقة"],
    [/كابل|غطاء|accessor|cable/, "الإكسسوارات"],
    [/بطاق|gift|steam/, "بطاقات الهدايا"],
    [/pubg|اونلاين|online|\buc\b/, "الألعاب أونلاين"],
    [/فورت|fortnite|لعب|game|console|ps5|switch/, "ألعاب الفيديو"],
  ];
  const explicitCategory = rules.find(([pattern]) =>
    pattern.test(parsed.text),
  )?.[1];
  return {
    ...parsed,
    category: explicitCategory ?? previous.category,
    model: parsed.model || (explicitCategory ? "" : previous.model),
    budget:
      parsed.budget === undefined ? previous.budget : String(parsed.budget),
    exclusive:
      parsed.budget === undefined ? previous.exclusive : parsed.exclusive,
  };
}
