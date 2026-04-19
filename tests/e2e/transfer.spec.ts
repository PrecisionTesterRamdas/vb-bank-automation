import { test, expect } from "../../src/fixtures/baseTest";
import transferData from "../../test-data/transfers.json";

for (const data of transferData) {
  test(`Transfer of ${data.amount} to Account number ${data.recipientAccountNumber}`, async ({
    page, transferPage
  }) => {
    await page.goto("/transfer");
    await transferPage.makeTransfer(
      data.recipientAccountNumber,
      data.amount,
      data.noteDescription,
    );
    await expect(page.getByTestId("alert-succes")).toBeVisible();
  });
}
