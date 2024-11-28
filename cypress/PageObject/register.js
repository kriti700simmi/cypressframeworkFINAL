import registerdata from "../fixtures/registerdata.json"

export class reg{
//create a object
webelement={

firstname: '#name',
email: '#email',
phone: '#phone',
address: '#textarea',
gendre: '#female',
Days: '#monday',
country: '#country',
color: '#colors',
sortedlist: '#animals',
datepicker1: '#datepicker',
datepickerselec: '[data-date="27"]',
datepicker2: '[name="SelectedDate"]',
month: '[data-handler="selectMonth"]',
yaer: '[data-handler="selectYear"]',
date: '[data-date="23"]',
selectcalander: '#start-date',
selectmontharrow: '#'





}

//now create functionality
enterfirstname(){
cy.get(this.webelement.firstname).type(registerdata.name)

}
enteremail(){

    cy.get(this.webelement.email).type(registerdata.email)
}
enterphone(){

    cy.get(this.webelement.phone).type(registerdata.phone)
}
enteraddress(){

    cy.get(this.webelement.address).type('test address')
}
entergendre(){

    cy.get(this.webelement.gendre).check()

}
enterdays(){

    cy.get(this.webelement.Days).check()
}
selectcountry(){

    cy.get(this.webelement.country).select('india')
}
selectcolor(){
cy.get(this.webelement.color).select('white')

}
selectsortedlist(){
 cy.get(this.webelement.sortedlist).select('dog')

}
selectdatepicker1(){

    cy.get(this.webelement.datepicker1).click()

}
selectdatepickerselect()
{

    cy.get(this.webelement.datepickerselec).click()
}
selectdatepicker2(){

    cy.get(this.webelement.datepicker2).click()
}
selectmonth(){

    cy.get(this.webelement.month).select('Jun')
}
selectyaer(){

    cy.get(this.webelement.yaer).select('2015')
}
seletdate(){

    cy.get(this.webelement.date).click()
}
}