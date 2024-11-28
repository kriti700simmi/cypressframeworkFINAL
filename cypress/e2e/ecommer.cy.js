describe("addtoproduct", ()=>{

    it("Add product for checkout", ()=>{


        cy.visit(Cypress.env('url'));
        

        cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click();
        cy.get('.products').find('.product').each(($el, index, $list) =>{
           const textveg =  $el.find('h4.product-name').text()
           if(textveg.includes('Carrot'))
           {
            cy.wrap($el).find('button').click();
            

            cy.xpath('//*[@alt="Cart"]').click()   
            cy.xpath('//button[text()="PROCEED TO CHECKOUT"]').click()
            cy.xpath('//*[text()="Place Order"]').click()
            cy.get('select').select('India').should('have.value', 'India')
            cy.get('.chkAgree').check()
            cy.contains('Proceed').click()



           }


         })
    })
})