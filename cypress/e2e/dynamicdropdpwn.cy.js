describe('dropdown dynamic', ()=>{

it('select dynamic dropdown', ()=>{

//cy.visit(Cypress.env('url'))
cy.visit('https://www.amazon.in/')
cy.get('#twotabsearchtextbox').type('Watch')
cy.get('.s-suggestion-container .s-suggestion').each(($el, index, $list) =>{

if($el.text()==="watch for man")
{
 cy.wrap($el).click()
 
}

})
cy.get('#twotabsearchtextbox').should('have.value','watch for man')
})

})