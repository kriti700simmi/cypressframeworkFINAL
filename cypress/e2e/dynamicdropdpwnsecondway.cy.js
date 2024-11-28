describe('dropdown dynamic', ()=>{

it('select dynamic dropdown', ()=>{

//cy.visit(Cypress.env('url'))
cy.visit('https://www.amazon.in/')
cy.get('#twotabsearchtextbox').type('Watch')
cy.get('.s-suggestion-container').each(($el, index, $list) =>{

    const wat = $el.find('.s-suggestion').text()

if(wat.includes('watch for man', 'watch4'))
{
 cy.wrap($el).click()
}

})

})

})