const elem = require('./elements').ELEMENTS;

class Cadastro {

    validarTitulodaPagina(mensagem){
        cy.get(elem.titulo).contains(mensagem).should('be.visible')
    }

    selecionarGeneroFemino(){
        cy.get(elem.radioBtn_generoFem).click()
    }

    selecionarGeneroMasculino(){
        cy.get(elem.radioBtn_generoMasc).click()
    }

    validarEmailPreenchido(email){
        cy.get(elem.input_email).should('have.value', email)
    }

    preencherPassword(password){
        cy.get(elem.input_password).type(password)
    }

    preencherData(day, month, year){
        cy.get(elem.select_days).select(day)
        cy.get(elem.select_month).select(month)
        cy.get(elem.select_year).select(year)
    }

    preencherFirstName(firstName){
        cy.get(elem.input_firstName).type(firstName)
    }

    preencherLastName(LastName){
        cy.get(elem.input_lastName).type(LastName)
    }

    preencherEndereco(address, country, state, city, zipcode){
        cy.get(elem.input_adress).type(address)
        cy.get(elem.select_country).select(country)
        cy.get(elem.input_state).type(state)
        cy.get(elem.input_city).type(city)
        cy.get(elem.input_zipcode).type(zipcode)
    }

    preencherPhone(phone){
        cy.get(elem.input_mobileNumber).clear()
        cy.get(elem.input_mobileNumber).type(phone)
    }

    validarUsuarioCadastradoComSucesso(){
        cy.get(elem.msg_AcountCreate).should('be.visible')
        cy.get(elem.msg_AcountCreate).should('have.text',"Account Created!")
        cy.get(elem.btn_continue).should('be.visible').click()
    }

    clicarEmCreateAcount(){
        cy.get(elem.btn).contains("Create Account").click()
    }

    
}
export default new Cadastro();