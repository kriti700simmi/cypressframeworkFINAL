import login from "../PageObject/login"

describe("user", ()=>{

it(" user login page", ()=>{

    const loginid = new login()

cy.visit(Cypress.env('url'))
//Cypress.Commands.add(generateAndAdd)
loginid.getusernumber().type("SCL1688")
loginid.getloginbutton().click()
loginid.getpassword().type("admin@123")
loginid.getsavebutton().click()
loginid.getotfield().type("123456")
loginid.getverifybutton().click()
loginid.getofflinehover().trigger('mouseover')
loginid.getlocationsubmenu().trigger('mouseover')
loginid.getaddmenu().click()
loginid.getlocation().select("I")
loginid.enterlocationcode().type('5578785')
loginid.enterlocationame().type("testlocationname")
loginid.enteraddress().type("test address for location name and test it at the end of light")
loginid.selectstate().select("09")
loginid.selectdistrict().select("0967")
loginid.selectcityname().select("096702")
loginid.entergstnumber().type("09AABCU9603R1ZR")
loginid.entercontactperson().type("Kriti")
loginid.enterPincode().type('221003')
loginid.clicksavebutton().click()
loginid.getalert().should('contain','Location details saved successfully.')

})
})