const { defineConfig } = require("cypress");

module.exports = defineConfig({
  //realiza el # de intentos si la prueba falla
  retries: 1,
  //desactiva el reporte de video
  video: false,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    //cambia el tiempo de espera por default
    defaultCommandTimeout: 10000
  },
});
