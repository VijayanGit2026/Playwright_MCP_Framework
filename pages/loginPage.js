import { BaseClass } from "./basePage.js";

export class LoginPage extends BaseClass {

    constructor(loginPageValue) {
        super(loginPageValue);

        this.loginPageValue = loginPageValue;

        this.userInput = this.loginPageValue.locator("#user-name");
        this.passInput = this.loginPageValue.locator("#password");
        this.lgnBtn = this.loginPageValue.locator("#login-button");
    }

    async login(username, password) {
        await this.enterText(this.userInput, username);
        await this.enterText(this.passInput, password);
        await this.clickIt(this.lgnBtn);
    }
}
