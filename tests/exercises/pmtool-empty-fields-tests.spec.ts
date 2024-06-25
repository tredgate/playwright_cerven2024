import { expect, test } from "@playwright/test";

test("Check required fields messages", async ({ page }) => {
  await page.goto("http://tredgate.com/pmtool/");
  await page.locator("[type='submit']").click();
  const usernameErrorLocator = page.locator("#username-error");
  const passwordErrorLocator = page.locator("#password-error");
  expect(usernameErrorLocator).toBeVisible();
  expect(usernameErrorLocator).toHaveText("This field is required!");
  expect(passwordErrorLocator).toBeVisible();
  expect(passwordErrorLocator).toHaveText("This field is required!");
});
