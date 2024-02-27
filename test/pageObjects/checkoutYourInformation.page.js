import basePage from "./base.page";

class CheckoutYourInformationPage extends basePage {
    constructor() {
        super();
        this.selectors = {
            firstName: '#first-name',
            lastName: '#last-name',
            postalCode: '#postal-code',
            continue: '#continue'
        }
    }

    get firstName() {
        return $(this.selectors.firstName);
    }

    get lastName() {
        return $(this.selectors.lastName);
    }

    get postalCode() {
        return $(this.selectors.postalCode);
    }

    get continue() {
        return $(this.selectors.continue);
    }

    async setFirstName(value) {
        await this.firstName.waitForEnabled();
        await this.firstName.setValue(value);
    }

    async setLastName(value) {
        await this.lastName.waitForEnabled();
        await this.lastName.setValue(value);
    }

    async setPostalCode(value) {
        await this.postalCode.waitForEnabled();
        await this.postalCode.setValue(value);
    }

    async continueButton() {
        await this.continue.waitForClickable();
        await this.continue.click();
    }
}
export default new CheckoutYourInformationPage();
