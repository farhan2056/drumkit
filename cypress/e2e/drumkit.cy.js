describe('shows drumkit', () => {
    it('Displays the message in the list', () => {
      cy.visit('http://localhost:5173');
        cy.get('[data-testid="70"]')
            .click();
    });
  });