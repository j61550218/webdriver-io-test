const { $ } = require('@wdio/globals')
const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage extends Page {
    /**
     * define selectors using getter methods
     */
    get searchInput () {
        return $('#search input')
    }

    get searchButton () {
        return $('.fa.fa-search')
    }

    get searchResult () {
        return $('.product-thumb .fa-shopping-cart')
    }

    get cartCountButton () {
        return $('#cart span')
    }

    get cartItemName () {
        return $('td[class="text-left"]')
    }

    get cartDropdownViewCartOption () {
        return $('.dropdown-menu p[class="text-right"] a:first-child')
    }
     
    get checkoutCart () { 
        return $('#checkout-cart')
    }
    
    get checkoutCart () { 
        return $('#checkout-cart')
    }

    get checkoutListItem () {
        return $('#content form tbody tr')
    }

    get removeItemButton () {
        return $('[class="btn btn-danger"]')
    }
    get emptyShoppingCartTitle () {
        return $('div[id="content"] p')
    }
    
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open();
    }
}

module.exports = new HomePage();
