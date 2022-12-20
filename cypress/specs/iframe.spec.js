describe('iframe', () => {
  it('asserts heading text outside of iframes', () => {
    cy.visit('/');
    cy.get('[data-testid=externalMessage]').should('have.text', 'Testing iframes');
  });

  it.skip('performs actions in same-origin iframe', () => {
    cy.visit('/');
  });
});
