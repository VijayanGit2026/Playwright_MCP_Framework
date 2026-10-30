import { BaseClass } from "./basePage.js";

export class CheckoutCompletePage extends BaseClass {

    constructor(checkoutCompletePageValue) {
        super(checkoutCompletePageValue);

        this.checkoutCompletePageValue = checkoutCompletePageValue;

        this.completeTitle = this.checkoutCompletePageValue.getByText(
            "Checkout: Complete!"
        );

        this.thankYouMessage = this.checkoutCompletePageValue.getByText(
            "Thank you for your order!"
        );

        this.backHomeBtn = this.checkoutCompletePageValue.getByRole("button", {
            name: "Back Home"
        });

        this.generatePdfBtn = this.checkoutCompletePageValue.getByRole("button", {
            name: /Generate PDF order/i
        });
    }

    async generatePdf() {
        const downloadPromise =
            this.checkoutCompletePageValue.waitForEvent("download");

        await this.clickIt(this.generatePdfBtn);

        return await downloadPromise;
    }
}
