import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
import { products } from "../data/products";
const widths = [320, 360, 375, 390, 412, 430, 768, 1024, 1440];
for (const width of widths) {
  test(`RTL and viewport ${width}`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 });
    const errors: string[] = [];
    page.on("pageerror", (e) => errors.push(e.message));
    page.on("console", (m) => {
      if (m.type() === "error") errors.push(m.text());
    });
    for (const route of [
      "/",
      "/products",
      "/products/galaxy-a16-4g-grey",
      "/offers",
      "/contact",
    ]) {
      await page.goto(route);
      await page.evaluate(() => document.fonts.ready);
      await expect(page.locator("html")).toHaveAttribute("dir", "rtl");
      expect(
        await page.evaluate(
          () => document.documentElement.scrollWidth <= innerWidth,
        ),
      ).toBe(true);
      await page
        .locator("img")
        .evaluateAll((imgs) =>
          imgs.forEach((i) => ((i as HTMLImageElement).loading = "eager")),
        );
      await expect
        .poll(() =>
          page
            .locator("img")
            .evaluateAll((imgs) =>
              imgs.every(
                (i) =>
                  (i as HTMLImageElement).complete &&
                  (i as HTMLImageElement).naturalWidth > 0,
              ),
            ),
        )
        .toBe(true);
    }
    await page.goto("/");
    await page.getByRole("button", { name: "اسأل المساعد" }).click();
    await expect(page.locator("dialog")).toBeVisible();
    expect(
      await page
        .locator("dialog")
        .evaluate((d) => d.scrollWidth <= d.clientWidth),
    ).toBe(true);
    await page.keyboard.press("Escape");
    await expect(
      page.getByRole("button", { name: "اسأل المساعد" }),
    ).toBeFocused();
    if (width < 768) {
      await page.getByRole("button", { name: "القائمة", exact: true }).click();
      await page
        .locator("dialog")
        .getByRole("link", { name: "المنتجات", exact: true })
        .click();
      await expect(page).toHaveURL(/\/products$/);
    }
    expect(errors).toEqual([]);
  });
}
test("Search, categories and offers", async ({ page }) => {
  await page.goto("/products");
  const search = page.getByRole("searchbox");
  await search.fill("هاتف");
  await expect(page.locator(".product-card")).toHaveCount(11);
  await search.fill("galaxy");
  await expect(page.locator(".product-card")).toHaveCount(2);
  await search.fill("لايوجدمنتج");
  await expect(page.getByText("لم نجد منتجًا مطابقًا لبحثك.")).toBeVisible();
  await page.getByRole("button", { name: "إعادة ضبط البحث" }).click();
  await expect(page.locator(".product-card")).toHaveCount(29);
  await page.goto("/products?category=الصوتيات");
  await expect(page.locator(".product-card")).toHaveCount(3);
  await page.goto("/offers");
  await expect(page.locator(".product-card")).toHaveCount(29);
  await page.getByRole("button", { name: "بحث", exact: true }).click();
  await page.locator("dialog").getByRole("searchbox").fill("ساعة");
  await expect(page.locator("dialog .product-card")).toHaveCount(2);
});
test("Cart persists, quantity, total and WhatsApp order", async ({ page }) => {
  await page.goto("/products/galaxy-a16-4g-grey");
  await page.getByRole("button", { name: "أضف للسلة", exact: true }).click();
  await page.reload();
  await page.getByRole("button", { name: "السلة (1)", exact: true }).click();
  const dialog = page.locator("dialog");
  await expect(dialog.locator(".cart-row")).toHaveCount(1);
  await dialog
    .getByRole("button", {
      name: "زيادة كمية هاتف Galaxy A16 4G — 128GB رمادي",
    })
    .click();
  const href = await dialog
    .getByRole("link", { name: "إرسال الطلب عبر WhatsApp" })
    .getAttribute("href");
  const url = new URL(href!);
  expect(url.hostname).toBe("wa.me");
  expect(url.pathname).toBe("/96876642688");
  const text = url.searchParams.get("text")!;
  expect(text).toContain("هاتف Galaxy A16 4G — 128GB رمادي × 2");
  expect(text).not.toMatch(/تجريب|نموذج/);
  expect(text).toContain("يرجى تأكيد التوفر");
  await dialog
    .getByRole("button", { name: "إزالة هاتف Galaxy A16 4G — 128GB رمادي" })
    .click();
  await expect(dialog.getByText("السلة فارغة الآن")).toBeVisible();
});
test("Assistant catalog recommendations, compare and fallback", async ({
  page,
}) => {
  await page.goto("/");
  await page.getByRole("button", { name: "اسأل المساعد" }).click();
  const d = page.locator("dialog");
  await d
    .getByRole("textbox", { name: "رسالتك إلى المساعد" })
    .fill("أريد هاتف أقل من 150 ريال");
  await d.getByRole("button", { name: "إرسال للمساعد" }).click();
  await expect(d.locator(".recommendation")).toHaveCount(2);
  await d.getByRole("button", { name: "قارن", exact: true }).first().click();
  await d.getByRole("button", { name: "قارن", exact: true }).first().click();
  await expect(d.getByRole("table")).toBeVisible();
  await d
    .getByRole("button", { name: "أضف للسلة", exact: true })
    .first()
    .click();
  await d
    .getByRole("textbox", { name: "رسالتك إلى المساعد" })
    .fill("هل يوجد ضمان؟");
  await d.getByRole("button", { name: "إرسال للمساعد" }).click();
  await expect(
    d.getByText("هذه المعلومة تحتاج تأكيدًا من فريق MR ROBOT.", {
      exact: true,
    }),
  ).toBeVisible();
  await expect(d.locator(".recommendation")).toHaveCount(0);
  await expect(
    d.getByRole("link", { name: "تواصل عبر WhatsApp", exact: true }),
  ).toHaveAttribute("href", /^https:\/\/wa\.me\/96876642688/);
});
test("SEO, real contact info, status codes and all product routes", async ({
  page,
  request,
}) => {
  await page.goto("/");
  await expect(page).toHaveTitle(
    "MR ROBOT | متجر هواتف وإلكترونيات في البريمي",
  );
  await expect(page.locator("link[rel=canonical]")).toHaveAttribute(
    "href",
    "https://mrrobot-oman-store.vercel.app",
  );
  const slugs = products.map((product) => product.slug);
  for (const slug of slugs) {
    const response = await request.get(`/products/${slug}`);
    expect(response.status()).toBe(200);
    expect(await response.text()).toContain(
      `https://mrrobot-oman-store.vercel.app/products/${slug}`,
    );
  }
  expect((await request.get("/products/nonexistent")).status()).toBe(404);
  expect((await request.get("/nonexistent")).status()).toBe(404);
  for (const route of [
    "/sitemap.xml",
    "/robots.txt",
    "/opengraph-image",
    "/icon.svg",
  ])
    expect((await request.get(route)).status()).toBe(200);
  await page.goto("/contact");
  const ld = JSON.parse(
    (await page.locator('script[type="application/ld+json"]').textContent())!,
  );
  expect(ld.telephone).toBe("+96876642688");
  expect(ld["@type"]).toBe("ElectronicsStore");
  expect(ld.aggregateRating).toBeUndefined();
  for (const a of await page.locator('a[href^="https://wa.me"]').all()) {
    const href = await a.getAttribute("href");
    expect(new URL(href!).pathname).toBe("/96876642688");
    await expect(a).toHaveAttribute("rel", "noopener noreferrer");
  }
});
test("WCAG scan home, product, contact and dialogs", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  for (const route of ["/", "/products/galaxy-a16-4g-grey", "/contact"]) {
    await page.goto(route);
    const scan = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
      .analyze();
    expect(
      scan.violations.map((v) => ({
        id: v.id,
        nodes: v.nodes.map((n) => n.target),
      })),
    ).toEqual([]);
  }
  await page.getByRole("button", { name: "اسأل المساعد" }).click();
  const scan = await new AxeBuilder({ page })
    .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
    .analyze();
  expect(
    scan.violations.map((v) => ({
      id: v.id,
      nodes: v.nodes.map((n) => n.target),
    })),
  ).toEqual([]);
});
test("Desktop and mobile snapshots", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.goto("/");
  await page.evaluate(() => document.fonts.ready);
  await page.screenshot({
    path: "test-results/home-desktop.png",
    fullPage: true,
  });
  await page.setViewportSize({ width: 390, height: 844 });
  await page.screenshot({
    path: "test-results/home-mobile.png",
    fullPage: true,
  });
});

test("Live catalog labels, OMR discount and reduced-motion mascot", async ({
  page,
}) => {
  await page.goto("/products/airpods-4");
  await expect(page.locator(".detail-price strong")).toContainText(
    "٤٨٫٨٢٥ ر.ع.",
  );
  await expect(page.locator(".detail-price del")).toContainText("٥٤٫٢٥٠ ر.ع.");
  await expect(page.locator("main")).not.toContainText(/تجريب|نموذج|توضيحي/);
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.getByRole("button", { name: "اسأل المساعد" }).click();
  const mascot = page.locator("dialog .mascot-stage");
  await expect(mascot).toHaveAttribute("data-renderer", "reference-image");
  await expect(mascot.locator(".mascot-reference")).toBeVisible();
  await expect(mascot.locator("canvas")).toHaveCount(0);
});
