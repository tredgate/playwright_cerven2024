import { test } from "@playwright/test";

test("Click test  ", async ({ page }) => {
  await page.goto("http://tredgate.com/pmtool/");
  await page.locator("#username").fill("playwright_jaro24");
  await page.locator("#password").fill("Playwright!2024");
  await page.locator("[type='submit']").click({ force: true });
});

test("Fill a pressSequentially test", async ({ page }) => {
  await page.goto("http://tredgate.com/pmtool/");
  await page.locator("#username").fill("Start");
  await page.locator("#username").fill("End");
  await page
    .locator("#username")
    .pressSequentially("Kde toto bude?", { delay: 2000 });
});

test("Select tests", async ({ page }) => {
  await page.goto(
    "https://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html"
  );
  await page.locator("#dropdowm-menu-1").selectOption("sql");
  await page.locator("#dropdowm-menu-2").selectOption({ label: "TestNG" });
});

test("Checkbox, radio button test", async ({ page }) => {
  await page.goto(
    "https://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html"
  );
  //checkbox
  await page.locator("input[value='option-1']").check();
  //radio button
  await page.locator("input[value='orange']").check();
});

test("iFrame Test", async ({ page }) => {
  await page.goto("https://www.webdriveruniversity.com/IFrame/index.html");
  const frame = page.frameLocator("#frame");
  await frame.locator("#button-find-out-more").click();
  // ! Toto nefunguje (modál?)
  const modalClose = frame.locator(
    '.modal-content .modal-header button[type="button"]'
  );
  await page.setViewportSize({ width: 1920, height: 1080 });
  await modalClose.scrollIntoViewIfNeeded();
  await modalClose.click({ force: true });
});

test("Hover test", async ({ page }) => {
  await page.goto("https://www.webdriveruniversity.com/Actions/index.html");
  page.on("dialog", async (dialog) => {
    console.log("Alert message: " + dialog.message());
    await dialog.dismiss();
  });
  await page.locator(".dropdown.hover").hover();
  await page.locator(".dropdown.hover .list-alert").click();
});
