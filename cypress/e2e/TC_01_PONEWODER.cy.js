import poneworder from "../PageObject/Newpoorder";

describe("Addnewpo",()=>{

   Before(function(){

    
   })

    it("Add new po order", ()=>{



const addpoorder = new poneworder()
cy.visit(Cypress.env('url'))
addpoorder.getusernumber().type("SCL1688") 
addpoorder.getloginbutton().click()
addpoorder.getpassword().type('admin@123')
addpoorder.getsavebutton().click()
addpoorder.getotfield().type("123456")
addpoorder.getverifybutton().click()
addpoorder.getcustomerdropdown().trigger('mouseover')
addpoorder.getpoorderdropdown().trigger('mouseover')
addpoorder.getaddproductdropdown().click()
addpoorder.getproject().click()
addpoorder.getproject().type('CBIS')



 } ) 
})