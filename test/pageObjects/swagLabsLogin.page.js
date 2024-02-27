import basePage from "./base.page";

class SwagLabLoginPage extends basePage {
    constructor() {
        super();
        this.selectors = {
            userName: '#user-name',
            password: '#password',
            login: '#login-button'
        }
    }
    get userName() {
        return $(this.selectors.userName);
    }

    get password() {
        return $(this.selectors.password);
    }

    get login() {
        return $(this.selectors.login);
    }

    async setUserName(value) {
        await this.userName.waitForEnabled();
        return await this.userName.setValue(value);
    }

    async setPassword(value) {
        await this.password.waitForEnabled();
        return await this.password.setValue(value);
    }

    async loginButton() {
        await this.login.waitForClickable();
        await this.login.click();
    }
}
export default new SwagLabLoginPage();
