import { test, expect } from "../../src/fixtures/baseTest";
import validLoginData from "../../test-data/validLogin.json";
import invalidLoginData from "../../test-data/invalidLogin.json";

test.use({ storageState: { cookies: [], origins: [] } });

for (const data of validLoginData) {
  test(`User login test for ${data.description}`, async ({
    page,
    loginPage,
  }) => {
    await loginPage.navigate();
    await loginPage.login(data.username, data.password);
    await expect(page).toHaveURL(/.*dashboard/);
  });
}

for (const data of invalidLoginData) {
  test(`User login test for ${data.description}`, async ({
    loginPage,
    page,
  }) => {
    await loginPage.navigate();
    await loginPage.login(data.username, data.password);

    if (data.errorType === "badCredentials") {
      await expect(page.getByTestId("alert-error")).toHaveText(
        data.expectedError,
      );
    } else {
      const nativeValidationMessage =
        await loginPage.getNativeValidationMessage(data.errorType);
      expect(nativeValidationMessage).toBe(data.expectedError);
    }
  });
}
