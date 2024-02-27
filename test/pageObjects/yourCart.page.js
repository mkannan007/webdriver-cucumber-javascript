import basePage from "./base.page";

class YourCartPage extends basePage {
    constructor() {
        super();
        this.selectors = {
            cartContents: '#cart_contents_container',
            checkout: '#checkout'
        }
    }

    get cartContents() {
        return $(this.selectors.cartContents);
    }

    get checkout() {
        return $(this.selectors.checkout);
    }

    async isCartContentsDisplayed() {
        return await this.cartContents.isDisplayed();
    }

    async checkoutButton() {
        await this.checkout.waitForClickable();
        await this.checkout.click();
    }

}
export default new YourCartPage();
