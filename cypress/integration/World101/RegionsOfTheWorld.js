/// <reference types="Cypress" />
class RegionsOfTheWorld
{
rotw(){
    cy.get(':nth-child(2) > a > .unit-name').click()
    cy.title().should('be.equal','Regions of the World | World101')
    cy.go('back')
}

ROTWexplore(){
    cy.get(':nth-child(2) > a > .unit-name').click()
    cy.title().should('be.equal','Regions of the World | World101')
    cy.get('.field > a').click() //Explore
    cy.go(-2)
    cy.title().should('be.equal','Home | World101')

}
SublensCarouselFunc(){
    cy.get(':nth-child(2) > a > .unit-name').click()
    cy.title().should('be.equal','Regions of the World | World101')
    cy.get('.field > a').click() //Explore
    cy.get('.map-intro > .categories-tree > :nth-child(3) > [href="/rotw/middle-east"]').click()
    cy.title().should('be.equal','Regions of the World | World101')
    cy.get(':nth-child(2) > a > span').click() //lens
    cy.wait(1000)
    cy.title().should('be.equal','People and Society | World101')
    cy.get('.right > .glyphicon').click() //sublens carousel arrow next
    //cy.title().should('be.equal','Middle east - People and Society | World101')
    cy.get('[data-slide-to="2"]').click() // sublens carousel indicator
    cy.get('.right > .glyphicon').click() ////sublens carousel arrow next
    cy.get('[data-slide-to="6"]').click() // sublens carousel indicator
    cy.get('.left > .glyphicon').click() ////sublens carousel arrow previous
    cy.get('[data-slide-to="3"]').click() // sublens carousel indicator
    cy.get('.left > .glyphicon').click() ////sublens carousel arrow previous






}
}
export default RegionsOfTheWorld