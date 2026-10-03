"use client";
import { useShop } from "@/components/shop";
export default function Error({ reset }: { reset: () => void }) {
  const { t } = useShop();
  return (
    <main id="main" className="container not-found">
      <h1>{t("تعذر تحميل الصفحة.", "Unable to load this page.")}</h1>
      <p>
        {t(
          "حاول مرة أخرى أو تواصل مع فريق MR ROBOT.",
          "Please try again or contact MR ROBOT.",
        )}
      </p>
      <button className="button primary" onClick={reset}>
        {t("حاول مرة أخرى", "Try again")}
      </button>
    </main>
  );
}
