/// <reference types = "cypress" />

describe('Tribal Credit', function() {
    before('Visit website', function () {
        cy.visit('/')
        cy.url()
            .should('eq', 'https://boards.greenhouse.io/tribalcredit/')
        cy.get('h2')
            .should('be.visible')
                .and('have.text', 'Current Job Openings')
    })

    it('seacrh job position', function() {
        cy.get('#departments-select')
            .select('Engineering')
        cy.get('#offices-select')
            .select('Mexico')
        cy.get('[href="/tribalcredit/jobs/4347815004"]')
            .should('be.visible')
                .and('have.text', 'Sr. QA Engineer')

    })
})