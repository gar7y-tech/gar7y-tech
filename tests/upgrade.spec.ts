import { test, expect } from "@playwright/test";
import { products } from "../data/products";
import AxeBuilder from "@axe-core/playwright";
for (const width of [320, 360, 375, 390, 412, 430, 768, 1024, 1440]) {
  test(`English layout and translated routes ${width}`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 });
    await page.goto("/");
    await page
      .getByRole("button", { name: "تغيير اللغة إلى الإنجليزية" })
      .click();
    await expect(page.locator("html")).toHaveAttribute("lang", "en");
    await expect(page.locator("html")).toHaveAttribute("dir", "ltr");
    for (const route of [
      "/",
      "/products",
      "/products/anker-nano-power-10k",
      "/products/steam-25-oman",
      "/products/pubg-660-uc",
      "/offers",
      "/contact",
      "/missing",
    ]) {
      await page.goto(route);
      await expect(page.locator("html")).toHaveAttribute("dir", "ltr");
      expect(
        await page.evaluate(
          () => document.documentElement.scrollWidth <= innerWidth,
        ),
      ).toBe(true);
      expect(
        (await page.locator("body").innerText()).replace("عربي", ""),
      ).not.toMatch(/[\u0600-\u06ff]/); // Arabic language toggle is the single allowed label in English.
    }
  });
}
test("Retail and wholesale prices, persistence and WhatsApp", async ({
  page,
}) => {
  await page.goto("/products/iphone-18-pro-256gb-silver");
  await expect(page.locator(".detail-price strong")).toContainText("٥٠١٫٣١٢");
  await page.getByRole("button", { name: "جملة للتجار والمحلات" }).click();
  await expect(page.locator(".detail-price strong")).toContainText("٤٦٢٫٣٢١");
  await page.getByRole("button", { name: "أضف للسلة", exact: true }).click();
  await page.reload();
  await expect(
    page.getByRole("button", { name: "جملة للتجار والمحلات" }),
  ).toHaveAttribute("aria-pressed", "true");
  await page.getByRole("button", { name: "السلة (1)", exact: true }).click();
  const d = page.locator("dialog");
  const u = new URL(
    (await d
      .getByRole("link", { name: "إرسال الطلب عبر WhatsApp" })
      .getAttribute("href"))!,
  );
  expect(u.searchParams.get("text")).toContain(
    "جملة — أنا تاجر / صاحب محل — خصم 17%",
  );
  expect(u.searchParams.get("text")).toContain("٤٦٢٫٣٢١");
  await d.getByRole("button", { name: "تجزئة" }).click();
  await expect(d.locator(".cart-total")).toContainText("٥٠١٫٣١٢");
});
test("English shopping, search, assistant and digital compatibility", async ({
  page,
}) => {
  await page.goto("/");
  await page
    .getByRole("button", { name: "تغيير اللغة إلى الإنجليزية" })
    .click();
  await page.goto("/products");
  await page.getByRole("searchbox").fill("gift");
  await expect(page.locator(".product-card")).toHaveCount(2);
  await page.goto("/products/steam-25-oman");
  await expect(page.locator(".digital-notice")).toContainText(
    "Oman or Bahrain",
  );
  await expect(page.locator(".detail-price strong")).toContainText("9.180 OMR");
  await page.getByRole("button", { name: "Add to bag", exact: true }).click();
  await page.getByRole("button", { name: "Bag (1)", exact: true }).click();
  const d = page.locator("dialog");
  const text = new URL(
    (await d
      .getByRole("link", { name: "Send order via WhatsApp" })
      .getAttribute("href"))!,
  ).searchParams.get("text")!;
  expect(text).toContain("Steam Wallet");
  expect(text).toContain("9.180 OMR");
  expect(text).toContain("account region");
  expect(text).not.toMatch(/[\u0600-\u06ff]/);
  await page.keyboard.press("Escape");
  await page.getByRole("button", { name: "Ask the assistant" }).click();
  await d
    .getByRole("textbox", { name: "Your message to the assistant" })
    .fill("phone under 150");
  await d.getByRole("button", { name: "Send to assistant" }).click();
  await expect(d.locator(".recommendation")).toHaveCount(2);
  await d
    .getByRole("textbox", { name: "Your message to the assistant" })
    .fill("warranty");
  await d.getByRole("button", { name: "Send to assistant" }).click();
  await expect(
    d.getByText("Our MR ROBOT team needs to confirm this information."),
  ).toBeVisible();
});
test("Every catalog product is bilingual, priced from a documented OMR reference, routable and imaged", async ({
  request,
}) => {
  test.setTimeout(300000);
  expect(products).toHaveLength(29);
  expect(products.filter((p) => p.id.startsWith("iphone-18-"))).toHaveLength(8);
  for (const p of products) {
    expect(JSON.stringify(p.en)).not.toMatch(/[\u0600-\u06ff]/);
    expect(p.price).toBeCloseTo(p.source.price * 0.9, 3);
    expect(p.wholesalePrice).toBeCloseTo(p.source.price * 0.83, 3);
    expect(p.source.currency).toBe("OMR");
    expect(p.source.url).toMatch(
      /^https:\/\/(oman.sharafdg.com|www.geekay.com)\//,
    );
    expect((await request.get("/products/" + p.slug)).status()).toBe(200);
    expect((await request.get(p.images[0])).status()).toBe(200);
  }
});
test("Approved character artwork is used in the launcher and assistant", async ({
  page,
}) => {
  await page.goto("/");
  const launcher = page.getByRole("button", {
    name: "اسأل المساعد",
    exact: true,
  });
  await expect(launcher.locator(".mascot-stage")).toHaveAttribute(
    "data-character",
    "reference-artwork",
  );
  await expect(launcher.locator(".mascot-reference")).toHaveAttribute(
    "src",
    "/fire-mascot.webp",
  );
  await expect(launcher.locator("canvas")).toHaveCount(0);
  await launcher.click();
  const image = page.locator("dialog .mascot-reference");
  await expect(image).toBeVisible();
  await expect(image).toHaveAttribute("src", "/fire-mascot.webp");
  await expect(page.locator("dialog canvas")).toHaveCount(0);
});
test("English WCAG", async ({ page }) => {
  await page.goto("/");
  await page
    .getByRole("button", { name: "تغيير اللغة إلى الإنجليزية" })
    .click();
  for (const r of ["/", "/products/steam-25-oman", "/offers"]) {
    await page.goto(r);
    const a = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
      .analyze();
    expect(
      a.violations.map((v) => ({
        id: v.id,
        nodes: v.nodes.map((n) => n.target),
      })),
    ).toEqual([]);
  }
});

test("Assistant clears stale comparisons, listens, replies and restores focus", async ({
  page,
}) => {
  await page.goto("/");
  const launcher = page.getByRole("button", {
    name: "اسأل المساعد",
    exact: true,
  });
  await launcher.click();
  const dialog = page.locator("dialog"),
    mascot = dialog.locator(".mascot-stage");
  await expect(mascot).toHaveAttribute("data-renderer", "reference-image");
  const input = dialog.getByRole("textbox", { name: "رسالتك إلى المساعد" });
  await input.fill("أريد هاتف أقل من 150 ريال");
  await expect(mascot).toHaveAttribute("data-state", "listening");
  await dialog.getByRole("button", { name: "إرسال للمساعد" }).click();
  await expect(input).toHaveValue("");
  await expect(mascot).toHaveAttribute("data-state", "results");
  await dialog
    .getByRole("button", { name: "قارن", exact: true })
    .first()
    .click();
  await dialog
    .getByRole("button", { name: "قارن", exact: true })
    .first()
    .click();
  await expect(dialog.getByRole("table")).toBeVisible();
  await input.fill("هل يوجد ضمان؟");
  await dialog.getByRole("button", { name: "إرسال للمساعد" }).click();
  await expect(input).toHaveValue("");
  await expect(dialog.getByRole("table")).toHaveCount(0);
  await expect(dialog.locator(".recommendation")).toHaveCount(0);
  await page.keyboard.press("Escape");
  await expect(launcher).toBeFocused();
  await launcher.click();
  await expect(dialog.locator(".mascot-reference")).toHaveCount(1);
  await expect(dialog.locator("canvas")).toHaveCount(0);
});

test("Assistant yields to scrolling and remains reachable at the edge", async ({
  page,
}) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  const floating = page.locator(".floating");
  await page.mouse.wheel(0, 550);
  await expect(floating).toHaveAttribute("data-docked", "true");
  const launcher = page.getByRole("button", {
    name: "اسأل المساعد",
    exact: true,
  });
  const bounds = await launcher.boundingBox();
  expect(bounds).not.toBeNull();
  expect(bounds!.x + bounds!.width).toBeGreaterThanOrEqual(44);
  await launcher.focus();
  await expect(floating).toHaveAttribute("data-docked", "false");
  await launcher.press("Enter");
  await expect(page.locator("dialog")).toBeVisible();
  await expect(floating).toBeHidden();
});
