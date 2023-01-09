describe('ManagePackage Page', () => {
    let url = 'http://localhost:3000/Account'
    let packageURL = "http://localhost:3000/ManagePackage"
    it('visits the page', () => {
        cy.login();
        cy.visit(url)
    })
    it('Contains all packages', () => {
        cy.login()
        cy.visit(url)
        cy.get("#packages").should("contain", "SCHEDULES")
        cy.get("#packages").should("contain", "FLIGHTTRACKER")
        cy.get("#packages").should("contain", "DATABASE")
    })
    it('Button links to managepackage page', () => {
        cy.login()
        cy.visit(url)
        cy.get("#managepackage").click()
        cy.url().should("contain", "ManagePackage")
    })
    it('Can change the packages', () => {
        cy.login()
        cy.visit(packageURL)
        cy.get("#SCHEDULES").click()
        cy.get("#submit").click()
        cy.url().should("contain", "Account")
        cy.get("#packages").should("not.contain", "FLIGHTTRACKER")
        cy.get("#packages").should("not.contain", "DATABASE")
        cy.get("#packages").should("contain", "SCHEDULES")
    })
    it('It can add all packages to the account', () => {
        cy.login()
        cy.visit(packageURL)
        cy.get("#SCHEDULES").click()
        cy.get("#FLIGHTTRACKER").click()
        cy.get("#DATABASE").click()
        cy.get("#submit").click()
        cy.url().should("contain", "Account")
        cy.get("#packages").should("contain", "SCHEDULES")
        cy.get("#packages").should("contain", "FLIGHTTRACKER")
        cy.get("#packages").should("contain", "DATABASE")

    })
})