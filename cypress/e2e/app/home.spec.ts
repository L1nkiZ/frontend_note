describe('home page test', () => {
  it('should display welcome message', () => {
    cy.visit('http://localhost:4200');
    cy.contains('Hello').should('be.visible');
  });
});
