/* eslint-disable prettier/prettier */
/// <reference types="cypress" />
describe('Register e2e test', () => {
    it('Missing credentials', ()=>{
        cy.visit('http://localhost:5230/auth')
        cy.wait(500)
        cy.SignUp('','')
        cy.wait(500)
        cy.contains("Completa este campo").should('be.visible')
    })

    it('Invalid credentials', ()=>{
        cy.visit('http://localhost:5230/auth')
        cy.wait(500)
        cy.SignUp()
        cy.wait(500)
        cy.contains("unmatched username and password").should('be.visible')
    })
})