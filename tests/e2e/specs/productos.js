describe('Productos', function () {
    it('should List', function () {
        cy.viewport(1200, 560)
        cy.visit('/login')
        cy.get("input[type='email']").type('elnaufrago2009@gmail.com')
        cy.get("input[type='password']").type('moiseslinar3s')
        cy.get("button[type='submit']").click()
        cy.get('[name="productos"]').click()
        cy.get('[name="producto"]').trigger('mousemove').click()

        // Nuevo Producto
        cy.get('button').contains('Agregar Producto').click()
        cy.get('[id="codigo"]').type('RTYUHBG55')
        cy.get('[id="producto"]').type('Arroz Costeno Graneadito 5 kg calidad 1')
        cy.get('[id="precio_sin_igv"]').type('82.00')
        cy.get('[id="igv"]').type('18.00')
        cy.get('[id="categoria"]').select(['3'])
        cy.get('[id="tipo_igv"]').select('Operacion Onerosa')
        cy.get('[id="stock"]').type('3000')
        cy.get('[id="unidad"]').select('Kilogramos')
        cy.get('button').contains('Crear Producto').click()

        // Editar Producto
        cy.get('button').contains('Editar').first().click()
        cy.wait(500)
        cy.get('button').contains('Editar Producto').click()

        // Eliminar Producto
        cy.get('button').contains('Editar').first().click()
        cy.wait(500)
        cy.get('button').contains('Eliminar Producto').click()
    });
});