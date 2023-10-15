import { test, expect } from "@playwright/test";

test("fetchコンポーネントが描画される", async ({ page }) => {
  await page.goto("/req-memo");

  await expect(page.getByTestId("fetch-component")).toHaveText(/ランダム数値/);
});
