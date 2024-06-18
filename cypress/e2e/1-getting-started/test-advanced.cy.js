describe('Mi prueba de ejemplo', () => {
    it.only('debería encontrar el selector usando data-cy', () => {
      cy.visit('/');
      cy.getByDataCy('user').click();
    });
  });
  