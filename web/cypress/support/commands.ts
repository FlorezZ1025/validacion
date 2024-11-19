/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable prettier/prettier */
/// <reference types="cypress" />

import 'cypress-file-upload';

declare global {
  namespace Cypress {
    interface Chainable {
      SignUp(username?: string, password?: string): Chainable<void>;
    }
  }
}

Cypress.Commands.add("SignUp", (username: string = "Albertt23", password: string = "1234") => {
    cy.visit('/auth')

    cy.wait(500)

    cy.get('input[type="text"]').type(username)
    
    cy.get('input[type="password"]').type(password);
    
    cy.get('button[type="submit"]').click();
    
});

