import { expect, test } from "@playwright/test";
import { LoginPage } from "../../src/pages/LoginPage";
const authFile = "playwright/.auth/user.json";

test("Authenticate", async ({ page }) => {
  const loginPageObj1 = new LoginPage(page);
  await loginPageObj1.navigate();
  await loginPageObj1.login("john.doe", "user123");
  await expect(page).toHaveURL(/.*dashboard/);
  await page.context().storageState({ path: authFile });
});