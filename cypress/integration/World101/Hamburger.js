/// <reference types="Cypress" />
class HamburgerMenu
{
hamburger(){
    const ham=cy.get('.navigation__toggle-menu-modal')
    //Global Era Issues
    ham.click()
    cy.get('.modal-body > .header-main-menu-units > :nth-child(1) > .unit-item').click()
    cy.title().should('be.equal','Global Era Issues | World101')
    cy.go('back')
    //regions of the world
    cy.get('.navigation__toggle-menu-modal').click()
    cy.get('.modal-body > .header-main-menu-units > :nth-child(2) > .unit-item').click()
    cy.title().should('be.equal','Regions of the World | World101')
    cy.go('back')
    //Covid-19
    cy.get('.navigation__toggle-menu-modal').click()
    cy.get(':nth-child(3) > :nth-child(1) > a').click()
    cy.title().should('be.equal','COVID-19 | World101')
    cy.go('back')
    //For Educators
    cy.get('.navigation__toggle-menu-modal').click()
    cy.get(':nth-child(3) > :nth-child(2) > a').click()
    cy.title().should('be.equal','Global Teaching Resource | World101')
    cy.go('back')
    //Newsletter
    cy.get('.navigation__toggle-menu-modal').click()
    cy.get(':nth-child(3) > :nth-child(3) > a').click()
    cy.title().should('be.equal','Subscribe | World101')
    cy.go('back')
    //About
    cy.get('.navigation__toggle-menu-modal').click()
    cy.get(':nth-child(3) > :nth-child(4) > a').click()
    cy.title().should('be.equal','About Us | World101')
    cy.go('back')

    //Who we work with
    cy.get('.navigation__toggle-menu-modal').click()
    cy.get(':nth-child(3) > :nth-child(5) > a').click()
    cy.title().should('be.equal','W101 Partners | World101')
    cy.go('back')
    return this
    
    

}
}
export default HamburgerMenu