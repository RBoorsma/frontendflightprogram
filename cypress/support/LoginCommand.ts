// @ts-ignore
Cypress.Commands.add('login', (username, password) => {
    cy.session( [], () => {
        cy.visit('http://localhost:3000/Login')
        cy.get('input[name="mailInput"]').clear().type("supersecret@mymail.nl");
        cy.get('input[name="passwordInput"]').clear().type("Password");
        cy.get('#submit').click();
        cy.url().should('contain', 'Main')
    })
})