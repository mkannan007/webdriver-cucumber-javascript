import basePage from "./base.page";

class LandingPage extends basePage {
    async openUrl(value) {
        await super.openUrl(value);
    }
}
export default new LandingPage();
