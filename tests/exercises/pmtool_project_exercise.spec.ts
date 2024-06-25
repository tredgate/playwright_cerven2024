import { test } from "@playwright/test";

test("Open Projects", async ({ page }) => {
  await page.goto("http://tredgate.com/pmtool/");
  await page.locator("#username").fill("playwright_jaro24");
  await page.locator("#password").fill("Playwright!2024");
  await page.locator("[type='submit']").click();
  await page.locator("li#Projects a").click();
});
