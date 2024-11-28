class referralletter {


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

return cy.get('#ctl00_menu_menuBarn11 > .ctl00_menu_menuBar_4 > tbody > tr > [style="white-space:nowrap;"] > .ctl00_menu_menuBar_1')

}

getgeneratereferral()

{
    return cy.get('#ctl00_menu_menuBarn175 > :nth-child(1) > .ctl00_menu_menuBar_7 > tbody > tr > td > .ctl00_menu_menuBar_1')
}

getaskcentre()
{

    return cy.get('#ctl00_ContentPlaceHolder1_ddlaskcenter')
}
getnameofrequest()
{
        
  return cy.get('#txtNameOfRequester')

}

getrequestercontactno()
{
 
    return cy.get('#txtRequesterContactNo')

}
getprimaryresidence()
{

    return cy.get('#txtNameOfPrimaryResident')

}
getnamesecondary()

{
 return cy.get('#txtNameOfSecondryResident')

}
getcountsecondry()
{
return cy.get('#txtCountOfSecondryResident')
}
gettotalcount()
{


    return cy.get('#txtCountOfSecondryResident')

}
getnew()
{

    return cy.get('#txtNew')

}

getMbufree()
{
    return cy.get('#txtMBUFree')
}

gettyperequester()
{

    return cy.get('#ddlRequestType')
}
getaddress()
{
    return cy.get('#txtAddress')
}

getdistance()
{
    return cy.get('#txtDistance')
}
getrequestdate()
{

    return cy.get('#ctl00_ContentPlaceHolder1_txtDate')
}
getdatepicker()
{
return cy.get('#ctl00_ContentPlaceHolder1_ceFromDate_today')
}
getappointmentdate()

{

    return cy.get('#ctl00_ContentPlaceHolder1_txtAppointment')
}
getdatepickerappoint()
{

    return cy.get('#ctl00_ContentPlaceHolder1_CalendarExtender1_today')
}
getrequestmode()
{
    return cy.get('#txtRequestMode')
}
getoperatorname()
{
    return cy.get('#txtOperatorName')
}
getstationid()
{
    return cy.get('#txtStationId')
}
getcosttravel()
{
    return cy.get('#txtCostOfTravel')
}
getclremark()
{
    return cy.get('#txtRemarks1')
}
getuploadfile()
{
    return cy.get('#fileuploadHomeEnrollment')
}
getgeneraterequest()
{
    return cy.get('#btnSave')
}
}

export default referralletter ;
