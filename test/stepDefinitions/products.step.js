import { Given, When } from '@cucumber/cucumber';

import productsPage from '../pageObjects/products.page';

Given(/^I sort the products by "(.*?)"$/, async (priceSort) => {
    await productsPage.sortByPrice(priceSort);
});

When(/^I add the following products to the basket$/, async (products) => {
    const productList = products.raw();

    await productList.forEach(async product => {
        switch (product.toString()) {
            case 'cheapest product':
                await productsPage.addCheapestProduct();
                break;
            case 'second costliest product':
                await productsPage.addSecondCostliestProduct();
                break;
            default:
                throw new Error('Unknown Product');
        }
    });
});

When(/^I click on the cart button in products page$/, async () => {
    await productsPage.clickCart();
});
