describe('linktext',()=>{


    it('tc1-prtiallink', ()=>{

        cy.visit("https://docs.cypress.io/app/get-started/why-cypress")
        cy.get('[href="https://github.com/cypress-io/cypress-documentation"]').click()
    })
})