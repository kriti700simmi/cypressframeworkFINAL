describe('select', ()=>{

it('select place', ()=>{


    cy.visit("https://www.astroyogi.com/kundli")
    cy.get('#Kund_Name').type("test")
    cy.get(':nth-child(4) > :nth-child(2) > #UserGender').select('Female')
    cy.get('#Date').select('23')
    cy.get('#Month').select('6')
    cy.get('#Year').select('2023')
    cy.xpath("//*[@name=\"Kund_BirthPlace\"]").type('Delhi {enter}').clear()
    cy.xpath("//*[@name=\"Kund_BirthPlace\"]").type('Delhi')

    cy.get(".ui-menu.ui-widget.ui-widget").find('>li').contains("Delhi North East, Delhi, IN").click()

    cy.get('#kundli_submit').click()
})


})