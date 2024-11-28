class login
{
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
getofflinehover()
{
    return cy.get('#ctl00_menu_menuBarn8 > .ctl00_menu_menuBar_4 > tbody > tr > [style="white-space:nowrap;"] > .ctl00_menu_menuBar_1')
}
getlocationsubmenu()
{

    return cy.get('body > form:nth-child(2) > div:nth-child(9) > div:nth-child(2) > div:nth-child(2) > div:nth-child(49) > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(4) > td:nth-child(1) > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(1) > a:nth-child(1)')
}
getaddmenu()
{
    return cy.get('#ctl00_menu_menuBarn173 > :nth-child(1) > .ctl00_menu_menuBar_7 > tbody > tr > td > .ctl00_menu_menuBar_1')
}
getlocation()
{
    return cy.get('#ddlLocationType')
}
enterlocationcode()
{
    return cy.get('#txtLocationCode')


}
enterlocationame()
{
    return cy.get('#txtLocationName')
}
enteraddress()
{
    return cy.get('#txtAddress')
}
selectstate()
{

    return cy.get('#ddlStateName')
}
selectdistrict()
{

    return cy.get('#ddlDistictName')
}
selectcityname()
{

    return cy.get('#ddlCityName')

}
entergstnumber()
{

    return cy.get('#txtGSTIN')

}
entercontactperson()
{
    return cy.get('#txtContactPerson')
}
enterPincode()
{
    return cy.get('#txtPincode')
}
clicksavebutton()
{
    return cy.get('#btnSave')
}
getalert()
{
    return cy.get('#msgbox')
}
}

export default login;