// type definitions for Cypress object "cy"
// <reference types="cypress" />

describe('Cypress Custom Commands', function() {
    
    //Mostly used for Setup Part
    before(function(){
    cy.fixture('examplesecond').then(function(data)
    {
        this.data=data ;
    })
    })
    
    it('Cypress Test Case', function() {
  
    //Registration on the site
    cy.visit('https://shop.demoqa.com/my-account/');
    cy.get('#reg_username').type(this.data.Username);
    cy.get('#reg_email').type(this.data.Email);
    cy.get('#reg_password').type(this.data.NewPassword);
    cy.get('.woocommerce-Button').click();

    //Checking whether the Registration is successful and whether UserName is populated under login section
    cy.get('#username').should('have.value',this.data.Username);

        // For Loop for Accessing productName array from Features File and Using the custom command
        this.data.productName.forEach(function(element){
            // Invoke the Custom command selectProduct
            cy.selectProduct(element[0],element[1],element[2]);
        })
    })


})