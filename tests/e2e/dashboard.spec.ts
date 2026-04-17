import { test, expect } from "@playwright/test";
test("User can access dashboard", async ({ page }) => {
  await page.goto("/", { waitUntil: "domcontentloaded" });
  await expect(page).toHaveURL(/.*dashboard/);
});
