describe('Categorias', function(){

  it('should Login', function(){
    cy.viewport(1200, 560)
    cy.visit('/')
    cy.contains('a','Login').click()
    cy.get('input[type="email"]').type('elnaufrago2009@gmail.com')
    cy.get('input[type="password"]').type('moiseslinar3s')
    cy.get('button[type="submit"]').click()    
  })

  it('should List Categorias', function(){
    cy.viewport(1200, 560)
    cy.contains('a', 'Productos').click()
    cy.contains('a','Categorias').click()
  })

  it('should new Categoria', function () {
    cy.viewport(1200, 560)
    cy.contains('button', 'Nuevo').click()
    cy.get('input[type="text"]').type('Laptops Marca DELL')
    // cy.wait(500)
    cy.contains('button','Crear Categoria').click()
  });

  it('should Edit Categoria', function () {
    cy.viewport(1200, 560)
    cy.contains('button', 'Editar').first().click()
    cy.wait(500)
    cy.contains('button','Editar Categoria').click()
  });

  it('should Delete Categoria', function () {
    cy.viewport(1200, 560)
    cy.contains('button', 'Editar').first().click()
    cy.wait(500)
    cy.contains('button','Eliminar Categoria').click()
  });

});