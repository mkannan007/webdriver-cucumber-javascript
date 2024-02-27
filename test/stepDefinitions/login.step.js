import { Given } from '@cucumber/cucumber';

import landingPage from '../pageObjects/landing.page';
import swagLabsLoginPage from '../pageObjects/swagLabsLogin.page';
import { SAUCE_DEMO_URL, STANDARD_USERNAME, PASSWORD } from '../config/base.config';

Given(/^I logged into the saucedemo site using standard_user account$/, async () => {
    await landingPage.openUrl(SAUCE_DEMO_URL);
    await swagLabsLoginPage.setUserName(STANDARD_USERNAME);
    await swagLabsLoginPage.setPassword(PASSWORD);
    await swagLabsLoginPage.loginButton();
});
