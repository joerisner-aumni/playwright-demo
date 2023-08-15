describe('iframe', () => {
  it('asserts heading text outside of iframes', () => {
    cy.visit('/');

    cy.get('[data-testid=externalMessage]').should('have.text', 'Testing iframes');
  });

  it('performs actions in same-origin iframe', () => {
    cy.visit('/');

    const iframe = cy
      .get('[data-testid=sameOriginFrame]')
      .its('0.contentDocument.body')
      .should('be.visible')
      .then(cy.wrap);

    iframe.find('[data-testid=iframeHeading]').should('have.text', 'Heading');
  });
});
