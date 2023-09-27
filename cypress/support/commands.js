// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import '@testing-library/cypress/add-commands'

Cypress.Commands.add('setLocalStorage', (key, value) => {
cy.window().then((window) => {
        window.localStorage.setItem(key, value)
    })
})

Cypress.Commands.add('getLocalStorage', (key) => {
    cy.window().then((window) => {
        return window.localStorage.getItem(key)
    })
})

Cypress.Commands.overwrite('type', (originalFn, element, text, options) => {
    if (options && options.sensetive) {
        options.log = false
        Cypress.log({
            $el: element,
            name: 'type',
            message: '*'.repeat(text.length)
        })
    }
    return originalFn (element, text, options)
})
/*
 import ProductPage from '../support/PageObjects/ProductPage';

 Cypress.Commands.add("selectProduct", (productName, size , color) => { 
    // Creating Object for ProductPage
    const productPage=new ProductPage();

    // Doing the search part for Shirts.
    productPage.getSearchClick().click()
    productPage.getSearchTextBox().type('Shirt');
    productPage.getSearchTextBox().type('{enter}')
    
    productPage.getProductsName().each(($el , index , $list) => {
        //cy.log($el.text());
        if($el.text().includes(productName)) {
            cy.get($el).click();
        }
    })

    // Selecting the size and color and then adding to cart button. 
    productPage.getSelectColor().select(color);
    productPage.getSelectSize().select(size);
    productPage.getAddtoCartButton().click();
 })*/
