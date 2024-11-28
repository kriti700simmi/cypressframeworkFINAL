describe('my suite', ()=>{

    it('capture screenshot', ()=>{

        cy.visit("https://demo.opencart.com/");
        cy.wait(5000);
        cy.viewport(1280, 720);
        cy.screenshot("homepageeeeeeeeeeeeeeeeeeeeeee");
        cy.get('#logo > a > .img-fluid').screenshot("logo");


        
    
        
    })


}


)