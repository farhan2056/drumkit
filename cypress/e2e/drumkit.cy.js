const beatSequence = [
  // Bar 1
  { key: 65, delay: 200 }, // Boom
  { key: 70, delay: 50 }, // Kick
  { key: 68, delay: 50 }, // Hi-hat
  { key: 74, delay: 200 }, // Snare
  { key: 68, delay: 50 }, // Hi-hat
  
  // Bar 2
  { key: 65, delay: 200 }, // Boom
  { key: 76, delay: 50 }, // Tom
  { key: 68, delay: 50 }, // Hi-hat
  { key: 74, delay: 200 }, // Snare
  { key: 70, delay: 50 }, // Kick
  { key: 68, delay: 50 }, // Hi-hat
  
  // Bar 3
  { key: 65, delay: 200 }, // Boom
  { key: 70, delay: 50 }, // Kick
  { key: 68, delay: 50 }, // Hi-hat
  { key: 74, delay: 200 }, // Snare
  { key: 76, delay: 200 }, // Tom
  
  // Bar 4
  { key: 65, delay: 200 }, // Boom
  { key: 70, delay: 50 }, // Kick
  { key: 68, delay: 50 }, // Hi-hat
  { key: 74, delay: 200 }, // Snare
  { key: 68, delay: 50 }, // Hi-hat
  { key: 76, delay: 200 }, // Tom
];

describe('shows drumkit', () => {
    it('Displays the message in the list', () => {
      cy.visit('http://localhost:5173');
      beatSequence.forEach(({ key, delay }) => {
        cy.get(`[data-testid="${key}"]`).click();
        cy.wait(delay);
      });
    });
  });