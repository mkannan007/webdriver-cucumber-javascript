import basePage from "./base.page";

class CheckoutOverViewPage extends basePage {
    constructor() {
        super();
        this.selectors = {
            checkoutSummary: '#checkout_summary_container',
            finish: '#finish'
        }
    }

    get checkoutSummary() {
        return $(this.selectors.checkoutSummary);
    }

    get finish() {
        return $(this.selectors.finish);
    }

    async isCheckoutSummaryDisplayed() {
        return await this.checkoutSummary.isDisplayed();
    }

    async finishButton() {
       await this.finish.waitForClickable();
       await this.finish.click();
    }
}
export default new CheckoutOverViewPage();
