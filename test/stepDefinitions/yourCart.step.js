import { When } from '@cucumber/cucumber';

import yourCartPage from '../pageObjects/yourCart.page';

When(/^I click on the checkout button in your cart page$/, async () => {
    await browser.waitUntil(async () => await yourCartPage.isCartContentsDisplayed() === true);

    await yourCartPage.checkoutButton();
});
