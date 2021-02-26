/// <reference types="Cypress" />
class GlobalEraIssues
{

geuCard(){ //global era issues
    cy.get(':nth-child(1) > a > .unit-name').click()
    cy.title().should('be.equal','Global Era Issues | World101')
    cy.go('back')


}

VisitModuleTimeline(){
    cy.get(':nth-child(1) > a > .unit-name').click()
    cy.get(':nth-child(3) > .card-module > .views-field-title > .field-content').click()
    cy.get(':nth-child(6) > .card > .row-card__cover-wrapper > .row-card__title-wrapper > .row-card__title-anchor > .row-card__title').click()
    cy.get('.unit-related-modules-block > h3').scrollIntoView()
    cy.go(-2)// go back twice
    cy.title().should('be.equal','Home | World101')
    



}
}
export default GlobalEraIssues