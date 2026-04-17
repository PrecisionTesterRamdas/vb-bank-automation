import { Locator, Page } from "@playwright/test";
export class TransferPage {
  // declaring properties
  readonly page: Page;
  readonly recipientAccountNumber: Locator;
  readonly amount: Locator;
  readonly noteDescription: Locator;
  readonly transferButton: Locator;

  constructor(page: Page) {
    // Initializing all properties here
    this.page = page;
    this.recipientAccountNumber = this.page.getByTestId(
      "input-recipient-account",
    );
    this.amount = this.page.getByTestId("input-amount");
    this.noteDescription = this.page.getByTestId("input-description");
    this.transferButton = this.page.getByTestId("btn-submit-transfer");
  }

  async makeTransfer(
    recipientAccountNumber: number,
    amount: number,
    noteDescription: string,
  ) {
    await this.recipientAccountNumber.fill(recipientAccountNumber.toString());
    await this.amount.fill(amount.toString());
    await this.noteDescription.fill(noteDescription);
    await this.transferButton.click();
  }
}
