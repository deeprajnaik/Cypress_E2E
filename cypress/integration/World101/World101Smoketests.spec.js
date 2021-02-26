/// <reference types="Cypress" />
import SignUp from '../World101/SignUp'
import Environments from '../World101/Environments'
import HamburgerMenu from '../World101/Hamburger'
import RegionsOfTheWorld from '../World101/RegionsOfTheWorld'
import GlobalEraIssues from '../World101/GlobalEraIssues'
import TeachingResources from '../World101/TeachingResources'
import Homepage from '../World101/Homepage'



describe('World101 Smoke Test', function(){


    const Env=new Environments()
    const su=new SignUp()
    const ham=new HamburgerMenu()
    const rotw=new RegionsOfTheWorld()
    const geu=new GlobalEraIssues()
    const tr=new TeachingResources()
    const Home=new Homepage()

    beforeEach(() => {
        Env.Visit()

    })

    it('Homepage', function(){
        //Env.Visit()
        Home.W101Home()


    })



    it('Hamburger menu navigation', function(){
        //Env.Visit()
        ham.hamburger()

    })

    it('Modules & EDPs', function(){
        //Env.Visit()
        geu.geuCard()
        geu.VisitModuleTimeline()

    })


    it('Region of the World', function(){
        //Env.Visit()
        rotw.rotw()
        rotw.SublensCarouselFunc()


    })
    it('Teaching resources', function(){
        //Env.Visit()
        tr.ForEducators()

    })

    it('NewsLetter', function(){

        //Env.Visit()
        su.SignUp('amdv1991@gmail.com')
        su.submit()
        cy.title().should('be.equal','Subscribe | World101')
        cy.go('back')
        
        
        
    })


})