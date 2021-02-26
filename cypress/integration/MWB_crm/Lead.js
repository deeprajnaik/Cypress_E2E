/// <reference types="Cypress" />
class GLead
{
    visit()
    {
        
        cy.visit("https://crm.mwbankers.com/index.php?module=Leads&view=List")
        

    }
    menuLead(){
        cy.get('.btn-primary').click()
        cy.wait(200)
        cy.get('.sales-container > :nth-child(1) > .group-menu > .row > div[title="Leads"]').click()

        cy.wait(200)

    }
    createLead(){
        cy.viewport(1366 , 768)
        cy.get('#Leads_listView_basicAction_LBL_ADD_RECORD').click()
        //Firstname

        //Designation
        cy.get('#s2id_autogen1 > .select2-choice').click()
        cy.get('#s2id_autogen2_search').type('Dr.{enter}')

        //cy.get('#select2-result-label-26').type('{enter}')

        //name
        cy.get('#Leads_editView_fieldName_firstname').type('asdhaskldj')

        //Last name
        cy.get('#Leads_editView_fieldName_lastname').type('iruefilsdl')

        //assigned to
        cy.get('#s2id_autogen3').click()
        cy.get('#s2id_autogen4_search').type('Arisen Sji{enter}')

        //Lead Status

        cy.get('#select2-chosen-6').click()
        cy.get('#s2id_autogen6_search').type('Junk Lead{enter}')

        cy.get('.textAlignCenter > .btn').click()

    }
    leadValidation(){

        cy.title().should('be.equal', 'Leads - asdhaskldj iruefilsdl')

    }
    deleteLead(){
        //cy.pause()
        //type first name
        cy.get(':nth-child(2) > div > .listSearchContributor').clear().type('asdhaskldj')
        //type last name
        cy.get(':nth-child(3) > div > .listSearchContributor').clear().type('iruefilsdl')
        //cick search CTA
        cy.get('.table-actions > .btn').click()

        //Lead list view
        cy.get('.listViewEntriesMainCheckBox').click({ force: true })
        //Click delete Icon
        cy.get('#Leads_listView_massAction_LBL_DELETE').click({ force: true })
        //Click on Ok CTA
        cy.get('.confirm-box-ok').click()

        //clear first name field
        cy.get(':nth-child(2) > div > .listSearchContributor').clear()
        // last name
        cy.get(':nth-child(3) > div > .listSearchContributor').clear()
        //cick search CTA
        //cy.get('.table-actions > .btn').click()
        //cy.visit("https://crm.mwbankers.com/index.php?module=Leads&view=List")





    }



}
export default GLead