// https://docs.cypress.io/api/introduction/api.html

describe('Login', () => {
  it('Visits the app root url', () => {
    cy.viewport(1057,460)
    cy.visit('/login')
    cy.contains('a','Lineysoft')
    cy.contains('a', 'Inicio')
    cy.contains('a', 'About')
    cy.contains('a', 'Login')
    cy.contains('a', 'Registro')
    cy.get("input[type='email']").type('elnaufrago2009@gmail.com')
    cy.get("input[type='password']").type('moiseslinar3s')
    cy.get("button[type='submit']").click()
    cy.contains('Documentos')

  })
})
