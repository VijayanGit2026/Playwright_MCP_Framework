import { BaseClass } from "./basePage.js";

export class CartPage extends BaseClass {
  constructor(cartPageValue) {
    super(cartPageValue);

    this.cartPageValue = cartPageValue;

    this.cartTitle = this.cartPageValue.getByText("Your Cart");

    this.backpack = this.cartPageValue
      .locator(".cart_item")
      .filter({ hasText: "Sauce Labs Backpack" });

    this.checkoutBtn = this.cartPageValue.getByRole("button", {
      name: "Checkout",
    });
  }

  async checkout() {
    await this.clickIt(this.checkoutBtn);
  }
}

