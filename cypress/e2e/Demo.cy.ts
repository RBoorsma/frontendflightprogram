// @ts-ignore
describe('Main Page', () => {

    let url = 'http://localhost:3000/'
    beforeEach(() => {
        cy.login()// Helper method that logs in and checks if the URL = /Main
    })
    it('Cookies after login are correct', () => {
        cy.getCookie("JWT").should("not.be.null")
        cy.getCookie("firstName").should("not.be.null")
        cy.getCookie("lastName").should("not.be.null")

    })
    it("Get logged out when JWT gets manipulated", () => {

       cy.visit(url+'Main')
        cy.setCookie("JWT", "fake")
        cy.visit(url+'Account')

    })
    it("Tells you data is loading", () => {

        cy.visit(url+'Main')
        cy.get("#data").should('contain', 'We are loading our Demo Data')


    })
    it("After loaded data, shows demo data", () => {

        cy.visit(url+'Main')
        cy.wait(5000);
        cy.get("#data").should('contain', 'We are loading our Demo Data')
        cy.get("#Country").should('contain', 'Name')
        cy.get("#Country").should('contain', 'Capital')
        cy.get("#Flight").should('contain', 'Flight Code')
        cy.get("#Flight").should('contain', 'Status')
        cy.get("#Airport").should('contain', 'ICAO code')
        cy.get("#Airport").should('contain', 'name')

    })

})