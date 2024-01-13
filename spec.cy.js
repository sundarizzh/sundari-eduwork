describe('My First Test', () => {
  it('clicking "type" shows the right headings', () => {
    cy.visit('https://example.cypress.io')

    cy.pause()

    cy.contains('type').click()

    cy.url().should('include', '/commands/querying')

    cy.get('.action-email')
      .type('email')
      .should('have.value', 'email')
  })
})