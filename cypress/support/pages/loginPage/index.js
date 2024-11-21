const elem = require('./elements').ELEMENTS;

class LoginPage {
    preencherNome(nome){
        cy.get(elem.signup_name).should('be.visible').type(nome)
    }

    preencherEmail(email){
        cy.get(elem.signup_email).should('be.visible').type(email)
    }

    clicarEmSignup(){
        cy.get(elem.button_Signup).contains('Signup').click()
    }

}
export default new LoginPage();