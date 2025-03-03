const { $ } = require('@wdio/globals')
const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class CheckoutPage extends Page {
    /**
     * define selectors using getter methods
     */
    get emptyShoppingCartTitle () {
        return $('div[id="content"] p')
    }
    get removeItemButton () {
        return $('[class="btn btn-danger"]')
    }
    
    get checkoutListItem () {
        return $('#content form tbody tr')
    }
}

module.exports = new CheckoutPage();
