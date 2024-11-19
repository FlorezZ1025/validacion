/* eslint-disable prettier/prettier */
/// <reference types="cypress" />
describe('Sign in e2e test', () => {
    it('Missing credentials', ()=>{
        cy.visit('http://localhost:5230/auth')
        cy.wait(500)
        cy.Sign(' ',' ')
        cy.wait(500)
        cy.contains("unmatched username and password").should('be.visible')
    })

    it('Valid credentials', ()=>{
        cy.visit('http://localhost:5230/auth')
        cy.wait(500)
        cy.Sign()
    })
})