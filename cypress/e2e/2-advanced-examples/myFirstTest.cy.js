
//const navbarText = Cypress.env('navbarText');
//const token = 'abcd123'
context('My First Test', () => {
    beforeEach(() => {
        cy.visit('/commands/actions')
        //cy.fixture('example').then(function (data) {
        //    this.data = data;
        //    cy.log('THIS: ', this.data)
        //})
    })

    it('triggers a popover on click', () => {
        cy.get('.action-btn').click()
        cy.findByText('This popover shows up on click').should('be.visible')
    })

    it('can click on different sections of a canvas', () => {
        cy.get('#action-canvas').click('top')
        cy.get('#action-canvas').click('bottomRight')
        cy.get('#action-canvas').click(80 , 100)

    })

    it('can double click to edit', () => {
        cy.get('.action-div').dblclick().should('not.be.visible')
        cy.get('.action-input-hidden').should('be.visible')
    })

    it('can right click to edit', () => {
        cy.get('.rightclick-action-div').rightclick().should('not.be.visible')
        cy.get('.rightclick-action-input-hidden').should('be.visible')
    })

    it('shows the nav links on hover', () => {
        cy.get('.dropdown-toggle').trigger('mouseover').click()
        cy.get('.dropdown-menu').should('be.visible')
    })

/* 
    it('sets and gets a token from localStorage', () => {
        cy.setLocalStorage('token', token)
        cy.getLocalStorage('token').should('eq', token)
    })

    it('overwrites the type command by using sensetive characters', () => {
        cy.visit('/commands/actions')
        cy.findByPlaceholderText('Email').type('test@email.com')
        cy.findByPlaceholderText('Email').type('test@email.com', { sensetive: true })
    })

    it('uses fixture data in a network request', function() {
        cy.visit('/commands/network-requests')
        cy.intercept('GET', 'comments', this.data).as('getComment')
        cy.get('.network-btn').click()
        cy.wait('@getComment').then((res) => {
            cy.log('Response: ', res)
        })
    })

    it('pulls data from a fixture', () => {
        cy.fixture('example').then((data) => {
            cy.log('DATA: ', data)
        })
    })

    it('updates fixture data inline', () => {
        cy.fixture('example').then((data) => {
            data.email = 'updated@mail.com'
            cy.log('UPDATED: ', data)
        })
    })
    before(() => {
        cy.request('https://api.spacexdata.com/v3/missions').its('body').should('have.length', 10)
    })

    beforeEach(() => {
        cy.visit('/')
    })

    afterEach(() => {
        cy.log("after each hook is here")
    })

    after(() => {
        cy.log("the final after")
    })

    it('has an h1 on the page', () => {
        cy.get('h1').should('exist');
    })
 
    it('renders the correct h1 text', () => {
        cy.get('h1').should('contain.text', 'Kitchen Sink')
    })

    it('renders a paragrph under the h1', () => {
        cy.get('.container').eq(1).find('p').should('exist')
    })

    it('renders a section with the correct elements', () => {
        cy.get('.container').eq(2).within(() => {
            cy.get('h4').should('exist');
            cy.get('p').should('exist');
        })
    })
    it('correctly renders the cypress website link', () => {
        cy.findByText(navbarText).should('exist')
    })*/


})
