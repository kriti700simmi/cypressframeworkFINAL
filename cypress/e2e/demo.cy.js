
describe("Test suite", () =>{

 it("testcaese1", () =>{


    cy.visit('https://www.amazon.in/l/86460394031/ref=AF_WIN_bub_w_cml_t_5?pf_rd_r=RKFF6N0BNF64XNJBWRJZ&pf_rd_p=c3740ca6-74c8-4a1b-9630-09adfb9be13d&pf_rd_m=A1VBAL9TL5WCBF&pf_rd_s=merchandised-search-2&pf_rd_t=&pf_rd_i=12414705031')
    cy.wait(500)
    
    cy.get("#apb-browse-refinements-checkbox_6").click()




 } )

})