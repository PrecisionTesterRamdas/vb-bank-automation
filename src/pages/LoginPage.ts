import { Page, Locator } from "@playwright/test";

export class LoginPage {
  // Declare properties here
  readonly page: Page;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;

  constructor(page: Page) {
    // Initialize this.page and other locators here
    this.page = page;
    this.usernameInput = this.page.getByTestId("input-username");
    this.passwordInput = this.page.getByTestId("input-password");
    this.loginButton = this.page.getByTestId("btn-login");
  }

  async navigate() {
    await this.page.goto("/", { waitUntil: "domcontentloaded" });
  }

  async login(username: string, password: string) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }
}
