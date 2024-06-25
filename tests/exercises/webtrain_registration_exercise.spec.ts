import { test } from "@playwright/test";

test("Fill webtrain form", async ({ page }) => {
  await page.goto("https://tredgate.com/webtrain/registration.html");
  await page.locator("#name").fill("Test Name");
  await page.locator("#datepicker").fill("2020-01-01");
  await page.locator("#email").fill("test@example.org");
  await page.locator("#password").fill("BezpecneHeslo1");
  await page.locator("#confirm-password").fill("BezpecneHeslo1");
  await page.locator("#premium").check();
  await page.locator("#gender").selectOption("other");
  await page.locator("#age").fill("25");
  await page.locator("#address").fill("Nová 1234");
  await page.locator("#interests-sports").check();
  await page.locator("#interests-music").check();
  await page.locator('[type="submit"]').click();
});
