describe('Create Task Page', () => {
  beforeEach(() => {
    cy.visit('/create-task');
  });

  it('should be correct information on the page', () => {
    cy.get('[data-testId=form-category]').should('contain.text', 'Category:');
    cy.get('[data-testId=form-description]').should(
      'contain.text',
      'Description:',
    );
    cy.get('[data-testId=form-task]').should('contain.text', 'Task:');

    cy.get('[data-testId=task-checkbox]').should('not.be.visible');
  });

  it('should add new task', () => {
    cy.get('[data-testId=form-category-input]').type('test');
    cy.get('[data-testId=form-description-input]').type('test description');
    cy.get('[data-testId=form-task-input]').type('test task');

    cy.get('[data-testId=add-task-button]').click();

    cy.get('[data-testId=task-checkbox]').should('be.visible');
    cy.get('[data-testId=task-name]').should('contain.text', 'test task');
  });

  it('should change task name by click on button', () => {
    cy.get('[data-testId=form-task-input]').type('test task');

    cy.get('[data-testId=add-task-button]').click();

    cy.get('[data-testId=task-name]').should('contain.text', 'test task');

    cy.get('[data-testId=edit-task-name-button]').click();
    cy.get('[data-testId=edit-task-name-input]')
      .clear()
      .type('test task changed')
      .type('{enter}');
    cy.get('[data-testId=task-name]').should(
      'contain.text',
      'test task changed',
    );
  });

  it('should delete task by click on button', () => {
    cy.get('[data-testId=form-task-input]').type('test task');

    cy.get('[data-testId=add-task-button]').click();

    cy.get('[data-testId=task-name]').should('contain.text', 'test task');

    cy.get('[data-testId=delete-task-button]').click();
    cy.get('[data-testId=task-checkbox]').should('not.be.visible');
  });

  it('should create task category', () => {
    cy.get('[data-testId=form-category-input]').type('test');
    cy.get('[data-testId=form-description-input]').type('test description');
    cy.get('[data-testId=form-task-input]').type('test task');

    cy.get('[data-testId=add-task-button]').click();
    cy.get('[data-testId=done-button]').click();

    cy.url().should('include', '/task-board');

    cy.get('[data-testId=category-name]').should('contain.text', 'test');
    cy.get('[data-testId=category-task-count]').should('contain.text', '1');

    cy.get('[data-testId=category-button]').click();

    cy.get('[data-testId=task-info-title]').should('contain.text', 'test');
    cy.get('[data-testId=task-info-description]').should(
      'contain.text',
      'test description',
    );
    cy.get('[data-testId=task-name]').should('contain.text', 'test task');
  });
});
