class HomeEnroll
{
getclickadhaarspecial()
{

    return cy.get('[heading="Aadhaar Special Services"]')

}
Clickhomeservice()
    {

        return cy.get('[heading="Home Service"] > .nav-link')

    }
enterzipcode()
{

    return cy.get('#PIN_value')

}
getotp()
{

    return cy.get('.btn')
    
}
getmobilenumber()
{

    return cy.get("input[placeholder='Mobile No.']")

}
getceptcha()
{

    return cy.get('#CaptchaCodes')

}
clickgenerateotp()
{

    return cy.get('.btn')

}
getalertmessage()
{

    return cy.get('.alert')
}

}




export default HomePage;
