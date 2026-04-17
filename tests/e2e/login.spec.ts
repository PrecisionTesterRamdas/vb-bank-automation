import { test, expect } from "../../src/fixtures/baseTest";

test.use({ storageState: { cookies: [], origins: [] } });

test("Successful user login test", async ({ page, loginPage }) => {
  await loginPage.navigate();
  await loginPage.login("john.doe", "user123");
  await expect(page).toHaveURL(/.*dashboard/);
});
