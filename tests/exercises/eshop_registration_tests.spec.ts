import { test, expect } from "@playwright/test";

test("Register, login and profile check in Tredgate Eshop", async ({
  page,
}) => {
  const firstName = "Test";
  const lastName = "Tester";
  const email = "aa84154841@example.com";
  const phone = "12345678";
  const psw = "123456";

  await page.goto("http://tredgate.com/eshop");
  await page.locator('//a[@title="My Account"]').click();
  await page.locator("//a[contains(@href, 'route=account/register')]").click();
  await page.locator("//input[@id='input-firstname']").fill(firstName);
  await page.locator("//input[@id='input-lastname']").fill(lastName);
  await page.locator("//input[@id='input-email']").fill(email);
  await page.locator("//input[@id='input-telephone']").fill(phone);
  await page.locator("//input[@id='input-password']").fill(psw);
  await page.locator("//input[@id='input-confirm']").fill(psw);
  await page.locator("//input[@name='agree']").check();
  await page.locator("//input[@type='submit']").click();
  await page.locator('//a[@class="btn btn-primary"]').click();
  await page
    .locator('//div[@id="content"]//a[contains(@href,"route=account/edit")]')
    .click();
  await expect(page.locator("//input[@id='input-firstname']")).toHaveValue(
    firstName
  );
  await expect(page.locator("//input[@id='input-lastname']")).toHaveValue(
    lastName
  );
  await expect(page.locator("//label[@for='input-firstname']")).toContainText(
    "First Name"
  );
  await expect(page.locator("//label[@for='input-lastname']")).toContainText(
    "Last Name"
  );

  await expect(
    page.locator(
      '//div[contains(@class,"buttons")]//a[contains(@href, "route=account/account")]'
    )
  ).toBeVisible();
  await expect(page.locator('//input[@type="submit"]')).toBeVisible();
});
