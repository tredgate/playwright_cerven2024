import { test, expect } from "@playwright/test";

test(
  "Tags test",
  {
    tag: "@mujTag",
  },
  async ({ page }) => {
    await page.goto("http://tredgate.com/pmtool/");
    await page.locator("#username").fill("playwright_jaro24");
    await page.locator("#password").fill("Playwright!2024");
    await page.locator("[type='submit']").click();
    await expect(page.locator("#welcome-page-header")).toContainText(
      "Vítej v testovací aplikaci"
    );
  }
);
