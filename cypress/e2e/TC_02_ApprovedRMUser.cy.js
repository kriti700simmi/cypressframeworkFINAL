import rmapprove from "../PageObject/Rmapproved"



describe("log",()=>{


    it(" new referral", ()=>{


    const rmrequest = new rmapprove()
    cy.visit(Cypress.env('url'))
    rmrequest.getusernumber().type("RMVARANASI") 
    rmrequest.getloginbutton().click()
    rmrequest.getpassword().type('admin@123')
    rmrequest.getsavebutton().click()
    rmrequest.getotfield().type("123456")
    rmrequest.getverifybutton().click()
    rmrequest.gethomeenroll().trigger('mouseover')
    rmrequest.getserach().click()
    cy.contains('311').parents('tr').find('#btnEdit').click()
    rmrequest.getEnterRMremark().type("Approved this record for testing purpose as all details have correct details and document.")
    rmrequest.getapprovedrecord().click()


}) 
})
