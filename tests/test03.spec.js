
import { expect } from "@playwright/test";
import { mkdir, stat } from "node:fs/promises";
import { dirname } from "node:path";

import { test } from "../fixtures/fixtureFile.js";
import userData from "../testData/user.json" with { type: "json" };
import "../Hooks/hooks.js";
import { logger } from "../utils/loggerUtils.js";

async function attachScreenshot(page, testInfo, name) {
  const screenshot = await page.screenshot({ fullPage: true });

  await testInfo.attach(name, {
    body: screenshot,
    contentType: "image/png"
  });
}

test("Complete checkout and download the order PDF", async (
  {
    page,
    loginPage,
    productPage,
    cartPage,
    checkoutPage,
    checkoutOverviewPage,
    checkoutCompletePage
  },
  testInfo
) => {
  logger("TEST START: Login, Add Product and Complete Checkout");

  await loginPage.login(
    userData.valid.username,
    userData.valid.password
  );

  await attachScreenshot(page, testInfo, "01-login-success");

  await expect(productPage.productTitle).toBeVisible();
  await expect(productPage.backpack).toBeVisible();

  await productPage.addBackpackToCart();

  await expect(productPage.cartBadge).toHaveText("1");
  await attachScreenshot(page, testInfo, "02-product-backpack-added");

  await productPage.openCart();

  await expect(cartPage.cartTitle).toBeVisible();
  await expect(cartPage.backpack).toBeVisible();
  await expect(cartPage.checkoutBtn).toBeVisible();

  await attachScreenshot(page, testInfo, "03-cart-page");

  await cartPage.checkout();

  await expect(checkoutPage.checkoutTitle).toHaveText(
    "Checkout: Your Information"
  );

  await checkoutPage.fillCheckoutDetails("John", "Smith", "508012");

  await attachScreenshot(page, testInfo, "04-checkout-info-filled");

  await checkoutPage.continueCheckout();

  await expect(checkoutOverviewPage.overviewTitle).toBeVisible();
  await expect(checkoutOverviewPage.backpack).toBeVisible();

  await attachScreenshot(page, testInfo, "05-checkout-overview");

  await checkoutOverviewPage.finishOrder();

  await expect(checkoutCompletePage.completeTitle).toBeVisible();
  await expect(checkoutCompletePage.thankYouMessage).toBeVisible();

  await attachScreenshot(page, testInfo, "06-checkout-complete");

  const download = await checkoutCompletePage.generatePdf();

  const suggestedFilename = download.suggestedFilename();

  const fileName = suggestedFilename
    .split(/[\\/]/)
    .pop()
    .replace(/[^a-zA-Z0-9._-]/g, "_");

  expect(fileName).toMatch(/\.pdf$/i);

  const downloadPath = testInfo.outputPath(fileName);

  await mkdir(dirname(downloadPath), { recursive: true });
  await download.saveAs(downloadPath);

  const downloadedFile = await stat(downloadPath);

  expect(downloadedFile.isFile()).toBe(true);
  expect(downloadedFile.size).toBeGreaterThan(0);

  await testInfo.attach("order-pdf", {
    path: downloadPath,
    contentType: "application/pdf"
  });

  logger("TEST END: PDF downloaded and verified");
});
