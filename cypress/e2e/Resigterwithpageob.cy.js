import { reg } from "../PageObject/register"



describe('submit form',()=>{

it('Tc-valid details', ()=>{

    const regs = new reg()
    cy.visit('https://testautomationpractice.blogspot.com/')
    regs.enterfirstname()
    regs.enteremail()
    regs.enterphone()
    regs.enteraddress()
    regs.entergendre()
    regs.enterdays()
    regs.selectcountry()
    regs.selectcolor()
    regs.selectsortedlist()
    regs.selectdatepicker1()
    regs.selectdatepickerselect()
    regs.selectdatepicker2()
    regs.selectmonth()
    regs.selectyaer()
    regs.seletdate()
    



})

})