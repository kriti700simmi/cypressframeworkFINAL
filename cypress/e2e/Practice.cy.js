/// <reference types="Cypress" />

describe('Csslocator', ()=>{

it("Csslocatiors", ()=> {

    cy.visit(Cypress.env('url'))
    cy.xpath('//*[@id="txtUserID"]').type('SCL1688')
    cy.xpath('//*[@class="btn bg-blue Wpass btn-block"]').click()
    cy.get('#txtPassword').type('admin@123')
    cy.get('#savebtn').click()
    cy.title('')
    cy.visit('test you jhfjh sdfjh sdfkjeui jhjsdyjksh jkhskjd iiei')
    cy.get()
    cy.xpath()
    const sum = cy.get('elementpath').get(i).text ()

    if (sum === 'test')
    cy.wrap().$el().click()



})

})