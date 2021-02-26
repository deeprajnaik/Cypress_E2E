/// <reference types="Cypress" />
//import SignUp from '../World101/SignUp'


describe('Sjinnovation', function () {
    beforeEach('resolution', function () {
        cy.viewport(1366 , 768)

    })

    it('Homepage', function () {
        //cy.get('#menu-item-2002 > a').click()
        
        cy.visit("https://sjinnovation.com")
        //cy.viewport(550, 750) 
        //cy.viewport(1366 , 768)
        cy.title().should('be.equal', 'Home Page | SJ Innovation LLC')
        cy.get(':nth-child(2) > .slider-txt').contains('DESIGN + CODE + QA')
        //cy.go("back")

    })



    it('Our Portfolio', function () {
        cy.get('#menu-item-2001 > a').click()
        cy.title().should('be.equal', 'Our Portfolio | Best Drupal certificated developers')
        //cy.wait(1000)
        cy.go("back")

    })

    it('About Us', function () {
        cy.get('#menu-item-12019 > a').click()
        cy.title().should('be.equal', 'About Us | SJ Innovation LLC')
        //cy.wait(1000)
        cy.go("back")

    })

    it('Services', function () {
        cy.get('.dropdown-toggle').click()
        cy.get('#menu-item-4093 > a').click()
        cy.title().should('be.equal', 'Services | SJ Innovation LLC')
        //cy.wait(1000)
        cy.go("back")

    })
    //it('Career', function(){
    //cy.get('#menu-item-4429 > a').click()
    //cy.wait(1000)
    //cy.go("back")



    //it('Blog', function () {
        //cy.get('#menu-item-4429 > a').click()
        //cy.title().should('be.equal', 'Blog | SJ Innovation LLC')
        //cy.go("back")

    //})
    it('Contact US', function () {
        cy.get('#menu-item-12018 > a').click()
        cy.title().should('be.equal', 'Contact Us | SJ Innovation LLC')
        cy.go("back")

    })
    it('Quote Request', function () {

        cy.get('#menu-item-10911 > a').click()
        cy.title().should('be.equal', 'Quote | SJ Innovation LLC')
        //cy.wait(1000)
        cy.go("back")

    })


})
