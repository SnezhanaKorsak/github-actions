describe('Home Page', () => {
  it('should be correct information on the page', () => {
    cy.visit('/');

    cy.get('[data-testId=home-title]').should(
      'contain.text',
      'Manage your tasks',
    );

    cy.get('[data-testId=home-description]').should('be.visible');

    cy.get('button').contains('Get started').click();

    cy.url().should('include', '/task-board');
  });
});
