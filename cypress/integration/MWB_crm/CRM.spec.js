/// <reference types="Cypress" />
import GLogin from '../crm/GLogin'
import Lead from '../crm/Lead'


describe('MW Bankers CRM', function () {
  const signIn = new GLogin()
  const lead = new Lead()

  beforeEach(() => {
    cy.viewport(1366 , 768)
    Cypress.Cookies.preserveOnce('PHPSESSID')
  })



  it('Login', function () {
    

    //signIn page
    signIn.visit()
    signIn.enterEmail('testerdev10@gmail.com')
    signIn.enterPassword('testerdev123')
    signIn.clickSubmit()
    cy.getCookies('auth_key')
    //Cypress.Cookies.preserveOnce('PHPSESSID')


  })
  it('lead creation', function (){
    

    //Create Lead filling the mandatory fields
    
    lead.menuLead()
    lead.visit()
    lead.createLead()

    
  })
  it('lead Validation', function(){

    lead.leadValidation()
  })

  it('Delete Lead', function (){
    
    lead.visit()
    lead.deleteLead()
    
    



    




  })


})