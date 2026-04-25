import { test, expect } from "../../src/fixtures/baseTest";
import loginData from "../../test-data/login.json";

test.use({ storageState: { cookies: [], origins: [] } });

for (const data of loginData) {
  if (data.isValid === true) {
    test.fixme(`${data.loginSuccessFlag} user login test for ${data.description}`, async ({
      page,
      loginPage,
    }) => {
      await loginPage.navigate();
      await loginPage.login(data.username, data.password);
      await expect(page).toHaveURL(/.*dashboardsss/);
    });
  }

  if (data.isValid === false) {
    test(`${data.loginSuccessFlag} user login test for ${data.description}`, async ({
      page,
      loginPage,
    }) => {
      await loginPage.navigate();
      await loginPage.login(data.username, data.password);
      await expect(page.getByTestId("alert-error")).toHaveText(
        "Invalid username or password",
      );
    });
  }
}
