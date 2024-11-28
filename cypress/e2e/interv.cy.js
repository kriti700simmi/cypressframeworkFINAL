
describe('Test suitr', ()=> {


    ('it test1', ()=> {


    })
})

describe('test suite 2', () => {

    ('tc2', () => {
        
        cy.title().should('eq','My site title')
        cy.fixture()
        cy.get('buttonpath').should('be.visible')
        cy.get("div.sub-menu-bar a[herf*='about']")
        //we can handle cross domain link by usin cy.origin
        cy.origin(url, ()=>{
            //this is function


        })


    })
})