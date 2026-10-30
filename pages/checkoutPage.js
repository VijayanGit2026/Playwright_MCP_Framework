import { BaseClass } from "./basePage.js";

export class CheckoutPage extends BaseClass {

    constructor(checkoutPageValue) {
        super(checkoutPageValue);

        this.checkoutPageValue = checkoutPageValue;

        this.checkoutTitle = this.checkoutPageValue.locator(
            '[data-test="title"]'
        );

        this.firstName = this.checkoutPageValue.locator("#first-name");
        this.lastName = this.checkoutPageValue.locator("#last-name");
        this.postalCode = this.checkoutPageValue.locator("#postal-code");

        this.continueBtn = this.checkoutPageValue.getByRole("button", {
            name: "Continue"
        });
    }

    async fillCheckoutDetails(firstName, lastName, postalCode) {
        await this.enterText(this.firstName, firstName);
        await this.enterText(this.lastName, lastName);
        await this.enterText(this.postalCode, postalCode);
    }

    async continueCheckout() {
        await this.clickIt(this.continueBtn);
    }
}
