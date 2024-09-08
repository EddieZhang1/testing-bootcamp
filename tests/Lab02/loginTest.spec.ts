import { test, expect } from "@playwright/test";
import { LoginPage } from "./login.page";

test.describe("Login Page tests", () => {
  test("Successful login", async ({ page }) => {
    const loginPage = new LoginPage(page);
    await page.goto("http://localhost:3001/login");
    await loginPage.fillCredentialsAndLogIn("ian.lee+automation@test-stackadapt.com", "test12345678");
    await expect(page).toHaveURL("http://localhost:3001/overview", { timeout: 15000 });
  });

  test("Unsuccessful login", async ({ page }) => {
    const loginPage = new LoginPage(page);
    await page.goto("http://localhost:3001/login");
    await loginPage.fillCredentialsAndLogIn("incorrect@email.com", "test12345678");
    const errorText = page.getByText("Invalid email or password.");
    await errorText.waitFor();
    await expect(errorText).toBeVisible();
  });
});
