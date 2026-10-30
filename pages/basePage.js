import { waitForElement } from "../utils/waitUtils.js";

export class BaseClass {

    constructor(baseValue) {
        this.baseValue = baseValue;
    }

    async enterText(element, value) {
        await waitForElement(element);
        await element.fill(value);
    }

    async clickIt(element) {
        await waitForElement(element);
        await element.click();
    }
}
