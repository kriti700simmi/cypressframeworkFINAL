describe("verify Assert", ()=>{
    it("implicit", ()=>{

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        //cy.url().should('include','orangehrmlive.com')
        //cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        //cy.url().should('contain','orangehrm')

        //cy.url().should('include','orangehrmlive.com')
        //.should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        //.should('contain','orangehrm')

        cy.url().should('include','orangehrmlive.com')
        .and('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        .and('not.contain','greenhrmlive')

        cy.title().should('include', 'Orange')
        .and('eq', "OrangeHRM")
        .and('contain', "HRM")
        cy.get('.orangehrm-login-branding > img').should('be.visible') // logo is visible or not
        .and('exist')
        cy.xpath("//a").should('have.length', 5)  // no. of link

        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type("Admin")
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').should('have.value', 'Admin') // value finder
    

    })

    it("explicit asseration", ()=>{

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type("Admin")
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type("admin123")
        cy.get("button[type='submit']").click()

        let expvalue="hii mari"
        cy.get(".oxd-userdropdown-name").then((x)=>{

            let actualusername =x.text()

            //BDD

            expect(actualusername).to.equal(expvalue)


            //TDD
            assert.equal(actualusername,expvalue)
            //assert.notEqual(actualusername,expvalue)


            //let expvalue= 'Already'
//loginid.getalert().then((x)=>{

           // let actualusername =x.text()

        //    expect(actualusername).to.equal(expvalue) 
        
        // })



        })    

    })
})