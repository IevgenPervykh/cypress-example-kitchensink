context('async commands test', () => {

    /*it('types into an email field', () => {
        cy.visit('/commands/actions')
        cy.findByPlaceholderText('Email').type('test@email.com')
        cy.wait(2000).then(() => {
            fetch('https://api.spacexdata.com/v3/missions')
            .then((res) => res.json())
            .then((data) => {
                // eslient-disable-next-line-no-console
                console.log(data)
            })
        })
        //console.log('test is finished')
        //cy.log('Cypress log used')
    })*/
    it('shows an active class for the current page', () => {
        cy.visit('/commands/actions')
        cy.get('.dropdown-menu').find('li').eq(2).should('have.class', 'active')
    })

    it('should not have an active class on inactive pages', () => {
        cy.visit('/commands/actions')
        cy.get('.dropdown-menu').find('li').first()
        .should('not.have.class', 'active')
        .find('a')
        .should('have.attr', 'href', '/commands/querying')
    })

    it('expect - Validation using explicit assertion on a specified subject', () => {
    
        //Chai's BDD style assertions for using expect
        expect(true).to.be.true
        const obj = { tools: 'qa' }
        expect(obj).to.equal(obj)
        expect(obj).to.deep.equal({ tools: 'qa' })
      })

    it('expect - matches text of two elements', () => {
        cy.visit('https://marketplace-int.naea1.uds-pen.lenovo.com')
        const normalizeText = (inputString) => inputString.replace(/\s/g, '').toLowerCase()

        let firstText
        let secondText

        cy.get('.ds-footer__top > .ds-footer__top__logo')
        .find('img')
        .should('have.attr', 'alt', 'Subscriptions Marketplace')
        .then(($first) => {
          firstText = normalizeText($first.text())
        })
  
        cy.get('.ds-header__logo > ds-link > a')
        .find('img')
        .should('have.attr', 'alt', 'Subscriptions Marketplace')
        .then(($second) => {
           secondText = normalizeText($second.text())
  
           expect(secondText, 'second text').to.equal(firstText)
        })


    })
})