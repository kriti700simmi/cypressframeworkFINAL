class poneworder{

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
    getcustomerdropdown(){

     return cy.get('#ctl00_menu_menuBarn1 > .ctl00_menu_menuBar_4 > tbody > tr > [style="white-space:nowrap;"] > .ctl00_menu_menuBar_1')
    
    }

    getpoorderdropdown()
    {

        return cy.get('#ctl00_menu_menuBarn17 > :nth-child(1) > .ctl00_menu_menuBar_7 > tbody > tr > [style="white-space:nowrap;width:100%;"] > .ctl00_menu_menuBar_1')
    }
    getaddproductdropdown()
    {
      
        return cy.get('#ctl00_menu_menuBarn22 > :nth-child(1) > .ctl00_menu_menuBar_7 > tbody > tr > td > .ctl00_menu_menuBar_1')

    }
    getproject()
    {

        return cy.get('#ctl00_ContentPlaceHolder1_ddlProject_chzn > .chzn-single')
    }
    getcosortium()
    {
        return cy.get('#ctl00_ContentPlaceHolder1_ddlConsortium_chzn > .chzn-single > span')
    }
    get customergroup()
    {
        return cy.get('#ctl00_ContentPlaceHolder1_ddlCustomergroup_chzn > .chzn-single > span')
    }
    getcustomer()
    {
        return 
        cy.get('#ctl00_ContentPlaceHolder1_ddlCustomer_chzn > .chzn-single > span')
    }
    gettyped()
    {
        return cy.get('#ctl00_ContentPlaceHolder1_ddlCustomer_chzn > .chzn-single > span')
    }
    getcategory()
    {
        return cy.get('#ctl00_ContentPlaceHolder1_ddlPOCategory_chzn > .chzn-single > span')
    }
    getemail()
    {
        return cy.get('#ctl00_ContentPlaceHolder1_ddlPOCategory_chzn > .chzn-single > span') 
    }
    getpodate()
    {
        return cy.get('#ctl00_ContentPlaceHolder1_txtCustPODate')
    }
    getexpecteddelivery()
    {
        return cy.get('#ctl00_ContentPlaceHolder1_txtExpectDelDate')
    }
    getpaymentcategory()
    {
        return cy.get('#ctl00_ContentPlaceHolder1_ddlPaymentCategory_chzn > .chzn-single > span')
    }
    getbillingmechnism()
    {
        return cy.get('#ctl00_ContentPlaceHolder1_ddlbillingMechanism_chzn > .chzn-single > span')
    }
    getlocationcode()
    {
        return cy.get('#ctl00_ContentPlaceHolder1_ddlbillingMechanism_chzn > .chzn-single > span')
    }
    getbussinessdomain()
    {
        return cy.get('#ctl00_ContentPlaceHolder1_ddlBusinessDomain_chzn > .chzn-single > span')
    }
    gethardwarecheck()
    {
        return cy.get('#ctl00_ContentPlaceHolder1_chkHardproduct')
    }


}


export default poneworder; 