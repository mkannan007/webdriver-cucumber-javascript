import basePage from "./base.page";

class ProductsPage extends basePage {
    constructor() {
        super();
        this.selectors = {
            productSort: '.product_sort_container',
            secondCostliestProduct: '.inventory_item:nth-of-type(2) button',
            cheapestProduct: '.inventory_item:last-child button',
            shoppingCart: '#shopping_cart_container a',
        }
    }

    get productSort() {
        return $(this.selectors.productSort);
    }

    get secondCostliestProduct() {
        return $(this.selectors.secondCostliestProduct);
    }

    get cheapestProduct() {
        return $(this.selectors.cheapestProduct);
    }

    get shoppingCart() {
        return $(this.selectors.shoppingCart);
    }

    async sortByPrice(value) {
        await this.productSort.waitForDisplayed();
        await this.productSort.selectByVisibleText(value);
    }

    async addCheapestProduct() {
        await this.cheapestProduct.waitForClickable();
        await this.cheapestProduct.click();
    }

    async addSecondCostliestProduct() {
        await this.secondCostliestProduct.waitForClickable();
        await this.secondCostliestProduct.click();
    }

    async clickCart() {
        await this.shoppingCart.waitForClickable();
        await this.shoppingCart.click();
    }
}
export default new ProductsPage();
