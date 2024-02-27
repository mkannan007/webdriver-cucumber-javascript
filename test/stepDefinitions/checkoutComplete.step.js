import { Then } from "@cucumber/cucumber";
import { expect, $ } from '@wdio/globals'

import checkoutCompletePage from '../pageObjects/checkoutComplete.page';
import { TITLE, HEADER, MESSAGE } from '../content/checkoutComplete.content';

Then(/^I should see the Checkout complete and Order dispatch message$/, async () => {
    await browser.waitUntil(async () => await checkoutCompletePage.checkoutCompleteTitle() === TITLE);

    await expect(await checkoutCompletePage.thankYouHeader()).toEqual(HEADER);
    await expect(await checkoutCompletePage.orderDispatchMessage()).toEqual(MESSAGE);
});
