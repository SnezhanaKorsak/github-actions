import { dateFormat } from '../../src/utils/date-format';

describe('Tasks Board Page', () => {
  beforeEach(() => {
    cy.visit('/task-board');
  });

  it('should be empty page if there are not tasks', () => {
    const today = new Date();
    const date = dateFormat(today);

    cy.get('[data-testId=empty-task-title]').should(
      'contain.text',
      'Create your first task!',
    );

    cy.get('[data-testId=header-task-count]').should(
      'contain.text',
      'you have 0 tasks !',
    );

    cy.get('[data-testId=header-date]').should('contain.text', date);
  });

  it('should navigate to create task page', () => {
    cy.get('[data-testId=create-task-button]').click();

    cy.url().should('include', '/create-task');
  });
});
