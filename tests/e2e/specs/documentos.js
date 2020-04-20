describe('Documentos', () => {

  it('should Login', function () {
    cy.viewport(1200,677)
    cy.visit('/login')
    cy.get("input[type='email']").type('elnaufrago2009@gmail.com')
    cy.get("input[type='password']").type('moiseslinar3s')
    cy.get("button[type='submit']").click()
  });

  it('should List documents', function () {
    cy.viewport(1200,677)
    cy.contains('a','Factura')
  });

  it('should Factura', function () {
    cy.viewport(1200,677)
    cy.contains('a','Factura').click()
    cy.get('#documento').type('10425162531')
    cy.get('#razon').type('Empresa Juanito S.A.C.')
    cy.get('#direccion').type('Avenida Juan More #3452')

  });

  it('should Boleta', function () {
    cy.viewport(1200,677)
  });

  it('should Credito', function () {
    cy.viewport(1200,677)
  });

  it('should Debito', function () {
    cy.viewport(1200,677)
  });
})