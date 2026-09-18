import { Locator, Page } from "@playwright/test";

export class SignupPage {
  private readonly firstName: Locator;
  private readonly lastName: Locator;
  private readonly username: Locator;
  private readonly email: Locator;
  private readonly password: Locator;
  private readonly continueButton: Locator;
  private readonly googleSignup: Locator;
  private readonly githubSignup: Locator;

  constructor(private readonly page: Page) {
    this.firstName = page.getByLabel("First name");
    this.lastName = page.getByLabel("Last name");
    this.username = page.getByLabel("username");
    this.email = page.getByLabel("email");
    this.password = page.getByLabel("password");
    this.continueButton = page.getByRole("button", { name: "Continue" });
    this.googleSignup = page.getByRole("button", {
      name: "Continue with Google",
    });
    this.githubSignup = page.getByRole("button", {
      name: "Continue with Github",
    });
  }
}
