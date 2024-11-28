import hoapproval from "../PageObject/HOapproval"

describe("log",()=>{


    it(" new referral", ()=>{


    const horequest = new hoapproval()
    cy.visit(Cypress.env('url'))
    horequest.getusernumber().type("HOMGRVARANASI") 
    horequest.getloginbutton().click()
    horequest.getpassword().type('admin@123')
    horequest.getsavebutton().click()
    horequest.getotfield().type("123456")
    horequest.getverifybutton().click()
    horequest.gethomeenroll().trigger('mouseover')
    horequest.getserach().click()
    cy.contains('311').parents('tr').find('#btnEdit').click()
    horequest.getenterremark().type("Approved this record for testing purpose as all details have correct details and document.")
    horequest.getapprovedrecord().click()
    


}) 
})