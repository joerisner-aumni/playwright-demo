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

    // FIXME: Fails from here on
    iframe.find('img[alt="Girl playing CTF"]').should('be.visible');
    iframe.find('[type=text]').type('Lorem Ipsum');
    iframe.find('[type=date]').type('1776-07-04');
    iframe.find('[data-testid=submitBtn]').click();
  });

  it.skip('performs actions in cross-origin iframe', () => {
    cy.visit('/');
  });
});
