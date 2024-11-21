const elem = require('./elements').ELEMENTS;

class HomePage {

    acessarUrl(){
        cy.visit('/')
    }

    validarLogoHome(){
        cy.get(elem.logoApp).should('be.visible')
    }

    validarTituloDaPagina(){
        cy.title().should('be.eq','Automation Exercise')
    }

    clicarEmLogin(){
        cy.get(elem.signup_login).should('be.visible').click()
    }
}
export default new HomePage();