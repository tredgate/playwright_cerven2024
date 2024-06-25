import { test, expect } from "@playwright/test";

test.describe("PMTool login tests", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("http://tredgate.com/pmtool/");
  });

  test("Successful login", async ({ page }) => {
    await page.locator("#username").fill("playwright_jaro24");
    await page.locator("#password").fill("Playwright!2024");
    await page.locator("[type='submit']").click();
    await expect(page.locator("#welcome-page-header")).toBeVisible();
  });

  test("Failed login", async ({ page }) => {
    await page.locator("#username").fill("spatnej_login");
    await page.locator("#password").fill("1454501");
    await page.locator("[type='submit']").click();
    await expect(page.locator(".alert-danger")).toBeVisible();
  });
});
