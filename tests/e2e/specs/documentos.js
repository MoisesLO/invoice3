describe('Documentos', () => {
  it('should list documents', function () {
    cy.viewport(1200,520)
    cy.visit('/login')
    cy.get("input[type='email']").type('elnaufrago2009@gmail.com')
    cy.get("input[type='password']").type('moiseslinar3s')
    cy.get("button[type='submit']").click()
    cy.contains('button','Factura')
    cy.contains('button','Boleta')
    cy.contains('button','Nota Credito')
    cy.contains('button','Nota Debito')
    // cy.visit('/documentos')
  });
})