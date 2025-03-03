const { expect } = require('@wdio/globals')
const HomePage = require('../pageobjects/home.page')
const CheckoutPage = require('../pageobjects/checkout.page')

describe('Shopping Cart', () => {

    it('add product to cart and remove it', async () => {
        await browser.url('http://opencart.abstracta.us')
        await browser.saveScreenshot('./screenshots/home.png');

        await HomePage.searchInput.setValue('iPhone')
        await browser.saveScreenshot('./screenshots/iphone-search.png');
        await HomePage.searchButton.click()
        await browser.pause(3000)
        await browser.saveScreenshot('./screenshots/iphone-search-result.png');

        await HomePage.searchResult.click()
        await browser.pause(3000)
        await HomePage.cartCountButton.click()
        await browser.pause(3000)
        await expect(HomePage.cartItemName).toHaveText('iPhone')
        await browser.pause(3000)

        await browser.saveScreenshot('./screenshots/cart-menu.png');
        await HomePage.cartDropdownViewCartOption.click()
        await browser.pause(3000)

        await browser.saveScreenshot('./screenshots/checkout-cart.png');
        const itemText = await CheckoutPage.checkoutListItem.getText()
        await expect(itemText).toContain('iPhone')
        await CheckoutPage.removeItemButton.click()
        await browser.pause(3000)
        
        await browser.saveScreenshot('./screenshots/checkout-cart-remove.png');
        const emptyCartText = await CheckoutPage.emptyShoppingCartTitle.getText()
        await expect(emptyCartText).toContain('Your shopping cart is empty!')
    })
})

