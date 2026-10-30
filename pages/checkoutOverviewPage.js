import { BaseClass } from "./basePage.js";

export class CheckoutOverviewPage extends BaseClass {

    constructor(checkoutOverviewPageValue) {
        super(checkoutOverviewPageValue);

        this.checkoutOverviewPageValue = checkoutOverviewPageValue;

        this.overviewTitle = this.checkoutOverviewPageValue.getByText(
            "Checkout: Overview"
        );

        this.backpack = this.checkoutOverviewPageValue.getByText(
            "Sauce Labs Backpack"
        );

        this.finishBtn = this.checkoutOverviewPageValue.getByRole("button", {
            name: "Finish"
        });
    }

    async finishOrder() {
        await this.clickIt(this.finishBtn);
    }
}
