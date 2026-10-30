import { test as base } from "@playwright/test";

import { LoginPage } from "../pages/loginPage.js";
import { ProductPage } from "../pages/productPage.js";
import { CartPage } from "../pages/cartPage.js";
import { CheckoutPage } from "../pages/checkoutPage.js";
import { CheckoutOverviewPage } from "../pages/checkoutOverviewPage.js";
import { CheckoutCompletePage } from "../pages/checkoutCompletePage.js";

export const test = base.extend({
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await use(loginPage);
  },

  productPage: async ({ page }, use) => {
    const productPage = new ProductPage(page);
    await use(productPage);
  },

  cartPage: async ({ page }, use) => {
    const cartPage = new CartPage(page);
    await use(cartPage);
  },

  checkoutPage: async ({ page }, use) => {
    const checkoutPage = new CheckoutPage(page);
    await use(checkoutPage);
  },

  checkoutOverviewPage: async ({ page }, use) => {
    const checkoutOverviewPage = new CheckoutOverviewPage(page);

    await use(checkoutOverviewPage);
  },

  checkoutCompletePage: async ({ page }, use) => {
    const checkoutCompletePage = new CheckoutCompletePage(page);

    await use(checkoutCompletePage);
  },
});

