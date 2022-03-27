class search {
    go(){
        cy.visit('/')
    }

    pageValidation(){
        cy.url()
        .should('eq', 'https://boards.greenhouse.io/tribalcredit/')
        cy.get('h2')
        .should('be.visible')
            .and('have.text', 'Current Job Openings')
    }

    chooseDepartment(departmentName){
        cy.get('#departments-select')
        .select(departmentName)
    }

    chooseOffice(officeName){
        cy.get('#offices-select')
            .select(officeName)
    }

    jobPositionValidation(positionName){
        cy.get('[href="/tribalcredit/jobs/4347815004"]')
            .should('be.visible')
                .and('have.text', positionName)
    }
}

export default new search