import { Locator, Page } from "@playwright/test";
import { signupURL, validUserSignup } from "../test-data/users";

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

  async signup() {
    //adding empeded goto method
    await this.page.goto(signupURL);

    const password = process.env.SIGNUP_PASSWORD;
    if (!password) {
      throw new Error(
        "the password that I should get from .env file is not existing",
      );
    }

    await this.email.fill(validUserSignup.email);
    await this.firstName.fill(validUserSignup.firstname);
    await this.lastName.fill(validUserSignup.lastname);
    await this.username.fill(validUserSignup.username);
    await this.password.fill(password);
  }
}
