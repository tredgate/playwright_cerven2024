import { test, expect } from "@playwright/test";

test("toContainText Test", async ({ page }) => {
  await page.goto("http://tredgate.com/pmtool/");
  await page.locator("#username").fill("playwright_jaro24");
  await page.locator("#password").fill("Playwright!2024");
  await page.locator("[type='submit']").click();
  await expect(page.locator("#welcome-page-header")).toContainText(
    "Vítej v testovací aplikaci"
  );
});

test("toHaveText Test", async ({ page }) => {
  await page.goto("http://tredgate.com/pmtool/");
  await page.locator("#username").fill("playwright_jaro24");
  await page.locator("#password").fill("Playwright!2024");
  await page.locator("[type='submit']").click();
  await expect(page.locator("#welcome-page-header")).toHaveText(
    "Vítej v testovací aplikaci Tredgate Project"
  );
});

test("toBeVisible test", async ({ page }) => {
  await page.goto("http://tredgate.com/pmtool/");
  await page.locator("#username").fill("playwright_jaro24");
  await page.locator("#password").fill("Playwright!2024");
  await page.locator("[type='submit']").click();
  await expect(page.locator(".page-sidebar-menu .logo img")).toBeVisible();
});

test("toHaveValue Test", async ({ page }) => {
  const username = "pw_skoleni";
  const usernameLocator = page.locator("#username");
  await page.goto("http://tredgate.com/pmtool/");
  await expect(usernameLocator).toHaveAttribute("placeholder", "Username");
  await usernameLocator.fill(username);
  await expect(usernameLocator).toHaveValue(username);
});

test("Soft assert test", async ({ page }) => {
  await page.goto("http://tredgate.com/pmtool/");
  expect.soft(page.locator(".form-title")).toHaveText("Bla bla");
  expect.soft(page.locator(".form-title")).toHaveText("Bla bla");
  expect.soft(page.locator(".form-title")).toHaveText("Bla bla");
  await page.locator("#username").fill("playwright_jaro24");
  await page.locator("#password").fill("Playwright!2024");
  await page.locator("[type='submit']").click();
});

test("Negative Test", async ({ page }) => {
  await page.goto("http://tredgate.com/pmtool/");
  await expect.soft(page.locator(".alert-danger")).not.toBeVisible();
});

test(
  "Failing on assert",
  {
    tag: "@failing",
  },
  async ({ page }) => {
    await page.goto("http://tredgate.com/pmtool/");
    await expect(page.locator(".neexistujiciClass")).toBeVisible();
  }
);
