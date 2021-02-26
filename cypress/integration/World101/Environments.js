/// <reference types="Cypress" />
class Environments
{
    Visit(){

        //cy.viewport(375 , 812) //iphone X
        //cy.viewport(812 , 375) //iphone X landscape
        cy.viewport(1366 , 768) //macbook my laptop resolution
        //cy.viewport(768 , 1024) //ipad 2

        //cy.visit("https://world101:world101@dev-world101.pantheonsite.io/") //dev
        cy.visit("https://world101:world101@test-world101.pantheonsite.io/") //test
        //cy.visit("http://world101.cfr.org/") //prod
        //cy.visit("http://world101:world101@pr-1228-world101.pantheonsite.io/") //pr with basic auth



    
    }

}
export default Environments