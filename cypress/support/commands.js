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
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('preencherFormulario', (nome, email)=>{
    
    cy.get(':nth-child(1) > .element-list > .menu-list > #item-0').click();
    cy.get('#userName').should('be.visible').type(nome);
    cy.get('#userEmail').type(email);
    cy.get('#currentAddress').type('teste');
    cy.get('#permanentAddress').type('teste2')
    cy.get('#submit').click();
    cy.get('.border').should('be.visible');
    cy.get('#name').contains(nome).should('be.visible');
    cy.contains(nome).should('be.visible');
})

