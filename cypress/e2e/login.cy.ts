describe('Login Page', () => {

  let url = 'http://localhost:3000/Login'
  it('visit the page', () => {
    cy.visit(url)

  })
  it("Has not been filled yet", () =>
  {
    cy.visit(url)
    cy.get('input[name="mailInput"]').clear();
    cy.get('input[name="passwordInput"]').clear();
  })
  it("Gives error when not filling in correct data", () =>
  {
    cy.visit(url)
    cy.get('input[name="mailInput"]').clear().type("mail@mymail.nl");
    cy.get('input[name="passwordInput"]').clear().type("password");
    cy.get('#submit').click();
    cy.get('#error').should('contain', 'Wrong email or password');
  })
  it("Should login when data is correct", () =>
  {
    cy.visit(url)
    cy.get('input[name="mailInput"]').clear().type("supersecret@mymail.nl");
    cy.get('input[name="passwordInput"]').clear().type("Password");
    cy.get('#submit').click();
    cy.url().should('contain', '/Main')
  })
  it("Navbar should be changed", () => {
    cy.login();
    cy.visit("http://localhost:3000/Main")
    cy.get("#navbar").should('contain', 'Home')
    cy.get("#navbar").should('contain', 'FlightTracker')
    cy.get("#navbar").should('contain', 'My Account')
    cy.get("#navbar").should('contain', 'Logout')


  })


})
