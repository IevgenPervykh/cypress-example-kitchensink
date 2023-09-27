context('ui cypress commands', () => {

    it('links to the actions page correctly', () => {
        cy.visit('/')
        cy.findAllByText('Actions').first().click({ force: true })
        cy.url().should('include', 'commands/actions')
    })

    it('lets you tpe in an input field', () => {
        cy.visit('commands/actions')
        cy.findAllByPlaceholderText('Email').type('Test').should('have.value', 'Test')
    })

    it('lets you clear an input field', () => {
        cy.visit('commands/actions')
        cy.findByLabelText('Describe:')
            .type('Test description')
            .should('have.value', 'Test description')
            .clear().should('have.value', '')
    })

    it('lets you check a checkbox', () => {
        cy.visit('commands/actions')
        cy.get('.action-checkboxes [type="checkbox"]').eq(1).check({ force: true }).should('be.checked')
    })
})