/// <reference types = "Cypress" />
import user_fac from '../Factories/user_fac.js'

describe('Validação Login', () => {
  let newUser = user_fac.createUser();
  // beforeEach(()=>{
  //   cy.fixture('user_fixture').then((user)=>{
  //     newUser = user;
  //   })
  // })


  it('Acessar URL com sucesso', () => {
    cy.visit("/")
    cy.get('div[class="logo pull-leftt"]').should('be.visible')
    cy.title().should('be.eq','Automation Exercise')
  })

  it('Cadastrar novo usuário', () => {
    //Acessar a aplicação
    cy.visit("/")
    cy.get('div[class="logo pull-left"]').should('be.visible')
    cy.title().should('be.eq','Automation Exercise')
    cy.get('a').contains('Signup / Login').click()
    //Passos, ações a serem executadas
    cy.get('input[name = "name"]').should('be.visible').type(newUser.nome)
    cy.get('input[data-qa="signup-email"]').should('be.visible').type(newUser.email)
    cy.get('button').contains('Signup').click()
    cy.get('h2').contains('Enter Account Information').should('be.visible')
    cy.get('#id_gender2').click()
    cy.get("#email").should('have.value', newUser.email)
    cy.get('#password').type('teste123')
    cy.get('#days').select('13')
    cy.get('#months').select('February')
    cy.get('#years').select('2000')
    cy.get("#first_name").type("Dayane")
    cy.get("#last_name").type("Teste")
    cy.get("#address1").type("Rua dos testes")
    cy.get("#country").select("United States")
    cy.get("#state").type("Arizona")
    cy.get("#city").type("Phoenix")
    cy.get("#zipcode").type("85001")
    cy.get("#mobile_number").clear()
    cy.get("#mobile_number").type("89719827123")
    //cy.get("button").contains("Create Account").click()
    //Validação do Resultado Esperado
    // cy.get('h2[data-qa="account-created"]').should('be.visible')
    // cy.get('h2[data-qa="account-created"]').should('have.text',"Account Created!")
    // cy.get('[data-qa="continue-button"]').should('be.visible').click()
    // cy.get('[href="/logout"]').should('be.visible')
  })

})