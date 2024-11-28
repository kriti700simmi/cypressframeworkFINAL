describe('Autosuggestdropdown', ()=>{

it('select autosugeest option--tc1', ()=>{

cy.visit('https://www.amazon.in/')
cy.get("#twotabsearchtextbox").type('iphone-13')
cy.get(".left-pane-results-container").find('>div').contains("iphone-13 mini").click()
cy.get('[value="Go"]').click()
cy.writeFile("test.txt", "test1")

})

})