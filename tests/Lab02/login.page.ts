import { Page } from "@playwright/test";

export class LoginPage {
  private readonly page: Page;

  private readonly email;
  private readonly password;
  private readonly loginButton;

  constructor(page: Page) {
    this.page = page;
    this.email = this.page.locator("#login-email");
    this.password = this.page.locator("#login-password");
    this.loginButton = this.page.getByTestId("login-button");
  }

  async fillCredentialsAndLogIn(email: string, password: string): Promise<void> {
    await Promise.all([this.email.waitFor(), this.password.waitFor(), this.loginButton.waitFor()]);

    await this.email.fill(email);
    await this.password.fill(password);
    await this.loginButton.click();
  }
}
