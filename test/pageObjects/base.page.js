export default class BasePage {
    constructor() {
        this.page = 'main page'
    }

    openUrl(value) {
        this.browser = browser.url(value);
        return this.browser;
    }
}
