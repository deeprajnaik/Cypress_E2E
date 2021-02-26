/// <reference types="Cypress" />
class TeachingResources
{
    ForEducators()
    {
        cy.get('.classroom-teachingresources > .button').click()
        cy.title().should('be.equal','Global Teaching Resource | World101')
    }

}
export default TeachingResources