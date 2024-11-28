import POorder from "../PageObject/Poschedeorder"
import login from "../PageObject/login"
describe("po ordern create", ()=>{

it("add product", ()=>{
 
    const loginid = new login()
 const poorder = new POorder()
cy.visit(Cypress.env('url'))

loginid.getusernumber().type("SCL1688")
loginid.getloginbutton().click()
loginid.getpassword().type("admin@123")
loginid.getsavebutton().click()
loginid.getotfield().type("123456")
loginid.getverifybutton().click()
poorder.getofflinepo().trigger('mouseover')
poorder.getpoorder().trigger('mouseover')
poorder.getsearchpo().click()
poorder.enterponumber().type("AGR/185")
poorder.clickview().click()
poorder.clickedit().click()
poorder.selectproduct().click()
poorder.selectproduct().type("MSO 1300 (Biometric Device)")
poorder.slectprodname().click()
cy.wait(5000)
poorder.selectdevicenumber().click()
poorder.selectdevicenumber().type("293506228")
poorder.devicenumber().click()
poorder.enterquantity().type('2')
poorder.selectpriority().click()
poorder.selectpriority().type("High")
poorder.selecthigh().click()
poorder.selectmilstone().click()
poorder.selectmilstone().type("URGENT")
poorder.milstone().click()
poorder.selectexpecteddelivery().click()
poorder.selectdate().click()
poorder.selectdeliveredby().click()
poorder.selectdeliveredby().type("SCL")
poorder.selectvalue().click()
poorder.entershipcode().type("2000")
poorder.shiplocation().click()
poorder.shiplocation().type("Customer Branch")
poorder.selectshiplocation().click()
cy.wait(3000)
poorder.clickonadd().click()




})
})
