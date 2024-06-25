import { expect, test } from "@playwright/test";
import { faker } from "@faker-js/faker/locale/cz";

test("Register user in TEG#B and check API", async ({ page }) => {
  const firstName = faker.person.firstName("female");
  const username = faker.internet.userName();
  const email = faker.internet.exampleEmail();
  const password = "123456";

  //   await page.route(
  //     "https://tegb-backend-877a0b063d29.herokuapp.com/eshop/register",
  //     (route, request) => {
  //       console.log(request.postData());
  //       expect(request.method).toBe("POST");
  //       route.continue();
  //     }
  //   );

  await page.goto("https://tegb-frontend-88542200c6db.herokuapp.com/register");
  await page.locator("//input[@data-testid='username-input']").fill(username);
  await page.locator("//input[@data-testid='email-input']").fill(email);
  await page.locator("//input[@data-testid='password-input']").fill(password);
  await page.locator("//button[@data-testid='submit-button']").click();

  const response = await page.waitForResponse(
    "https://tegb-backend-877a0b063d29.herokuapp.com/tegb/register"
  );

  const responseBody = await response.json();
  expect(responseBody.username).toBe(username);
  expect(responseBody.email).toBe(email);
  expect(responseBody.userId).toBeDefined();
  expect(typeof responseBody.userId).toBe("number");
  expect(responseBody.updatedAt).toBe(null);
  expect(responseBody.active).toBe("1");
});
