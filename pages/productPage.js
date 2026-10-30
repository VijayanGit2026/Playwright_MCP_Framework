import { BaseClass } from "./basePage.js";

export class ProductPage extends BaseClass {

    constructor(productPageValue) {
        super(productPageValue);

        this.productPageValue = productPageValue;

        // Product page title
        this.productTitle = this.productPageValue.getByText("Products");

        // Sauce Labs Backpack
        this.backpack = this.productPageValue
            .locator(".inventory_item")
            .filter({ hasText: "Sauce Labs Backpack" });

        // Add to Cart button for Backpack
        this.addToCartBtn = this.backpack.getByRole("button", {
            name: "Add to cart"
        });

        // Cart item count
        this.cartBadge = this.productPageValue.locator(
            '[data-test="shopping-cart-badge"]'
        );

        // Cart icon
        this.cartIcon = this.productPageValue.locator(
            '[data-test="shopping-cart-link"]'
        );
    }

    async addBackpackToCart() {
        await this.clickIt(this.addToCartBtn);
    }

    async openCart() {
        await this.clickIt(this.cartIcon);
    }
}
