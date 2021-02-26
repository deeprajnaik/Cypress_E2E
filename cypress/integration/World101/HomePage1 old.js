/// <reference types="Cypress" />
class SignUp
{
    // this method is use to login form
    SignUp(value){
        const field=cy.get("#edit-mail")
        field.clear()
        field.type(value)
        return this

    }
    submit(){
        const button=cy.get('#edit-submit')
        button.click()
    }

    

}
export default SignUp