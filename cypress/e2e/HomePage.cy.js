import HomePage from "../PageObject/HomePage"
describe("Home registration", ()=>{

it("login through employee user", ()=>{

    const homepage = new HomePage()

cy.visit(Cypress.env('url'))
homepage.getclickadhaarspecial().click()
homepage.Clickhomeservice().click()
homepage.enterzipcode().type('462001')
homepage.getotp().click()
homepage.getmobilenumber().type('9890000000')
homepage.getceptcha().type('111111')
homepage.clickgenerateotp().click()

Cypress.config('defaultCommandTimeout', 8000)
homepage.getalertmessage().then(function(element)
{

const actualText = element.text()
expect(actualText.includes("Warning!")).to.be.true

})

})

})


