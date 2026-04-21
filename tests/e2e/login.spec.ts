import { test, expect } from "../../src/fixtures/baseTest";
import { LoginPage } from "../../src/pages/LoginPage";
import loginData from "../../test-data/login.json";

test.use({ storageState: { cookies: [], origins: [] } });

for (const data of loginData) {
  test(`${data.loginSuccessFlag} user login test for ${data.description}`, async ({
    page,
    loginPage,
  }) => {
    await loginPage.navigate();
    await loginPage.login(data.username, data.password);
    if (data.loginSuccessFlag === "Successful") {
      await expect(page).toHaveURL(/.*dashboard/);
    } else if (data.loginSuccessFlag === "Unsuccessful") {
      await expect(page.getByTestId("alert-error")).toHaveText(
        "Invalid username or password",
      );
    }
  });
}
