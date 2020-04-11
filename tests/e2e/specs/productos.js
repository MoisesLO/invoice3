describe('Productos', function () {
    it('should List', function () {
        cy.viewport(1057, 460)
        cy.visit('/login')
        cy.get("input[type='email']").type('elnaufrago2009@gmail.com')
        cy.get("input[type='password']").type('moiseslinar3s')
        cy.get("button[type='submit']").click()
        cy.get('[name="productos"]').click();
        cy.get('[name="producto"]').trigger('mousemove').click()
        cy.wait(2000)
        cy.get('button').contains('Agregar Producto').click()
        cy.get('[id="codigo"]').type('RTYUHBG55')
        cy.get('[id="producto"]').type('Arroz Costeno Graneadito 5 kg calidad 1')
        cy.get('[id="precio_sin_igv"]').type('82.00')
        cy.get('[id="igv"]').type('18.00')
        cy.get('[id="precio_con_igv"]').type('100.00')
        cy.get('[id="tipo_igv"]').select('Operacion Onerosa')
        cy.get('[id="stock"]').type('3000')
        cy.get('[id="unidad"]').select('Kilogramos')
        cy.get('button').contains('Crear Producto').click()
    });
});