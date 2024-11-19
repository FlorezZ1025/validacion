/* eslint-disable prettier/prettier */
/// <reference types="cypress" />
describe('Sign Up e2e test', () => {
    it('Special characters', ()=>{
        cy.visit('http://localhost:5230/auth/signup')
        cy.wait(500)
        cy.Sign('@@@','123456')
        cy.wait(500)
        cy.contains("invalid username: @@@").should('be.visible')
    })

    it('Invalid credentials', ()=>{
        cy.visit('http://localhost:5230/auth/signup')
        cy.wait(500)
        cy.Sign("santixx","123456")
        cy.wait(500)
cy.contains("failed to create user, error: constraint failed: UNIQUE constraint failed: user.username (2067)").should('be.visible')
    })

    it('Missing credentials', ()=>{
        cy.visit('http://localhost:5230/auth')
        cy.wait(500)
        cy.Sign(' ',' ')
        cy.wait(500)
        cy.contains("unmatched username and password").should('be.visible')
    })
})