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

// cypress/support/commands.js

// cypress/support/commands.js

// cypress/support/commands.js

// cypress/support/commands.js

Cypress.Commands.add('makePayment', () => {
  // Visit the payment page
  cy.visit('http://zero.webappsecurity.com/bank/pay-bills.html');

  // Perform any necessary actions to reach the payment section (replace with actual navigation logic)
  // For example, if there's a link to the payment section, you might click it:
  // cy.contains('Pay Bills').click();

  // Fill in payment details (replace with actual payment steps)
  cy.get('#sp_payee').select('Apple'); // Example: Select a payee
  cy.get('#sp_account').select('Checking'); // Example: Select an account
  cy.get('#sp_amount').type('100'); // Example: Enter payment amount
  cy.get('#sp_date').type('2024-12-31'); // Example: Enter payment date
  

  // Submit payment
  cy.get('#pay_saved_payees').click();

  // Verify payment confirmation (replace with actual verification logic)
  cy.contains('The payment was successfully submitted').should('be.visible');
});
