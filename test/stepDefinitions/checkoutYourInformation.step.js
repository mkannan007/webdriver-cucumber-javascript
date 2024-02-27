import { When } from '@cucumber/cucumber';

import checkoutYourInformationPage from '../pageObjects/checkoutYourInformation.page';
import checkoutOverViewPage from '../pageObjects/checkoutOverView.page';

When(/^I enter my details and finish the purchase$/, async (table) => {
    const data = table.rowsHash();

    if (data.FirstName != null) {
        await checkoutYourInformationPage.setFirstName(data.FirstName);
    }

    if (data.LastName != null) {
        await checkoutYourInformationPage.setLastName(data.LastName);
    }

    if (data.PostalCode != null) {
        await checkoutYourInformationPage.setPostalCode(data.PostalCode);
    }

    await checkoutYourInformationPage.continueButton();
    await browser.waitUntil(async () => await checkoutOverViewPage.isCheckoutSummaryDisplayed() === true);
    await checkoutOverViewPage.finishButton();
});
