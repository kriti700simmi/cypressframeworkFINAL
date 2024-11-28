class hoapproval {

    getusernumber()

    {
        return cy.get("input[placeholder='Username']")
    
    }
    getpassword()
    {
    
    return cy.get("input[placeholder='Password']")
    
    }
    getloginbutton()
    {
        
    return cy.get("form[id='form2'] div div div div div div div div button[type='button']")
    
    }
    getsavebutton()
    {
    
        return cy.get('#savebtn')
    }
    getotfield(){
    return cy.get('#txtOtp')
    
    }
    getverifybutton()
    {
    
    return cy.get('#btnVerifyOtp')
    
    }
    
gethomeenroll()
{

    return cy.get('#ctl00_menu_menuBarn1 > .ctl00_menu_menuBar_4 > tbody > tr > [style="white-space:nowrap;"]')
}
getserach()
{
 
    return cy.get('#ctl00_menu_menuBarn3 > :nth-child(1) > .ctl00_menu_menuBar_7 > tbody > tr > td > .ctl00_menu_menuBar_1')

}
getediticon()
{
    return cy.get('#btnEdit')
}
getenterremark()
{
    return cy.get('#txtRemarks3')
}
getapprovedrecord()
{
    return cy.get('#btnApprove')
}
}
export default hoapproval;
