import { test, expect } from "@playwright/test";
import { GetStartedPage } from "./getStarted.page";

test.describe("Get-started Page tests", () => {
  test("Define locators", async ({ page }) => {
    const getStartedPage = new GetStartedPage(page);
    await page.goto("https://www.stackadapt.com/get-started");
  });
});
