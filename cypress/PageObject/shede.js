class POorder
{
getproduct()
{

    return cy.get('[heading="Aadhaar Special Services"]')

}
getofflinepo(){

    return cy.get('#ctl00_menu_menuBarn1 > .ctl00_menu_menuBar_4 > tbody > tr > [style="white-space:nowrap;"] > .ctl00_menu_menuBar_1')
}
getpoorder()
{
return cy.get('#ctl00_menu_menuBarn17 > :nth-child(1) > .ctl00_menu_menuBar_7 > tbody > tr > [style="white-space:nowrap;width:100%;"] > .ctl00_menu_menuBar_1')
}
getsearchpo()
{
    return cy.get('#ctl00_menu_menuBarn23 > :nth-child(1) > .ctl00_menu_menuBar_7 > tbody > tr > td > .ctl00_menu_menuBar_1')
}
enterponumber()
{
    return cy.get('#ctl00_ContentPlaceHolder1_txtPONumber')
}
clickview()
{
    return cy.get('#ctl00_ContentPlaceHolder1_btnViewVendorDetail')
}
clickedit()
{
    return cy.get('#ctl00_ContentPlaceHolder1_gvCustomerDetails_ctl02_btnUpdate')
}
selectproduct()
{
    return cy.get('#ctl00_ContentPlaceHolder1_ddlSchedProduct_chzn > .chzn-single > span')
}
selectdevicenumber()
    {

        return cy.get('#ctl00_ContentPlaceHolder1_ddlSchedDevicePartNo_chzn > .chzn-single > span')
    }
enterquantity()
{

    return cy.get('#ctl00_ContentPlaceHolder1_txtSchedQuantity')

}
selectpriority()
{

    return cy.get('#ctl00_ContentPlaceHolder1_ddlSchedPriority_chzn > .chzn-single > span')
    
}
selectmilstone()
{

    return cy.get('#ctl00_ContentPlaceHolder1_ddlSchedMilegeneration_chzn > .chzn-single > span')

}
selectexpecteddelivery()
{

    return cy.get('#ctl00_ContentPlaceHolder1_txtschedexpectdelv')

}
selectdeliveredby()
{

    return cy.get('#ctl00_ContentPlaceHolder1_ddlScheddelvby_chzn > .chzn-single > span')

}
entershipcode()
{

    return cy.get('#ctl00_ContentPlaceHolder1_txtSchedLocCode')
}
shiplocation()
{
    return cy.get('#ctl00_ContentPlaceHolder1_ddlSchedLocType_chzn > .chzn-single > span')
}
clickonadd()
{
    return cy.get('#ctl00_ContentPlaceHolder1_btnScheduleAdd')
}
slectprodname()
{
    return cy.get('#ctl00_ContentPlaceHolder1_ddlSchedProduct_chzn_o_1')
}
devicenumber()
{
    return cy.get('#ctl00_ContentPlaceHolder1_ddlSchedDevicePartNo_chzn_o_1')
}
selecthigh()
{
    return cy.get('#ctl00_ContentPlaceHolder1_ddlSchedPriority_chzn_o_1')
}
milstone()
{
    return cy.get('#ctl00_ContentPlaceHolder1_ddlSchedMilegeneration_chzn_o_1')
}
selectdate()
{
    return cy.get('#ctl00_ContentPlaceHolder1_POSched_CalendarExtender_today')
    
}
selectvalue()
{
    return cy.get('#ctl00_ContentPlaceHolder1_ddlScheddelvby_chzn_o_4')
}
selectshiplocation()
{
    return cy.get('#ctl00_ContentPlaceHolder1_ddlSchedLocType_chzn_o_2')
}
}




export default POorder;
