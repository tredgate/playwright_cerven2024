import { test } from "@playwright/test";

test("Open Pmtool and fill credentials", async ({ page }) => {
  await page.goto("http://tredgate.com/pmtool/");
  await page.locator("#username").fill("Test");
  await page.locator("#password").fill("Heslo");
});
