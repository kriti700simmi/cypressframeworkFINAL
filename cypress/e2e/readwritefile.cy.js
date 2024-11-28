describe('read and write file', ()=>{

it('write file and update text',()=>{

cy.writeFile("cypress/fixtures/heading.txt", "test the cypress query")
cy.writeFile("cypress/fixtures/heading.txt",
    "comment the h3",{ flag:"a+" })

 cy.writeFile("cypress/fixtures/login credential.json", {name: "userid", password: "admin@123"})   


})

it('read file', ()=>{

cy.readFile("cypress/fixtures/heading.txt").then((data)=>{

    cy.log("++print++",data);

});

});
    
});