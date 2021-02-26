/// <reference types="Cypress" />
class Homepage {
    W101Home() {
        //cy.get('#units-list div:nth-child(1) .unit-count').click()
        //cy.wait(1000)
        //cy.go('back')
        //cy.wait(2000)


        cy.title().should('eq', 'Home | World101')

        //heading & sub Heading
        cy.get("#units-list div:nth-child(1) span.unit-name").contains('Global Era Issues')
        cy.get('h1.home-page-header__title div.home-page-header__description div.field.field--name-body.field--type-text-with-summary.field--label-hidden.field--item > p:nth-child(1)').contains('Understand the issues, forces, and actors that shape our world.')
        cy.get('section.home-page-header > div.explore-our-library').contains('Explore our library')



        //check video

        cy.get(".symbols--video-play").click()
        cy.get('.video-btn > .play-button').click()
        cy.wait(1000)
        cy.get('#media-asset-220 > .modal-dialog > .modal-content > .modal-header > .close > span').click()
        //cy.get('.classroom-teachingresources > .button').click()

        //Global Era Issues Card
        cy.get('#units-list div:nth-child(1) .unit-count').click()
        //cy.wait(2000)
        cy.title().should('be.equal','Global Era Issues | World101')
        cy.go('back')
        //cy.wait(2000)

        //Regions of the World
        cy.get('#units-list div:nth-child(2) .unit-count').click()
        
        //cy.wait(2000)
        cy.title().should('be.equal','Regions of the World | World101')
        cy.go('back')
        //cy.wait(2000)

        //check signup

        cy.get('#edit-mail').type("deepraj.naik@sjinnovation.com")
        cy.get('#edit-submit').click()
        cy.wait(2000)
        cy.title().should('be.equal','Subscribe | World101')
        cy.go('back') // cy.go(-1) to navigate back
    }


}
export default Homepage