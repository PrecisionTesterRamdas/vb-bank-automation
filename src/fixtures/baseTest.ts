import { test as baseTest } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { TransferPage } from "../pages/TransferPage";

// Declaring the types of custom fixtures
type MyFixtures = {
  loginPage: LoginPage;
  transferPage: TransferPage;
};

// Extending base test with Page Objects
export const test = baseTest.extend<MyFixtures>({
  // Defining the loginPage fixture
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },

  // Defining the loginPage fixture
  transferPage: async ({ page }, use) => {
    await use(new TransferPage(page));
  },
});

// Exporting expect so we will only need one import in specs files
export { expect } from "@playwright/test";
