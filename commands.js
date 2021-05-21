// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

Cypress.Commands.add('login',(useremail, password) => {
    // cy.clearCookies()
    // cy.clearLocalStorage()
    cy.get("#user-email").type(useremail)
    cy.get("#user-password").type(password)
    cy.get(".btn").contains("Log in").click()
    cy.get("#sidebar").contains("Contacts").click()
    cy.get("#main-container").get(".content-scroll-header").get(".btn").contains("Add Contact").click()
    
    

})
Cypress.Commands.add('form',(FirstName, LastName) => {
    cy.get(".form-group").get("input.form-control").type(FirstName)
    //cy.get("#LWFDxpesjKsSMjSxb").type(FirstName)
    cy.get("#LWFDxpesjKsSMjSxb").type(LastName)
    cy.get(".btn").contains("Save").click()

})

  

