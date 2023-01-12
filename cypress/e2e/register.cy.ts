describe('Register Page', () => {
    let url = 'http://localhost:3000/Register'

    it('visits the page', () => {
        cy.visit(url)
    })
    it('Has an empty form', () => {
        cy.visit(url)
        cy.get('input[name="firstName"]').clear();
        cy.get('input[name="lastName"]').clear();
        cy.get('input[name="mailInput"]').clear();
        cy.get('input[name="passwordInput"]').clear();
        cy.get('input[name="confirmPasswordInput"]').clear();

    })
    it('Checks if passwords are equal', () => {
        cy.visit(url)
        cy.get('input[name="firstName"]').clear().type("Hendrik")
        cy.get('input[name="lastName"]').clear().type("JanKlaas")
        cy.get('input[name="mailInput"]').clear().type("mymail@gmail.com")
        cy.get('input[name="passwordInput"]').clear().type("Password")
        cy.get('input[name="confirmPasswordInput"]').clear().type("password")
        cy.get('#submit').click();
        cy.get('#error').should('contain', 'Your passwords are not equal!');

    })
    it('Knows when the mail is already in the DB', () => {
        cy.visit(url)
        cy.get('input[name="firstName"]').clear().type("Hendrik")
        cy.get('input[name="lastName"]').clear().type("JanKlaas")
        cy.get('input[name="mailInput"]').clear().type("supersecret@mymail.nl")
        cy.get('input[name="passwordInput"]').clear().type("Password")
        cy.get('input[name="confirmPasswordInput"]').clear().type("Password")
        cy.get('#submit').click();
        cy.get('#error').should('contain', 'This mail is already in our Database!');

    })
})