const elem = require('./elements').ELEMENTS;

class Cadastro {

    validarTitulodaPagina(){
        cy.get(elem.titulo).contains('Enter Account Information').should('be.visible')
    }

    selecionarGeneroFemino(){
        cy.get(elem.radioBtn_generoFem).click()
    }

    selecionarGeneroMasculino(){
        cy.get(elem.radioBtn_generoMasc).click()
    }
}