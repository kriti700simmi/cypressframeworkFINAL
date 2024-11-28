describe(('somefunction'),()=>{

it(' ALERTconfirm',()=>{


    cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
    //automatic alert pop-up is handel by cypress
    //if want to handle for validation message then we use 
    cy.on('window:alert',(str)=>
        //str store the alert message now u can validate str message
    {
    expect(str).to.equal('message' )
    })
})
//cypress is not support child tab so we have to invoke the target = blank value
//invokeis jquery function to remove attributes
cy.get('#opentab').invoke('removeAttr','target').click()
//cypress is not support cross domain ti handle this we use orgin
cy.origin("Url",()=>{


})

})