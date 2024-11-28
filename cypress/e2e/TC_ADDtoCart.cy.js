describe('Add product',()=>
{

    it('Add product to cart', ()=> {

        cy.visit(Cypress.env('url'))
        cy.get('.products').find('.product').each(($el,index, $list)=>{

           const vegiee = $el.find('h4.product-name').text()
           if(vegiee.includes('Cucumber'))

            {

                cy.wrap($el).find('button').click()
                
            }
         //cy.wait(500)   
        


        })

     

    })
})