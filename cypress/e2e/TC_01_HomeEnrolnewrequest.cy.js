import referralletter from "../PageObject/Generatehomerequest"


describe("log",()=>{


    it(" new referral", ()=>{

    

    const requestnew = new referralletter()
    // const is not change and use requestnew as a vaiable and using new word to create object for class//
    cy.visit(Cypress.env('url'))
    requestnew.getusernumber().type("SCL1688") 
    requestnew.getloginbutton().click()
    requestnew.getpassword().type('admin@123')
    requestnew.getsavebutton().click()
    requestnew.getotfield().type("123456")
    requestnew.getverifybutton().click()
    //requestnew.gethomeenroll().invoke('show')
    requestnew.gethomeenroll().trigger('mouseover')

    requestnew.getgeneratereferral().click({force: true})
    requestnew.getaskcentre().select("55")
    requestnew.getnameofrequest().type('kriti sharma')
    requestnew.getrequestercontactno().type('93892802820')
    requestnew.getprimaryresidence().type('Preeti test primary')
    requestnew.getnamesecondary().type('test secondary')
    requestnew.getcountsecondry().type('4')
    requestnew.getnew().type('45')
    requestnew.getMbufree().type('450')
    requestnew.gettyperequester().select('2')
    requestnew.getaddress().type('Plot no. 1 sector 73 Idemia')
    requestnew.getdistance().type('46.9')
    requestnew.getrequestdate().click()
    requestnew.getdatepicker().click()
    requestnew.getappointmentdate().click()
    requestnew.getdatepickerappoint().click()
    requestnew.getrequestmode().type('Email')
    requestnew.getoperatorname().type('test operator')
    requestnew.getstationid().type('74838')
    requestnew.getcosttravel().type('678')
    requestnew.getclremark().type("remark from admin side")
    const filepath = 'WhatsApp Image.jpeg'
    requestnew.getuploadfile().attachFile(filepath);
    requestnew.getgeneraterequest().click() 

}) 
})