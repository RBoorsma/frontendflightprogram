describe('Register Page', () => {
    let url = 'http://localhost:3000/Account'

    it('visits the page', () => {
        cy.login();
        cy.visit(url)
    })
})