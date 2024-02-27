import basePage from "./base.page";

class CheckoutCompletePage extends basePage {
    constructor() {
        super();
        this.selectors = {
            title: '.title',
            header: '.complete-header',
            message: '.complete-text',
        }
    }

    get title() {
        return $(this.selectors.title);
    }

    get header() {
        return $(this.selectors.header);
    }

    get message() {
        return $(this.selectors.message);
    }

    async checkoutCompleteTitle() {
        await this.title.waitForDisplayed();
        return await this.title.getText();
    }

    async thankYouHeader() {
        await this.header.waitForDisplayed();
        return await this.header.getText();
    }

    async orderDispatchMessage() {
        await this.message.waitForDisplayed();
        return await this.message.getText();
    }
}
export default new CheckoutCompletePage();
