describe('broken link', ()=>{

    it('broken link check', ()=>
    {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get('.gf-li').each(($link)=>{
        const href = $link.attr('href')
        if(href){

            cy.request({url: href}).then((response)=>{
            if(response.status>=200){


                cy.log('***Broken Link***** ${href}')
            }

     
            })
        }
      })


    })


}


)