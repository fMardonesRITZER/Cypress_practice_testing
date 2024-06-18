describe('Mi prueba de ejemplo', () => {
    it.only('debería encontrar el botón usando data-cy', () => {
      cy.visit('/');
      cy.getByDataCy('user').click();
    });
  });
  