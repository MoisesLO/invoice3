describe('Productos', function () {
    it('should List', function () {
        cy.viewport(1057, 460)
        cy.visit('/login')
        cy.get("input[type='email']").type('elnaufrago2009@gmail.com')
        cy.get("input[type='password']").type('moiseslinar3s')
        cy.get("button[type='submit']").click()
        cy.get('[name="productos"]').click();
        cy.get('[name="producto"]').trigger('mousemove').click();
    });
});